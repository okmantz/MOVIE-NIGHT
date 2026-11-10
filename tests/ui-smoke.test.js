/* UI click-through (needs: npm i jsdom). Run: node tests/ui-smoke.test.js */
let JSDOM;try{({JSDOM}=require('jsdom'));}catch(e){console.log('skipped: npm i jsdom to run the UI smoke test');process.exit(0);}const fs=require('fs');const path=require('path');
const root=path.resolve(__dirname,'..');
let html=fs.readFileSync(root+'/index.html','utf8');
html=html.replace(/<script src="[^"]+"><\/script>/g,'');
const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window;w.scrollTo=()=>{};
const errs=[];w.addEventListener('error',e=>errs.push(e.message));
w.crypto=require('crypto').webcrypto;
w.fetch=()=>Promise.reject(new Error('off'));
for(const f of ['movies','shows','engine','accounts','ratings','app']){
  let code=fs.readFileSync(root+'/js/'+f+'.js','utf8');
  if(f==='movies')code+=';window.MOVIES=MOVIES;';if(f==='shows')code+=';window.SHOWS=SHOWS;';
  try{w.eval(code);}catch(e){console.log('LOAD FAIL',f,e.stack.split('\n').slice(0,4).join('\n'));process.exit(1);}
}
const $=s=>w.document.querySelector(s),$$=s=>[...w.document.querySelectorAll(s)];
const click=el=>el.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  const ok=(c,m)=>console.log((c?'ok  ':'FAIL')+' - '+m);
  ok(!$('#welcome-overlay').classList.contains('hidden'),'welcome shown when signed out');
  click($('#w-go-guest'));await sleep(50);
  ok($('#welcome-overlay').classList.contains('hidden'),'guest enters');
  ok($$('#grid .card').length===60,'grid renders 60 cards ('+$$('#grid .card').length+')');
  ok(/Tonight/.test($('#hero-featured').textContent),'hero renders');
  const seen=new Set();for(let i=0;i<6;i++){click($('#hero-another'));seen.add($('.hero-title').textContent);}
  ok(seen.size>=4,'Tonight\'s pick changes ('+seen.size+' distinct in 6)');
  click($('#media-switch [data-media=shows]'));ok($$('#grid .card').length>0&&/shows/.test($('#browse-count').textContent),'TV browse');
  // drawer
  click($('#grid .card'));await sleep(20);ok(!$('#detail-overlay').classList.contains('hidden'),'detail opens');
  click($('#detail-wl'));click($('#detail-close'));
  click($('#menu-btn'));ok($('#drawer').classList.contains('open')&&$$('.wl-row').length>=1,'drawer shows watchlist ('+$$('.acc').length+' sections)');
  click($('#drawer-close'));
  // quiz
  w.document.querySelector('[data-goto=quiz]').click();
  ok(/Couples/.test($('#quiz-setup').textContent)&&/Not tonight/.test($('#quiz-setup').textContent),'quiz setup has couples + not-tonight');
  click($('[data-mood=mind]'));click($('[data-avoid=Horror]'));click($('#quiz-start'));await sleep(100);
  ok(!$('#quiz-play').classList.contains('hidden'),'quiz starts');
  for(let i=0;i<12;i++){const c=$('#quiz-pair [data-pick]');if(!c)break;c.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));await sleep(230);}
  ok(!$('#quiz-results').classList.contains('hidden')&&$$('#quiz-result-list .result-card').length===5,'quiz finishes with 5 results');
  const titles=$$('#quiz-result-list .card-title').map(x=>x.textContent);console.log('   results:',titles.join(' | '));
  click($('#quiz-more'));ok($$('#quiz-result-list .result-card').length===10,'show 5 more works');
  // couples
  click($('#quiz-tweak'));click($('[data-who=couple]'));ok(!!$('#q-partner'),'couples player picker');click($('#quiz-start'));await sleep(100);
  for(let i=0;i<12;i++){const ov=$('#pass-overlay');if(!ov.classList.contains('hidden'))click($('#pass-go'));const c=$('#quiz-pair [data-pick]');if(!c)break;c.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));await sleep(230);}
  ok($$('#quiz-result-list .result-card').length===5&&/for the two/i.test($('#quiz-results').textContent),'couples finishes');
  // top20 / account / shuffle
  w.document.querySelector('[data-goto=top20]').click();ok($$('#top20-root .list-row').length===20,'top20 renders 20 ('+$$('#top20-root .list-row').length+')');
  click($('[data-t20hide]'));ok($$('#top20-root .list-row').length===20,'hide keeps 20');
  w.document.querySelector('[data-goto=account]').click();ok(/Personality quiz/.test($('#account-root').textContent)&&/Share Movie Night/.test($('#account-root').textContent),'account page');
  click($('[data-theme=ocean]'));ok(w.document.documentElement.style.getPropertyValue('--accent')==='#4cc9f0','theme applies');
  click($('[data-mode=light]'));ok(w.document.documentElement.getAttribute('data-mode')==='light','light mode');
  click($('#acc-pq'));for(let s=0;s<4;s++){const q=$('.personality-modal [data-v]');q&&click(q);click($('#qnext'));await sleep(10);}
  ok($('#view-top20').classList.contains('active'),'personality quiz -> Top 20');
  w.document.querySelector('[data-goto=shuffle]').click();click($('#shuffle-go'));await sleep(800);ok($$('#shuffle-results .result-card').length===5,'shuffle 5 picks');
  console.log(errs.length?'ERRORS: '+errs.join('; '):'no uncaught errors');if(errs.length)process.exit(1);
  process.exit(0);
})().catch(e=>{console.log('TEST CRASH',e.stack);process.exit(1)});
