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
  { name:"Amakohia", x:26, y:26, type:"Residential", emoji:"⌂",
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
  username:"Player", houseId:null, ownedProperties:[], vehicles:[], currentVehicle:null,
  friends:[], fitness:12, job:"Unemployed", checkedIn:false,
  skills:{cooking:0,fitness:0,creativity:0,charisma:0,logic:0,handiness:0},
  groceries:{Rice:2,Beans:1,Eggs:4,Noodles:2,Water:4}, traits:["Friendly"],
  aspiration:"Successful Life", wishes:["Earn ₦50,000","Meet a neighbour","Improve fitness"], moodlets:["New in Owerri"],
  rentDue:0,billsDue:2500,radioStation:"Owerri FM",wanted:0,fines:0,business:null,
  ownedFurniture:["sofa","bed","fridge","stove","shower","toilet","table","tv"],rentedLot:null,governorSupport:0
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
.map{position:absolute;inset:0;background:linear-gradient(155deg,#1a3226,#203c2e 45%,#15281f);overflow:hidden}
#city3d{position:absolute;inset:0;width:100%;height:100%;display:block;z-index:1;pointer-events:none}
.map #zones,.map #houses,.map #others{position:absolute;inset:0;z-index:12;pointer-events:none}
.map #zones>* ,.map #houses>* ,.map #others>*{pointer-events:auto}
.map #houses{z-index:18}.map #others{z-index:22}
.map .player{display:none}
.destinations{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:9px}
.destination-btn{display:flex;align-items:center;gap:7px;text-align:left;background:#0b131b;border:1px solid #263746;padding:8px 7px;font-size:11px;min-height:42px}
.destination-btn .dest-icon{font-size:18px}.destination-btn .dest-copy{min-width:0}.destination-btn b{display:block;white-space:normal;line-height:1.15}.destination-btn small{display:block;color:#77d9b4;font-size:9px;margin-top:3px}
.map #zones{display:none}
.map .zone{width:27px;height:27px;padding:0;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:15px;border:1px solid #fff;background:#12232de8;box-shadow:0 3px 8px #0009;white-space:normal}
.map .zone b{display:none}.map .zone:after{content:"";position:absolute;bottom:-5px;left:10px;width:6px;height:6px;background:inherit;border-right:1px solid #fff;border-bottom:1px solid #fff;transform:rotate(45deg)}
#roomView{background:#12100e;perspective:1000px}
#roomView .room-content{overflow:hidden;background:linear-gradient(180deg,#b9b0a0 0%,#d7c7ae 54%,#6d4b34 54%,#3b281d 100%)}
.room-content::before{content:"";position:absolute;inset:0 0 43%;background:linear-gradient(90deg,rgba(0,0,0,.12),transparent 24%,rgba(255,255,255,.09) 60%,rgba(0,0,0,.12)),repeating-linear-gradient(90deg,transparent 0 22%,rgba(50,39,28,.13) 22.2% 22.6%);border-bottom:8px solid #7d5d42}
.room-content::after{content:"";position:absolute;left:-10%;right:-10%;bottom:-12%;height:57%;background:repeating-linear-gradient(0deg,#5b3c2a 0 2px,#76523a 2px 48px),repeating-linear-gradient(90deg,transparent 0 88px,rgba(20,10,5,.2) 89px 91px);transform:perspective(380px) rotateX(15deg);transform-origin:top;box-shadow:inset 0 10px 22px #25180f}
.room-content .window-frame{position:absolute;z-index:2;left:8%;top:9%;width:28%;height:28%;border:10px solid #eee1c8;background:linear-gradient(180deg,#70b9dd,#d2e8ed 60%,#64935c);box-shadow:0 8px 18px #0005,inset 0 0 0 3px #7b6850}
.room-content .window-frame:before{content:"";position:absolute;left:49%;top:0;bottom:0;width:5px;background:#eee1c8}
.room-content .window-frame:after{content:"";position:absolute;left:0;right:0;top:48%;height:5px;background:#eee1c8}
.room-content .curtain{position:absolute;z-index:3;left:5%;top:7%;width:34%;height:32%;border-left:14px solid #9c3542;border-right:14px solid #9c3542;filter:drop-shadow(0 5px 3px #0004)}
.room-content .sofa3d{position:absolute;z-index:5;left:7%;bottom:19%;width:44%;height:19%;background:linear-gradient(180deg,#71608b,#4b3d61);border-radius:20px 20px 9px 9px;box-shadow:0 15px 13px #0005,inset 0 7px #9b8bb0}
.room-content .sofa3d:before{content:"";position:absolute;left:-7%;right:-7%;bottom:0;height:62%;background:#5a4a75;border-radius:12px;box-shadow:inset 0 -7px #392d4b}
.room-content .sofa3d:after{content:"";position:absolute;left:42%;top:0;bottom:12%;width:3px;background:#3d304e}
.room-content .table3d{position:absolute;z-index:7;right:17%;bottom:15%;width:24%;height:7%;background:#8a5936;border-radius:8px;box-shadow:0 11px 0 #53341f,0 15px 15px #0006}
.room-content .tv3d{position:absolute;z-index:4;right:8%;top:13%;width:28%;height:21%;background:linear-gradient(145deg,#0a1018,#182b37);border:8px solid #282b2c;border-radius:5px;box-shadow:0 8px 15px #0007;color:#5be4ff;display:grid;place-items:center;font-size:10px;letter-spacing:2px}
.room-content .tv-stand{position:absolute;z-index:3;right:8%;top:34%;width:28%;height:5%;background:#70472e;box-shadow:0 8px 0 #442a1d}
.room-content .plant3d{position:absolute;z-index:6;right:5%;bottom:21%;width:30px;height:55px;background:radial-gradient(ellipse at 50% 12%,#3f9a55 0 20%,transparent 22%),radial-gradient(ellipse at 25% 25%,#286d3e 0 22%,transparent 24%),radial-gradient(ellipse at 72% 31%,#4da65b 0 22%,transparent 24%);filter:drop-shadow(0 4px 3px #0004)}
.room-content .plant3d:after{content:"";position:absolute;bottom:-12px;left:5px;width:24px;height:19px;background:linear-gradient(90deg,#9c6542,#d29a62,#8a4d30);clip-path:polygon(10% 0,90% 0,100% 100%,0 100%)}
.room-content .avatar3d{position:absolute;z-index:12;left:57%;bottom:17%;width:48px;height:125px;filter:drop-shadow(7px 9px 4px #0005);animation:avatarIdle 3s ease-in-out infinite}
.room-content .avatar-head{position:absolute;left:15px;top:0;width:22px;height:26px;border-radius:45% 45% 43% 43%;background:linear-gradient(90deg,#8b4d2e,#c88355 45%,#a45f3b);box-shadow:inset -4px 0 #7b422b}
.room-content .avatar-hair{position:absolute;left:14px;top:-4px;width:24px;height:12px;border-radius:60% 60% 25% 25%;background:#211713}
.room-content .avatar-body{position:absolute;left:8px;top:24px;width:35px;height:46px;background:linear-gradient(90deg,#1d4d83,#367dc0 55%,#173c6b);border-radius:11px 11px 6px 6px;clip-path:polygon(20% 0,80% 0,100% 16%,85% 100%,15% 100%,0 16%)}
.room-content .avatar-arm{position:absolute;top:30px;width:10px;height:38px;background:#b9784d;border-radius:7px;transform-origin:top}
.room-content .avatar-arm.left{left:5px;transform:rotate(12deg)}.room-content .avatar-arm.right{right:1px;transform:rotate(-15deg)}
.room-content .avatar-leg{position:absolute;top:66px;width:12px;height:42px;background:#252a35;border-radius:4px}.room-content .avatar-leg.left{left:13px}.room-content .avatar-leg.right{left:27px}
.room-content .avatar-shoe{position:absolute;top:103px;width:17px;height:7px;background:#eee8d9;border-radius:5px}.room-content .avatar-shoe.left{left:7px}.room-content .avatar-shoe.right{left:24px}
@keyframes avatarIdle{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.city-label{position:absolute;left:12px;top:12px;z-index:35;background:rgba(5,12,15,.72);border:1px solid rgba(255,255,255,.18);padding:7px 10px;border-radius:9px;color:#f1f5f9;font-size:10px;letter-spacing:1.2px;font-weight:900;pointer-events:none;backdrop-filter:blur(8px)}
.city-label span{color:#70f0b2}
.map .block,.map .road{display:none}
.room-content .bed-real{position:absolute;z-index:6;left:18%;bottom:11%;width:58%;height:27%;background:linear-gradient(180deg,#f0e8df 0 20%,#d4d8e8 20% 80%,#a7b0c5 80%);border-radius:12px 12px 5px 5px;box-shadow:0 15px 18px #0006}
.room-content .bed-real:before{content:"";position:absolute;left:-3%;right:-3%;bottom:0;height:25%;background:#70452c;border-radius:3px}
.room-content .pillow{position:absolute;top:7%;left:10%;width:28%;height:24%;background:#fff7e9;border-radius:7px;box-shadow:0 3px 5px #0002}
.room-content .duvet{position:absolute;top:30%;left:5%;right:5%;height:50%;background:repeating-linear-gradient(90deg,#9baed0 0 17px,#bac6df 17px 34px);border-radius:6px}
.room-content .wardrobe-real{position:absolute;z-index:5;right:7%;top:12%;width:25%;height:42%;background:linear-gradient(90deg,#633c27,#9a6845 48%,#5d3826);border:5px solid #43291d;box-shadow:0 8px 14px #0005}
.room-content .wardrobe-real:after{content:"";position:absolute;top:0;bottom:0;left:49%;width:3px;background:#452b1e}
.room-content .kitchen-counter{position:absolute;z-index:6;left:6%;right:7%;bottom:21%;height:13%;background:linear-gradient(#d9d8d1 0 24%,#8a8d8b 25% 38%,#b7b6ae 39%);border-radius:5px;box-shadow:0 12px 12px #0005}
.room-content .kitchen-counter:after{content:"";position:absolute;left:10%;right:10%;top:20%;height:8px;background:#3a3d3c;border-radius:5px}
.room-content .fridge-real{position:absolute;z-index:5;right:7%;top:20%;width:20%;height:43%;background:linear-gradient(90deg,#aeb7bb,#f0f1eb 40%,#b2bec1);border:3px solid #8b989c;border-radius:4px;box-shadow:0 7px 12px #0005}
.room-content .fridge-real:after{content:"";position:absolute;top:45%;left:8%;right:8%;height:2px;background:#879397}
.room-content .stove-real{position:absolute;z-index:8;left:19%;bottom:32%;width:25%;height:5%;background:#303337;border:3px solid #aeb2b1;border-radius:4px}
.room-content .stove-real:after{content:"";position:absolute;inset:1px;background:radial-gradient(circle at 20% 50%,#111 0 4px,transparent 5px),radial-gradient(circle at 55% 50%,#111 0 4px,transparent 5px),radial-gradient(circle at 82% 50%,#111 0 4px,transparent 5px)}
.room-content .shower-real{position:absolute;z-index:5;right:12%;top:14%;width:33%;height:48%;border:4px solid #b8c5cb;background:linear-gradient(135deg,#a8d4e4,#d5e9ed);box-shadow:0 8px 12px #0004}
.room-content .shower-real:after{content:"";position:absolute;right:15%;top:10%;width:8px;height:8px;border-radius:50%;background:#737e83;box-shadow:0 18px 0 #737e83,0 36px 0 #737e83}
.room-content .sink-real{position:absolute;z-index:7;left:9%;bottom:23%;width:26%;height:9%;background:linear-gradient(#fff,#b8c6ca);border-radius:50% 50% 8px 8px;box-shadow:0 9px 0 #657277}
.room-content .toilet-real{position:absolute;z-index:7;right:14%;bottom:17%;width:23%;height:18%;background:linear-gradient(90deg,#d4dadd,#fff 55%,#c3cdd1);border-radius:45% 45% 30% 30%;box-shadow:0 9px 10px #0004}
.room-content .toilet-real:before{content:"";position:absolute;left:12%;right:12%;top:-9%;height:40%;background:#e8eeee;border:3px solid #aeb9bc;border-radius:8px}
.room-caption{position:absolute;z-index:20;left:12px;top:12px;background:#111c;color:#fff;border:1px solid #ffffff30;padding:8px 11px;border-radius:10px;font-size:11px;letter-spacing:1px;font-weight:800}
.room-caption span{color:#6fe8b0;font-weight:600;font-size:9px}
.mapbox.night .city-label{background:rgba(4,7,18,.85);border-color:#40516b}
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
.other.npc{border-radius:9px 9px 13px 13px;animation:npcBob 1.8s ease-in-out infinite;box-shadow:0 4px 10px #0008}
.other.npc:nth-child(2n){animation-delay:.35s}.other.npc:nth-child(3n){animation-delay:.7s}
@keyframes npcBob{0%,100%{margin-top:0}50%{margin-top:-5px}}

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
  try{
    const userLocal=currentUser?localStorage.getItem("owerriLifestyleLocal:"+currentUser.id):null;
    const local=JSON.parse(userLocal||localStorage.getItem("owerriLifestyleLocal")||"{}");
    if(local.houseId)player.houseId=local.houseId;
    if(Array.isArray(local.ownedProperties))player.ownedProperties=local.ownedProperties;
    else if(local.houseId)player.ownedProperties=[local.houseId];
    if(Array.isArray(local.vehicles))player.vehicles=local.vehicles;
    if(local.cash!==undefined)player.cash=local.cash;
    if(Number.isFinite(local.x))player.x=local.x;
    if(Number.isFinite(local.y))player.y=local.y;
    if(local.mode==="Walk"||local.mode==="Drive")player.mode=local.mode;
    if(local.currentVehicle)player.currentVehicle=local.currentVehicle;
  }catch{}
  if(!currentUser)return
  const {data}=await supabase.from("players").select("*").eq("id",currentUser.id).single()
  try{const extra=JSON.parse(localStorage.getItem("owerriLifestyleExtra:"+currentUser.id)||"{}");player.fitness=clamp(Number(extra.fitness??12));player.job=String(extra.job||"Unemployed");player.checkedIn=!!extra.checkedIn;for(const k of ["skills","groceries","traits","aspiration","wishes","moodlets","rentDue","billsDue","radioStation","wanted","fines","business","ownedFurniture","rentedLot","governorSupport"])if(extra[k]!==undefined)player[k]=extra[k]}catch{}
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
    player.houseId=data.house_id||player.houseId||null
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
  const snapshot={houseId:player.houseId,ownedProperties:player.ownedProperties||[],vehicles:player.vehicles,cash:player.cash,x:player.x,y:player.y,mode:player.mode,currentVehicle:player.currentVehicle};
  try{
    localStorage.setItem("owerriLifestyleLocal",JSON.stringify(snapshot));
    if(currentUser)localStorage.setItem("owerriLifestyleLocal:"+currentUser.id,JSON.stringify(snapshot));
  }catch{}
  if(!currentUser)return;
  const {error}=await supabase.from("players").upsert({
    id:currentUser.id,display_name:player.username,cash:player.cash,level:player.level,
    reputation:player.reputation,fuel:player.fuel,hunger:Math.round(player.hunger),
    energy:Math.round(player.energy),fun:Math.round(player.fun),social:Math.round(player.social),
    hygiene:Math.round(player.hygiene),bladder:Math.round(player.bladder),
    house_id:player.houseId,vehicles:player.vehicles,friends:player.friends,
    updated_at:new Date().toISOString()
  });
  if(error)console.warn("Cloud save unavailable; local save retained.",error.message);
}

function scheduleSave(){
  clearTimeout(saveTimeout);
  try{if(currentUser)localStorage.setItem("owerriLifestyleExtra:"+currentUser.id,JSON.stringify({fitness:player.fitness,job:player.job,checkedIn:player.checkedIn,skills:player.skills,groceries:player.groceries,traits:player.traits,aspiration:player.aspiration,wishes:player.wishes,moodlets:player.moodlets,rentDue:player.rentDue,billsDue:player.billsDue,radioStation:player.radioStation,wanted:player.wanted,fines:player.fines,business:player.business,ownedFurniture:player.ownedFurniture,rentedLot:player.rentedLot,governorSupport:player.governorSupport}))}catch{}
  saveTimeout=setTimeout(savePlayerData,1400)
}

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
  if(!h)return;
  if(!Array.isArray(player.ownedProperties))player.ownedProperties=player.houseId?[player.houseId]:[];
  if(player.ownedProperties.includes(h.id))return log("🏡 You already own "+h.name+" — use Enter in the property list");
  if(player.cash<h.price)return log("❌ Not enough money");
  player.cash-=h.price;
  player.ownedProperties.push(h.id);
  if(!player.houseId)player.houseId=h.id;
  player.reputation+=18;
  log("🏡 Purchased "+h.name+" — ownership saved");
  update();scheduleSave();savePlayerData();
}
function enterMyHouse(propertyId=player.houseId){
  const owned=Array.isArray(player.ownedProperties)?player.ownedProperties:(player.houseId?[player.houseId]:[]);
  const selectedId=owned.includes(propertyId)?propertyId:player.houseId;
  if(!selectedId)return log("You don't own a house yet");
  const h=houseList.find(x=>x.id===selectedId);if(!h)return log("Could not find that property");
  player.houseId=selectedId;
  $("houseTitle").textContent=h.name
  currentRoom=h.rooms[0]||"living"
  const tabs=$("roomTabs");
  tabs.innerHTML=h.rooms.map(room=>`<button type="button" data-room="${room}">${({living:"🛋 Living Room",bedroom:"🛏 Bedroom",kitchen:"🍳 Kitchen",bathroom:"🚿 Bathroom"})[room]||room}</button>`).join("");
  tabs.querySelectorAll("[data-room]").forEach(button=>button.onclick=()=>switchRoom(button.dataset.room));
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
  const details={
    living:{title:"Living Room",window:true,sofa:true,tv:true,table:true,plant:true},
    bedroom:{title:"Bedroom",window:true,bed:true,wardrobe:true,plant:false},
    kitchen:{title:"Kitchen",window:false,counter:true,fridge:true,stove:true,plant:false},
    bathroom:{title:"Bathroom",window:false,shower:true,sink:true,toilet:true,plant:false},
    hotelLobby:{title:"Hotel Lobby",window:true,sofa:true,table:true,plant:true,tv:true},hotelRoom:{title:"Hotel Guest Room",window:true,bed:true,wardrobe:true,plant:false},
    clubFloor:{title:"Nightclub Dance Floor",window:false,tv:true,table:true,plant:false},restaurant:{title:"Restaurant Dining Room",window:true,table:true,plant:true},
    mallFloor:{title:"Shopping Mall",window:true,table:true,tv:true,plant:true},marketStall:{title:"Market Shops",window:false,table:true,plant:false},
    campusHall:{title:"Campus Hall",window:true,table:true,plant:true},gymFloor:{title:"Fitness Centre",window:true,table:true,plant:false,weights:true,treadmill:true,exerciseBike:true},lockerRoom:{title:"Gym Changing Room",window:false,wardrobe:true,table:true},
    airportTerminal:{title:"Airport Terminal",window:true,table:true,tv:true,plant:false},officeFloor:{title:"Office & Civic Centre",window:true,table:true,plant:true},
    entertainment:{title:"Entertainment Venue",window:false,tv:true,table:true,plant:false},plaza:{title:"Public Plaza",window:true,table:true,plant:true}
  }[currentRoom]||{title:"Room",window:true,sofa:true,tv:true,table:true,plant:true};
  let html=`<div class="room-content ${currentRoom}">
    ${details.window?'<div class="window-frame"></div><div class="curtain"></div>':''}
    ${details.tv?'<div class="tv3d">OWERRI TV</div><div class="tv-stand"></div>':''}
    ${details.sofa?'<div class="sofa3d"></div>':''}
    ${details.table?'<div class="table3d"></div>':''}
    ${details.plant?'<div class="plant3d"></div>':''}
    ${details.bed?'<div class="bed-real"><div class="pillow"></div><div class="duvet"></div></div>':''}
    ${details.wardrobe?'<div class="wardrobe-real"></div>':''}
    ${details.counter?'<div class="kitchen-counter"></div>':''}
    ${details.fridge?'<div class="fridge-real"></div>':''}
    ${details.stove?'<div class="stove-real"></div>':''}
    ${details.shower?'<div class="shower-real"></div>':''}
    ${details.sink?'<div class="sink-real"></div>':''}
    ${details.toilet?'<div class="toilet-real"></div>':''}
    ${details.weights?'<div class="gym-weight-rack" aria-label="Weight rack"><span></span><span></span><span></span></div>':''}
    ${details.treadmill?'<div class="gym-treadmill" aria-label="Treadmill"><i></i><b></b></div>':''}
    ${details.exerciseBike?'<div class="gym-bike" aria-label="Exercise bike"><i></i><b></b></div>':''}
    <div class="avatar3d"><div class="avatar-hair"></div><div class="avatar-head"></div><div class="avatar-body"></div><div class="avatar-arm left"></div><div class="avatar-arm right"></div><div class="avatar-leg left"></div><div class="avatar-leg right"></div><div class="avatar-shoe left"></div><div class="avatar-shoe right"></div></div>
    <div class="room-caption">${details.title} <span>• OWERRI LIFESTYLE</span></div>
     <div style="position:absolute;left:12px;bottom:42px;display:flex;gap:6px;flex-wrap:wrap;max-width:90%">
       ${Object.entries({sofa:"🛋 Sofa",tv:"📺 TV",bed:"🛏 Bed",fridge:"🧊 Fridge",stove:"🍳 Stove",shower:"🚿 Shower",toilet:"🚽 Toilet",wardrobe:"👕 Wardrobe",table:"🪑 Table"}).filter(([key])=>details[key]).map(([key,label])=>`<button type="button" data-furniture="${key}" style="padding:7px 9px;background:#182634;border:1px solid #304458">${label}</button>`).join("")}
     </div>
  </div>`
  if(details.weights)html=html.replace('</div>`','<div class="gym-actions"><button type="button" data-furniture="weights">🏋️ Lift Weights</button><button type="button" data-furniture="treadmill">🏃 Run Treadmill</button><button type="button" data-furniture="exerciseBike">🚴 Exercise Bike</button></div></div>`');
  view.innerHTML=html
  view.querySelectorAll("[data-furniture]").forEach(b=>b.onclick=()=>useFurniture(b.dataset.furniture))
  if(currentRoom==="clubFloor"){
    const club=document.createElement("div");club.className="club-room-actions";
    club.innerHTML='<button type="button" data-club="music">🎶 '+(clubMusicOn?'Pause music':'Play club music')+'</button><button type="button" data-club="dance">💃 Dance & vibe · ₦3,000</button><button type="button" data-club="drink">🥤 Soft drink · ₦1,200</button>';
    view.querySelector(".room-content")?.appendChild(club);
    club.querySelector('[data-club="music"]').onclick=()=>{toggleClubMusic();club.querySelector('[data-club="music"]').textContent=clubMusicOn?'Pause music':'Play club music';log(clubMusicOn?'🎶 Club music is playing':'🔇 Club music paused');};
    club.querySelector('[data-club="dance"]').onclick=()=>{if(player.cash<3000)return log("❌ Dancing costs ₦3,000");player.cash-=3000;player.fun=clamp(player.fun+24);player.social=clamp(player.social+12);player.fitness=clamp(player.fitness+2);player.energy=clamp(player.energy-14);if(!clubMusicOn)toggleClubMusic();view.querySelector(".room-content")?.classList.add("dancing");setTimeout(()=>view.querySelector(".room-content")?.classList.remove("dancing"),2200);log("💃 You danced and vibed on the club floor.");update();scheduleSave();};
    club.querySelector('[data-club="drink"]').onclick=()=>{if(player.cash<1200)return log("❌ A soft drink costs ₦1,200");player.cash-=1200;player.social=clamp(player.social+10);player.fun=clamp(player.fun+5);log("🥤 You enjoyed a soft drink.");update();scheduleSave();};
  }
  if(currentRoom==="hotelRoom"||currentRoom==="hotelLobby"){
    const actions=document.createElement("div");actions.className="hotel-actions";
    actions.innerHTML='<button type="button" data-hotel-action="service">🍽️ Order Room Service · ₦6,500</button><button type="button" data-hotel-action="stay">🛎️ Book Overnight Stay · ₦18,000</button>';
    view.querySelector(".room-content")?.appendChild(actions);
    actions.querySelector('[data-hotel-action="service"]').onclick=()=>{
      if(player.cash<6500)return log("❌ Room service costs ₦6,500");
      player.cash-=6500;player.hunger=clamp(player.hunger+30);player.fun=clamp(player.fun+4);
      log("🍽️ Room service delivered. You feel less hungry.");update();scheduleSave();
    };
    actions.querySelector('[data-hotel-action="stay"]').onclick=()=>{
      if(player.cash<18000)return log("❌ An overnight hotel stay costs ₦18,000");
      player.cash-=18000;player.energy=clamp(player.energy+28);player.hygiene=clamp(player.hygiene+10);
      log("🛎️ You checked in for the night and rested.");update();scheduleSave();
    };
  }
  document.querySelectorAll(".room-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.room===currentRoom))
}
function switchRoom(r){currentRoom=r;renderRoom();log("🚪 Walked into the "+r)}
function enterPlace(zone){
  if(!zone)return;
  const type=String(zone.type||"").toLowerCase(),name=String(zone.name||"").toLowerCase();
  let rooms=["plaza","restaurant"],labels={plaza:"Public Area",restaurant:"Local Café"};
  if(type.includes("hotel")||name.includes("hotel")||name.includes("rock view")||name.includes("concorde")){rooms=["hotelLobby","hotelRoom","restaurant"];labels={hotelLobby:"Lobby",hotelRoom:"Guest Room",restaurant:"Restaurant"};}
  else if(name.includes("club")||name.includes("wetheral")){rooms=["clubFloor","restaurant"];labels={clubFloor:"Dance Floor",restaurant:"Lounge"};}
  else if(type.includes("restaurant")||name.includes("kilimanjaro")){rooms=["restaurant","kitchen"];labels={restaurant:"Dining Room",kitchen:"Kitchen"};}
  else if(type.includes("shopping")||name.includes("mall")||name.includes("market")||name.includes("douglas")){rooms=["mallFloor","marketStall"];labels={mallFloor:"Mall Floor",marketStall:"Shops"};}
  else if(type.includes("campus")||type.includes("university")||name.includes("imsu")||name.includes("futo")){rooms=["campusHall","officeFloor"];labels={campusHall:"Campus Hall",officeFloor:"Study Hall"};}
  else if(type.includes("fitness")||name.includes("gym")){rooms=["gymFloor","lockerRoom"];labels={gymFloor:"Gym Floor",lockerRoom:"Changing Room"};}
  else if(type.includes("travel")||name.includes("airport")){rooms=["airportTerminal","restaurant"];labels={airportTerminal:"Terminal",restaurant:"Café"};}
  else if(type.includes("entertainment")||name.includes("mangrove")){rooms=["entertainment","restaurant"];labels={entertainment:"Games Floor",restaurant:"Snack Bar"};}
  else if(name.includes("bank")||type.includes("office")||name.includes("world bank")){rooms=["officeFloor","lobby"];labels={officeFloor:"Banking Hall",lobby:"Customer Lounge"};}
  else if(type.includes("residential")||name.includes("amakohia")||name.includes("new owerri")){rooms=["plaza","living","bedroom"];labels={plaza:"Neighbourhood",living:"Living Room",bedroom:"Sample Home"};}
  else if(type.includes("junction")||type.includes("hub")||type.includes("area")||name.includes("fire service")||name.includes("control post")){rooms=["officeFloor","plaza"];labels={officeFloor:"Public Office",plaza:"Public Area"};}
  currentRoom=rooms[0];$("houseTitle").textContent=zone.name;
  const tabs=$("roomTabs");tabs.innerHTML=rooms.map(function(r){return '<button type="button" data-room="'+r+'">'+(labels[r]||r)+'</button>'}).join("");
  tabs.querySelectorAll("[data-room]").forEach(function(b){b.onclick=function(){switchRoom(b.dataset.room)}});
  $("interior").classList.add("show");renderRoom();log("Entered "+zone.name);
}
function useFurniture(item){
  const actions={
    sofa:()=>{player.fun=clamp(player.fun+10);player.energy=clamp(player.energy+7);log("🛋 You relaxed on the sofa")},
    tv:()=>{player.fun=clamp(player.fun+16);player.energy=clamp(player.energy-3);log("📺 You watched Owerri TV")},
    bed:()=>{player.energy=clamp(player.energy+22);log("🛏 You rested on the bed")},
    fridge:()=>{if(player.cash<500)return log("❌ You need ₦500 to get a snack");player.cash-=500;player.hunger=clamp(player.hunger+12);log("🧊 You took a snack from the fridge")},
    stove:()=>{if(player.cash<1200)return log("❌ You need ₦1,200 for ingredients");player.cash-=1200;player.hunger=clamp(player.hunger+24);log("🍳 You cooked a meal")},
    shower:()=>{player.hygiene=100;player.energy=clamp(player.energy-4);log("🚿 You took a shower")},
    toilet:()=>{player.bladder=100;log("🚽 You used the bathroom")},
    wardrobe:()=>{player.reputation+=1;log("👕 You changed your outfit")},
    table:()=>{player.social=clamp(player.social+4);log("🪑 You sat at the table")},
    weights:()=>{if(player.energy<8)return log("😴 You need more energy first");if(player.cash<2000)return log("❌ Gym session costs ₦2,000");player.cash-=2000;player.fitness=clamp(player.fitness+12);player.energy=clamp(player.energy-8);player.fun=clamp(player.fun+3);log("🏋️ Workout complete: +12 fitness")},
    treadmill:()=>{if(player.energy<10)return log("😴 You need more energy first");if(player.cash<1500)return log("❌ Treadmill session costs ₦1,500");player.cash-=1500;player.fitness=clamp(player.fitness+9);player.energy=clamp(player.energy-10);player.hunger=clamp(player.hunger-4);log("🏃 Treadmill run complete: +9 fitness")},
    exerciseBike:()=>{if(player.energy<7)return log("😴 You need more energy first");if(player.cash<1200)return log("❌ Exercise bike session costs ₦1,200");player.cash-=1200;player.fitness=clamp(player.fitness+7);player.energy=clamp(player.energy-7);log("🚴 Cycling session complete: +7 fitness")}
  };
  if(actions[item]){actions[item]();update();scheduleSave()}
}
function openFeature(type){
  const modal=$("featureModal"),title=$("featureTitle"),body=$("featureBody");
  if(!modal||!body)return;
  const button=(label,action,sub="")=>`<button type="button" data-feature-action="${action}" style="display:block;width:100%;text-align:left;padding:13px;margin:8px 0;background:#182634;border:1px solid #2a3b4d;border-radius:12px"><b>${label}</b>${sub?`<small style="display:block;color:#91a4b7;margin-top:4px">${sub}</small>`:""}</button>`;
  const panels={
    gym:{title:"💪 Pro Life Gym",intro:`Fitness: <b>${Math.round(player.fitness)}/100</b> · Energy: <b>${Math.round(player.energy)}</b>`,html:button("🏋️ Lift weights","weights","₦2,000 · +12 fitness, uses energy")+button("🏃 Treadmill run","run","₦1,500 · +9 fitness, uses energy")+button("🧘 Stretch & recover","stretch","Free · +3 fitness, small energy recovery")+button("🥤 Protein shake","shake","₦1,800 · restores hunger and energy")},
    club:{title:"🎵 Wetheral Nightclub",intro:"Music is playing. Choose how to spend your night.",html:button("🎶 Toggle club music","clubmusic","Play or pause the original in-game beat")+button("💃 Dance floor","dance","₦3,000 · fun and fitness boost")+button("🥤 Buy a soft drink","drink","₦1,200 · social boost")+button("🗣️ Talk to someone","clubtalk","Free · meet a local NPC")+button("🎧 Request a song","song","₦500 · fun boost")},
    airport:{title:"✈️ Sam Mbakwe Airport",intro:"Check in first, then choose a destination. This is an in-game travel simulation, not a real booking.",html:button("🧳 Check in","checkin","Free · prepare for departure")+button("🏙️ Fly to Lagos","lagos","₦85,000 · simulated trip")+button("🌉 Fly to Port Harcourt","ph","₦42,000 · simulated trip")+button("🏢 Fly to Abuja","abuja","₦68,000 · simulated trip")+button("🌴 Fly to Enugu","enugu","₦25,000 · simulated trip")},
    jobs:{title:"💼 Jobs & Property",intro:`Current job: <b>${escapeHtml(player.job||"Unemployed")}</b><br>Cash: <b>${money(player.cash)}</b><br>Owned home: <b>${player.houseId?escapeHtml(houseList.find(h=>h.id===player.houseId)?.name||"Yes"):"None"}</b>`,html:button("🧑‍💼 Office assistant shift","office","Earn ₦28,000 · costs energy")+button("🍔 Restaurant shift","restaurant","Earn ₦22,000 · costs energy")+button("🛵 Delivery shift","delivery","Earn ₦35,000 · requires no vehicle")+button("📈 Apply for promotion","promotion","Uses reputation and experience")+button("🏠 Browse property","property","View available homes below")},
    people:{title:"🧑 People & Social",intro:"Talk to animated local residents or interact with real players when they are online.",html:button("👋 Greet a resident","greet","Free · improve social need")+button("💬 Have a conversation","conversation","Free · fun and social boost")+button("🤝 Make a friend","friend","Free · build your reputation")+button("👥 Open friends & real players","online","Open the multiplayer friends panel")},
    skills:{title:"📚 Skills, Traits & Aspirations",intro:`Aspiration: ${escapeHtml(player.aspiration)} · Traits: ${player.traits.map(escapeHtml).join(", ")}<br>Cooking ${player.skills.cooking} · Fitness ${player.skills.fitness} · Creativity ${player.skills.creativity} · Charisma ${player.skills.charisma} · Logic ${player.skills.logic} · Handiness ${player.skills.handiness}<br>Wishes: ${player.wishes.map(escapeHtml).join(" · ")}<br>Mood: ${player.moodlets.map(escapeHtml).join(", ")}`,html:button("🍳 Practice cooking","skillcook","Build cooking skill")+button("🧠 Study logic","skilllogic","Build logic skill")+button("🎨 Create art","skillcreative","Build creativity skill")+button("🗣️ Practise charisma","skillcharisma","Build social confidence")+button("🔧 Practise handiness","skillhandy","Build handiness skill")+button("🎯 Wealth aspiration","aspwealth","Choose life goal")+button("🎯 Popularity aspiration","asppopular","Choose life goal")+button("🎯 Fitness aspiration","aspfitness","Choose life goal")+button("🌟 Change trait","trait","Cycle personality traits")+button("✨ Complete a wish","wish","Earn a reward for a wish")},
    home:{title:"🏠 Home, Groceries & Bills",intro:`Groceries: ${Object.entries(player.groceries).map(([k,v])=>`${escapeHtml(k)} ×${v}`).join(", ")}<br>House bills: ${money(player.billsDue)} · Rent due: ${money(player.rentDue)}<br>Furniture owned: ${player.ownedFurniture.map(escapeHtml).join(", ")}`,html:button("🛒 Buy groceries","groceries","₦8,500 · ingredients for meals")+button("🍲 Cook Nigerian meal","cookmeal","Use groceries and restore hunger")+button("💡 Pay electricity/water bills","paybills","Pay ₦2,500 bill")+button("🔑 Rent a room","rent","₦25,000 simulated monthly rent")+button("🪑 Buy furniture","furniture","₦15,000 · add chair to inventory")+button("🏪 Start a small business","business","₦120,000 startup cost")+button("💸 Pay rent due","payrent","Pay recorded rent")},
    city:{title:"🏙️ City Services & Public Life",intro:`Radio: ${escapeHtml(player.radioStation)} · Wanted level ${player.wanted}/5 · Fines ${money(player.fines)}<br>Governor support: ${player.governorSupport} · Public rental: ${escapeHtml(player.rentedLot||"None")}`,html:button("📻 Change radio station","radio","Tune local stations (audio not streamed)")+button("🚦 Obey traffic rules","traffic","Improve reputation and reduce wanted level")+button("🚓 Police station","police","Pay fines or reduce wanted level")+button("🗳️ Support a city policy","policy","Build civic reputation")+button("📢 Rent a billboard","billboard","₦35,000 · local rental record")+button("🌿 Rent a public plot","plot","₦50,000 · local rental record")}
  };
  const p=panels[type]||panels.people;
  title.textContent=p.title;body.innerHTML=`<p style="color:#9aabbd;font-size:13px;line-height:1.5;margin-bottom:12px">${p.intro}</p>${p.html}<div id="featureMessage" style="color:#65d8ff;font-size:13px;min-height:18px;margin-top:10px"></div>`;
  body.querySelectorAll("[data-feature-action]").forEach(b=>b.onclick=()=>runFeatureAction(b.dataset.featureAction,type));
  modal.style.display="flex";
}
function closeFeature(){const modal=$("featureModal");if(modal)modal.style.display="none"}
function toggleClubMusic(){
  if(clubMusicOn){clubMusicOn=false;if(clubMusicTimer)clearInterval(clubMusicTimer);clubMusicTimer=null;try{clubAudioContext?.suspend()}catch{};return}
  const AudioCtx=window.AudioContext||window.webkitAudioContext;
  if(!AudioCtx){featureMessage("Audio playback is not supported in this browser.");return}
  try{if(!clubAudioContext)clubAudioContext=new AudioCtx();clubAudioContext.resume();clubMusicOn=true;clubBeatIndex=0;
    const notes=[110,0,164.81,0,130.81,0,196,0,110,0,146.83,0,174.61,0,130.81,0];
    const playBeat=()=>{if(!clubMusicOn||!clubAudioContext)return;const freq=notes[clubBeatIndex++%notes.length];if(!freq)return;const osc=clubAudioContext.createOscillator(),gain=clubAudioContext.createGain();osc.type="triangle";osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,clubAudioContext.currentTime);gain.gain.exponentialRampToValueAtTime(.045,clubAudioContext.currentTime+.025);gain.gain.exponentialRampToValueAtTime(.0001,clubAudioContext.currentTime+.2);osc.connect(gain);gain.connect(clubAudioContext.destination);osc.start();osc.stop(clubAudioContext.currentTime+.22)};
    playBeat();clubMusicTimer=setInterval(playBeat,230);
  }catch(error){clubMusicOn=false;featureMessage("Could not start the club beat. Tap music again to retry.")}
}
function featureMessage(text){const el=$("featureMessage");if(el)el.textContent=text}
function showFlightJourney(destination){
  if(flightOverlay)flightOverlay.remove();
  flightOverlay=document.createElement("div");flightOverlay.className="flight-overlay";
  flightOverlay.innerHTML=`<div class="flight-window"><div class="flight-sky"><div class="flight-cloud cloud-one"></div><div class="flight-cloud cloud-two"></div><div class="flight-plane">✈</div></div><p class="flight-kicker">SAM MBAKWE INTERNATIONAL</p><h2>Flying to ${escapeHtml(destination)}</h2><p class="flight-status">Boarding complete · In-game flight journey</p><div class="flight-progress"><span></span></div><button type="button" class="flight-arrive">Arrive in ${escapeHtml(destination)}</button></div>`;
  document.body.appendChild(flightOverlay);
  flightOverlay.querySelector(".flight-arrive").onclick=()=>{flightOverlay.remove();flightOverlay=null;featureMessage("Welcome to "+destination+"! Your trip has been recorded in this simulation.");log("✈️ Landed in "+destination+". The playable city map is still Owerri.");update();scheduleSave()};
  const progress=flightOverlay.querySelector(".flight-progress span");requestAnimationFrame(()=>{if(progress)progress.style.width="100%"});
}
function runFeatureAction(action,type){
  const cost={weights:2000,run:1500,shake:1800,dance:3000,drink:1200,song:500,lagos:85000,ph:42000,abuja:68000,enugu:25000,groceries:8500,paybills:2500,rent:25000,furniture:15000,business:120000,billboard:35000,plot:50000}[action]||0;
  if(player.cash<cost){featureMessage("Not enough money for that activity.");return}
  if(action==="online"){closeFeature();openFriendsPanel();return}
  if(action==="property"){closeFeature();$("houseList")?.scrollIntoView({behavior:"smooth",block:"center"});return}
  player.cash-=cost;
  let msg="";
  if(action==="weights"){player.fitness=clamp(player.fitness+12);player.energy=clamp(player.energy-16);player.hunger=clamp(player.hunger-8);player.hygiene=clamp(player.hygiene-12);msg="Workout complete. Fitness +12."}
  else if(action==="run"){player.fitness=clamp(player.fitness+9);player.energy=clamp(player.energy-18);player.hunger=clamp(player.hunger-10);msg="Run complete. Fitness +9."}
  else if(action==="stretch"){player.fitness=clamp(player.fitness+3);player.energy=clamp(player.energy+3);msg="You stretched and recovered. Fitness +3."}
  else if(action==="shake"){player.hunger=clamp(player.hunger+14);player.energy=clamp(player.energy+16);msg="Protein shake enjoyed."}
  else if(action==="clubmusic"){toggleClubMusic();msg=clubMusicOn?"Original club beat is playing.":"Club music paused."}
  else if(action==="dance"){if(type==="club"&&!clubMusicOn)toggleClubMusic();player.fun=clamp(player.fun+24);player.social=clamp(player.social+12);player.fitness=clamp(player.fitness+2);player.energy=clamp(player.energy-14);msg="You danced to the music. Fitness +2."}
  else if(action==="drink"){player.social=clamp(player.social+10);player.fun=clamp(player.fun+5);msg="You enjoyed a soft drink."}
  else if(action==="song"){player.fun=clamp(player.fun+12);msg="The DJ played your request."}
  else if(action==="checkin"){player.checkedIn=true;msg="Check-in complete. You can now choose a flight destination."}
  else if(["lagos","ph","abuja","enugu"].includes(action)){
    if(!player.checkedIn){player.cash+=cost;featureMessage("Please check in before choosing a flight.");return}
    player.checkedIn=false;
    const cities={lagos:"Lagos",ph:"Port Harcourt",abuja:"Abuja",enugu:"Enugu"};
    player.energy=clamp(player.energy-8);player.fun=clamp(player.fun+10);const airport=zones.find(z=>z.name==="Sam Mbakwe Airport");if(airport){player.x=airport.x;player.y=airport.y;}
    showFlightJourney(cities[action]);msg="Flight journey started to "+cities[action]+".";
  }
  else if(action==="office"||action==="restaurant"||action==="delivery"){
    const jobs={office:{name:"Office Assistant",pay:28000,energy:18},restaurant:{name:"Restaurant Worker",pay:22000,energy:14},delivery:{name:"Delivery Rider",pay:35000,energy:22}};
    const j=jobs[action];player.job=j.name;player.cash+=j.pay;player.energy=clamp(player.energy-j.energy);player.hunger=clamp(player.hunger-8);player.reputation+=3;player.level=Math.max(player.level,Math.floor(player.reputation/110)+1);
    msg="Shift complete: earned "+money(j.pay)+". Job set to "+j.name+".";
  }
  else if(action==="promotion"){if(player.reputation<65){featureMessage("Build reputation to at least 65 before applying.");return}player.job=(player.job==="Unemployed"?"Junior Associate":player.job+" II");player.reputation+=5;msg="Promotion approved! Your job title improved."}
  else if(action==="greet"){player.social=clamp(player.social+8);player.fun=clamp(player.fun+3);msg="A nearby resident greeted you back."}
  else if(action==="conversation"||action==="clubtalk"){player.social=clamp(player.social+14);player.fun=clamp(player.fun+10);player.reputation+=1;msg=action==="clubtalk"?"You chatted with someone at the club.":"You had a friendly conversation with a resident."}
  else if(action==="friend"){player.social=clamp(player.social+10);player.reputation+=3;player.skills.charisma++;msg="You made a local acquaintance. NPC friendships are simulated."}
  else if(action==="skillcook"){player.skills.cooking++;player.energy=clamp(player.energy-5);msg="Cooking skill increased."}
  else if(action==="skilllogic"){player.skills.logic++;player.energy=clamp(player.energy-10);msg="Logic skill increased."}
  else if(action==="skillcreative"){player.skills.creativity++;player.fun=clamp(player.fun+8);msg="Creativity skill increased."}
  else if(action==="skillcharisma"){player.skills.charisma++;player.social=clamp(player.social+8);msg="Charisma skill increased."}
  else if(action==="skillhandy"){player.skills.handiness++;msg="Handiness skill increased."}
  else if(action==="aspwealth"){player.aspiration="Successful Life";msg="Aspiration set to Successful Life."}
  else if(action==="asppopular"){player.aspiration="Popular Neighbour";msg="Aspiration set to Popular Neighbour."}
  else if(action==="aspfitness"){player.aspiration="Peak Fitness";msg="Aspiration set to Peak Fitness."}
  else if(action==="trait"){const traits=["Friendly","Ambitious","Creative","Active","Outgoing","Family Focused","Lucky","Hardworking","Romantic","Independent"];player.traits=[traits[(traits.indexOf(player.traits[0])+1)%traits.length]];msg="Personality trait changed to "+player.traits[0]+"."}
  else if(action==="wish"){player.cash+=10000;player.reputation+=3;player.wishes=["Earn ₦50,000","Meet a neighbour","Improve fitness"];player.moodlets=["Wish fulfilled","Accomplished"];msg="Wish completed! Reward: ₦10,000."}
  else if(action==="groceries"){for(const [item,n] of Object.entries({Rice:2,Beans:1,Eggs:4,Noodles:2,Water:4}))player.groceries[item]=(player.groceries[item]||0)+n;msg="Groceries added to your inventory."}
  else if(action==="cookmeal"){if(!player.groceries.Rice||!player.groceries.Water){featureMessage("Buy groceries first.");player.cash+=cost;return}player.groceries.Rice--;player.groceries.Water--;player.hunger=clamp(player.hunger+42);player.fun=clamp(player.fun+5);player.skills.cooking++;player.moodlets=["Well Fed"];msg="Nigerian meal cooked. Hunger restored; cooking skill +1."}
  else if(action==="paybills"){player.billsDue=0;msg="Electricity and water bills paid."}
  else if(action==="rent"){player.rentDue+=25000;msg="A room rental was recorded for the month."}
  else if(action==="furniture"){player.ownedFurniture.push("chair");msg="Chair added to your furniture inventory."}
  else if(action==="business"){if(player.business){featureMessage("You already run a business.");player.cash+=cost;return}player.business="Neighbourhood Shop";msg="Neighbourhood Shop opened. Work shifts now earn extra income."}
  else if(action==="payrent"){if(player.rentDue<=0){msg="No rent is due."}else if(player.cash<player.rentDue){featureMessage("Not enough cash to pay rent.");player.cash+=cost;return}else{player.cash-=player.rentDue;player.rentDue=0;msg="Rent paid in full."}}
  else if(action==="radio"){const stations=["Owerri FM","Hot FM Owerri","Orient FM","Dream FM","Imo Radio"];player.radioStation=stations[(stations.indexOf(player.radioStation)+1)%stations.length];msg="Radio changed to "+player.radioStation+". Live audio is not connected."}
  else if(action==="traffic"){player.reputation+=2;player.wanted=Math.max(0,player.wanted-1);msg="You obeyed traffic rules. Reputation improved."}
  else if(action==="police"){if(player.fines>0&&player.cash>=player.fines){player.cash-=player.fines;player.fines=0;player.wanted=0;msg="Fines paid; wanted level cleared."}else if(player.wanted>0){player.wanted--;msg="Police warning; wanted level reduced."}else msg="No fines are due."}
  else if(action==="policy"){player.governorSupport++;player.reputation++;msg="City policy support recorded."}
  else if(action==="billboard"){player.rentedLot="Douglas Road billboard";msg="Billboard rental recorded locally; shared-world advertising is not connected."}
  else if(action==="plot"){player.rentedLot="Owerri public plot";msg="Public plot rental recorded locally; shared-world ownership is not connected."}
  featureMessage(msg);log("✨ "+msg);update();
}

function renderGame(){
  root.innerHTML=`
  <div class="top">
    <div class="logo">🌆 Owerri <span>Lifestyle</span></div>
    <div class="user-line">Playing as <b>@${player.username}</b> · <span id="onlineCount">1</span> online</div>
    <div class="stats">
      <div class="stat">💰 <b id="cash"></b></div>
      <div class="stat">⭐ <b id="level"></b></div>
      <div class="stat">❤️ <b id="rep"></b></div>
      <div class="stat">💪 <b id="fitnessStat">12</b>% Fitness</div>
      <div class="stat">⛽ <b id="fuel"></b>%</div>
      <div class="stat">🚶 <b id="mode"></b></div>
      <div class="stat" id="timeLabel">☀️ Day</div>
    </div>
    <div class="needs" id="needs"></div>
  </div>
  <div class="layout">
    <div class="mapbox day" id="mapbox">
      <div class="map" id="cityMap">
        <canvas id="city3d" aria-label="3D view of Owerri city"></canvas>
        <div id="zones"></div><div id="houses"></div><div id="others"></div>
        <div class="player down" id="player"><div class="person"></div></div>
        <div class="city-label">OWERRI CITY <span>• LIVE WORLD</span></div>
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
        <h3 style="margin-top:14px">🧭 Places to visit</h3>
        <div id="destinations" class="destinations"></div>
      </div>
      <div class="panel">
        <h3>Quick</h3>
        <button id="work" class="full">💼 Work</button>
        <button id="travel" class="full" style="margin-top:6px">🗺️ Random Travel</button>
        <button id="myHouse" class="full" style="margin-top:6px">🏠 My House</button>
     <button id="gymBtn" class="full" style="margin-top:6px">💪 Pro Life Gym</button>
     <button id="clubBtn" class="full" style="margin-top:6px">🎵 Nightclub</button>
     <button id="airportBtn" class="full" style="margin-top:6px">✈️ Airport & Travel</button>
     <button id="jobsBtn" class="full" style="margin-top:6px">💼 Jobs & Property</button>
     <button id="peopleBtn" class="full" style="margin-top:6px">🧑 People & Social</button>
      <button id="skillsBtn" class="full" style="margin-top:6px">📚 Skills & Aspirations</button>
      <button id="homeBtn" class="full" style="margin-top:6px">🛒 Groceries, Home & Bills</button>
      <button id="cityBtn" class="full" style="margin-top:6px">📻 City Services</button>
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
  <div id="featureModal" style="display:none;position:fixed;inset:0;z-index:200;background:rgba(0,0,0,.78);padding:18px;align-items:center;justify-content:center">
    <div style="width:100%;max-width:520px;max-height:88vh;overflow:auto;background:#101923;border:1px solid #2a3b4d;border-radius:20px;padding:18px;box-shadow:0 20px 60px #000">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px"><h2 id="featureTitle" style="font-size:20px">Activity</h2><button id="featureClose" type="button">✕</button></div>
      <div id="featureBody"></div>
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
  $("gymBtn").onclick=()=>openFeature("gym")
  $("clubBtn").onclick=()=>openFeature("club")
  $("airportBtn").onclick=()=>openFeature("airport")
  $("jobsBtn").onclick=()=>openFeature("jobs")
  $("peopleBtn").onclick=()=>openFeature("people")
  $("skillsBtn").onclick=()=>openFeature("skills")
  $("homeBtn").onclick=()=>openFeature("home")
  $("cityBtn").onclick=()=>openFeature("city")
  $("featureClose").onclick=closeFeature
  $("featureModal").addEventListener("click",e=>{if(e.target.id==="featureModal")closeFeature()})
  $("leave").onclick=()=>$("interior").classList.remove("show")
  document.querySelectorAll("[data-move]").forEach(b=>{
    const dir=b.dataset.move;
    b.onclick=e=>{if(e.detail===0)move(dir)};
    b.addEventListener("pointerdown",e=>{e.preventDefault();startHeldMove(dir)});
    ["pointerup","pointerleave","pointercancel"].forEach(type=>b.addEventListener(type,stopHeldMove));
  })
  document.addEventListener("keydown",onMovementKey);
  document.addEventListener("keyup",onMovementKeyUp);
  window.addEventListener("blur",stopHeldMove);

  renderZones();renderHouses();renderOthers();renderHouseList();update()
  createCity3D();
  log("Welcome to Owerri, @"+player.username)
}


// ===================== 3D OWERRI CITY =====================
let city3dState = null;
async function createCity3D(){
  const canvas=$("city3d");
  const host=$("cityMap");
  if(!canvas||!host)return;
  try{
    const THREE=await import("https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js");
    if(!$("city3d"))return;
    if(city3dState?.renderer){city3dState.renderer.dispose();}
    const scene=new THREE.Scene();
    scene.background=new THREE.Color(isNight?0x08111d:0x9bc8d5);
    scene.fog=new THREE.Fog(isNight?0x08111d:0x9bc8d5,65,155);
    const camera=new THREE.PerspectiveCamera(43,1,0.1,250);
    camera.position.set(0,28,38);
    camera.lookAt(0,0,0);
    const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:"low-power"});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));
    renderer.shadowMap.enabled=true;
    renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=1.15;
    scene.add(new THREE.HemisphereLight(isNight?0x8096c8:0xe3f5ff,isNight?0x11182b:0x53684d,isNight?1.15:1.8));
    const sun=new THREE.DirectionalLight(isNight?0x9ab6ff:0xffe4b2,isNight?1.25:2.5);
    sun.position.set(-28,55,20);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);
    sun.shadow.camera.left=-65;sun.shadow.camera.right=65;sun.shadow.camera.top=65;sun.shadow.camera.bottom=-65;scene.add(sun);
    const mat=(color,roughness=.88)=>new THREE.MeshStandardMaterial({color,roughness});
    const grass=mat(isNight?0x182b27:0x567a4d),asphalt=mat(isNight?0x252a34:0x454b51),sidewalk=mat(isNight?0x5b6268:0xc7c4b7),lane=mat(0xf5d77b),white=mat(0xe7e8df);
    const ground=new THREE.Mesh(new THREE.PlaneGeometry(150,150),grass);ground.rotation.x=-Math.PI/2;ground.position.y=-.15;ground.receiveShadow=true;scene.add(ground);
    function box(w,h,d,material,x,y,z,cast=true){
      const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y+h/2,z);mesh.castShadow=cast;mesh.receiveShadow=true;scene.add(mesh);return mesh;
    }
    // A connected street grid with sidewalks and painted road markings.
    for(let p=-48;p<=48;p+=24){
      box(10,.12,112,asphalt,p,.01,0,false);box(1.25,.16,112,sidewalk,p-5.65,.02,0,false);box(1.25,.16,112,sidewalk,p+5.65,.02,0,false);
      box(.13,.025,108,lane,p,.14,0,false);
      for(let z=-49;z<50;z+=5)box(.12,.025,1.7,white,p,.15,z,false);
      box(112,.12,10,asphalt,0,.01,p,false);box(112,.16,1.25,sidewalk,0,.02,p-5.65,false);box(112,.16,1.25,sidewalk,0,.02,p+5.65,false);
      box(108,.025,.13,lane,0,.15,p,false);
      for(let x=-49;x<50;x+=5)box(1.7,.025,.12,white,x,.15,p,false);
    }
    const buildingColors=[0xd8d0c2,0xe4c6a1,0x9db9c4,0xd6d8d2,0xb6c2ad,0xe2b6a8,0xb9b2d1,0xd9d1b6];
    const windowMats=[mat(0x8dc5d5,.35),mat(0x344b60,.4),mat(isNight?0xffd58a:0x8cb6c1,.45)];
    // Building clusters sit inside the city blocks, leaving roads open.
    let seed=17;const rand=()=>{seed=(seed*9301+49297)%233280;return seed/233280};
    for(let gx=-2;gx<=2;gx++)for(let gz=-2;gz<=2;gz++){
      const bx=gx*24,bz=gz*24;
      if(Math.abs(gx)===2&&Math.abs(gz)===2)continue;
      const count=2+Math.floor(rand()*3);
      for(let j=0;j<count;j++){
        const w=4+rand()*5,d=4+rand()*5,h=3.5+rand()*(rand()>.72?14:7);
        const x=bx+(rand()-.5)*10,z=bz+(rand()-.5)*10;
        const base=mat(buildingColors[Math.floor(rand()*buildingColors.length)]);
        box(w,.45,d,mat(0x8c918b),x,.12,z,false);
        box(w,h,d,base,x,.55,z,true);
        // Flat roof, parapet, facade windows and shopfronts.
        box(w+.18,.28,d+.18,mat(0x858b8a),x,.55+h,z,true);
        const floors=Math.max(1,Math.floor(h/2.4));
        for(let fl=0;fl<floors;fl++){
          const yy=.95+fl*2.25;
          for(let col=0;col<Math.max(1,Math.floor(w/1.55));col++){
            const xx=x-w/2+.8+col*1.5;
            const front=new THREE.Mesh(new THREE.BoxGeometry(.66,.82,.055),windowMats[Math.floor(rand()*windowMats.length)]);
            front.position.set(xx,yy,z+d/2+.035);scene.add(front);
            const side=new THREE.Mesh(new THREE.BoxGeometry(.055,.82,.66),windowMats[Math.floor(rand()*windowMats.length)]);
            side.position.set(x+w/2+.035,yy,z-d/2+.8+col*1.35);scene.add(side);
          }
        }
        if(h<8){
          box(w*.72,1.1,.08,mat(0x31414b),x,.65,z+d/2+.08,false);
          box(w*.8,.18,.45,mat([0x1c8d7a,0xc18b43,0x3c72b4][Math.floor(rand()*3)]),x,2.1,z+d/2+.1,false);
        }
      }
    }
    // Tropical roadside trees: trunk, canopy and a little variety in height.
    const trunk=mat(0x725039),leafMats=[mat(0x276749),mat(0x347d4f),mat(0x4b8a52)];
    for(let i=0;i<44;i++){
      const x=(rand()-.5)*100,z=(rand()-.5)*100;
      if(Math.abs(x%24)<7||Math.abs(z%24)<7)continue;
      box(.34,2.1,.34,trunk,x,0,z,false);
      const crown=new THREE.Mesh(new THREE.SphereGeometry(1.15+rand()*.45,7,6),leafMats[i%leafMats.length]);
      crown.position.set(x,2.8+rand()*.5,z);crown.castShadow=true;scene.add(crown);
    }
    // Parked cars along curbs.
    const carColors=[0xd8343e,0xf0f0e8,0x202a38,0x2d78c7,0xcaa33a,0x21856e];
    for(let i=0;i<16;i++){
      const vertical=i%2===0;const pos=-42+rand()*84;
      const x=vertical?(i%4<2?-7.1:7.1):pos;
      const z=vertical?pos:(i%4<2?-7.1:7.1);
      const color=mat(carColors[i%carColors.length],.38);
      box(1.8,.65,3.5,color,x,.18,z,true);
      box(1.35,.55,1.65,mat(0x8db9c9,.28),x,.82,z-.05,true);
      for(const dx of [-.95,.95])for(const dz of [-1.05,1.05]){
        const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.24,.24,.16,8),mat(0x17191c));
        wheel.rotation.z=Math.PI/2;wheel.position.set(x+dx,.38,z+dz);scene.add(wheel);
      }
    }
    // Streetlights with glowing heads, brighter at night.
    const poleMat=mat(0x555d64),bulbMat=new THREE.MeshStandardMaterial({color:isNight?0xffdf9c:0xf9f2d8,emissive:isNight?0xffb74d:0x000000,emissiveIntensity:isNight?2.5:0});
    for(let i=-2;i<=2;i++){
      for(const side of [-1,1]){
        const x=i*24+side*7.4,z= i*18;
        box(.12,4,.12,poleMat,x,0,z,false);
        box(.8,.12,.3,bulbMat,x+.25,3.9,z,false);
        if(isNight){const light=new THREE.PointLight(0xffcf85,1.8,13);light.position.set(x,3.6,z);scene.add(light);}
      }
    }
    // Recognisable destination buildings are placed at the same coordinates as the map destinations.
    // Their names are painted onto physical signboards attached to each facade.
    function makeSign(text,x,y,z,width=7){
      const signCanvas=document.createElement("canvas");signCanvas.width=512;signCanvas.height=128;
      const ctx=signCanvas.getContext("2d");ctx.fillStyle="#14252b";ctx.fillRect(0,0,512,128);
      ctx.fillStyle="#eaf6f1";ctx.font="bold 32px system-ui, sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";
      const label=text.toUpperCase();let shown=label;
      while(ctx.measureText(shown).width>470&&shown.length>5)shown=shown.slice(0,-1);
      ctx.fillText(shown,256,64);
      ctx.strokeStyle="#f4ca65";ctx.lineWidth=8;ctx.strokeRect(4,4,504,120);
      const texture=new THREE.CanvasTexture(signCanvas);texture.colorSpace=THREE.SRGBColorSpace;
      const mesh=new THREE.Mesh(new THREE.PlaneGeometry(width,1.8),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}));
      mesh.position.set(x,y,z);scene.add(mesh);return mesh;
    }
    const landmarks=[
      {name:"PRO LIFE GYM",x:42,y:20,w:8,d:6,h:5,color:0xc8d2d5,kind:"gym"},
      {name:"WETHERAL CLUB",x:70,y:26,w:9,d:7,h:7,color:0x29283d,kind:"club"},
      {name:"SAM MBAKWE AIRPORT",x:88,y:12,w:13,d:9,h:5,color:0xd4d6cf,kind:"airport"},
      {name:"CONCORDE HOTEL",x:82,y:36,w:10,d:8,h:13,color:0xd8c5a4,kind:"hotel"},
      {name:"HOTEL PRESIDENTIAL",x:72,y:46,w:9,d:7,h:10,color:0xd7c8b0,kind:"hotel"},
      {name:"OWERRI MALL",x:58,y:56,w:11,d:8,h:7,color:0xd2d8d5,kind:"mall"},
      {name:"IMSU",x:48,y:16,w:11,d:8,h:8,color:0xd9d2bf,kind:"campus"},
      {name:"DOUGLAS MARKET",x:55,y:40,w:9,d:7,h:5,color:0xcaa67c,kind:"market"}
    ];
    landmarks.forEach(l=>{
      const x=l.x-50,z=l.y-50;
      const facade=mat(l.color),roof=mat(0x555c61);
      box(l.w,.5,l.d,mat(0x8b918f),x,.12,z,false);
      box(l.w,l.h,l.d,facade,x,.62,z,true);
      box(l.w+.3,.35,l.d+.3,roof,x,.62+l.h,z,true);
      const windowMat=mat(l.kind==="club"?0x8d58c6:l.kind==="airport"?0x8ac5d8:0x82b9cb,.35);
      const floors=Math.max(1,Math.floor(l.h/2.5));
      for(let fl=0;fl<floors;fl++)for(let col=0;col<Math.max(2,Math.floor(l.w/2));col++){
        const wx=x-l.w/2+1+col*2.1,wy=.95+fl*2.3;
        const win=new THREE.Mesh(new THREE.BoxGeometry(1,.85,.07),windowMat);
        win.position.set(wx,wy,z+l.d/2+.05);scene.add(win);
      }
      if(l.kind==="airport"){
        box(l.w*.75,.3,l.d*.65,mat(0xe9ece9),x,.8+l.h,z,false);
        box(1,.22,l.d*1.8,mat(0x414b52),x,.2,z+l.d*1.5,false);
      }
      if(l.kind==="gym"){
        box(l.w*.75,.35,.5,mat(0x2ca47a),x,2.2,z+l.d/2+.25,false);
      }
      if(l.kind==="club"){
        for(let k=0;k<3;k++)box(.4,.25,.4,mat([0x9c55ff,0x27d6f5,0xff4e9b][k]),x-1+k,z+l.h*.2,z+l.d/2+.3,false);
      }
      makeSign(l.name,x,.62+l.h*.65,z+l.d/2+.12,Math.min(11,l.w+1));
    });
    // A central civic plaza makes the world feel like a destination, not a blank grid.
    box(11,.22,9,mat(0xb3b8ae),12,.08,12,false);
    const fountain=new THREE.Mesh(new THREE.CylinderGeometry(1.45,1.65,.55,20),mat(0x9ba8ad));fountain.position.set(12,.48,12);scene.add(fountain);
    const water=new THREE.Mesh(new THREE.CylinderGeometry(1.12,1.12,.12,20),mat(0x3a9fc2,.25));water.position.set(12,.79,12);scene.add(water);
    // Detailed low-poly human avatar: layered clothing, neck, ears, hands, shoes and face.
    const skin=mat(0x8f5638,.72),skinLight=mat(0xb97850,.72),shirt=mat(0x246bb0,.78),shirtTrim=mat(0xe6c56a,.7),trousers=mat(0x202936,.86),shoes=mat(0xe8e7dc,.65),hair=mat(0x1b1512,.95),eyes=mat(0x17120f,.5),sole=mat(0x34343a,.9);
    const avatar=new THREE.Group();
    function part(geometry,material,x,y,z){const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;avatar.add(mesh);return mesh;}
    part(new THREE.CapsuleGeometry(.105,.48,4,8),trousers,-.14,.53,0);
    part(new THREE.CapsuleGeometry(.105,.48,4,8),trousers,.14,.53,0);
    part(new THREE.BoxGeometry(.23,.11,.39),shoes,-.14,.13,.09);
    part(new THREE.BoxGeometry(.23,.045,.39),sole,-.14,.075,.09);
    part(new THREE.BoxGeometry(.23,.11,.39),shoes,.14,.13,.09);
    part(new THREE.BoxGeometry(.23,.045,.39),sole,.14,.075,.09);
    part(new THREE.CapsuleGeometry(.29,.48,5,10),shirt,0,1.35,0);
    part(new THREE.TorusGeometry(.14,.035,6,12),shirtTrim,0,1.65,.015).rotation.x=Math.PI/2;
    part(new THREE.CylinderGeometry(.25,.25,.07,12),trousers,0,1.02,0);
    part(new THREE.CylinderGeometry(.09,.1,.16,10),skin,0,1.75,0);
    part(new THREE.SphereGeometry(.235,20,16),skin,0,2.02,.015);
    part(new THREE.SphereGeometry(.246,20,12,0,Math.PI*2,0,Math.PI*.57),hair,0,2.13,-.025);
    part(new THREE.SphereGeometry(.07,10,8),hair,-.18,2.12,.025);
    part(new THREE.SphereGeometry(.07,10,8),hair,.18,2.12,.025);
    part(new THREE.SphereGeometry(.045,10,8),skinLight,-.235,2.015,0);
    part(new THREE.SphereGeometry(.045,10,8),skinLight,.235,2.015,0);
    part(new THREE.SphereGeometry(.027,10,8),eyes,-.082,2.04,.225);
    part(new THREE.SphereGeometry(.027,10,8),eyes,.082,2.04,.225);
    part(new THREE.ConeGeometry(.045,.09,8),skinLight,0,1.99,.25);
    part(new THREE.CylinderGeometry(.105,.12,.29,10),shirt,-.34,1.48,0).rotation.z=-.18;
    part(new THREE.CylinderGeometry(.105,.12,.29,10),shirt,.34,1.48,0).rotation.z=.18;
    part(new THREE.CapsuleGeometry(.065,.32,4,8),skin,-.39,1.19,.015).rotation.z=-.1;
    part(new THREE.CapsuleGeometry(.065,.32,4,8),skin,.39,1.19,.015).rotation.z=.1;
    part(new THREE.SphereGeometry(.075,10,8),skinLight,-.405,.98,.025);
    part(new THREE.SphereGeometry(.075,10,8),skinLight,.405,.98,.025);
    avatar.position.set(player.x-50,0,player.y-50);
    scene.add(avatar);
    const resize=()=>{
      if(!host.isConnected)return;
      const w=Math.max(1,host.clientWidth),h=Math.max(1,host.clientHeight);
      renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
    };
    resize();
    const observer=new ResizeObserver(resize);observer.observe(host);
    let frame=0;
    const draw=()=>{if(!canvas.isConnected){observer.disconnect();renderer.dispose();return;}frame=requestAnimationFrame(draw);
      if(city3dState?.playerGroup){
        const p=city3dState.playerGroup.position;
        const dir=player.direction||"down";
        const offset=dir==="up"?{x:0,z:9}:dir==="left"?{x:9,z:0}:dir==="right"?{x:-9,z:0}:{x:0,z:-9};
        const desiredX=p.x+offset.x,desiredZ=p.z+offset.z;
        camera.position.x+=(desiredX-camera.position.x)*.11;
        camera.position.z+=(desiredZ-camera.position.z)*.11;
        camera.position.y+=(8.5-camera.position.y)*.08;
        const walking=!!heldDirection||routeTarget!==null;
        avatar.position.y=walking?Math.abs(Math.sin(performance.now()*.014))*.09:0;
        camera.lookAt(p.x,1.15,p.z);
      }
      renderer.render(scene,camera);
    };
    city3dState={renderer,scene,camera,observer,frame,playerGroup:avatar};
    syncCityAvatar();
    draw();
  }catch(error){
    console.error("3D city failed to load",error);
    const label=$("cityMap")?.querySelector(".city-label");
    if(label)label.innerHTML="OWERRI CITY <span>• 3D VIEW UNAVAILABLE — RELOAD TO RETRY</span>";
  }
}

function syncCityAvatar(){
  const avatar=city3dState?.playerGroup;
  if(!avatar)return;
  avatar.position.x=player.x-50;
  avatar.position.z=player.y-50;
  avatar.rotation.y=player.direction==="left"?-Math.PI/2:player.direction==="right"?Math.PI/2:player.direction==="up"?Math.PI:0;
}
function renderNeeds(){
  const ns=[{k:"hunger",l:"Hunger",e:"🍽️"},{k:"energy",l:"Energy",e:"⚡"},{k:"fun",l:"Fun",e:"🎉"},{k:"social",l:"Social",e:"👥"},{k:"hygiene",l:"Hygiene",e:"🚿"},{k:"bladder",l:"Bladder",e:"🚽"}]
  $("needs").innerHTML=ns.map(n=>`<div class="need">${n.e} ${n.l} ${Math.round(player[n.k])}<div class="need-bar"><div class="need-fill" style="width:${player[n.k]}%;background:${needColor(player[n.k])}"></div></div></div>`).join("")
}
function renderZones(){
  // Keep the city map clean: navigation happens through the destination list,
  // not floating emoji pins layered over the streets.
  const c=$("zones");if(c)c.replaceChildren();
  const list=$("destinations");
  if(list)list.innerHTML=zones.map((z,i)=>`<button class="destination-btn" type="button" data-destination="${i}"><span class="dest-icon">${z.emoji}</span><span class="dest-copy"><b>${z.name}</b><small>${z.type}</small></span></button>`).join("");
  list?.querySelectorAll("[data-destination]").forEach(button=>button.onclick=()=>startRoute(Number(button.dataset.destination)));
}
function renderHouses(){
  // House buying and entering stay available in the property list.
  // Do not render floating house icons or check-mark pins on the city map.
  const c=$("houses");if(c)c.replaceChildren();
}
function renderHouseList(){
  const c=$("houseList");if(!c)return;
  const ownedIds=Array.isArray(player.ownedProperties)?player.ownedProperties:(player.houseId?[player.houseId]:[]);
  c.innerHTML=houseList.map(h=>{
    const owned=ownedIds.includes(h.id);
    return `<div style="background:#0c1018;border-radius:10px;padding:9px;margin-bottom:7px;border:1px solid ${owned?'#22c55e':'#1a2430'}">
      <b style="font-size:13px">${h.name}</b><br><small style="color:#7a8b9e">${h.zone} · ${money(h.price)}</small>
      ${owned?`<button class="full" style="margin-top:7px;background:#22c55e;color:#080b10" onclick="window._enterH('${h.id}')">Enter owned property</button>`
            :`<button class="full" style="margin-top:7px" onclick="window._buyH('${h.id}')">Buy property</button>`}
    </div>`
  }).join("")
}
window._buyH=id=>{const h=houseList.find(x=>x.id===id);if(h)buyHouse(h)}
window._enterH=id=>enterMyHouse(id||player.houseId)
window._ha=t=>houseAction(t)

function renderOthers(){
  const c=$("others");if(!c)return;c.innerHTML=""
  const locals=[{id:"npc-ada",name:"Ada",x:45,y:42,color:"#e879f9"},{id:"npc-chidi",name:"Chidi",x:62,y:34,color:"#f59e0b"},{id:"npc-amaka",name:"Amaka",x:29,y:55,color:"#34d399"}];
  locals.forEach(n=>{const el=document.createElement("button");el.type="button";el.className="other npc";el.style.left=n.x+"%";el.style.top=n.y+"%";el.style.background=n.color;el.textContent=n.name[0];el.title=n.name+" · Local resident";el.setAttribute("aria-label","Talk to "+n.name);el.onclick=e=>{e.stopPropagation();openFeature("people");featureMessage("You approached "+n.name+". Choose a conversation below.");};c.appendChild(el)});
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
  const fitnessStat=$("fitnessStat");if(fitnessStat)fitnessStat.textContent=Math.round(player.fitness)
  $("fuel").textContent=Math.round(player.fuel)
  $("mode").textContent=player.mode
  $("player").style.left=player.x+"%";$("player").style.top=player.y+"%"
  $("player").className="player "+player.direction
  syncCityAvatar();
  $("player").innerHTML=player.mode==="Drive"
    ?`<div style="font-size:20px">${vehicleList.find(v=>v.id===player.currentVehicle)?.emoji||"🚗"}</div>`
    :`<div class="person"></div>`
  renderNeeds();renderHouses();renderOthers();renderHouseList();scheduleSave()
}

let routeTarget=null,routeTimer=null,heldDirection=null,heldTimer=null;
let clubMusicOn=false,clubAudioContext=null,clubMusicTimer=null,clubBeatIndex=0,flightOverlay=null;
function arriveAtZone(i){
  const z=zones[i];routeTarget=null;
  $("locInfo").innerHTML=`<b>${z.emoji} ${z.name}</b><br><small style="color:#7a8b9e">${z.type} · You have arrived</small>`
  const a=$("actions");a.innerHTML=""
  z.actions.forEach(act=>{
    const btn=document.createElement("button");btn.className="action-btn"
    btn.innerHTML=`${act.label}<small>${act.cost>0?money(act.cost):"Free"}</small>`
    btn.onclick=()=>doAction(act);a.appendChild(btn)
  })
  const enter=document.createElement("button");enter.className="action-btn";enter.style.borderColor="#47d7a2";enter.textContent="🚪 Enter "+z.name+" — Explore inside";enter.onclick=()=>enterPlace(z);a.prepend(enter)
  log("📍 Arrived at "+z.name);update()
}
function startRoute(i){
  const z=zones[i];if(!z)return;
  routeTarget=i;
  $("locInfo").innerHTML=`<b>🧭 Going to ${z.name}</b><br><small style="color:#7a8b9e">Follow the streets to reach this destination.</small>`
  $("actions").innerHTML='<div style="color:#8da3b5;font-size:12px;padding:6px 0">🚶 En route…</div>';
  if(routeTimer)clearInterval(routeTimer);
  routeTimer=setInterval(()=>{
    const dx=z.x-player.x,dy=z.y-player.y,dist=Math.hypot(dx,dy);
    if(dist<0.9){clearInterval(routeTimer);routeTimer=null;arriveAtZone(i);return;}
    const step=player.mode==="Drive"&&player.currentVehicle?(vehicleList.find(v=>v.id===player.currentVehicle)?.speed||3.3)*0.16:0.22;
    if(player.mode==="Drive"&&player.fuel<=0){clearInterval(routeTimer);routeTimer=null;routeTarget=null;log("⛽ Out of fuel — route stopped");return;}
    if(player.mode==="Drive"&&player.currentVehicle)player.fuel=Math.max(0,player.fuel-0.035);
    if(Math.abs(dx)>Math.abs(dy)){player.direction=dx<0?"left":"right";player.x+=Math.sign(dx)*Math.min(step,Math.abs(dx));}
    else{player.direction=dy<0?"up":"down";player.y+=Math.sign(dy)*Math.min(step,Math.abs(dy));}
    player.x=Math.max(3,Math.min(97,player.x));player.y=Math.max(5,Math.min(95,player.y));
    update();
  },45);
  log("🧭 Heading to "+z.name);
}
function selectZone(i){startRoute(i)}
function startHeldMove(dir){
  heldDirection=dir;move(dir);
  if(heldTimer)clearInterval(heldTimer);
  heldTimer=setInterval(()=>{if(heldDirection)move(heldDirection)},95);
}
function stopHeldMove(){heldDirection=null;if(heldTimer){clearInterval(heldTimer);heldTimer=null;}}
function onMovementKey(e){
  if(["ArrowUp","w","W"].includes(e.key)){e.preventDefault();if(!heldDirection)startHeldMove("up")}
  else if(["ArrowDown","s","S"].includes(e.key)){e.preventDefault();if(!heldDirection)startHeldMove("down")}
  else if(["ArrowLeft","a","A"].includes(e.key)){e.preventDefault();if(!heldDirection)startHeldMove("left")}
  else if(["ArrowRight","d","D"].includes(e.key)){e.preventDefault();if(!heldDirection)startHeldMove("right")}
}
function onMovementKeyUp(e){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","W","a","A","s","S","d","D"].includes(e.key))stopHeldMove()}
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
  player.reputation+=2;player.skills.charisma+=a.social>10?1:0;player.moodlets=[a.hunger>20?"Well Fed":a.fun>20?"Having Fun":"Out and About"]
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
  let step=heldDirection?0.62:1.55
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
  const pay=player.business?48000:(player.mode==="Drive"?48000:30000)
  player.cash+=pay;player.energy=clamp(player.energy-22);player.hunger=clamp(player.hunger-12);if(player.business)log("🏪 Business income included.")
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
