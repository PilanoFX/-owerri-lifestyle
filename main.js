import './style.css';

const zones=[
  ['IMSU Junction',50,25,'Campus district'],['Fire Service',43,43,'City hub'],['Douglas',55,45,'Downtown'],
  ['Wetheral',64,36,'Urban corridor'],['New Owerri',70,66,'Residential'],['Nekede',18,56,'Student district'],['FUTO',30,75,'University area']
];
const vehicleList=[{id:'bike',name:'Okada',price:350000},{id:'sedan',name:'City Sedan',price:2500000},{id:'suv',name:'Owerri SUV',price:6500000}];
let state={name:'Guest',x:49,y:43,cash:2500000,rep:100,level:2,zone:'Fire Service',vehicle:'walk',properties:[],online:1,players:[],connected:false,chat:[]};
const root=document.querySelector('#root');
root.innerHTML=`
<div class="app"><header class="top"><div><div class="brand">🌆 OWERRI <span>LIFESTYLE</span></div><div class="tag">Live your life. Build your name. Own Owerri.</div></div><div class="status"><span id="conn">● Connecting…</span><b id="online">1 online</b></div></header>
<section class="login panel"><div><strong>Player name</strong><small>Choose a name other players will see.</small></div><form id="loginForm"><input id="nameInput" maxlength="18" placeholder="e.g. Chioma" value="Guest"/><button>Enter City</button></form></section>
<section class="stats"><div>💰 <b id="cash">₦2.50M</b><small>Cash</small></div><div>⭐ <b id="level">2</b><small>Level</small></div><div>❤️ <b id="rep">100</b><small>Reputation</small></div><div>📍 <b id="zone">Fire Service</b><small>Current area</small></div></section>
<section class="game"><div class="worldWrap"><div id="world"></div><div class="controls"><button data-mode="walk" class="active">🚶 Walk</button><button data-mode="drive">🚗 Drive</button><button id="work">💼 Work +₦75k</button><button id="buyMenu">🛍️ Shop</button></div></div>
<aside class="side"><section><h2>📍 Explore Owerri</h2><div id="locations" class="locations"></div></section><section><h2>🎉 Clubs</h2><div class="club"><div><b>🔥 Cartel Lifestyle</b><small>Nightlife • Social • Status</small></div><button data-club="Cartel Lifestyle">Join</button></div><div class="club"><div><b>👼 De Angels</b><small>Music • Social • Events</small></div><button data-club="De Angels">Join</button></div></section><section><h2>🏠 Properties</h2><div id="properties"></div></section><section><h2>💬 City Chat</h2><div id="chat" class="chat"></div><form id="chatForm" class="chatForm"><input id="chatInput" maxlength="140" placeholder="Say something…"/><button>Send</button></form></section></aside></section>
<div id="shop" class="modal hidden"><div class="modalCard"><button class="close" id="closeShop">×</button><h2>🛍️ City Garage</h2><p>Buy a vehicle to move around faster.</p><div id="vehicles"></div></div></div>
<div id="toast" class="toast" aria-live="polite"></div><footer>Owerri Lifestyle MVP • Real-time multiplayer foundation • Locations are a game-world representation, not a navigation map.</footer></div>`;

const world=document.querySelector('#world'); const ws=new WebSocket(`${location.protocol==='https:'?'wss':'ws'}://${location.host}`);
function money(n){return '₦'+Number(n||0).toLocaleString('en-NG',{maximumFractionDigits:0})}
function toast(t){const el=document.querySelector('#toast');el.textContent=t;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),2600)}
function send(msg){if(ws.readyState===1)ws.send(JSON.stringify(msg));else toast('Still connecting to the city server…')}
function logChat(name,text){const d=document.createElement('div');d.innerHTML=`<b>${escapeHtml(name)}</b><span>${escapeHtml(text)}</span>`;document.querySelector('#chat').prepend(d);while(document.querySelector('#chat').children.length>40)document.querySelector('#chat').lastChild.remove()}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderWorld(){
  world.innerHTML=`<div class="terrain t1"></div><div class="terrain t2"></div><div class="road r1"></div><div class="road r2"></div><div class="road r3"></div><div class="road r4"></div>`+
    zones.map(([n,x,y,desc])=>`<button class="place" style="left:${x}%;top:${y}%" data-zone="${escapeHtml(n)}" title="${escapeHtml(desc)}">${escapeHtml(n)}</button>`).join('')+
    state.players.map(p=>`<div class="avatar ${p.id===state.id?'me':''}" style="left:${p.x}%;top:${p.y}%"><span>${p.vehicle==='walk'?'🧍🏾':'🚗'}</span><b>${escapeHtml(p.name)}</b></div>`).join('');
  world.querySelectorAll('.place').forEach(b=>b.addEventListener('click',()=>travel(b.dataset.zone)));
}
function travel(zone){const z=zones.find(v=>v[0]===zone);if(!z)return;state.x=z[1];state.y=z[2];state.zone=zone;state.rep+=2;send({type:'move',x:state.x,y:state.y,zone});renderUI();toast(`Arrived at ${zone}`)}
function renderLocations(){document.querySelector('#locations').innerHTML=zones.map(([n,, ,d])=>`<button data-loc="${escapeHtml(n)}"><span>📍</span><span><b>${escapeHtml(n)}</b><small>${escapeHtml(d)}</small></span></button>`).join('');document.querySelectorAll('[data-loc]').forEach(b=>b.onclick=()=>travel(b.dataset.loc))}
function renderProperties(){
 const props=state.propertiesData||[];document.querySelector('#properties').innerHTML=props.map(p=>`<div class="property"><div><b>${escapeHtml(p.name)}</b><small>${escapeHtml(p.zone)} • ${p.owner?'Owned':'For sale'}</small></div>${p.owner?'<span class="owned">OWNED</span>':`<button data-property="${p.id}">${money(p.price)}</button>`}</div>`).join('');document.querySelectorAll('[data-property]').forEach(b=>b.onclick=()=>send({type:'property',id:b.dataset.property}));
}
function renderVehicles(){document.querySelector('#vehicles').innerHTML=vehicleList.map(v=>`<div class="vehicle"><div><b>${v.name}</b><small>${money(v.price)}</small></div><button data-vehicle="${v.id}">${state.vehicle===v.id?'Leave':'Buy'}</button></div>`).join('');document.querySelectorAll('[data-vehicle]').forEach(b=>b.onclick=()=>send({type:'vehicle',id:b.dataset.vehicle}))}
function renderUI(){document.querySelector('#cash').textContent=money(state.cash);document.querySelector('#level').textContent=state.level;document.querySelector('#rep').textContent=state.rep;document.querySelector('#zone').textContent=state.zone;document.querySelector('#online').textContent=`${state.online} online`;renderWorld();renderProperties();renderVehicles()}
renderLocations();renderUI();

document.querySelector('#loginForm').addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#nameInput').value.trim();if(name)send({type:'login',name})});
document.querySelector('#work').onclick=()=>send({type:'work'});
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('active'));b.classList.add('active');if(b.dataset.mode==='drive'&&state.vehicle==='walk')toast('Buy a vehicle first.');else {state.vehicle=b.dataset.mode==='walk'?'walk':state.vehicle;send({type:'move',x:state.x,y:state.y,zone:state.zone});}});
document.querySelector('#buyMenu').onclick=()=>document.querySelector('#shop').classList.remove('hidden');document.querySelector('#closeShop').onclick=()=>document.querySelector('#shop').classList.add('hidden');
document.querySelectorAll('[data-club]').forEach(b=>b.onclick=()=>send({type:'club',name:b.dataset.club}));
document.querySelector('#chatForm').addEventListener('submit',e=>{e.preventDefault();const i=document.querySelector('#chatInput');if(i.value.trim()){send({type:'chat',text:i.value.trim()});i.value=''}});
window.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,button'))return;const k=e.key.toLowerCase();if(!'wasd'.includes(k)&&!e.key.startsWith('Arrow'))return;e.preventDefault();let step=state.vehicle==='walk'?1.8:3.2;if(k==='w'||e.key==='ArrowUp')state.y=Math.max(5,state.y-step);if(k==='s'||e.key==='ArrowDown')state.y=Math.min(95,state.y+step);if(k==='a'||e.key==='ArrowLeft')state.x=Math.max(3,state.x-step);if(k==='d'||e.key==='ArrowRight')state.x=Math.min(97,state.x+step);send({type:'move',x:state.x,y:state.y,zone:state.zone})});
ws.addEventListener('open',()=>{state.connected=true;document.querySelector('#conn').textContent='● Live server';document.querySelector('#conn').classList.add('live')});
ws.addEventListener('close',()=>{state.connected=false;document.querySelector('#conn').textContent='● Disconnected';document.querySelector('#conn').classList.remove('live');toast('Connection lost. Refresh when the server is back.')});
ws.addEventListener('message',e=>{let m;try{m=JSON.parse(e.data)}catch{return};if(m.type==='welcome'){state.id=m.id;Object.assign(state,m.player);state.propertiesData=m.properties;renderUI();toast('You are in the city. Pick a name and start playing.')}if(m.type==='world'){state.players=m.players;state.online=m.online;state.propertiesData=m.properties;const me=m.players.find(p=>p.id===state.id);if(me){state.x=me.x;state.y=me.y;state.zone=me.zone}renderUI()}if(m.type==='state'){Object.assign(state,m);renderUI()}if(m.type==='toast')toast(m.text);if(m.type==='chat')logChat(m.name,m.text)});
