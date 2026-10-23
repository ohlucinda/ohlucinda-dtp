/* OHLUCINDA language navigation: HOME / section / artwork are distinct.
   Detours separately preserves its entrance, Nagi and Noah listing languages.
   Adopted 2026-10-21; extended 2026-10-23. No visual styles are changed. */
(function () {
  'use strict';
  const KEY = 'ohlucinda-navigation-context-v2';
  const p = location.pathname.replace(/index\.html$/, '') || '/';
  const params = new URLSearchParams(location.search);
  const homePage = p === '/' || p === '/en/';
  const langAt = (pathname) =>
    pathname === '/en/' || /\/en\/(?:$|[^/])/.test(pathname) ? 'en' : 'ja';
  function sectionAt(pathname) {
    if (pathname.startsWith('/anything-goes/')) return 'anything-goes';
    if (pathname.startsWith('/detour/')) return 'detour';
    if (pathname.startsWith('/about/')) return 'about';
    if (pathname.startsWith('/bookmarks/')) return 'bookmarks';
    if (pathname.startsWith('/months/')) return 'months';
    return null;
  }
  function detourLevel(pathname) {
    if (/^\/detour\/(?:en\/)?$/.test(pathname)) return 'detour-entrance';
    if (pathname.startsWith('/detour/nagi/')) return 'detour-nagi';
    if (pathname.startsWith('/detour/noah/')) return 'detour-noah';
    return 'detour-entrance';
  }
  function listingAt(pathname, section) {
    if (section === 'anything-goes')
      return /^\/anything-goes\/(?:en\/)?$/.test(pathname);
    if (section === 'detour')
      return /^\/detour\/(?:(?:en|nagi|noah)\/|(?:nagi|noah)\/en\/)?$/.test(pathname);
    if (section === 'about' || section === 'bookmarks')
      return true;
    return section === 'months' && pathname === '/months/';
  }
  function sameSiteReferrer() {
    try { return !!document.referrer && new URL(document.referrer).origin === location.origin; }
    catch (e) { return false; }
  }
  function navigationType() {
    try { return performance.getEntriesByType('navigation')[0]?.type || 'navigate'; }
    catch (e) { return 'navigate'; }
  }
  function read() {
    try {
      const value = JSON.parse(sessionStorage.getItem(KEY) || 'null');
      if (value && value.version === 2 && value.sections && typeof value.sections === 'object')
        return value;
    } catch (e) {}
    return { version: 2, home: null, homeChosen: false, sections: {} };
  }
  let context;
  function save() {
    try { sessionStorage.setItem(KEY, JSON.stringify(context)); } catch (e) {}
  }
  function initialize() {
    const directEntry = !sameSiteReferrer() &&
      !['reload', 'back_forward'].includes(navigationType());
    context = directEntry
      ? { version: 2, home: null, homeChosen: false, sections: {} }
      : read();
    if (homePage) {
      // An explicit HOME URL is an actual HOME choice.
      context.home = document.documentElement.lang === 'en' ? 'en' : 'ja';
      context.homeChosen = true;
    } else {
      const section = sectionAt(p);
      if (section) {
        const urlLang = langAt(p); // The artwork's work_lang is deliberately ignored.
        if (section === 'detour') {
          // Ignore the old combined sections.detour: it cannot identify a level.
          const level = detourLevel(p);
          if (!context.sections['detour-entrance'])
            context.sections['detour-entrance'] = urlLang;
          if (level === 'detour-entrance') {
            // Only switching the entrance updates its chosen language.
            context.sections['detour-entrance'] = urlLang;
            if (!context.homeChosen) context.home = urlLang;
          } else if (listingAt(p, section)) {
            // Switching one author's list never changes the other levels.
            context.sections[level] = urlLang;
          } else if (!context.sections[level]) {
            // Direct article access supplies an initial language only.
            context.sections[level] = urlLang;
          }
          if (!context.home)
            context.home = context.sections['detour-entrance'] || urlLang;
        } else {
          if (listingAt(p, section)) {
            context.sections[section] = urlLang;
            // Preserve existing Anything Goes and other section behavior.
            if (!context.homeChosen) context.home = urlLang;
          } else if (!context.sections[section]) {
            context.sections[section] = urlLang;
          }
          if (!context.home) context.home = context.sections[section] || urlLang;
        }
      } else if (!context.home) {
        context.home = langAt(p);
      }
    }
    save();
    applyNavigation();
  }
  function homeHref() {
    return context.home === 'en' ? '/en/' : '/?lang=ja';
  }
  function destination(pathname, language) {
    const english = language === 'en';
    const names = {
      '/detour/': english ? '/detour/en/' : '/detour/',
      '/detour/en/': english ? '/detour/en/' : '/detour/',
      '/detour/nagi/': english ? '/detour/nagi/en/' : '/detour/nagi/',
      '/detour/nagi/en/': english ? '/detour/nagi/en/' : '/detour/nagi/',
      '/detour/noah/': english ? '/detour/noah/en/' : '/detour/noah/',
      '/detour/noah/en/': english ? '/detour/noah/en/' : '/detour/noah/'
    };
    return names[pathname] || null;
  }
  function applyNavigation() {
    if (!context || !document.querySelectorAll) return;
    document.querySelectorAll('a[href]').forEach(function (a) {
      let dest;
      try { dest = new URL(a.href, location.href); } catch (e) { return; }
      if (dest.origin !== location.origin) return;
      const label = (a.textContent || '').trim().replace(/\s+/g, ' ');
      const isHomeLink = /^home$/i.test(label) &&
        (dest.pathname === '/' || dest.pathname === '/en/');
      if (isHomeLink) {
        const next = homeHref();
        if (a.getAttribute('href') !== next) a.setAttribute('href', next);
        return;
      }
      if (sectionAt(p) !== 'detour') return;
      // Language-switch links ("日本語" / "English") are intentionally excluded.
      if (!/^(?:寄り道|寄り道の入口へ|寄り道へ戻る|Detours|記事一覧へ|Article index|Editor's Detour|エディターの寄り道|エディターの寄り道へ|ノアの寄り道|NOAH'S DETOURS)$/i.test(label))
        return;
      const level = /^\/detour\/(?:en\/)?$/.test(dest.pathname)
        ? 'detour-entrance'
        : /^\/detour\/nagi\/(?:en\/)?$/.test(dest.pathname)
          ? 'detour-nagi'
          : /^\/detour\/noah\/(?:en\/)?$/.test(dest.pathname)
            ? 'detour-noah' : null;
      if (!level) return;
      const language = context.sections[level] ||
        context.sections['detour-entrance'] || langAt(dest.pathname);
      const next = destination(dest.pathname, language);
      if (next && a.getAttribute('href') !== next) a.setAttribute('href', next);
    });
  }
  // Artwork switching can update HOME hrefs in older inline scripts.
  // Reapply the selected HOME and listing destinations *after* those handlers.
  document.addEventListener('click', function () {
    if (homePage && context) {
      const visible = document.documentElement.lang === 'en' ? 'en' : 'ja';
      if (context.home !== visible) {
        context.home = visible;
        context.homeChosen = true;
        save();
      }
    }
    applyNavigation();
  });
  window.addEventListener('popstate', function () { applyNavigation(); });
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) initialize();
  });
})();
