/* =========================================================
   Owerri Lifestyle – Realistic Edition
   Built to feel like Lagos Life / PH Lifestyle
   ========================================================= */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://rjpampbvxqjvocwltrxw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcGFtcGJ2eHFqdm9jd2x0cnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNjA5MDAsImV4cCI6MjEwNjkzNjkwMH0.XgKigi0a8tlrz3qtZBhefgoQc3hkOUDm6Gy69QZ64kQ'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ===================== REAL OWERRI LOCATIONS =====================
const zones = [
  { name:"IMSU Junction", x:48, y:16, type:"Campus", emoji:"🎓",
    actions:[
      {label:"Attend Lecture", cost:0, hunger:-8, energy:-18, fun:-8, social:12, hygiene:0, bladder:-6, cash:0},
      {label:"Chop at Cafeteria", cost:2200, hunger:42, energy:8, fun:6, social:8, hygiene:-4, bladder:-8, cash:0},
      {label:"Hang with Course Mates", cost:0, hunger:-6, energy:-12, fun:28, social:32, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Douglas Road", x:55, y:40, type:"Downtown", emoji:"🏙️",
    actions:[
      {label:"Shop Douglas Market", cost:6000, hunger:0, energy:-12, fun:22, social:12, hygiene:0, bladder:-5, cash:0},
      {label:"Eat Out", cost:5500, hunger:48, energy:12, fun:18, social:12, hygiene:-6, bladder:-10, cash:0},
      {label:"Bank Work", cost:0, hunger:-8, energy:-28, fun:-12, social:6, hygiene:0, bladder:-6, cash:38000}
    ]},
  { name:"Wetheral", x:70, y:26, type:"Urban Corridor", emoji:"🌃",
    actions:[
      {label:"Club Night", cost:15000, hunger:-8, energy:-25, fun:48, social:40, hygiene:-18, bladder:-12, cash:0},
      {label:"Late Night Suya", cost:3500, hunger:38, energy:6, fun:14, social:8, hygiene:-6, bladder:-8, cash:0}
    ]},
  { name:"New Owerri", x:78, y:70, type:"Residential", emoji:"🏡",
    actions:[
      {label:"Rest in Area", cost:0, hunger:-5, energy:28, fun:6, social:-4, hygiene:8, bladder:12, cash:0},
      {label:"Visit Neighbour", cost:0, hunger:-5, energy:-10, fun:18, social:28, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Nekede", x:14, y:56, type:"Student Area", emoji:"📚",
    actions:[
      {label:"Study Hard", cost:0, hunger:-6, energy:-22, fun:-12, social:-6, hygiene:0, bladder:-5, cash:0},
      {label:"Nekede Party", cost:9000, hunger:-12, energy:-28, fun:50, social:42, hygiene:-22, bladder:-15, cash:0},
      {label:"Buy Food", cost:1800, hunger:36, energy:6, fun:6, social:4, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"FUTO", x:22, y:80, type:"University", emoji:"🔬",
    actions:[
      {label:"Lab Work", cost:0, hunger:-6, energy:-26, fun:-6, social:6, hygiene:-6, bladder:-5, cash:20000},
      {label:"Campus Hangout", cost:0, hunger:-5, energy:-12, fun:22, social:28, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Owerri Mall", x:58, y:56, type:"Shopping", emoji:"🛍️",
    actions:[
      {label:"Shopping Spree", cost:18000, hunger:0, energy:-16, fun:32, social:12, hygiene:6, bladder:-5, cash:0},
      {label:"Cinema", cost:4500, hunger:-5, energy:-10, fun:38, social:16, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Sam Mbakwe Airport", x:88, y:12, type:"Travel", emoji:"✈️",
    actions:[
      {label:"Watch Planes", cost:0, hunger:-4, energy:-4, fun:16, social:6, hygiene:0, bladder:-4, cash:0},
      {label:"Airport Hustle", cost:0, hunger:-12, energy:-22, fun:-6, social:6, hygiene:0, bladder:-6, cash:30000}
    ]},
  { name:"Control Post", x:38, y:66, type:"Junction", emoji:"🚦",
    actions:[
      {label:"Buy Pure Water", cost:200, hunger:6, energy:0, fun:0, social:0, hygiene:0, bladder:-2, cash:0},
      {label:"Okada Drop", cost:900, hunger:-2, energy:-4, fun:10, social:6, hygiene:-4, bladder:-3, cash:0}
    ]},
  { name:"World Bank", x:64, y:18, type:"Area", emoji:"🏦",
    actions:[
      {label:"Bank Transaction", cost:0, hunger:-3, energy:-8, fun:-4, social:0, hygiene:0, bladder:-3, cash:6000},
      {label:"Network with People", cost:0, hunger:-5, energy:-8, fun:16, social:28, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Amakohia", x:26, y:26, type:"Residential", emoji:"🏠",
    actions:[
      {label:"Visit Relative", cost:0, hunger:12, energy:6, fun:16, social:32, hygiene:0, bladder:-5, cash:0},
      {label:"Local Food", cost:2000, hunger:42, energy:10, fun:10, social:6, hygiene:-5, bladder:-8, cash:0}
    ]},
  { name:"Concorde Hotel", x:82, y:36, type:"Luxury Hotel", emoji:"🏨",
    actions:[
      {label:"Book Room", cost:28000, hunger:0, energy:35, fun:22, social:6, hygiene:28, bladder:18, cash:0},
      {label:"Poolside Chill", cost:9000, hunger:-5, energy:12, fun:38, social:22, hygiene:8, bladder:-5, cash:0},
      {label:"Business Meeting", cost:0, hunger:-6, energy:-16, fun:8, social:28, hygiene:0, bladder:-5, cash:18000}
    ]},
  { name:"Hotel CP", x:72, y:46, type:"Hotel", emoji:"🏩",
    actions:[
      {label:"Check In", cost:20000, hunger:0, energy:28, fun:16, social:6, hygiene:22, bladder:16, cash:0},
      {label:"Lounge & Drink", cost:7000, hunger:-6, energy:6, fun:32, social:26, hygiene:-6, bladder:-12, cash:0}
    ]},
  { name:"Rock View", x:84, y:54, type:"Hotel", emoji:"⛰️",
    actions:[
      {label:"Stay Overnight", cost:24000, hunger:0, energy:38, fun:16, social:6, hygiene:22, bladder:16, cash:0},
      {label:"Gym & Pool", cost:5500, hunger:-12, energy:-16, fun:22, social:12, hygiene:16, bladder:-5, cash:0},
      {label:"Restaurant Dinner", cost:10000, hunger:52, energy:12, fun:22, social:16, hygiene:-5, bladder:-10, cash:0}
    ]},
  { name:"Kilimanjaro", x:50, y:30, type:"Restaurant", emoji:"🍽️",
    actions:[
      {label:"Full Meal", cost:4800, hunger:58, energy:16, fun:16, social:12, hygiene:-5, bladder:-10, cash:0},
      {label:"Quick Snack", cost:2000, hunger:28, energy:6, fun:6, social:6, hygiene:0, bladder:-5, cash:0},
      {label:"Hang with Friends", cost:0, hunger:-5, energy:-6, fun:22, social:32, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Mangrove", x:34, y:48, type:"Entertainment", emoji:"🎮",
    actions:[
      {label:"Arcade Games", cost:3500, hunger:-5, energy:-16, fun:48, social:16, hygiene:0, bladder:-5, cash:0},
      {label:"VR Session", cost:6000, hunger:-5, energy:-22, fun:52, social:12, hygiene:0, bladder:-5, cash:0},
      {label:"Gamer Hangout", cost:0, hunger:-5, energy:-10, fun:28, social:36, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Pro Life Gym", x:42, y:20, type:"Fitness", emoji:"💪",
    actions:[
      {label:"Full Workout", cost:3000, hunger:-16, energy:-28, fun:16, social:12, hygiene:-16, bladder:-5, cash:0},
      {label:"Personal Training", cost:9000, hunger:-22, energy:-32, fun:12, social:6, hygiene:-20, bladder:-5, cash:0},
      {label:"Protein Shake", cost:1800, hunger:16, energy:22, fun:6, social:0, hygiene:0, bladder:-5, cash:0}
    ]},
  { name:"Fire Service", x:32, y:36, type:"City Hub", emoji:"🚒",
    actions:[
      {label:"Volunteer", cost:0, hunger:-10, energy:-22, fun:6, social:16, hygiene:-10, bladder:-5, cash:9000},
      {label:"Buy Snacks", cost:1500, hunger:26, energy:6, fun:6, social:0, hygiene:0, bladder:-5, cash:0}
    ]}
]

const houseList = [
  {id:"nekede-room", name:"Nekede Single Room", zone:"Nekede", price:380000, x:10, y:60, rooms:["bedroom"]},
  {id:"amakohia-flat", name:"Amakohia Mini Flat", zone:"Amakohia", price:780000, x:20, y:30, rooms:["living","bedroom","kitchen"]},
  {id:"wetheral-apt", name:"Wetheral Apartment", zone:"Wetheral", price:1350000, x:74, y:28, rooms:["living","bedroom","kitchen","bathroom"]},
  {id:"douglas-lux", name:"Douglas Luxury Flat", zone:"Douglas Road", price:2100000, x:58, y:38, rooms:["living","bedroom","kitchen","bathroom"]},
  {id:"newowerri-villa", name:"New Owerri Villa", zone:"New Owerri", price:3600000, x:82, y:74, rooms:["living","bedroom","kitchen","bathroom"]}
]

const vehicleList = [
  {id:"okada", name:"Okada", price:250000, speed:2.4, emoji:"🛵"},
  {id:"keke", name:"Keke Napep", price:580000, speed:2.1, emoji:"🛺"},
  {id:"corolla", name:"Toyota Corolla", price:2900000, speed:3.6, emoji:"🚗"},
  {id:"camry", name:"Camry", price:4500000, speed:3.9, emoji:"🚙"},
  {id:"suv", name:"Lexus RX", price:8200000, speed:4.3, emoji:"🚐"}
]

// ===================== STATE =====================
let player = {
  x:49, y:38, cash:1650000, level:1, reputation:40,
  mode:"Walk", fuel:100, direction:"down",
  hunger:78, energy:82, fun:55, social:50, hygiene:88, bladder:68,
  username:"Player", houseId:null, vehicles:[], currentVehicle:null,
  friends:[]
}

let currentUser = null
let isNight = false
let currentRoom = "living"
let saveTimeout = null
let activeChat = null
const conversations = {}

// Real-time connected players are supplied by the game server.
let onlinePlayers = [];
let multiplayerSocket = null;
let multiplayerReconnectTimer = null;
let multiplayerId = null;
let lastPresenceSend = 0;

const root = document.getElementById("root")

// ===================== STYLES =====================
const style = document.createElement("style")
style.textContent = `
*{box-sizing:border-box;margin:0;padding:0}
body{background:#080b10;color:#e8eef4;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;overflow-x:hidden;-webkit-font-smoothing:antialiased}
button{border:0;border-radius:12px;padding:11px 15px;color:#fff;background:#1a2430;font-weight:600;cursor:pointer;font-size:13.5px;transition:all .15s}
button:active{transform:scale(.97)}
button:disabled{opacity:.45;cursor:not-allowed}
input{width:100%;padding:13px 15px;border-radius:11px;border:1px solid #2a3545;background:#121a24;color:#fff;font-size:14.5px;margin-bottom:11px}
input:focus{outline:none;border-color:#3ecfff}

.auth-screen{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;background:radial-gradient(ellipse at 30% 20%,#12202e 0%,#080b10 70%)}
.auth-box{width:100%;max-width:390px;background:#111820;border:1px solid #1e2a38;border-radius:22px;padding:34px 28px;box-shadow:0 25px 60px rgba(0,0,0,.55)}
.auth-box h1{font-size:27px;margin-bottom:4px;text-align:center;font-weight:800;letter-spacing:-.5px}
.auth-box h1 span{color:#3ecfff}
.auth-box p{text-align:center;color:#7a8b9e;margin-bottom:26px;font-size:14px}
.auth-tabs{display:flex;gap:8px;margin-bottom:18px}
.auth-tabs button{flex:1;background:#1a2430}
.auth-tabs button.active{background:#3ecfff;color:#080b10}
.auth-error,.auth-success{padding:11px 14px;border-radius:10px;margin-bottom:12px;font-size:13px;display:none}
.auth-error{background:#3a1515;color:#ff6b6b}
.auth-success{background:#153a22;color:#4ade80}
.full{width:100%}

.top{padding:12px 14px 9px;background:linear-gradient(180deg,#0f1520,#0a0e14);border-bottom:1px solid #1a2430;position:sticky;top:0;z-index:60}
.logo{font-size:19px;font-weight:800;letter-spacing:-.4px}.logo span{color:#3ecfff}
.user-line{font-size:12.5px;color:#7a8b9e;margin:3px 0 8px}.user-line b{color:#3ecfff}
.stats{display:flex;gap:6px;flex-wrap:wrap;font-size:11.5px;margin-bottom:9px}
.stat{background:#141c28;padding:5px 9px;border-radius:9px;border:1px solid #1e2a38}
.needs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.need{background:#111820;border-radius:9px;padding:6px 8px;font-size:10.5px;border:1px solid #1a2430}
.need-bar{height:4px;background:#1a2430;border-radius:3px;margin-top:3px;overflow:hidden}
.need-fill{height:100%;border-radius:3px;transition:width .3s}

.layout{display:flex;flex-direction:column;gap:11px;padding:11px}
.mapbox{position:relative;width:100%;height:min(56vh,500px);min-height:360px;border-radius:18px;overflow:hidden;border:2px solid #1e3a2c;box-shadow:0 18px 40px rgba(0,0,0,.5)}
.mapbox.day{background:#152820}.mapbox.night{background:#0a1510}
.map{position:absolute;inset:0;background:linear-gradient(155deg,#1a3226,#203c2e 45%,#15281f)}
.road{position:absolute;background:#252c34;z-index:2}.h{height:36px;width:100%}.v{width:36px;height:100%}
.r1{top:22%}.r2{top:48%}.r3{top:72%}.c1{left:16%}.c2{left:45%}.c3{left:71%}
.block{position:absolute;background:linear-gradient(145deg,#2a4234,#34523e);border-radius:2px;z-index:3;box-shadow:0 7px 0 #101a14}
.b1{left:2%;top:4%;width:11%;height:11%}.b2{left:20%;top:3%;width:12%;height:15%}
.b3{left:46%;top:4%;width:11%;height:12%}.b4{left:72%;top:5%;width:13%;height:11%}
.b5{left:2%;top:31%;width:11%;height:10%}.b6{left:20%;top:30%;width:12%;height:13%}
.b7{left:46%;top:32%;width:10%;height:9%}.b8{left:72%;top:31%;width:13%;height:10%}
.b9{left:2%;top:55%;width:11%;height:21%}.b10{left:20%;top:54%;width:12%;height:24%}
.b11{left:46%;top:56%;width:10%;height:19%}.b12{left:72%;top:54%;width:13%;height:21%}

.zone{position:absolute;transform:translate(-50%,-50%);background:rgba(10,14,20,.95);border:1.5px solid #3ecfff;padding:4px 8px;border-radius:10px;font-size:9.5px;z-index:12;cursor:pointer;white-space:nowrap;backdrop-filter:blur(4px)}
.zone:active{transform:translate(-50%,-50%) scale(.96)}
.house{position:absolute;transform:translate(-50%,-50%);width:32px;height:32px;border-radius:50%;background:linear-gradient(145deg,#ffd54f,#e6b422);border:2.5px solid #fff;z-index:18;font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer}
.house.owned{background:linear-gradient(145deg,#4ade80,#22c55e)}
.player{position:absolute;transform:translate(-50%,-50%);z-index:28;width:28px;height:28px;display:flex;align-items:center;justify-content:center}
.person{width:18px;height:18px;border-radius:50%;background:#f0c078;border:2px solid #111;position:relative}
.person:after{content:"";position:absolute;top:14px;left:1px;width:13px;height:11px;background:#4d7cff;border-radius:5px}
.other{position:absolute;transform:translate(-50%,-50%);z-index:22;width:26px;height:26px;border-radius:50%;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;cursor:pointer;transition:transform .12s}
.other:hover,.other:active{transform:translate(-50%,-50%) scale(1.28);z-index:35}
.other.friend{box-shadow:0 0 0 2.5px #3ecfff}

.side{display:flex;flex-direction:column;gap:10px}
.panel{background:linear-gradient(180deg,#111820,#0d131c);border:1px solid #1a2430;border-radius:15px;padding:13px}
.panel h3{margin:0 0 10px;font-size:14px;font-weight:700}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.controls{display:grid;grid-template-columns:repeat(3,42px);gap:5px;justify-content:center;margin-top:10px}
.controls button{height:40px;padding:0;font-size:16px}
.empty{visibility:hidden}
.log{max-height:100px;overflow:auto;font-size:11.5px;line-height:1.45}
.actions{display:flex;flex-direction:column;gap:6px;margin-top:8px}
.action-btn{background:#1a2430;text-align:left;padding:9px 12px;font-size:13px}
.action-btn small{display:block;color:#7a8b9e;font-size:11px;margin-top:2px}
.logout-btn{background:#3a1515;margin-top:7px}

.interior{display:none;position:fixed;inset:0;background:#0c0a08;z-index:90;overflow:hidden}
.interior.show{display:block}
.inhead{height:52px;background:#151c28;padding:11px 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #1e2a38}
.room-tabs{display:flex;gap:5px;padding:9px 11px;background:#111820;border-bottom:1px solid #1a2430;overflow-x:auto}
.room-tabs button{flex-shrink:0;padding:7px 13px;font-size:12.5px;background:#1a2430}
.room-tabs button.active{background:#3ecfff;color:#080b10}
.room-view{position:absolute;top:100px;bottom:90px;left:0;right:0;background:#16110d}
.room-content{position:relative;width:100%;height:100%}
.wall{position:absolute;top:0;left:0;right:0;height:55%;background:linear-gradient(to bottom,#243040,#1a2430)}
.floor{position:absolute;bottom:0;left:0;right:0;height:45%;background:linear-gradient(to bottom,#3a2a1c,#261c12)}
.house-actions{position:absolute;bottom:10px;left:10px;right:10px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;z-index:30}
.house-actions button{background:#1a2430;border:1px solid #2a3545;font-size:12.5px;padding:11px 5px}

/* Friends slide-over */
#friendsPanel{position:fixed;top:0;right:0;width:330px;max-width:100%;height:100%;background:#0c1018;border-left:1px solid #1e2a38;z-index:140;transform:translateX(100%);transition:.28s cubic-bezier(.4,0,.2,1);display:flex;flex-direction:column}
#friendsPanel.open{transform:translateX(0)}
.fp-header{padding:15px;background:#111820;border-bottom:1px solid #1e2a38;display:flex;justify-content:space-between;align-items:center;font-weight:700}
.fp-body{flex:1;overflow-y:auto;padding:12px}
.friend-card{background:#111820;border:1px solid #1a2430;border-radius:12px;padding:11px;margin-bottom:9px;display:flex;justify-content:space-between;align-items:center}
.friend-card .name{font-weight:700;font-size:13.5px}
.friend-card .zone{font-size:11.5px;color:#7a8b9e;margin-top:2px}
.friend-actions{display:flex;gap:5px}
.friend-actions button{padding:7px 11px;font-size:12px}
.online-dot{width:7px;height:7px;background:#22c55e;border-radius:50%;display:inline-block;margin-right:5px}

/* Garage */
#garageModal{position:fixed;inset:0;background:rgba(0,0,0,.72);z-index:150;display:none;align-items:center;justify-content:center;padding:18px}
#garageModal.open{display:flex}
.garage-card{background:#111820;border:1px solid #1e2a38;border-radius:18px;padding:22px;width:100%;max-width:400px;max-height:82vh;overflow-y:auto}
.vehicle-row{display:flex;justify-content:space-between;align-items:center;padding:11px;background:#0c1018;border-radius:11px;margin-bottom:9px;border:1px solid #1a2430}
.vehicle-row.owned{border-color:#22c55e}

/* DM */
#dmPanel{position:fixed;bottom:16px;right:16px;width:310px;max-width:calc(100vw - 32px);height:400px;background:#111820;border:1px solid #1e2a38;border-radius:16px;display:flex;flex-direction:column;z-index:180;box-shadow:0 20px 50px rgba(0,0,0,.55);transform:translateY(110%);opacity:0;transition:all .25s;overflow:hidden}
#dmPanel.open{transform:translateY(0);opacity:1}
.dm-header{display:flex;justify-content:space-between;align-items:center;padding:13px 15px;background:#151c28;border-bottom:1px solid #1e2a38;font-weight:700;font-size:14px}
.dm-header button{background:transparent;color:#7a8b9e;font-size:17px;padding:3px 7px}
.dm-messages{flex:1;overflow-y:auto;padding:13px;display:flex;flex-direction:column;gap:9px}
.dm-msg{max-width:82%;padding:9px 13px;border-radius:14px;font-size:13.5px;line-height:1.35}
.dm-msg.me{align-self:flex-end;background:#3ecfff;color:#080b10;border-bottom-right-radius:3px}
.dm-msg.them{align-self:flex-start;background:#1a2430;border-bottom-left-radius:3px}
.dm-msg small{display:block;font-size:9.5px;opacity:.55;margin-top:3px}
.dm-form{display:flex;gap:7px;padding:11px;border-top:1px solid #1e2a38}
.dm-form input{flex:1;margin:0;padding:11px 13px;border-radius:11px;border:1px solid #2a3545;background:#0c1018;color:#fff;font-size:13.5px}
.dm-form button{background:#3ecfff;color:#080b10;padding:0 16px;border-radius:11px;font-weight:700}
`
document.head.appendChild(style)

// ===================== HELPERS =====================
function $(id){return document.getElementById(id)}
function money(n){return "₦"+Math.floor(n).toLocaleString()}
function log(msg){const el=document.createElement("div");el.textContent=msg;$("log")?.prepend(el)}
function clamp(v){return Math.max(0,Math.min(100,v))}
function needColor(v){if(v>60)return"#22c55e";if(v>30)return"#eab308";return"#ef4444"}
function escapeHtml(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function isFriend(id){return player.friends.some(f=>f.id===id)}

// ===================== SAVE / LOAD =====================
async function loadPlayerData(){
  if(!currentUser)return
  const {data}=await supabase.from("players").select("*").eq("id",currentUser.id).single()
  if(data){
    player.cash=data.cash??1650000
    player.level=data.level??1
    player.reputation=data.reputation??40
    player.fuel=data.fuel??100
    player.hunger=data.hunger??78
    player.energy=data.energy??82
    player.fun=data.fun??55
    player.social=data.social??50
    player.hygiene=data.hygiene??88
    player.bladder=data.bladder??68
    player.username=data.display_name||currentUser.user_metadata?.display_name||"Player"
    player.houseId=data.house_id||null
    player.vehicles=data.vehicles||[]
    player.friends=data.friends||[]
  }else{
    player.username=currentUser.user_metadata?.display_name||"Player"
    await supabase.from("players").insert({
      id:currentUser.id,display_name:player.username,cash:player.cash,level:player.level,
      reputation:player.reputation,fuel:player.fuel,hunger:player.hunger,energy:player.energy,
      fun:player.fun,social:player.social,hygiene:player.hygiene,bladder:player.bladder,
      house_id:null,vehicles:[],friends:[]
    })
  }
}

async function savePlayerData(){
  if(!currentUser)return
  await supabase.from("players").upsert({
    id:currentUser.id,display_name:player.username,cash:player.cash,level:player.level,
    reputation:player.reputation,fuel:player.fuel,hunger:Math.round(player.hunger),
    energy:Math.round(player.energy),fun:Math.round(player.fun),social:Math.round(player.social),
    hygiene:Math.round(player.hygiene),bladder:Math.round(player.bladder),
    house_id:player.houseId,vehicles:player.vehicles,friends:player.friends,
    updated_at:new Date().toISOString()
  })
}

function scheduleSave(){clearTimeout(saveTimeout);saveTimeout=setTimeout(savePlayerData,1400)}

// ===================== AUTH =====================
function showAuthScreen(){
  root.innerHTML=`
  <div class="auth-screen">
    <div class="auth-box">
      <h1>🌆 Owerri <span>Lifestyle</span></h1>
      <p>Live your real life in the Heartland</p>
      <div class="auth-tabs">
        <button id="tabLogin" class="active">Log In</button>
        <button id="tabSignup">Sign Up</button>
      </div>
      <div id="authError" class="auth-error"></div>
      <div id="authSuccess" class="auth-success"></div>
      <div id="loginForm">
        <input type="email" id="loginEmail" placeholder="Email" />
        <input type="password" id="loginPassword" placeholder="Password" />
        <button id="btnLogin" class="full">Enter Owerri</button>
      </div>
      <div id="signupForm" style="display:none">
        <input type="text" id="signupName" placeholder="Username (e.g. Chidi_Boss)" />
        <input type="email" id="signupEmail" placeholder="Email" />
        <input type="password" id="signupPassword" placeholder="Password (min 6)" />
        <button id="btnSignup" class="full">Create Account</button>
      </div>
    </div>
  </div>`
  $("tabLogin").onclick=()=>{$("tabLogin").classList.add("active");$("tabSignup").classList.remove("active");$("loginForm").style.display="block";$("signupForm").style.display="none";hideMsg()}
  $("tabSignup").onclick=()=>{$("tabSignup").classList.add("active");$("tabLogin").classList.remove("active");$("signupForm").style.display="block";$("loginForm").style.display="none";hideMsg()}
  $("btnLogin").onclick=login
  $("btnSignup").onclick=signup
}
function hideMsg(){$("authError").style.display="none";$("authSuccess").style.display="none"}
function showError(m){$("authError").textContent=m;$("authError").style.display="block";$("authSuccess").style.display="none"}
function showSuccess(m){$("authSuccess").textContent=m;$("authSuccess").style.display="block";$("authError").style.display="none"}

async function signup(){
  const name=$("signupName").value.trim().replace(/\s+/g,"_")
  const email=$("signupEmail").value.trim()
  const password=$("signupPassword").value
  if(!name||!email||!password)return showError("Fill all fields")
  if(name.length<3)return showError("Username too short")
  if(password.length<6)return showError("Password min 6 characters")
  const {error}=await supabase.auth.signUp({email,password,options:{data:{display_name:name}}})
  if(error)return showError(error.message)
  showSuccess("Account created. Log in now.")
  $("tabLogin").click()
}
async function login(){
  const email=$("loginEmail").value.trim()
  const password=$("loginPassword").value
  if(!email||!password)return showError("Enter email & password")
  const {data,error}=await supabase.auth.signInWithPassword({email,password})
  if(error)return showError(error.message)
  currentUser=data.user
  await loadPlayerData()
  startGame()
}
async function logout(){
  await savePlayerData();
  if(multiplayerReconnectTimer){clearTimeout(multiplayerReconnectTimer);multiplayerReconnectTimer=null;}
  if(multiplayerSocket){multiplayerSocket.close();multiplayerSocket=null;}
  multiplayerId=null;onlinePlayers=[];
  await supabase.auth.signOut();currentUser=null;showAuthScreen();
}
async function checkSession(){
  const {data:{session}}=await supabase.auth.getSession()
  if(session){currentUser=session.user;await loadPlayerData();startGame()}
  else showAuthScreen()
}
function startGame(){
  renderGame();
  connectMultiplayer();
}

function connectMultiplayer(){
  if(!currentUser || (multiplayerSocket && [WebSocket.OPEN, WebSocket.CONNECTING].includes(multiplayerSocket.readyState))) return;
  if(multiplayerReconnectTimer){clearTimeout(multiplayerReconnectTimer);multiplayerReconnectTimer=null;}
  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  const socket = new WebSocket(protocol + "//" + location.host);
  multiplayerSocket = socket;

  socket.addEventListener("open",()=>{
    if(multiplayerSocket!==socket)return;
    log("🟢 Connected to live Owerri server");
    socket.send(JSON.stringify({type:"name",name:player.username,x:player.x,y:player.y,zone:currentZoneName(),mode:player.mode}));
    sendPresence(true);
  });
  socket.addEventListener("message",(event)=>{
    let message;
    try{message=JSON.parse(event.data)}catch{return}
    if(message.type==="welcome"){
      multiplayerId=message.id||null;
      if(Array.isArray(message.players))setLivePlayers(message.players);
      if(typeof message.online==="number")updateOnlineCount(message.online);
    }
    if(message.type==="players"){
      setLivePlayers(Array.isArray(message.players)?message.players:[]);
      if(typeof message.online==="number")updateOnlineCount(message.online);
    }
    if(message.type==="chat"){
      if(message.fromId===multiplayerId)return;
      log("💬 "+(message.name||"Player")+": "+message.text);
    }
    if(message.type==="dm"){
      const id=message.fromId;
      const target=onlinePlayers.find(p=>p.id===id)||{id,username:message.fromName||"Player"};
      if(!conversations[id])conversations[id]=[];
      const time=new Date(message.at||Date.now()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
      conversations[id].push({from:"them",text:String(message.text||""),time});
      if(activeChat && activeChat.id===id)renderConv(id);
      else log("💬 New message from @"+target.username);
    }
  });
  socket.addEventListener("close",()=>{
    if(multiplayerSocket!==socket)return;
    multiplayerSocket=null;
    if(currentUser){
      log("🟠 Live connection lost; reconnecting…");
      multiplayerReconnectTimer=setTimeout(connectMultiplayer,4000);
    }
  });
  socket.addEventListener("error",()=>{});
}

function currentZoneName(){
  let best=zones[0],distance=Infinity;
  for(const z of zones){
    const d=Math.hypot(player.x-z.x,player.y-z.y);
    if(d<distance){distance=d;best=z;}
  }
  return best?.name||"Owerri";
}
function setLivePlayers(list){
  onlinePlayers=list
    .filter(p=>p && p.id && p.id!==multiplayerId)
    .map(p=>({...p,username:p.username||p.name||"Player",color:p.color||"#3498db"}));
  renderOthers();
  renderFriendsPanelIfOpen();
}
function updateOnlineCount(count){
  const el=$("onlineCount");
  if(el)el.textContent=String(count);
}
function renderFriendsPanelIfOpen(){
  const panel=$("friendsPanel");
  if(panel && panel.classList.contains("open"))renderFriendsPanel();
}
function sendPresence(force=false){
  const socket=multiplayerSocket;
  if(!socket || socket.readyState!==WebSocket.OPEN)return;
  const now=Date.now();
  if(!force && now-lastPresenceSend<90)return;
  lastPresenceSend=now;
  socket.send(JSON.stringify({type:"move",x:player.x,y:player.y,zone:currentZoneName(),mode:player.mode}));
}

// ===================== FRIENDS =====================
function addFriend(target){
  if(isFriend(target.id))return log("Already friends with @"+target.username)
  if(player.friends.length>=25)return log("Friends list full")
  player.friends.push({id:target.id,username:target.username})
  log("✅ Now friends with @"+target.username)
  scheduleSave();renderFriendsPanel();renderOthers()
}
function removeFriend(id){
  player.friends=player.friends.filter(f=>f.id!==id)
  scheduleSave();renderFriendsPanel();renderOthers()
  log("Friend removed")
}
function openFriendsPanel(){
  renderFriendsPanel()
  $("friendsPanel").classList.add("open")
}
function renderFriendsPanel(){
  let panel=$("friendsPanel")
  if(!panel){panel=document.createElement("div");panel.id="friendsPanel";document.body.appendChild(panel)}
  const onlineFriends=onlinePlayers.filter(p=>isFriend(p.id))
  const others=onlinePlayers.filter(p=>!isFriend(p.id))
  panel.innerHTML=`
  <div class="fp-header"><span>👥 People in Owerri</span><button onclick="document.getElementById('friendsPanel').classList.remove('open')">✕</button></div>
  <div class="fp-body">
    <div style="font-size:12px;color:#7a8b9e;margin-bottom:8px">YOUR FRIENDS (${player.friends.length})</div>
    ${player.friends.length===0?'<p style="color:#7a8b9e;font-size:13px;margin-bottom:14px">No friends yet. Add people from the map.</p>':''}
    ${player.friends.map(f=>{
      const on=onlinePlayers.find(p=>p.id===f.id)
      return `<div class="friend-card">
        <div><div class="name">${on?'<span class="online-dot"></span>':''}@${f.username}</div>
        <div class="zone">${on?on.zone:'Offline'}</div></div>
        <div class="friend-actions">
          <button onclick="window._dm('${f.id}')">💬</button>
          <button style="background:#3a1515" onclick="window._rm('${f.id}')">✕</button>
        </div></div>`
    }).join('')}
    <div style="font-size:12px;color:#7a8b9e;margin:16px 0 8px">ONLINE NOW</div>
    ${others.map(p=>`<div class="friend-card">
      <div><div class="name"><span class="online-dot"></span>@${p.username}</div>
      <div class="zone">${p.zone}</div></div>
      <div class="friend-actions"><button onclick="window._add('${p.id}')">+ Add</button></div>
    </div>`).join('')}
  </div>`
}
window._add=id=>{const p=onlinePlayers.find(x=>x.id===id);if(p)addFriend(p)}
window._rm=id=>removeFriend(id)
window._dm=id=>{
  const p=onlinePlayers.find(x=>x.id===id)||player.friends.find(x=>x.id===id)
  if(p)openPrivateChat(p)
}

// ===================== PRIVATE TEXT (FRIENDS ONLY) =====================
function openPrivateChat(target){
  if(!isFriend(target.id)){
    return log("❌ Add @"+target.username+" as friend first before texting")
  }
  activeChat=target
  if(!conversations[target.id])conversations[target.id]=[]
  let panel=$("dmPanel")
  if(!panel){
    panel=document.createElement("div");panel.id="dmPanel"
    panel.innerHTML=`<div class="dm-header"><span id="dmName"></span><button id="dmClose">✕</button></div>
      <div id="dmMessages" class="dm-messages"></div>
      <form id="dmForm" class="dm-form"><input id="dmInput" maxlength="160" placeholder="Message..." autocomplete="off"/><button type="submit">Send</button></form>`
    document.body.appendChild(panel)
    $("dmClose").onclick=()=>{panel.classList.remove("open");activeChat=null}
    $("dmForm").onsubmit=e=>{e.preventDefault();sendDM()}
  }
  $("dmName").textContent="💬 @"+target.username
  renderConv(target.id)
  panel.classList.add("open")
  $("dmInput").focus()
}
function renderConv(id){
  const box=$("dmMessages");if(!box)return
  box.innerHTML=""
  ;(conversations[id]||[]).forEach(m=>{
    const d=document.createElement("div")
    d.className="dm-msg "+(m.from==="me"?"me":"them")
    d.innerHTML=`<span>${escapeHtml(m.text)}</span><small>${m.time}</small>`
    box.appendChild(d)
  })
  box.scrollTop=box.scrollHeight
}
function sendDM(){
  if(!activeChat)return
  const input=$("dmInput")
  const text=input.value.trim()
  if(!text)return
  const time=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})
  conversations[activeChat.id].push({from:"me",text,time})
  renderConv(activeChat.id)
  input.value=""
  if(!multiplayerSocket || multiplayerSocket.readyState!==WebSocket.OPEN){
    log("🟠 Message not sent: live connection is unavailable");
    return;
  }
  multiplayerSocket.send(JSON.stringify({type:"dm",to:activeChat.id,text}))
}

// ===================== HOUSES & GARAGE =====================
function buyHouse(h){
  if(player.houseId)return log("You already own a house")
  if(player.cash<h.price)return log("❌ Not enough money")
  player.cash-=h.price
  player.houseId=h.id
  player.reputation+=18
  log("🎉 Bought "+h.name)
  update();scheduleSave()
}
function enterMyHouse(){
  if(!player.houseId)return log("You don't own a house yet")
  const h=houseList.find(x=>x.id===player.houseId)
  $("houseTitle").textContent="🏠 "+h.name
  currentRoom=h.rooms[0]||"living"
  $("interior").classList.add("show")
  renderRoom()
}
function openGarage(){
  let m=$("garageModal")
  if(!m){m=document.createElement("div");m.id="garageModal";document.body.appendChild(m)}
  m.classList.add("open");renderGarage()
}
function renderGarage(){
  const m=$("garageModal");if(!m)return
  m.innerHTML=`<div class="garage-card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
      <h2 style="font-size:18px">🚗 Garage</h2>
      <button onclick="document.getElementById('garageModal').classList.remove('open')">✕</button>
    </div>
    <p style="color:#7a8b9e;font-size:13px;margin-bottom:14px">Buy vehicles to move faster across Owerri.</p>
    ${vehicleList.map(v=>{
      const owned=player.vehicles.includes(v.id)
      return `<div class="vehicle-row ${owned?'owned':''}">
        <div><b>${v.emoji} ${v.name}</b><br><small style="color:#7a8b9e">${owned?'Owned':money(v.price)} · Speed ${v.speed}</small></div>
        ${owned
          ?`<button onclick="window._drive('${v.id}')">${player.currentVehicle===v.id?'Driving':'Drive'}</button>`
          :`<button onclick="window._buyV('${v.id}')">Buy</button>`}
      </div>`
    }).join('')}
    <button class="full" style="margin-top:10px;background:#3a1515" onclick="window._park()">Park Vehicle</button>
  </div>`
}
window._buyV=id=>{
  const v=vehicleList.find(x=>x.id===id);if(!v||player.vehicles.includes(id))return
  if(player.cash<v.price)return log("❌ Not enough money")
  player.cash-=v.price;player.vehicles.push(id)
  log("🎉 Bought "+v.name);scheduleSave();renderGarage();update()
}
window._drive=id=>{
  player.currentVehicle=id;player.mode="Drive"
  const v=vehicleList.find(x=>x.id===id)
  log("Now driving "+v.emoji+" "+v.name)
  $("garageModal").classList.remove("open");update()
}
window._park=()=>{player.currentVehicle=null;player.mode="Walk";log("Vehicle parked");$("garageModal").classList.remove("open");update()}

// ===================== RENDER =====================
function renderRoom(){
  const view=$("roomView");if(!view)return
  let html=`<div class="room-content ${currentRoom}"><div class="wall"></div><div class="floor"></div>`
  if(currentRoom==="living")html+=`<div style="position:absolute;bottom:20%;left:15%;width:120px;height:50px;background:#5c4d7e;border-radius:10px"></div>`
  if(currentRoom==="bedroom")html+=`<div style="position:absolute;bottom:15%;left:12%;width:150px;height:70px;background:#e8e8f0;border-radius:8px"></div>`
  if(currentRoom==="kitchen")html+=`<div style="position:absolute;bottom:18%;left:8%;right:8%;height:45px;background:#d4d4d4;border-radius:6px"></div>`
  if(currentRoom==="bathroom")html+=`<div style="position:absolute;bottom:15%;left:10%;width:130px;height:60px;background:#e0f0ff;border:3px solid #b0d0e8;border-radius:10px"></div>`
  html+=`</div>`
  view.innerHTML=html
  document.querySelectorAll(".room-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.room===currentRoom))
}
function switchRoom(r){currentRoom=r;renderRoom()}

function renderGame(){
  root.innerHTML=`
  <div class="top">
    <div class="logo">🌆 Owerri <span>Lifestyle</span></div>
    <div class="user-line">Playing as <b>@${player.username}</b> · <span id="onlineCount">1</span> online</div>
    <div class="stats">
      <div class="stat">💰 <b id="cash"></b></div>
      <div class="stat">⭐ <b id="level"></b></div>
      <div class="stat">❤️ <b id="rep"></b></div>
      <div class="stat">⛽ <b id="fuel"></b>%</div>
      <div class="stat">🚶 <b id="mode"></b></div>
      <div class="stat" id="timeLabel">☀️ Day</div>
    </div>
    <div class="needs" id="needs"></div>
  </div>
  <div class="layout">
    <div class="mapbox day" id="mapbox">
      <div class="map">
        <div class="block b1"></div><div class="block b2"></div><div class="block b3"></div><div class="block b4"></div>
        <div class="block b5"></div><div class="block b6"></div><div class="block b7"></div><div class="block b8"></div>
        <div class="block b9"></div><div class="block b10"></div><div class="block b11"></div><div class="block b12"></div>
        <div class="road h r1"></div><div class="road h r2"></div><div class="road h r3"></div>
        <div class="road v c1"></div><div class="road v c2"></div><div class="road v c3"></div>
        <div id="zones"></div><div id="houses"></div><div id="others"></div>
        <div class="player down" id="player"><div class="person"></div></div>
      </div>
    </div>
    <div class="side">
      <div class="panel">
        <h3>Movement</h3>
        <div class="grid2"><button id="walk">🚶 Walk</button><button id="drive">🚗 Drive</button></div>
        <div class="controls">
          <button class="empty"></button><button data-move="up">▲</button><button class="empty"></button>
          <button data-move="left">◀</button><button data-move="down">▼</button><button data-move="right">▶</button>
        </div>
        <button id="btnGarage" class="full" style="margin-top:9px">🚗 Garage</button>
        <button id="btnFriends" class="full" style="margin-top:6px">👥 Friends</button>
        <button id="toggleTime" class="full" style="margin-top:6px">🌙 Night Mode</button>
        <button id="logout" class="full logout-btn">Log Out</button>
      </div>
      <div class="panel">
        <h3>📍 Location</h3>
        <div id="locInfo" style="font-size:13px;color:#7a8b9e">Tap a place on the map</div>
        <div class="actions" id="actions"></div>
      </div>
      <div class="panel">
        <h3>Quick</h3>
        <button id="work" class="full">💼 Work</button>
        <button id="travel" class="full" style="margin-top:6px">🗺️ Random Travel</button>
        <button id="myHouse" class="full" style="margin-top:6px">🏠 My House</button>
      </div>
      <div class="panel">
        <h3>🏠 Houses</h3>
        <div id="houseList"></div>
      </div>
      <div class="panel">
        <h3>Activity</h3>
        <div id="log" class="log"></div>
      </div>
    </div>
  </div>
  <div class="interior" id="interior">
    <div class="inhead"><b id="houseTitle">🏠 My House</b><button id="leave">Leave</button></div>
    <div class="room-tabs" id="roomTabs"></div>
    <div class="room-view" id="roomView"></div>
    <div class="house-actions">
      <button onclick="window._ha('sleep')">😴 Sleep</button>
      <button onclick="window._ha('tv')">📺 TV</button>
      <button onclick="window._ha('sofa')">🛋 Rest</button>
      <button onclick="window._ha('eat')">🍽️ Eat</button>
      <button onclick="window._ha('shower')">🚿 Shower</button>
      <button onclick="window._ha('toilet')">🚽 Toilet</button>
    </div>
  </div>`

  $("walk").onclick=()=>{player.mode="Walk";player.currentVehicle=null;update()}
  $("drive").onclick=()=>{if(player.vehicles.length===0)return log("Buy a vehicle from Garage first");openGarage()}
  $("btnGarage").onclick=openGarage
  $("btnFriends").onclick=openFriendsPanel
  $("toggleTime").onclick=toggleTime
  $("logout").onclick=logout
  $("work").onclick=work
  $("travel").onclick=travel
  $("myHouse").onclick=enterMyHouse
  $("leave").onclick=()=>$("interior").classList.remove("show")
  document.querySelectorAll("[data-move]").forEach(b=>b.onclick=()=>move(b.dataset.move))

  renderZones();renderHouses();renderOthers();renderHouseList();update()
  log("Welcome to Owerri, @"+player.username)
}

function renderNeeds(){
  const ns=[{k:"hunger",l:"Hunger",e:"🍽️"},{k:"energy",l:"Energy",e:"⚡"},{k:"fun",l:"Fun",e:"🎉"},{k:"social",l:"Social",e:"👥"},{k:"hygiene",l:"Hygiene",e:"🚿"},{k:"bladder",l:"Bladder",e:"🚽"}]
  $("needs").innerHTML=ns.map(n=>`<div class="need">${n.e} ${n.l} ${Math.round(player[n.k])}<div class="need-bar"><div class="need-fill" style="width:${player[n.k]}%;background:${needColor(player[n.k])}"></div></div></div>`).join("")
}
function renderZones(){
  const c=$("zones");c.innerHTML=""
  zones.forEach((z,i)=>{
    const el=document.createElement("div");el.className="zone"
    el.style.left=z.x+"%";el.style.top=z.y+"%"
    el.innerHTML=`${z.emoji} <b>${z.name}</b>`
    el.onclick=()=>selectZone(i);c.appendChild(el)
  })
}
function renderHouses(){
  const c=$("houses");if(!c)return;c.innerHTML=""
  houseList.forEach(h=>{
    const owned=player.houseId===h.id
    const el=document.createElement("button");el.type="button"
    el.className=owned?"house owned":"house"
    el.style.left=h.x+"%";el.style.top=h.y+"%"
    el.textContent=owned?"✓":"🏠";el.title=h.name
    el.onclick=()=>{if(owned)enterMyHouse();else buyHouse(h)}
    c.appendChild(el)
  })
}
function renderHouseList(){
  const c=$("houseList");if(!c)return
  c.innerHTML=houseList.map(h=>{
    const owned=player.houseId===h.id
    return `<div style="background:#0c1018;border-radius:10px;padding:9px;margin-bottom:7px;border:1px solid ${owned?'#22c55e':'#1a2430'}">
      <b style="font-size:13px">${h.name}</b><br><small style="color:#7a8b9e">${h.zone} · ${money(h.price)}</small>
      ${owned?`<button class="full" style="margin-top:7px;background:#22c55e;color:#080b10" onclick="window._enterH()">Enter</button>`
            :`<button class="full" style="margin-top:7px" onclick="window._buyH('${h.id}')">Buy</button>`}
    </div>`
  }).join("")
}
window._buyH=id=>{const h=houseList.find(x=>x.id===id);if(h)buyHouse(h)}
window._enterH=()=>enterMyHouse()
window._ha=t=>houseAction(t)

function renderOthers(){
  const c=$("others");if(!c)return;c.innerHTML=""
  onlinePlayers.forEach(o=>{
    const el=document.createElement("div")
    el.className="other"+(isFriend(o.id)?" friend":"")
    el.style.left=o.x+"%";el.style.top=o.y+"%";el.style.background=o.color
    el.textContent=o.username[0].toUpperCase()
    el.title="@"+o.username+(isFriend(o.id)?" (Friend)":"")
    el.onclick=e=>{
      e.stopPropagation()
      if(isFriend(o.id))openPrivateChat(o)
      else if(confirm("Add @"+o.username+" as friend?"))addFriend(o)
    }
    c.appendChild(el)
  })
}

function update(){
  sendPresence();
  $("cash").textContent=money(player.cash)
  $("level").textContent=player.level
  $("rep").textContent=player.reputation
  $("fuel").textContent=Math.round(player.fuel)
  $("mode").textContent=player.mode
  $("player").style.left=player.x+"%";$("player").style.top=player.y+"%"
  $("player").className="player "+player.direction
  $("player").innerHTML=player.mode==="Drive"
    ?`<div style="font-size:20px">${vehicleList.find(v=>v.id===player.currentVehicle)?.emoji||"🚗"}</div>`
    :`<div class="person"></div>`
  renderNeeds();renderHouses();renderOthers();renderHouseList();scheduleSave()
}

function selectZone(i){
  const z=zones[i];player.x=z.x;player.y=z.y
  $("locInfo").innerHTML=`<b>${z.emoji} ${z.name}</b><br><small style="color:#7a8b9e">${z.type}</small>`
  const a=$("actions");a.innerHTML=""
  z.actions.forEach(act=>{
    const btn=document.createElement("button");btn.className="action-btn"
    btn.innerHTML=`${act.label}<small>${act.cost>0?money(act.cost):"Free"}</small>`
    btn.onclick=()=>doAction(act);a.appendChild(btn)
  })
  log("📍 "+z.name);update()
}
function doAction(a){
  if(player.cash<a.cost)return log("❌ Not enough money")
  player.cash-=a.cost
  player.hunger=clamp(player.hunger+a.hunger)
  player.energy=clamp(player.energy+a.energy)
  player.fun=clamp(player.fun+a.fun)
  player.social=clamp(player.social+a.social)
  player.hygiene=clamp(player.hygiene+a.hygiene)
  player.bladder=clamp(player.bladder+a.bladder)
  if(a.cash)player.cash+=a.cash
  player.reputation+=2
  log("✅ "+a.label);update()
}
function houseAction(t){
  if(t==="sleep"){player.energy=clamp(player.energy+48);log("😴 Slept well")}
  if(t==="tv"){player.fun=clamp(player.fun+26);log("📺 Watching TV")}
  if(t==="sofa"){player.fun=clamp(player.fun+14);player.energy=clamp(player.energy+10);log("🛋 Relaxing")}
  if(t==="eat"){player.hunger=clamp(player.hunger+38);log("🍽️ Ate")}
  if(t==="shower"){player.hygiene=100;log("🚿 Showered")}
  if(t==="toilet"){player.bladder=100;log("🚽 Done")}
  update()
}
function move(dir){
  let step=1.55
  if(player.mode==="Drive"&&player.currentVehicle){
    const v=vehicleList.find(x=>x.id===player.currentVehicle)
    step=v?v.speed:3.3
    if(player.fuel<=0)return log("⛽ Out of fuel")
    player.fuel=Math.max(0,player.fuel-0.7)
  }
  player.direction=dir
  if(dir==="up")player.y-=step;if(dir==="down")player.y+=step
  if(dir==="left")player.x-=step;if(dir==="right")player.x+=step
  player.x=Math.max(3,Math.min(97,player.x));player.y=Math.max(5,Math.min(95,player.y))
  update()
}
function work(){
  const pay=player.mode==="Drive"?48000:30000
  player.cash+=pay;player.energy=clamp(player.energy-22);player.hunger=clamp(player.hunger-12)
  player.reputation+=4
  if(player.reputation>=player.level*110){player.level++;log("⭐ Level up!")}
  log("💼 Earned "+money(pay));update()
}
function travel(){const z=zones[Math.floor(Math.random()*zones.length)];selectZone(zones.indexOf(z))}
function toggleTime(){
  isNight=!isNight
  $("mapbox").classList.toggle("day",!isNight);$("mapbox").classList.toggle("night",isNight)
  $("timeLabel").textContent=isNight?"🌙 Night":"☀️ Day"
}

setInterval(()=>{
  // Live player positions are received from the server; no fake movement.
},4800)

setInterval(()=>{
  player.hunger=clamp(player.hunger-1.7)
  player.energy=clamp(player.energy-1.15)
  player.fun=clamp(player.fun-0.95)
  player.social=clamp(player.social-0.75)
  player.hygiene=clamp(player.hygiene-0.65)
  player.bladder=clamp(player.bladder-1.45)
  update()
},11000)

checkSession()
