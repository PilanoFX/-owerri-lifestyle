/* =========================================================
   Owerri Lifestyle – Upgraded (Mobile map fix + Needs + Better map)
   ========================================================= */

const zones = [
  { name: "IMSU Junction", x: 50, y: 22, type: "Campus", emoji: "🎓",
    actions: [
      { label: "Attend Lecture", cost: 0, hunger: -5, energy: -15, fun: -5, social: 10, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Eat at Cafeteria", cost: 2500, hunger: 40, energy: 10, fun: 5, social: 5, hygiene: -5, bladder: -10, cash: 0 },
      { label: "Hang with Friends", cost: 0, hunger: -5, energy: -10, fun: 25, social: 30, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Fire Service", x: 42, y: 40, type: "City Hub", emoji: "🚒",
    actions: [
      { label: "Volunteer", cost: 0, hunger: -10, energy: -20, fun: 5, social: 15, hygiene: -10, bladder: -5, cash: 8000 },
      { label: "Buy Snacks", cost: 1500, hunger: 25, energy: 5, fun: 5, social: 0, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Douglas", x: 58, y: 48, type: "Downtown", emoji: "🏙️",
    actions: [
      { label: "Shop", cost: 5000, hunger: 0, energy: -10, fun: 20, social: 10, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Eat Out", cost: 4500, hunger: 45, energy: 10, fun: 15, social: 10, hygiene: -5, bladder: -10, cash: 0 },
      { label: "Bank Work", cost: 0, hunger: -5, energy: -25, fun: -10, social: 5, hygiene: 0, bladder: -5, cash: 35000 }
    ]
  },
  { name: "Wetheral", x: 68, y: 32, type: "Urban", emoji: "🏘️",
    actions: [
      { label: "Visit Club", cost: 12000, hunger: -5, energy: -20, fun: 40, social: 35, hygiene: -15, bladder: -10, cash: 0 },
      { label: "Late Night Food", cost: 3000, hunger: 35, energy: 5, fun: 10, social: 5, hygiene: -5, bladder: -10, cash: 0 }
    ]
  },
  { name: "New Owerri", x: 75, y: 68, type: "Residential", emoji: "🏡",
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
  { name: "Owerri Mall", x: 62, y: 55, type: "Shopping", emoji: "🛍️",
    actions: [
      { label: "Shopping Spree", cost: 15000, hunger: 0, energy: -15, fun: 30, social: 10, hygiene: 5, bladder: -5, cash: 0 },
      { label: "Cinema", cost: 4000, hunger: -5, energy: -10, fun: 35, social: 15, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Sam Mbakwe Airport", x: 85, y: 20, type: "Travel", emoji: "✈️",
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
  { name: "New Owerri Villa", x: 80, y: 72, price: 2500000, owned: false }
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
  // 6 Needs (0-100)
  hunger: 80,
  energy: 85,
  fun: 60,
  social: 55,
  hygiene: 90,
  bladder: 70
};

const root = document.getElementById("root");

const style = document.createElement("style");
style.textContent = `
*{box-sizing:border-box;margin:0;padding:0}
body{background:#080b10;color:#fff;font-family:system-ui,-apple-system,sans-serif;overflow-x:hidden}
button{border:0;border-radius:10px;padding:10px 12px;color:#fff;background:#1e2a36;font-weight:700;cursor:pointer;font-size:13px}
button:active{transform:scale(0.97)}
.top{padding:12px 14px;background:#10161e;border-bottom:1px solid #2a3542;position:sticky;top:0;z-index:50}
.logo{font-size:18px;font-weight:800;margin-bottom:8px}
.logo span{color:#42d4ff}
.stats{display:flex;gap:6px;flex-wrap:wrap;font-size:12px}
.stat{background:#19212b;padding:5px 8px;border-radius:8px}
.needs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:10px}
.need{background:#151d27;border-radius:8px;padding:6px 8px;font-size:11px}
.need-bar{height:5px;background:#2a3542;border-radius:3px;margin-top:3px;overflow:hidden}
.need-fill{height:100%;border-radius:3px;transition:width 0.3s}
.layout{display:flex;flex-direction:column;gap:10px;padding:10px}
.mapbox{
  position:relative;
  width:100%;
  height:min(58vh,520px);          /* A) FIXED HEIGHT FOR MOBILE */
  min-height:380px;
  border-radius:16px;
  overflow:hidden;
  background:#2a4a32;
  border:2px solid #3a5a42;
  box-shadow:inset 0 0 40px rgba(0,0,0,0.4);
}
.map{position:absolute;inset:0}
.road{position:absolute;background:#383d44}
.h{height:36px;width:100%}.v{width:36px;height:100%}
.r1{top:28%}.r2{top:55%}.r3{top:78%}
.c1{left:22%}.c2{left:48%}.c3{left:72%}
.block{position:absolute;background:#315337;border-radius:4px}
.b1{left:3%;top:4%;width:16%;height:16%}.b2{left:26%;top:4%;width:16%;height:18%}
.b3{left:52%;top:4%;width:15%;height:18%}.b4{left:75%;top:5%;width:18%;height:16%}
.b5{left:3%;top:35%;width:16%;height:15%}.b6{left:26%;top:34%;width:16%;height:16%}
.b7{left:52%;top:36%;width:14%;height:14%}.b8{left:75%;top:35%;width:18%;height:15%}
.b9{left:3%;top:62%;width:16%;height:28%}.b10{left:26%;top:61%;width:16%;height:28%}
.b11{left:52%;top:62%;width:14%;height:28%}.b12{left:75%;top:61%;width:18%;height:28%}
.zone{
  position:absolute;transform:translate(-50%,-50%);
  background:rgba(16,24,32,0.92);border:1px solid #42d4ff;
  padding:5px 8px;border-radius:8px;font-size:10px;z-index:5;
  white-space:nowrap;cursor:pointer;text-align:center;
  box-shadow:0 4px 12px rgba(0,0,0,0.4);
}
.zone:active{transform:translate(-50%,-50%) scale(0.95)}
.house{
  position:absolute;transform:translate(-50%,-50%);
  width:38px;height:38px;border-radius:50%;
  background:#f4c542;color:#111;border:3px solid #fff;
  z-index:20;font-size:16px;display:flex;align-items:center;justify-content:center;
  cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,0.4);
}
.house.owned{background:#36d278}
.player{position:absolute;transform:translate(-50%,-50%);z-index:30;transition:left 0.15s,top 0.15s}
.person{width:18px;height:18px;border-radius:50%;background:#f1c27d;border:2px solid #111;position:relative}
.person:after{content:"";position:absolute;top:15px;left:1px;width:15px;height:13px;background:#4d7cff;border-radius:6px}
.car{width:38px;height:20px;background:#d62828;border-radius:6px;border:2px solid #111;position:relative}
.car:before,.car:after{content:"";position:absolute;width:8px;height:8px;background:#111;border-radius:50%;bottom:-5px}
.car:before{left:4px}.car:after{right:4px}
.car span{position:absolute;left:10px;top:2px;width:14px;height:7px;background:#9ddcff}
.side{display:flex;flex-direction:column;gap:10px}
.panel{background:#151d27;border:1px solid #2a3542;border-radius:14px;padding:12px}
.panel h3{margin:0 0 10px;font-size:15px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.full{width:100%;margin-top:6px}
.controls{display:grid;grid-template-columns:repeat(3,42px);gap:5px;justify-content:center;margin-top:10px}
.controls button{height:40px;padding:0;font-size:16px}
.empty{visibility:hidden}
.log{max-height:140px;overflow:auto;font-size:12px}
.log div{padding:4px 0;border-bottom:1px solid #29323d}
.actions{display:flex;flex-direction:column;gap:6px;margin-top:8px}
.action-btn{background:#243044;text-align:left;padding:9px 12px}
.action-btn small{display:block;opacity:0.7;font-weight:400;margin-top:2px}
.interior{display:none;position:fixed;inset:0;background:#151515;z-index:100}
.interior.show{display:block}
.inhead{height:56px;background:#202832;padding:12px 16px;display:flex;align-items:center;justify-content:space-between}
.room{position:absolute;top:56px;bottom:0;left:0;right:0;background:linear-gradient(#d8c4a4 0 55%,#755239 55%)}
.window{position:absolute;left:12%;top:10%;width:140px;height:100px;background:#82d5fa;border:10px solid #fff}
.tv{position:absolute;right:10%;top:12%;width:180px;height:110px;background:#080808;border:6px solid #222}
.tv:after{content:"OWERRI";display:flex;height:100%;align-items:center;justify-content:center;color:#42d4ff;font-weight:bold;font-size:18px}
.sofa{position:absolute;left:10%;bottom:16%;width:240px;height:70px;background:#4b4163;border-radius:16px}
.table{position:absolute;right:25%;bottom:14%;width:120px;height:55px;background:#70492e;border-radius:6px}
.bed{position:absolute;left:30%;bottom:4%;width:280px;height:85px;background:#d8d8e8;border-radius:16px}

@media(min-width:900px){
  .layout{flex-direction:row}
  .mapbox{flex:1;height:620px;min-height:620px}
  .side{width:300px;flex-shrink:0}
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
  </div>
  <div class="needs" id="needs"></div>
</div>

<div class="layout">
  <div class="mapbox">
    <div class="map">
      <div class="block b1"></div><div class="block b2"></div>
      <div class="block b3"></div><div class="block b4"></div>
      <div class="block b5"></div><div class="block b6"></div>
      <div class="block b7"></div><div class="block b8"></div>
      <div class="block b9"></div><div class="block b10"></div>
      <div class="block b11"></div><div class="block b12"></div>
      <div class="road h r1"></div><div class="road h r2"></div><div class="road h r3"></div>
      <div class="road v c1"></div><div class="road v c2"></div><div class="road v c3"></div>
      <div id="zones"></div>
      <div id="houses"></div>
      <div class="player" id="player"><div class="person"></div></div>
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
    <div class="window"></div>
    <div class="tv"></div>
    <div class="sofa"></div>
    <div class="table"></div>
    <div class="bed"></div>
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
  // Resting inside restores needs
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

// Buttons
$("walk").onclick = () => { player.mode = "Walk"; update(); log("🚶 Walking"); };
$("drive").onclick = () => { player.mode = "Drive"; update(); log("🚗 Driving"); };
$("work").onclick = work;
$("travel").onclick = travel;
$("buy").onclick = buyHouse;
$("enter").onclick = enterHouse;
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

// Needs decay every 12 seconds
setInterval(() => {
  player.hunger = clamp(player.hunger - 1.8);
  player.energy = clamp(player.energy - 1.2);
  player.fun = clamp(player.fun - 1.0);
  player.social = clamp(player.social - 0.8);
  player.hygiene = clamp(player.hygiene - 0.7);
  player.bladder = clamp(player.bladder - 1.5);

  // Critical warnings
  if (player.hunger < 15) log("⚠️ You are very hungry!");
  if (player.energy < 15) log("⚠️ Exhausted – rest soon");
  if (player.bladder < 10) log("⚠️ Need a toilet urgently!");

  update();
}, 12000);

// Init
renderZones();
renderHouses();
update();
log("🌆 Welcome to Owerri Lifestyle");
