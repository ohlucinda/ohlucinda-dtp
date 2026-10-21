/* OHLUCINDA language navigation: HOME / section / artwork are distinct.
   Adopted 2026-10-21. No visual styles or artwork content are modified. */
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
      context.home = p === '/en/' || (p === '/' && params.get('lang') === 'en') ? 'en' : 'ja';
      context.homeChosen = true;
    } else {
      const section = sectionAt(p);
      if (section) {
        const urlLang = langAt(p); // The artwork's work_lang is deliberately ignored.
        if (listingAt(p, section)) {
          context.sections[section] = urlLang;
          // A visitor who entered through a listing, not HOME, can choose a new
          // initial HOME language by switching that listing.
          if (!context.homeChosen) context.home = urlLang;
        } else if (!context.sections[section]) {
          context.sections[section] = urlLang;
        }
        if (!context.home) context.home = context.sections[section] || urlLang;
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
      if (sectionAt(p) !== 'detour' || !context.sections.detour) return;
      if (!/^(?:寄り道|寄り道の入口へ|Detours|記事一覧へ|Editor's Detour|エディターの寄り道|ノアの寄り道|NOAH'S DETOURS)$/i.test(label))
        return;
      const next = destination(dest.pathname, context.sections.detour);
      if (next && a.getAttribute('href') !== next) a.setAttribute('href', next);
    });
  }
  // Artwork switching can update HOME hrefs in older inline scripts.
  // Reapply the selected HOME and listing destinations *after* those handlers.
  document.addEventListener('click', function () { applyNavigation(); });
  window.addEventListener('popstate', function () { applyNavigation(); });
  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) initialize();
  });
})();
