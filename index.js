import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_, res) => res.json({ ok: true, game: 'Owerri Lifestyle', version: '0.2.0' }));

const clientDir = path.join(__dirname, '..', 'client');
app.use(express.static(clientDir));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const players = new Map();
const names = new Set();
const clubs = { 'Cartel Lifestyle': new Set(), 'De Angels': new Set() };
const properties = [
  { id:'house-1', name:'New Owerri Duplex', zone:'New Owerri', price:1800000, owner:null },
  { id:'shop-1', name:'Douglas Shop', zone:'Douglas', price:950000, owner:null },
  { id:'apartment-1', name:'Wetheral Apartment', zone:'Wetheral', price:1200000, owner:null }
];
const vehicles = [
  { id:'bike', name:'Okada', price:350000, speed:1.8 },
  { id:'sedan', name:'City Sedan', price:2500000, speed:3.2 },
  { id:'suv', name:'Owerri SUV', price:6500000, speed:4.2 }
];

function cleanName(value){
  return String(value || 'Player').replace(/[^a-zA-Z0-9 _-]/g,'').trim().slice(0,18) || 'Player';
}
function publicPlayer(p){
  return { id:p.id, name:p.name, x:p.x, y:p.y, zone:p.zone, vehicle:p.vehicle, level:p.level };
}
function send(ws, payload){ if(ws.readyState===1) ws.send(JSON.stringify(payload)); }
function broadcast(payload){ const raw=JSON.stringify(payload); for(const c of wss.clients) if(c.readyState===1)c.send(raw); }
function snapshot(){ return [...players.values()].map(publicPlayer); }
function pushWorld(){ broadcast({type:'world', players:snapshot(), properties, online:players.size}); }
function notify(p, text){ send(p.ws,{type:'toast', text}); }
function award(p, cash, rep=0){ p.cash += cash; p.rep += rep; p.level = Math.max(1, Math.floor(p.rep/100)+1); }

wss.on('connection', ws => {
  const id = Math.random().toString(36).slice(2,10);
  const player = { id, ws, name:'Player', x:49, y:43, zone:'Fire Service', cash:2500000, rep:100, level:2, vehicle:'walk', club:null, properties:[] };
  players.set(id, player);
  send(ws,{type:'welcome', id, player:{name:player.name,cash:player.cash,rep:player.rep,level:player.level,vehicle:player.vehicle,zone:player.zone}, vehicles, properties});
  pushWorld();

  ws.on('message', raw => {
    let msg; try { msg=JSON.parse(raw); } catch { return; }
    const p=players.get(id); if(!p) return;
    if(msg.type==='login'){
      const requested=cleanName(msg.name);
      if([...names].some(n=>n.toLowerCase()===requested.toLowerCase())) return notify(p,'That player name is already online. Choose another.');
      names.delete(p.name); p.name=requested; names.add(p.name); notify(p,`Welcome, ${p.name}. You are now in Owerri.`); pushWorld();
    }
    if(msg.type==='move'){
      const x=Math.max(3,Math.min(97,Number(msg.x)));
      const y=Math.max(5,Math.min(95,Number(msg.y)));
      if(Number.isFinite(x)&&Number.isFinite(y)){p.x=x;p.y=y;p.zone=String(msg.zone||p.zone).slice(0,30); pushWorld();}
    }
    if(msg.type==='vehicle'){
      const v=vehicles.find(x=>x.id===msg.id); if(!v) return;
      if(p.vehicle===v.id){p.vehicle='walk'; notify(p,'You left the vehicle.');}
      else if(p.cash>=v.price){p.cash-=v.price;p.vehicle=v.id;notify(p,`You bought the ${v.name}.`);}
      else notify(p,'Not enough cash for that vehicle.');
      send(ws,{type:'state',cash:p.cash,rep:p.rep,level:p.level,vehicle:p.vehicle,properties:p.properties}); pushWorld();
    }
    if(msg.type==='work'){
      award(p,75000,5); send(ws,{type:'state',cash:p.cash,rep:p.rep,level:p.level,vehicle:p.vehicle,properties:p.properties}); notify(p,'Work completed: +₦75,000 and +5 reputation.');
    }
    if(msg.type==='club'){
      const name=String(msg.name||''); if(!clubs[name]) return;
      for(const set of Object.values(clubs)) set.delete(p.id);
      clubs[name].add(p.id); p.club=name; award(p,0,10); send(ws,{type:'state',cash:p.cash,rep:p.rep,level:p.level,vehicle:p.vehicle,properties:p.properties}); notify(p,`You joined ${name}. +10 reputation.`); pushWorld();
    }
    if(msg.type==='property'){
      const prop=properties.find(x=>x.id===msg.id); if(!prop) return;
      if(prop.owner && prop.owner!==p.id) return notify(p,'That property is already owned.');
      if(prop.owner===p.id) return notify(p,'You already own this property.');
      if(p.cash<prop.price) return notify(p,'Not enough cash for this property.');
      p.cash-=prop.price; prop.owner=p.id; p.properties.push(prop.id); award(p,0,25);
      send(ws,{type:'state',cash:p.cash,rep:p.rep,level:p.level,vehicle:p.vehicle,properties:p.properties}); notify(p,`Property purchased: ${prop.name}. +25 reputation.`); pushWorld();
    }
    if(msg.type==='chat'){
      const text=String(msg.text||'').replace(/[<>]/g,'').trim().slice(0,140); if(!text)return;
      broadcast({type:'chat',name:p.name,text});
    }
  });
  ws.on('close',()=>{ names.delete(p.name); for(const set of Object.values(clubs))set.delete(id); players.delete(id); pushWorld(); });
});

app.get('*', (req,res,next)=>{
  if(req.path.startsWith('/health')) return next();
  res.sendFile(path.join(clientDir,'index.html'));
});

const port=process.env.PORT||3000;
server.listen(port,()=>console.log(`Owerri Lifestyle running on http://localhost:${port}`));
