/* =========================================================
   Owerri Lifestyle – Complete Version
   (3D Map + Traffic + Day/Night + Facing Player + 3D House Interior)
   ========================================================= */

const zones = [
  { name: "IMSU Junction", x: 48, y: 22, type: "Campus", emoji: "🎓",
    actions: [
      { label: "Attend Lecture", cost: 0, hunger: -5, energy: -15, fun: -5, social: 10, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Eat at Cafeteria", cost: 2500, hunger: 40, energy: 10, fun: 5, social: 5, hygiene: -5, bladder: -10, cash: 0 },
      { label: "Hang with Friends", cost: 0, hunger: -5, energy: -10, fun: 25, social: 30, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Fire Service", x: 38, y: 42, type: "City Hub", emoji: "🚒",
    actions: [
      { label: "Volunteer", cost: 0, hunger: -10, energy: -20, fun: 5, social: 15, hygiene: -10, bladder: -5, cash: 8000 },
      { label: "Buy Snacks", cost: 1500, hunger: 25, energy: 5, fun: 5, social: 0, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Douglas", x: 55, y: 48, type: "Downtown", emoji: "🏙️",
    actions: [
      { label: "Shop", cost: 5000, hunger: 0, energy: -10, fun: 20, social: 10, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Eat Out", cost: 4500, hunger: 45, energy: 10, fun: 15, social: 10, hygiene: -5, bladder: -10, cash: 0 },
      { label: "Bank Work", cost: 0, hunger: -5, energy: -25, fun: -10, social: 5, hygiene: 0, bladder: -5, cash: 35000 }
    ]
  },
  { name: "Wetheral", x: 68, y: 30, type: "Urban", emoji: "🏘️",
    actions: [
      { label: "Visit Club", cost: 12000, hunger: -5, energy: -20, fun: 40, social: 35, hygiene: -15, bladder: -10, cash: 0 },
      { label: "Late Night Food", cost: 3000, hunger: 35, energy: 5, fun: 10, social: 5, hygiene: -5, bladder: -10, cash: 0 }
    ]
  },
  { name: "New Owerri", x: 72, y: 68, type: "Residential", emoji: "🏡",
    actions: [
      { label: "Rest at Home", cost: 0, hunger: -5, energy: 40, fun: 5, social: -5, hygiene: 10, bladder: 20, cash: 0 },
      { label: "Neighbour Visit", cost: 0, hunger: -5, energy: -10, fun: 15, social: 25, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Nekede", x: 18, y: 58, type: "Student Area", emoji: "📚",
    actions: [
      { label: "Study", cost: 0, hunger: -5, energy: -20, fun: -10, social: -5, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Party", cost: 8000, hunger: -10, energy: -25, fun: 45, social: 40, hygiene: -20, bladder: -15, cash: 0 },
      { label: "Buy Food", cost: 2000, hunger: 35, energy: 5, fun: 5, social: 0, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "FUTO", x: 28, y: 78, type: "University", emoji: "🔬",
    actions: [
      { label: "Lab Work", cost: 0, hunger: -5, energy: -25, fun: -5, social: 5, hygiene: -5, bladder: -5, cash: 18000 },
      { label: "Campus Hangout", cost: 0, hunger: -5, energy: -10, fun: 20, social: 25, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Owerri Mall", x: 58, y: 58, type: "Shopping", emoji: "🛍️",
    actions: [
      { label: "Shopping Spree", cost: 15000, hunger: 0, energy: -15, fun: 30, social: 10, hygiene: 5, bladder: -5, cash: 0 },
      { label: "Cinema", cost: 4000, hunger: -5, energy: -10, fun: 35, social: 15, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Sam Mbakwe Airport", x: 82, y: 18, type: "Travel", emoji: "✈️",
    actions: [
      { label: "Watch Planes", cost: 0, hunger: -5, energy: -5, fun: 15, social: 5, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Airport Job", cost: 0, hunger: -10, energy: -20, fun: -5, social: 5, hygiene: 0, bladder: -5, cash: 28000 }
    ]
  }
];

const properties = [
  { name: "Nekede Starter House", x: 12, y: 65, price: 650000, owned: false },
  { name: "Wetheral City Apartment", x: 70, y: 28, price: 1200000, owned: false },
  { name: "Douglas Luxury Apartment", x: 55, y: 42, price: 1800000, owned: false },
  { name: "New Owerri Villa", x: 78, y: 72, price: 2500000, owned: false }
];

const player = {
  x: 49,
  y: 38,
  cash: 2500000,
  level: 1,
  reputation: 100,
  mode: "Walk",
  fuel: 100,
  selected: null,
  direction: "down",
  hunger: 80,
  energy: 85,
  fun: 60,
  social: 55,
  hygiene: 90,
  bladder: 70
};

let isNight = false;

const root = document.getElementById("root");

const style = document.createElement("style");
style.textContent = `
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0a0e14;color:#fff;font-family:system-ui,-apple-system,sans-serif;overflow-x:hidden}
button{border:0;border-radius:12px;padding:11px 14px;color:#fff;background:#1c2733;font-weight:700;cursor:pointer;font-size:13px;transition:0.15s}
button:active{transform:scale(0.96)}

.top{padding:14px 16px 10px;background:linear-gradient(180deg,#121820 0%,#0d1218 100%);border-bottom:1px solid #1e2a36;position:sticky;top:0;z-index:50}
.logo{font-size:20px;font-weight:800;margin-bottom:10px}
.logo span{color:#42d4ff}
.stats{display:flex;gap:7px;flex-wrap:wrap;font-size:12px;margin-bottom:10px}
.stat{background:#18222d;padding:6px 10px;border-radius:10px;border:1px solid #243040}
.needs{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.need{background:#151d27;border-radius:10px;padding:7px 9px;font-size:11px;border:1px solid #1e2a36}
.need-bar{height:5px;background:#1e2a36;border-radius:3px;margin-top:4px;overflow:hidden}
.need-fill{height:100%;border-radius:3px;transition:width 0.35s}

.layout{display:flex;flex-direction:column;gap:12px;padding:12px}

.mapbox{
  position:relative;width:100%;height:min(62vh,560px);min-height:400px;
  border-radius:20px;overflow:hidden;border:2px solid #2a4a38;
  box-shadow:0 20px 40px rgba(0,0,0,0.55), inset 0 0 60px rgba(0,0,0,0.35);
  transition: background 1.2s, border-color 1.2s;
}
.mapbox.day{background:#1a2f22;border-color:#2a4a38}
.mapbox.night{background:#0d1a14;border-color:#1a3328}

.map{
  position:absolute;inset:0;
  background:
    linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px),
    linear-gradient(0deg,rgba(255,255,255,0.025) 1px,transparent 1px),
    linear-gradient(160deg,#1e3a28 0%,#244830 40%,#1a3224 100%);
  background-size:48px 48px,48px 48px,auto;
  transition: filter 1.2s;
}
.mapbox.night .map{filter:brightness(0.55) contrast(1.1)}

.road{position:absolute;background:#2c3238;box-shadow:0 7px 0 #15191d, inset 0 1px 0 rgba(255,255,255,0.07);z-index:2}
.h{height:44px;width:100%}.v{width:44px;height:100%}
.r1{top:26%}.r2{top:52%}.r3{top:76%}
.c1{left:20%}.c2{left:47%}.c3{left:74%}
.road.h::after{content:"";position:absolute;left:0;right:0;top:50%;height:0;border-top:3px dashed rgba(255,220,80,0.6);transform:translateY(-50%)}
.road.v::after{content:"";position:absolute;top:0;bottom:0;left:50%;width:0;border-left:3px dashed rgba(255,220,80,0.6);transform:translateX(-50%)}

.streetlight{position:absolute;width:6px;height:18px;background:#444;border-radius:2px;z-index:4;box-shadow:0 0 12px 4px rgba(255,220,120,0);transition:box-shadow 1s}
.mapbox.night .streetlight{box-shadow:0 0 18px 6px rgba(255,220,120,0.55)}
.sl1{left:22%;top:24%}.sl2{left:49%;top:24%}.sl3{left:76%;top:24%}
.sl4{left:22%;top:50%}.sl5{left:49%;top:50%}.sl6{left:76%;top:50%}
.sl7{left:22%;top:74%}.sl8{left:49%;top:74%}.sl9{left:76%;top:74%}

.block{position:absolute;background:linear-gradient(145deg,#2f4a36,#3a5c42);border-radius:3px 3px 2px 2px;
  box-shadow:0 12px 0 #152218,0 16px 22px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.1);z-index:3;overflow:hidden}
.block::before{content:"";position:absolute;top:-9px;left:-1px;right:-1px;height:11px;background:linear-gradient(90deg,#3d6048,#4a7255);border-radius:3px 3px 0 0;box-shadow:0 -2px 0 rgba(0,0,0,0.25)}
.block::after{content:"";position:absolute;inset:8px 6px 6px 6px;
  background:repeating-linear-gradient(90deg,rgba(180,220,255,0.15) 0 8px,transparent 8px 16px),
             repeating-linear-gradient(0deg,rgba(180,220,255,0.12) 0 7px,transparent 7px 15px);
  border-radius:2px;opacity:0.7}
.mapbox.night .block::after{
  background:repeating-linear-gradient(90deg,rgba(255,230,150,0.45) 0 8px,transparent 8px 16px),
             repeating-linear-gradient(0deg,rgba(255,230,150,0.35) 0 7px,transparent 7px 15px);
  opacity:0.9;box-shadow:0 0 8px rgba(255,220,120,0.3)}

.b1{left:3%;top:5%;width:13%;height:13%}.b2{left:23%;top:4%;width:14%;height:18%}
.b3{left:49%;top:5%;width:13%;height:14%}.b4{left:74%;top:6%;width:15%;height:13%}
.b5{left:3%;top:35%;width:13%;height:12%}.b6{left:23%;top:34%;width:14%;height:16%}
.b7{left:49%;top:36%;width:12%;height:11%}.b8{left:74%;top:35%;width:15%;height:12%}
.b9{left:3%;top:61%;width:13%;height:23%}.b10{left:23%;top:60%;width:14%;height:27%}
.b11{left:49%;top:62%;width:12%;height:22%}.b12{left:74%;top:60%;width:15%;height:24%}

.zone{position:absolute;transform:translate(-50%,-50%);background:rgba(12,18,26,0.94);border:1.5px solid #42d4ff;
  padding:6px 10px;border-radius:12px;font-size:11px;z-index:10;white-space:nowrap;cursor:pointer;text-align:center;
  box-shadow:0 8px 0 rgba(0,0,0,0.35),0 12px 20px rgba(0,0,0,0.4),0 0 12px rgba(66,212,255,0.25)}
.zone:active{transform:translate(-50%,-50%) scale(0.94) translateY(4px)}

.house{position:absolute;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;
  background:linear-gradient(145deg,#ffd54f,#f4c542);color:#111;border:3px solid #fff;z-index:20;font-size:17px;
  display:flex;align-items:center;justify-content:center;cursor:pointer;
  box-shadow:0 8px 0 rgba(0,0,0,0.3),0 12px 18px rgba(0,0,0,0.35)}
.house.owned{background:linear-gradient(145deg,#4ade80,#36d278)}

.player{position:absolute;transform:translate(-50%,-50%);z-index:30;transition:left 0.14s linear,top 0.14s linear;
  filter:drop-shadow(0 10px 8px rgba(0,0,0,0.55));width:28px;height:28px;display:flex;align-items:center;justify-content:center}
.person{width:20px;height:20px;border-radius:50%;background:#f1c27d;border:2.5px solid #111;position:relative}
.person:after{content:"";position:absolute;top:16px;left:1px;width:16px;height:14px;background:#4d7cff;border-radius:7px}
.player.up .person:after{top:-4px;left:1px;transform:rotate(180deg)}
.player.left .person:after{top:6px;left:-10px;transform:rotate(90deg);width:14px;height:16px}
.player.right .person:after{top:6px;left:14px;transform:rotate(-90deg);width:14px;height:16px}

.car{width:42px;height:22px;background:#e63946;border-radius:7px;border:2px solid #111;position:relative}
.car:before,.car:after{content:"";position:absolute;width:9px;height:9px;background:#111;border-radius:50%;bottom:-6px}
.car:before{left:5px}.car:after{right:5px}
.car span{position:absolute;left:12px;top:3px;width:16px;height:8px;background:#a0e0ff;border-radius:2px}

.traffic{position:absolute;z-index:5;width:28px;height:14px;border-radius:4px;background:#c0392b;border:1.5px solid #111;box-shadow:0 3px 0 #1a1a1a}
.traffic::after{content:"";position:absolute;top:2px;left:6px;width:10px;height:6px;background:#a0e0ff;border-radius:1px}
.traffic.blue{background:#2980b9}.traffic.yellow{background:#f1c40f}.traffic.green{background:#27ae60}
@keyframes moveH1{0%{left:-5%}100%{left:105%}}
@keyframes moveH2{0%{left:105%}100%{left:-5%}}
@keyframes moveV1{0%{top:-5%}100%{top:105%}}
@keyframes moveV2{0%{top:105%}100%{top:-5%}}
.t1{top:28%;animation:moveH1 18s linear infinite}
.t2{top:54%;animation:moveH2 22s linear infinite;animation-delay:-6s}
.t3{top:78%;animation:moveH1 20s linear infinite;animation-delay:-11s}
.t4{left:22%;animation:moveV1 16s linear infinite}
.t5{left:49%;animation:moveV2 19s linear infinite;animation-delay:-4s}
.t6{left:76%;animation:moveV1 21s linear infinite;animation-delay:-9s}

.side{display:flex;flex-direction:column;gap:11px}
.panel{background:linear-gradient(180deg,#151d27,#10161e);border:1px solid #1e2a36;border-radius:16px;padding:14px;box-shadow:0 8px 20px rgba(0,0,0,0.25)}
.panel h3{margin:0 0 11px;font-size:15px;font-weight:700}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.full{width:100%;margin-top:7px}
.controls{display:grid;grid-template-columns:repeat(3,44px);gap:6px;justify-content:center;margin-top:12px}
.controls button{height:42px;padding:0;font-size:17px;background:#1c2733}
.empty{visibility:hidden}
.log{max-height:130px;overflow:auto;font-size:12px}
.log div{padding:5px 0;border-bottom:1px solid #1e2a36}
.actions{display:flex;flex-direction:column;gap:7px;margin-top:9px}
.action-btn{background:#1c2733;text-align:left;padding:10px 13px;border:1px solid #243040}
.action-btn small{display:block;opacity:0.65;font-weight:400;margin-top:2px;font-size:11px}

/* ===== 3D HOUSE INTERIOR ===== */
.interior{display:none;position:fixed;inset:0;background:#0f0c0a;z-index:100;overflow:hidden}
.interior.show{display:block}
.inhead{height:58px;background:#1c2530;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2a3542;position:relative;z-index:20}
.room{position:absolute;top:58px;bottom:0;left:0;right:0;background:#c4a882;perspective:900px;overflow:hidden}
.wall{position:absolute;top:0;left:0;right:0;height:58%;background:linear-gradient(180deg,#d8c4a4 0%,#c4a882 100%);box-shadow:inset 0 -30px 60px rgba(0,0,0,0.15)}
.floor{position:absolute;bottom:0;left:0;right:0;height:48%;background:linear-gradient(180deg,#6b4423 0%,#4a2e14 100%);transform-origin:center top;transform:rotateX(12deg);box-shadow:0 -20px 40px rgba(0,0,0,0.3)}
.floor::before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 32px,rgba(0,0,0,0.08) 32px 33px)}

.window{position:absolute;left:7%;top:9%;width:155px;height:115px;background:linear-gradient(160deg,#7ec8f5,#4aa8d8);border:16px solid #f0e6d8;border-radius:4px;
  box-shadow:8px 12px 0 rgba(0,0,0,0.18),0 20px 35px rgba(0,0,0,0.25),inset 0 0 40px rgba(255,255,255,0.35);z-index:5}
.window::before{content:"";position:absolute;inset:0;background:linear-gradient(#f0e6d8,#f0e6d8) center/100% 9px no-repeat,linear-gradient(#f0e6d8,#f0e6d8) center/9px 100% no-repeat}

.tv-unit{position:absolute;right:6%;top:11%;width:210px;z-index:6}
.tv{width:100%;height:125px;background:#0a0a0a;border:9px solid #1a1a1a;border-radius:6px;box-shadow:10px 14px 0 rgba(0,0,0,0.25),0 22px 40px rgba(0,0,0,0.35);
  display:flex;align-items:center;justify-content:center;color:#42d4ff;font-weight:800;font-size:22px;letter-spacing:1px;position:relative}
.tv-stand{width:80px;height:16px;background:#2a2a2a;margin:8px auto 0;border-radius:3px;box-shadow:6px 6px 0 rgba(0,0,0,0.2)}

.sofa{position:absolute;left:6%;bottom:22%;width:270px;height:90px;z-index:8}
.sofa-base{position:absolute;inset:0;background:linear-gradient(180deg,#5c4d7e,#4a3f68);border-radius:18px 18px 12px 12px;box-shadow:12px 16px 0 #2a2438,0 22px 35px rgba(0,0,0,0.3)}
.sofa-back{position:absolute;top:-32px;left:10px;right:10px;height:42px;background:linear-gradient(180deg,#6b5c8c,#5c4d7e);border-radius:14px 14px 6px 6px;box-shadow:8px 8px 0 rgba(0,0,0,0.15)}
.sofa-arm-left,.sofa-arm-right{position:absolute;top:-8px;width:28px;height:70px;background:linear-gradient(180deg,#5c4d7e,#4a3f68);border-radius:10px;box-shadow:6px 8px 0 rgba(0,0,0,0.2)}
.sofa-arm-left{left:-6px}.sofa-arm-right{right:-6px}

.table{position:absolute;right:16%;bottom:20%;width:145px;height:58px;z-index:7}
.table-top{position:absolute;inset:0;background:linear-gradient(180deg,#9a6b45,#7a5130);border-radius:8px;box-shadow:10px 12px 0 #4a2e14,0 18px 28px rgba(0,0,0,0.3)}
.table-leg{position:absolute;bottom:-14px;width:12px;height:18px;background:#5a3a1e;border-radius:2px}
.table-leg.l{left:18px}.table-leg.r{right:18px}

.bed{position:absolute;left:24%;bottom:4%;width:310px;height:100px;z-index:9}
.bed-base{position:absolute;inset:0;background:linear-gradient(180deg,#e0e0ec,#c8c8d8);border-radius:16px 16px 10px 10px;box-shadow:14px 16px 0 #8a8a9a,0 24px 35px rgba(0,0,0,0.28)}
.bed-pillow{position:absolute;top:10px;left:20px;width:75px;height:32px;background:#fff;border-radius:10px;box-shadow:8px 6px 0 rgba(0,0,0,0.1)}
.bed-pillow2{position:absolute;top:10px;left:110px;width:75px;height:32px;background:#fff;border-radius:10px;box-shadow:8px 6px 0 rgba(0,0,0,0.1)}
.bed-blanket{position:absolute;bottom:0;left:0;right:0;height:40px;background:linear-gradient(180deg,#c0c0d0,#a8a8b8);border-radius:0 0 10px 10px}

.rug{position:absolute;left:20%;bottom:30%;width:240px;height:80px;background:radial-gradient(ellipse at center,#8b3a3a 0%,#5a2525 70%);border-radius:50%;opacity:0.75;box-shadow:0 8px 20px rgba(0,0,0,0.25);z-index:4;transform:rotateX(8deg)}

.plant{position:absolute;right:5%;bottom:34%;width:30px;height:55px;z-index:6}
.plant-pot{position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:26px;height:16px;background:#8b5e3c;border-radius:3px 3px 6px 6px;box-shadow:5px 5px 0 rgba(0,0,0,0.2)}
.plant-leaves{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);width:36px;height:45px;background:#2d6a27;border-radius:50% 50% 20% 20%;
  box-shadow:-14px 6px 0 -6px #3a8a32,14px 8px 0 -8px #3a8a32}

@media(min-width:900px){
  .layout{flex-direction:row;align-items:flex-start}
  .mapbox{flex:1;height:640px;min-height:640px}
  .side{width:310px;flex-shrink:0}
}
`;
document.head.appendChild(style);

root.innerHTML = `
<div class="top">
  <div class="logo">🌆 Owerri <span>Lifestyle</span></div>
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
      <div class="block b1"></div><div class="block b2"></div>
      <div class="block b3"></div><div class="block b4"></div>
      <div class="block b5"></div><div class="block b6"></div>
      <div class="block b7"></div><div class="block b8"></div>
      <div class="block b9"></div><div class="block b10"></div>
      <div class="block b11"></div><div class="block b12"></div>
      <div class="road h r1"></div><div class="road h r2"></div><div class="road h r3"></div>
      <div class="road v c1"></div><div class="road v c2"></div><div class="road v c3"></div>
      <div class="streetlight sl1"></div><div class="streetlight sl2"></div><div class="streetlight sl3"></div>
      <div class="streetlight sl4"></div><div class="streetlight sl5"></div><div class="streetlight sl6"></div>
      <div class="streetlight sl7"></div><div class="streetlight sl8"></div><div class="streetlight sl9"></div>
      <div class="traffic t1"></div><div class="traffic t2 blue"></div><div class="traffic t3 yellow"></div>
      <div class="traffic t4 green"></div><div class="traffic t5"></div><div class="traffic t6 blue"></div>
      <div id="zones"></div>
      <div id="houses"></div>
      <div class="player down" id="player"><div class="person"></div></div>
    </div>
  </div>

  <div class="side">
    <div class="panel">
      <h3>🚗 Movement</h3>
      <div class="grid2">
        <button id="walk">🚶 Walk</button>
        <button id="drive">🚗 Drive</button>
      </div>
      <div class="controls">
        <button class="empty"></button>
        <button data-move="up">▲</button>
        <button class="empty"></button>
        <button data-move="left">◀</button>
        <button data-move="down">▼</button>
        <button data-move="right">▶</button>
      </div>
      <button id="toggleTime" class="full" style="margin-top:10px">🌙 Toggle Night</button>
    </div>

    <div class="panel">
      <h3>📍 Current Location</h3>
      <div id="locInfo">Tap a place on the map</div>
      <div class="actions" id="actions"></div>
    </div>

    <div class="panel">
      <h3>💼 Quick Actions</h3>
      <button id="work" class="full">💼 Go To Work</button>
      <button id="travel" class="full">🗺️ Random Travel</button>
    </div>

    <div class="panel">
      <h3>🏠 Property</h3>
      <div id="info">Tap a 🏠 on the map</div>
      <button id="buy" class="full" style="display:none">🏠 Buy House</button>
      <button id="enter" class="full" style="display:none">🚪 Enter House</button>
    </div>

    <div class="panel">
      <h3>📱 Activity</h3>
      <div id="log" class="log"></div>
    </div>
  </div>
</div>

<div class="interior" id="interior">
  <div class="inhead">
    <b id="houseTitle">🏠 My House</b>
    <button id="leave">Leave</button>
  </div>
  <div class="room">
    <div class="wall"></div>
    <div class="floor"></div>
    <div class="rug"></div>
    <div class="window"></div>
    <div class="tv-unit">
      <div class="tv">OWERRI</div>
      <div class="tv-stand"></div>
    </div>
    <div class="sofa">
      <div class="sofa-back"></div>
      <div class="sofa-arm-left"></div>
      <div class="sofa-arm-right"></div>
      <div class="sofa-base"></div>
    </div>
    <div class="table">
      <div class="table-top"></div>
      <div class="table-leg l"></div>
      <div class="table-leg r"></div>
    </div>
    <div class="bed">
      <div class="bed-base"></div>
      <div class="bed-pillow"></div>
      <div class="bed-pillow2"></div>
      <div class="bed-blanket"></div>
    </div>
    <div class="plant">
      <div class="plant-leaves"></div>
      <div class="plant-pot"></div>
    </div>
  </div>
</div>
`;

const $ = id => document.getElementById(id);

function money(n) {
  return "₦" + Math.floor(n).toLocaleString();
}

function log(msg) {
  const el = document.createElement("div");
  el.textContent = msg;
  $("log").prepend(el);
}

function clamp(v) {
  return Math.max(0, Math.min(100, v));
}

function needColor(v) {
  if (v > 60) return "#36d278";
  if (v > 30) return "#f4c542";
  return "#e74c3c";
}

function renderNeeds() {
  const needs = [
    { key: "hunger", label: "Hunger", emoji: "🍽️" },
    { key: "energy", label: "Energy", emoji: "⚡" },
    { key: "fun", label: "Fun", emoji: "🎉" },
    { key: "social", label: "Social", emoji: "👥" },
    { key: "hygiene", label: "Hygiene", emoji: "🚿" },
    { key: "bladder", label: "Bladder", emoji: "🚽" }
  ];
  $("needs").innerHTML = needs.map(n => `
    <div class="need">
      ${n.emoji} ${n.label} ${Math.round(player[n.key])}
      <div class="need-bar"><div class="need-fill" style="width:${player[n.key]}%;background:${needColor(player[n.key])}"></div></div>
    </div>
  `).join("");
}

function renderZones() {
  const container = $("zones");
  container.innerHTML = "";
  zones.forEach((z, i) => {
    const el = document.createElement("div");
    el.className = "zone";
    el.style.left = z.x + "%";
    el.style.top = z.y + "%";
    el.innerHTML = `${z.emoji}<br><b>${z.name}</b>`;
    el.onclick = () => selectZone(i);
    container.appendChild(el);
  });
}

function renderHouses() {
  const container = $("houses");
  container.innerHTML = "";
  properties.forEach((p, i) => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = p.owned ? "house owned" : "house";
    el.style.left = p.x + "%";
    el.style.top = p.y + "%";
    el.textContent = p.owned ? "✓" : "🏠";
    el.onclick = () => selectHouse(i);
    container.appendChild(el);
  });
}

function update() {
  $("cash").textContent = money(player.cash);
  $("level").textContent = player.level;
  $("rep").textContent = player.reputation;
  $("fuel").textContent = player.fuel;
  $("mode").textContent = player.mode;
  $("player").style.left = player.x + "%";
  $("player").style.top = player.y + "%";
  $("player").className = `player ${player.direction}`;
  $("player").innerHTML = player.mode === "Drive"
    ? `<div class="car"><span></span></div>`
    : `<div class="person"></div>`;
  renderNeeds();
  renderHouses();
}

function selectZone(index) {
  const z = zones[index];
  player.x = z.x;
  player.y = z.y;
  $("locInfo").innerHTML = `<b>${z.emoji} ${z.name}</b><br><small>${z.type}</small>`;
  const actionsEl = $("actions");
  actionsEl.innerHTML = "";
  z.actions.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "action-btn";
    btn.innerHTML = `${a.label}<small>${a.cost > 0 ? money(a.cost) : "Free"}</small>`;
    btn.onclick = () => doAction(a);
    actionsEl.appendChild(btn);
  });
  log(`📍 Arrived at ${z.name}`);
  update();
}

function doAction(a) {
  if (player.cash < a.cost) {
    log("❌ Not enough money");
    return;
  }
  player.cash -= a.cost;
  player.hunger = clamp(player.hunger + a.hunger);
  player.energy = clamp(player.energy + a.energy);
  player.fun = clamp(player.fun + a.fun);
  player.social = clamp(player.social + a.social);
  player.hygiene = clamp(player.hygiene + a.hygiene);
  player.bladder = clamp(player.bladder + a.bladder);
  if (a.cash) player.cash += a.cash;
  player.reputation += 2;
  log(`✅ ${a.label}`);
  update();
}

function selectHouse(index) {
  const house = properties[index];
  player.selected = house;
  $("info").innerHTML = `
    <b>${house.name}</b><br>
    💰 ${money(house.price)}<br>
    ${house.owned ? "✅ You own this" : "🏷️ Available"}
  `;
  $("buy").style.display = house.owned ? "none" : "block";
  $("enter").style.display = house.owned ? "block" : "none";
  log("🏠 Selected " + house.name);
}

function buyHouse() {
  const house = player.selected;
  if (!house || house.owned) return;
  if (player.cash < house.price) {
    log("❌ Not enough money");
    return;
  }
  player.cash -= house.price;
  house.owned = true;
  player.reputation += 15;
  log("🎉 Bought " + house.name);
  update();
  selectHouse(properties.indexOf(house));
}

function enterHouse() {
  const house = player.selected;
  if (!house || !house.owned) return;
  $("houseTitle").textContent = "🏠 " + house.name;
  $("interior").classList.add("show");
  player.energy = clamp(player.energy + 25);
  player.hygiene = clamp(player.hygiene + 15);
  player.bladder = clamp(player.bladder + 30);
  log("🚪 Entered house – resting…");
  update();
}

function move(dir) {
  const step = player.mode === "Drive" ? 3.2 : 1.6;
  if (player.mode === "Drive") {
    if (player.fuel <= 0) { log("⛽ Out of fuel"); return; }
    player.fuel--;
  }
  player.direction = dir;
  if (dir === "up") player.y -= step;
  if (dir === "down") player.y += step;
  if (dir === "left") player.x -= step;
  if (dir === "right") player.x += step;
  player.x = Math.max(4, Math.min(96, player.x));
  player.y = Math.max(6, Math.min(94, player.y));
  update();
}

function work() {
  const pay = player.mode === "Drive" ? 42000 : 28000;
  player.cash += pay;
  player.energy = clamp(player.energy - 20);
  player.hunger = clamp(player.hunger - 10);
  player.reputation += 4;
  if (player.reputation >= player.level * 120) {
    player.level++;
    log("⭐ Level up!");
  }
  log("💼 Earned " + money(pay));
  update();
}

function travel() {
  const z = zones[Math.floor(Math.random() * zones.length)];
  selectZone(zones.indexOf(z));
}

function toggleTime() {
  isNight = !isNight;
  const box = $("mapbox");
  box.classList.toggle("day", !isNight);
  box.classList.toggle("night", isNight);
  $("timeLabel").textContent = isNight ? "🌙 Night" : "☀️ Day";
  log(isNight ? "🌙 Night has fallen" : "☀️ Daytime");
}

$("walk").onclick = () => { player.mode = "Walk"; update(); log("🚶 Walking"); };
$("drive").onclick = () => { player.mode = "Drive"; update(); log("🚗 Driving"); };
$("work").onclick = work;
$("travel").onclick = travel;
$("buy").onclick = buyHouse;
$("enter").onclick = enterHouse;
$("toggleTime").onclick = toggleTime;
$("leave").onclick = () => {
  $("interior").classList.remove("show");
  log("🚶 Left the house");
};

document.querySelectorAll("[data-move]").forEach(btn => {
  btn.onclick = () => move(btn.dataset.move);
});

document.addEventListener("keydown", e => {
  const k = e.key.toLowerCase();
  if (k === "arrowup" || k === "w") move("up");
  if (k === "arrowdown" || k === "s") move("down");
  if (k === "arrowleft" || k === "a") move("left");
  if (k === "arrowright" || k === "d") move("right");
});

setInterval(() => {
  player.hunger = clamp(player.hunger - 1.8);
  player.energy = clamp(player.energy - 1.2);
  player.fun = clamp(player.fun - 1.0);
  player.social = clamp(player.social - 0.8);
  player.hygiene = clamp(player.hygiene - 0.7);
  player.bladder = clamp(player.bladder - 1.5);
  if (player.hunger < 15) log("⚠️ You are very hungry!");
  if (player.energy < 15) log("⚠️ Exhausted – rest soon");
  if (player.bladder < 10) log("⚠️ Need a toilet urgently!");
  update();
}, 12000);

setInterval(toggleTime, 90000);

renderZones();
renderHouses();
update();
log("🌆 Welcome to Owerri Lifestyle");
