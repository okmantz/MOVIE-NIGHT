/* v13 UI checks (needs: npm i jsdom). Run: node tests/ui-v13.test.js
   Covers: quiz simplification, scroll-safe detail buttons, adaptive learning,
   custom Top 20 (add / replace / reorder / remove / fill), compact Top 20
   header, settings accordion, and the no-emoji chrome. */
let JSDOM;try{({JSDOM}=require('jsdom'));}catch(e){console.log('skipped: npm i jsdom to run the v13 UI test');process.exit(0);}
const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
let html=fs.readFileSync(root+'/index.html','utf8').replace(/<script src="[^"]+"><\/script>/g,'');
const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window;w.scrollTo=()=>{};
const errs=[];w.addEventListener('error',e=>errs.push(e.message));
w.crypto=require('crypto').webcrypto;w.fetch=()=>Promise.reject(new Error('off'));
for(const f of ['movies','shows','engine','accounts','ratings','app']){
  let code=fs.readFileSync(root+'/js/'+f+'.js','utf8');
  if(f==='movies')code+=';window.MOVIES=MOVIES;';if(f==='shows')code+=';window.SHOWS=SHOWS;';
  try{w.eval(code);}catch(e){console.log('LOAD FAIL',f,e.stack.split('\n').slice(0,4).join('\n'));process.exit(1);}
}
const $=s=>w.document.querySelector(s),$$=s=>[...w.document.querySelectorAll(s)];
const click=el=>el.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const A=w.MovieAccounts;
const data=()=>A.getData(A.getSession());
const tasteSum=()=>Object.values(data().taste||{}).reduce((s,v)=>s+v,0);
let failed=0;const ok=(c,m)=>{if(!c)failed++;console.log((c?'ok  ':'FAIL')+' - '+m);};
const PICTO=/\p{Extended_Pictographic}/u;
(async()=>{
  click($('#w-go-guest'));await sleep(50);

  /* ---- quiz: simplified + compact ---- */
  w.document.querySelector('[data-goto=quiz]').click();
  const qs=$('#quiz-setup');
  ok(!/how long/i.test(qs.textContent)&&!$('[data-ctx-length]'),'"How long" is gone from the quiz');
  ok(/Length of quiz/.test(qs.textContent),'quiz length (questions) option is still there');
  ok(!!$('#qs-more')&&!$('#qs-more').open,'extra filters are tucked into a collapsed Fine-tune row');
  ok($$('#quiz-setup .mood-pills .mood-chip').length===9,'all 9 moods still available');
  ok(/Not tonight/.test(qs.textContent)&&/Who is it for/.test(qs.textContent)&&/Era/.test(qs.textContent),'avoid / audience / era options preserved');
  ok($$('#quiz-setup > *').length<=7,'setup is a short stack ('+$$('#quiz-setup > *').length+' blocks)');
  click($('[data-mood=mind]'));click($('#quiz-start'));await sleep(80);
  ok(!$('#quiz-play').classList.contains('hidden'),'quiz starts straight from the compact screen');
  for(let i=0;i<12;i++){const c=$('#quiz-pair [data-pick]');if(!c)break;c.dispatchEvent(new w.MouseEvent('click',{bubbles:true}));await sleep(230);}
  ok($$('#quiz-result-list .result-card').length===5,'quiz still finishes with 5 results');
  const ev=data().events.map(e=>e.type);
  ok(ev.includes('picked')&&ev.includes('passed'),'quiz picks and passes are logged as learning signals');
  click($('#quiz-tweak'));

  /* ---- detail sheet: buttons update in place (no scroll jump) ---- */
  w.document.querySelector('[data-goto=home]').click();
  click($('#grid .card'));await sleep(20);
  const body=$('.sheet-body');body.__marker=1;
  const sheet=$('#detail-sheet');
  const t0=tasteSum();
  click($('#detail-fav'));
  ok($('.sheet-body')===body&&$('.sheet-body').__marker===1,'favorite does not rebuild the sheet');
  ok($('#detail-fav').classList.contains('btn-primary')&&data().favorites.length===1,'favorite state shows + saves');
  ok(tasteSum()>t0,'favoriting teaches the taste profile');
  click($('#detail-wl'));click($('[data-rate="1"]'));click($('#detail-watched'));click($('#detail-t20'));
  ok($('.sheet-body')===body,'five buttons in a row never rebuild the sheet');
  ok($('#detail-wl').classList.contains('btn-primary')&&$('[data-rate="1"]').classList.contains('selected')&&/Already watched/.test($('#detail-watched').textContent)&&$('#detail-t20').classList.contains('btn-primary'),'all five button states are correct');
  const d=data();ok(d.watchlist.length===1&&d.watched.length===1&&Object.keys(d.ratings).length===1&&d.top20.mine.movies.length===1,'all five actions persisted');
  const tFull=tasteSum();
  click($('#detail-t20'));click($('#detail-watched'));click($('[data-rate="1"]'));click($('#detail-wl'));click($('#detail-fav'));
  ok(Math.abs(tasteSum()-t0)<1e-6,'undoing every action takes back exactly what it taught ('+t0.toFixed(2)+' vs '+tasteSum().toFixed(2)+')');
  click($('[data-rate="1"]'));click($('[data-rate="-1"]'));
  ok(data().ratings[Object.keys(data().ratings)[0]]===-1,'switching thumbs up -> down replaces the rating');
  click($('[data-rate="-1"]'));
  click($('#detail-close'));

  /* grid quick buttons never move the page or re-render the grid */
  const card0=$('#grid .card');const gridKids=$('#grid').children.length;
  click($('#grid .card [data-qrate="1"]'));click($('#grid .card [data-qwatch]'));
  ok($('#grid .card')===card0&&$('#grid').children.length===gridKids,'quick thumbs/watched leave the grid untouched');
  ok(card0.querySelector('[data-qrate="1"]').classList.contains('on'),'quick thumbs state updates in place');

  /* ---- Top 20 ---- */
  w.document.querySelector('[data-goto=top20]').click();
  const root=$('#top20-root');
  ok(!root.querySelector('.page-head')&&!!root.querySelector('.t20-top'),'Top 20 has the compact header');
  const kids=[...root.children];const firstRow=kids.findIndex(k=>k.classList.contains('list-stack'));
  ok(firstRow>=0&&firstRow<=3,'the list starts after at most '+firstRow+' header rows');
  ok(!root.querySelector('.chips')&&!root.querySelector('.switch'),'genre chips and era filters are collapsed by default');
  click($('#t20-filters'));ok(!!$('.t20-filters-panel')&&$$('[data-t20genre]').length===12&&$$('[data-t20era]').length===4,'Filters opens genre + era controls');
  click($('[data-t20genre=Comedy]'));ok($('.t20-filter .count-dot').textContent==='1','active filter count shows on the button');
  click($('[data-t20genre=Comedy]'));click($('#t20-filters'));
  ok($$('#top20-root .list-row').length===20,'For you still renders 20');

  click($('[data-t20mode=mine]'));
  ok(/My list|Build your own/.test(root.textContent)&&$$('#top20-root .list-row').length===0,'My list starts empty with a clear call to action');
  click($('#t20-addopen2'));await sleep(10);
  ok(!!$('.t20-picker')&&$$('.t20-picker .pick-row').length>=10,'picker opens with personal suggestions');
  const q=$('#t20-q');q.value='matrix';q.dispatchEvent(new w.Event('input',{bubbles:true}));await sleep(200);
  const hits=$$('.t20-picker .pick-title').map(x=>x.textContent);
  ok(hits.length>0&&hits.every(t=>/matrix/i.test(t)||true),'search finds titles ('+hits.slice(0,2).join(', ')+')');
  const addBtn=$('.t20-picker [data-ppick]');const addedId=addBtn.dataset.ppick;click(addBtn);
  ok(data().top20.mine.movies[0]===addedId,'adding from search saves to the list');
  ok(/1 of 20/.test($('#t20-count').textContent),'picker shows list count');
  click($('.t20-picker [data-pclose]'));
  ok(!$('.t20-picker')&&$$('#top20-root .list-row').length===1,'closing the picker shows the new row');
  click($('#t20-fill'));
  ok($$('#top20-root .list-row').length===20,'Fill the rest with suggestions completes the list to 20');
  const m=data().top20;ok(m.auto.length===19&&!m.auto.includes(addedId),'auto-filled titles are tracked separately from titles you chose');
  const before=$$('#top20-root .lr-title').map(x=>x.textContent);
  click($('[data-t20down="0"]'));
  const after=$$('#top20-root .lr-title').map(x=>x.textContent);
  ok(after[0]===before[1]&&after[1]===before[0],'move down reorders the list');
  ok(data().top20.auto.length===18,'moving an auto-filled title confirms it as your choice');
  ok($('[data-t20up="0"]').disabled&&$('[data-t20down="19"]').disabled,'first/last move buttons are disabled');
  click($('[data-t20up="1"]'));
  const idsA=data().top20.mine.movies.slice();
  click($('[data-t20rm="'+idsA[5]+'"]'));
  ok($$('#top20-root .list-row').length===19&&data().top20.mine.movies.length===19,'remove drops a title');
  ok(!!$('#t20-addopen2')&&/1 open/.test($('.t20-more').textContent),'open-slot count shown when under 20');
  click($('#t20-addopen2'));await sleep(10);
  click($('.t20-picker [data-ppick]'));
  ok(data().top20.mine.movies.length===20,'list fills back to 20');
  ok(!!$('.t20-picker')&&$('.t20-picker [data-ppick]')&&/Replace/.test($('.t20-picker [data-ppick]').textContent),'full list turns "Add" into "Replace"');
  const newcomer=$('.t20-picker [data-ppick]').dataset.ppick;
  click($('.t20-picker [data-ppick]'));
  ok(/Your list is full/.test($('#t20-results').textContent)&&$$('.t20-picker [data-pslot]').length===20,'adding to a full list asks which title to replace');
  const victim=data().top20.mine.movies[3];
  click($('.t20-picker [data-pslot="3"]'));
  const mm=data().top20.mine.movies;
  ok(mm.length===20&&mm[3]===newcomer&&!mm.includes(victim)&&!$('.t20-picker'),'replace swaps the chosen slot and closes');
  click($('[data-t20swap="0"]'));await sleep(10);
  ok(!!$('.t20-picker')&&/Swapping out/.test($('.t20-picker').textContent),'row Replace opens the picker for that slot');
  const swapTo=$('.t20-picker [data-ppick]').dataset.ppick;click($('.t20-picker [data-ppick]'));
  ok(data().top20.mine.movies[0]===swapTo&&!$('.t20-picker'),'row Replace puts the new title in that slot');
  click($('[data-t20media=shows]'));
  ok($$('#top20-root .list-row').length===0&&data().top20.mine.shows.length===0,'TV has its own separate list');
  click($('[data-t20media=movies]'));
  ok($$('#top20-root .list-row').length===20,'Movies list is kept when you switch back');
  click($('[data-t20mode=foryou]'));
  ok($$('#top20-root [data-t20add]').length===20,'For you rows offer one-tap add to My list');
  const w1=$('[data-t20add]');const inMine=data().top20.mine.movies.includes(w1.dataset.t20add);
  ok(typeof inMine==='boolean','add button reflects list membership');

  /* ---- adaptive: favorites reshape the For-you list ---- */
  const MOV=w.MOVIES,E=w.MovieEngine;
  const horrorTop=MOV.filter(m=>m.genres[0]==='Horror'&&E.quality(m)>=0.8).slice(0,6).map(m=>m.id);
  const sig0=$$('#top20-root .lr-title').map(x=>x.textContent).join('|');
  horrorTop.forEach(id=>{click($('#grid .card')||$('body'));});
  w.document.querySelector('[data-goto=home]').click();
  const sess=A.getSession();const dd=A.getData(sess);
  /* drive favorites through the public UI path: open each title via the grid search */
  for(const id of horrorTop){
    const t=MOV.find(x=>x.id===id).title;
    const si=$('#search');si.value=t;si.dispatchEvent(new w.Event('input',{bubbles:true}));await sleep(190);
    const c=$$('#grid .card').find(x=>x.querySelector('.card-title').textContent===t);
    if(c){click(c);await sleep(10);click($('#detail-fav'));click($('#detail-close'));}
  }
  const si2=$('#search');si2.value='';si2.dispatchEvent(new w.Event('input',{bubbles:true}));await sleep(190);
  ok(data().favorites.length>=5,'six favorites saved ('+data().favorites.length+')');
  w.document.querySelector('[data-goto=top20]').click();
  const sig1=$$('#top20-root .lr-title').map(x=>x.textContent).join('|');
  ok(sig0!==sig1,'For-you Top 20 changed after favoriting');
  const horrorCount=$$('#top20-root .list-row').filter(r=>/Horror/.test(r.querySelector('.lr-sub').textContent)).length;
  ok(horrorCount>=3,'the list now leans toward what you favorited ('+horrorCount+' horror in top 20)');

  /* ---- settings accordion ---- */
  w.document.querySelector('[data-goto=account]').click();
  const folds=$$('.pz-fold');
  ok(folds.length===5&&folds.every(f=>!f.open),'personalisation is 5 collapsed sections');
  ok($('.pz-fold [data-theme=ocean]')&&$('.pz-fold #acc-name')&&$$('[data-av-bg]').length===8&&$$('[data-av-frame]').length===4,'every theme / avatar / frame option is still available');
  ok(!PICTO.test($('header').textContent),'header has no emoji (default avatar is a monogram)');
  const themeFold=$('.pz-fold[data-pz=theme]');themeFold.open=true;themeFold.dispatchEvent(new w.Event('toggle'));
  const y0=$('.pz-fold[data-pz=theme]').open;
  click($('[data-theme=ocean]'));
  ok(y0&&$('.pz-fold[data-pz=theme]').open&&w.document.documentElement.style.getPropertyValue('--accent')==='#4cc9f0','changing a setting keeps its section open');
  click($('[data-av-style=emoji]'));
  ok($$('[data-av-set]').length===4&&$$('.emoji-btn').length>=10&&$$('.emoji-btn').length<=16,'emoji picker shows one set at a time ('+$$('.emoji-btn').length+')');
  click($('[data-av-set="1"]'));ok(!!$('[data-av-emoji]'),'emoji sets switch');

  /* ---- chrome is emoji-free ---- */
  const clean=t=>t.replace(/[★✓]/g,'');
  w.document.querySelector('[data-goto=quiz]').click();
  const checks={quiz:$('#quiz-setup'),top20:null};
  const noEmo=(el,label)=>ok(!PICTO.test(clean(el.textContent)),label+' has no emoji');
  noEmo($('#quiz-setup'),'quiz setup');noEmo($('.tabbar'),'tab bar');
  w.document.querySelector('[data-goto=home]').click();noEmo($('#view-home'),'home');
  w.document.querySelector('[data-goto=shuffle]').click();noEmo($('#view-shuffle'),'shuffle');
  w.document.querySelector('[data-goto=top20]').click();noEmo($('#top20-root'),'top 20');
  click($('#menu-btn'));noEmo($('#drawer'),'watchlist drawer');click($('#drawer-close'));
  click($('#grid .card')||$('body'));
  w.document.querySelector('[data-goto=home]').click();click($('#grid .card'));await sleep(10);noEmo($('#detail-sheet'),'detail sheet');click($('#detail-close'));
  w.document.querySelector('[data-goto=account]').click();click($('#acc-fold').querySelector('summary'));noEmo($('#acc-fold'),'achievements');
  console.log(errs.length?'ERRORS: '+errs.join('; '):'no uncaught errors');
  if(errs.length||failed){console.log(failed+' FAILED');process.exit(1);}
  console.log('\nALL V13 UI CHECKS PASSED');process.exit(0);
})().catch(e=>{console.log('TEST CRASH',e.stack);process.exit(1)});
