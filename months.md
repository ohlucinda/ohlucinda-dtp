---
layout: default
title: Months
description: 日女が書き留めてきたジャーナル。最近の文章と月ごとの記録。
permalink: /months/
---

<style>
/* This stylesheet is rendered only on /months/. Other pages keep their layouts. */
body > main{max-width:1150px;padding:25px clamp(22px,5vw,76px) 95px;line-height:1.65}
.months-hub{color:#191919}
.months-hub *{box-sizing:border-box}
.months-hub a{color:inherit}
.months-nav{
  position:absolute;z-index:10;
  top:calc(30px + (clamp(26px,3.1vw,41px) * 1.2 - 21px)/2);
  right:max(clamp(22px,5vw,76px),calc((100vw - 1190px)/2 + clamp(22px,5vw,76px)));
  display:flex;align-items:center;justify-content:flex-end;gap:0;
  font:400 14px/1.5 'adobe-caslon-pro',Georgia,serif;
  letter-spacing:.02em;white-space:nowrap
}
.months-nav .langs{display:flex;align-items:center;gap:9px}
.months-nav .selected{text-decoration:underline;text-underline-offset:5px}
.months-nav .unavailable{color:#999}
.months-nav .home-link{margin-left:20px;text-decoration:none}
.months-nav a:hover{text-decoration:underline;text-underline-offset:5px}
.months-hub .months-head{padding:110px 0 58px}
.months-hub .eyebrow{margin:0 0 14px;font:400 12px/1.5 'adobe-caslon-pro',Georgia,serif;letter-spacing:.14em;color:#7a7a7a}
.months-hub h1{font:400 clamp(38px,5vw,56px)/1.2 'adobe-caslon-pro',Georgia,serif;margin:0 0 21px}
.months-hub .lead{font-size:clamp(16px,1.6vw,18px);line-height:1.85;color:#444;margin:0}
.months-hub .latest{border-top:1px solid #ddd;padding:29px 0 50px}
.months-hub .section-heading{font:400 12px/1.5 'adobe-caslon-pro',Georgia,serif;letter-spacing:.12em;color:#777;margin:0 0 21px}
.months-hub .latest-link{font-size:clamp(24px,3vw,34px);line-height:1.55;text-decoration:none;display:inline-block}
.months-hub .latest-link:hover,.months-hub .recent-list a:hover,.months-hub .month-entries a:hover{text-decoration:underline;text-underline-offset:5px}
.months-hub .latest-date{display:block;font:400 13px/1.7 'adobe-caslon-pro',Georgia,serif;color:#777;margin-top:10px}
.months-hub .recent-archive{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(30px,6vw,100px)}
.months-hub .recent-list{list-style:none;margin:0;padding:0;border-top:1px solid #dedede}
.months-hub .recent-list li{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding:17px 0;border-bottom:1px solid #eee;min-width:0}
.months-hub .recent-list a{font-size:17px;line-height:1.65;text-decoration:none;min-width:0}
.months-hub .recent-list time,.months-hub .month-entries time{white-space:nowrap;font:400 13px/1.5 'adobe-caslon-pro',Georgia,serif;color:#888}
.months-hub .archive-panel .archive-list{border-top:1px solid #dedede}
.months-hub .month-group{margin:0;border-bottom:1px solid #eee}
.months-hub .month-group > summary{list-style:none;display:flex;align-items:baseline;justify-content:space-between;gap:16px;cursor:pointer;padding:16px 0;margin:0;font:400 19px/1.55 'adobe-caslon-pro',Georgia,serif}
.months-hub .month-group > summary::-webkit-details-marker{display:none}
.months-hub .month-group > summary::before{content:none}
.months-hub .month-group .month-meta{font:400 13px/1.5 'adobe-caslon-pro',Georgia,serif;color:#888;white-space:nowrap;display:flex;align-items:center;gap:10px}
.months-hub .month-group .month-toggle{font-size:13px;display:inline-block;transform:rotate(0);transition:transform .2s}
.months-hub .month-group[open] .month-toggle{transform:rotate(180deg)}
.months-hub .month-entries{list-style:none;margin:0 0 16px;padding:0}
.months-hub .month-entries li{margin:0;padding:9px 0;display:flex;justify-content:space-between;align-items:baseline;gap:14px;font-size:16px}
.months-hub .month-entries a{text-decoration:none;line-height:1.65}
.months-hub .status{display:inline-block;vertical-align:middle;font:400 11px/1.4 'adobe-caslon-pro',Georgia,serif;letter-spacing:.04em;color:#555;border:1px solid #aaa;border-radius:2px;padding:2px 5px;margin-left:9px;white-space:nowrap}
.months-hub .month-meta .status{margin:0}
.months-hub .note{margin:32px 0 0;font-size:13px;line-height:1.8;color:#888}
.months-hub .months-foot{text-align:right;font:400 14px/1.5 'adobe-caslon-pro',Georgia,serif;color:#777;margin-top:90px}
@media(max-width:760px){
  body > main{padding:25px 20px 65px}
  .months-hub .recent-archive{grid-template-columns:1fr;gap:65px}
  .months-hub .months-head{padding:100px 0 46px}
  .months-hub .latest{padding-bottom:45px}
  .months-hub .months-foot{margin-top:75px}
}
@media(max-width:560px){
  .months-nav{top:calc(23px + (27px * 1.2 - 21px)/2);right:20px}
  .months-nav .langs{gap:6px}
  .months-nav .home-link{margin-left:12px}
}
</style>

<nav class="months-nav" aria-label="サイトナビゲーション">
  <span class="langs"><span class="selected" lang="ja">日本語</span><span aria-hidden="true">/</span><span class="unavailable" lang="en">English</span></span>
  <a class="home-link" href="/?lang=ja">HOME</a>
</nav>
<div class="months-hub">
  <header class="months-head">
    <p class="eyebrow">OHLUCINDA / JOURNAL</p>
    <h1>Months</h1>
    <p class="lead">気になったこと、言いたいことを書き留めるジャーナル。</p>
  </header>

  <section class="latest" aria-labelledby="months-latest-label">
    <h2 class="section-heading" id="months-latest-label">LATEST JOURNAL</h2>
    {% assign newest_post = site.posts | first %}
    {% if newest_post %}
      <a class="latest-link" id="months-latest-link" href="{{ newest_post.url | relative_url }}" data-months-post="{{ newest_post.url | relative_url }}">{{ newest_post.title | escape }}</a>
      <time class="latest-date" id="months-latest-date" datetime="{{ newest_post.date | date: '%Y-%m-%d' }}">{{ newest_post.date | date: '%Y.%m.%d' }}</time>
    {% else %}
      <p>まだ記事はありません。</p>
    {% endif %}
  </section>

  <div class="recent-archive">
    <section class="recent-panel" aria-labelledby="months-recent-label">
      <h2 class="section-heading" id="months-recent-label">RECENTLY ADDED / UPDATED</h2>
      <ol class="recent-list" id="months-recent-list">
        {% for post in site.posts limit:5 %}
          <li><a href="{{ post.url | relative_url }}" data-months-post="{{ post.url | relative_url }}">{{ post.title | escape }}</a><time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%m.%d' }}</time></li>
        {% endfor %}
      </ol>
      <p class="note">最近の文章と、前に見たときから追加・変更された文章がここに並びます。</p>
    </section>

    <section class="archive-panel" aria-labelledby="months-archive-label">
      <h2 class="section-heading" id="months-archive-label">ARCHIVE</h2>
      <div class="archive-list">
        {% assign posts_by_month = site.posts | group_by_exp: "post", "post.date | date: '%B %Y'" %}
        {% for group in posts_by_month %}
          <details class="month-group" {% if forloop.first %}open{% endif %}>
            <summary><span>{{ group.name }}</span><span class="month-meta"><span class="month-count">{{ group.items | size }} entries</span><span class="month-toggle" aria-hidden="true">⌄</span></span></summary>
            <ul class="month-entries">
              {% for post in group.items %}
                <li data-months-entry="{{ post.url | relative_url }}">
                  <a href="{{ post.url | relative_url }}" data-months-post="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
                  <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%m.%d' }}</time>
                </li>
              {% endfor %}
            </ul>
          </details>
        {% endfor %}
      </div>
    </section>
  </div>
  <footer class="months-foot">© OHLUCINDA</footer>
</div>
<script>
(function(){
  'use strict';
  const url='/months-activity.json';
  const storageKey='ohlucinda-months-seen-v1';
  const list=document.getElementById('months-recent-list');
  const latestLink=document.getElementById('months-latest-link');
  const latestDate=document.getElementById('months-latest-date');
  let seen=null;
  let posts={};
  let marks={};
  try{const saved=localStorage.getItem(storageKey);if(saved){const candidate=JSON.parse(saved);if(candidate&&typeof candidate==='object'&&!Array.isArray(candidate))seen=candidate;}}catch(e){}
  function fingerprint(str){
    let h=2166136261;
    for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}
    return (h>>>0).toString(16);
  }
  function store(){if(!seen)return;try{localStorage.setItem(storageKey,JSON.stringify(seen));}catch(e){}}
  function activityDate(post){return String(post.updatedAt||post.addedAt||post.date||'').slice(0,10);}
  function recentOfficial(post,field){
    if(!post[field])return false;
    const when=Date.parse(String(post[field]).slice(0,10)+'T00:00:00');
    const days=(Date.now()-when)/86400000;
    return Number.isFinite(days)&&days>=0&&days<=21;
  }
  function status(post,hash){
    if(seen){
      if(!Object.prototype.hasOwnProperty.call(seen,post.url))return 'NEW';
      if(seen[post.url]!==hash)return '更新';
    }
    if(recentOfficial(post,'updatedAt'))return '更新';
    if(recentOfficial(post,'addedAt'))return 'NEW';
    return '';
  }
  function badge(text){
    const el=document.createElement('span');el.className='status';el.textContent=text;return el;
  }
  function buildRecent(post){
    const li=document.createElement('li'),a=document.createElement('a'),time=document.createElement('time');
    a.href=post.url;a.textContent=post.title;a.setAttribute('data-months-post',post.url);
    time.dateTime=post.date;time.textContent=(post.date||'').slice(5).replace('-','.');
    li.appendChild(a);
    if(marks[post.url])li.appendChild(badge(marks[post.url]));
    li.appendChild(time);
    return li;
  }
  fetch(url,{cache:'no-cache'}).then(response=>{if(!response.ok)throw new Error('journal unavailable');return response.json();}).then(data=>{
    const entries=Array.isArray(data.entries)?data.entries.filter(p=>p&&p.url&&p.title):[];
    if(!entries.length)return;
    const hashes={};
    entries.forEach(p=>{posts[p.url]=p;hashes[p.url]=fingerprint(String(p.content||''));});
    if(!seen){seen={...hashes};store();}
    entries.forEach(p=>{marks[p.url]=status(p,hashes[p.url]);});
    const prioritized=entries.slice().sort((a,b)=>{
      const aNew=marks[a.url]?1:0,bNew=marks[b.url]?1:0;
      return bNew-aNew||activityDate(b).localeCompare(activityDate(a))||a.title.localeCompare(b.title,'ja');
    });
    list.replaceChildren(...prioritized.slice(0,5).map(buildRecent));
    const mostRecent=entries.slice().sort((a,b)=>activityDate(b).localeCompare(activityDate(a)))[0];
    if(latestLink){latestLink.href=mostRecent.url;latestLink.textContent=mostRecent.title;latestLink.setAttribute('data-months-post',mostRecent.url);}
    if(latestDate){latestDate.dateTime=mostRecent.date;latestDate.textContent=mostRecent.date.replaceAll('-','.');}
    document.querySelectorAll('[data-months-entry]').forEach(li=>{
      const mark=marks[li.getAttribute('data-months-entry')];
      if(mark)li.querySelector('a')?.after(badge(mark));
    });
    document.querySelectorAll('.month-group').forEach(group=>{
      let count=0;
      group.querySelectorAll('[data-months-entry]').forEach(li=>{if(marks[li.getAttribute('data-months-entry')])count++;});
      if(count)group.querySelector('.month-meta')?.prepend(badge(count+'件更新'));
    });
    document.addEventListener('click',event=>{
      const a=event.target.closest?.('a[data-months-post]');
      if(!a)return;
      const key=a.getAttribute('data-months-post');
      if(Object.prototype.hasOwnProperty.call(hashes,key)){seen[key]=hashes[key];store();}
    });
  }).catch(()=>{/* The server-rendered list remains available without JavaScript. */});
})();
</script>
