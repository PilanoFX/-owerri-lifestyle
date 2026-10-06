// ===================== DATA =====================
const zones = [
  { name: "IMSU Junction", x: 50, y: 25, type: "Campus", activities: [
    { name: "Attend Lecture", cost: 0, time: 30, effects: { energy: -15, fun: -5, social: 5 } },
    { name: "Hang with Friends", cost: 2000, time: 20, effects: { fun: 20, social: 25, energy: -10 } },
    { name: "Buy Snacks", cost: 1500, time: 10, effects: { hunger: 25, energy: 5 } }
  ]},
  { name: "Fire Service", x: 43, y: 43, type: "City Hub", activities: [
    { name: "Get Documents", cost: 5000, time: 25, effects: { energy: -10 } },
    { name: "Chat with Officers", cost: 0, time: 15, effects: { social: 15, fun: 5 } }
  ]},
  { name: "Douglas", x: 55, y: 45, type: "Downtown", activities: [
    { name: "Shop at Market", cost: 8000, time: 30, effects: { hunger: 15, fun: 10 } },
    { name: "Eat Amala", cost: 3500, time: 20, effects: { hunger: 45, energy: 10, fun: 15 } },
    { name: "Business Meeting", cost: 0, time: 40, effects: { energy: -20, social: 20, cash: 15000 } }
  ]},
  { name: "Wetheral", x: 64, y: 36, type: "Urban", activities: [
    { name: "Coffee Shop", cost: 2500, time: 15, effects: { energy: 20, fun: 10, social: 10 } },
    { name: "Window Shopping", cost: 0, time: 20, effects: { fun: 15, energy: -5 } }
  ]},
  { name: "New Owerri", x: 70, y: 66, type: "Residential", activities: [
    { name: "Visit Neighbours", cost: 0, time: 25, effects: { social: 30, fun: 15 } },
    { name: "Rest at Park", cost: 0, time: 20, effects: { energy: 25, fun: 10 } }
  ]},
  { name: "Nekede", x: 18, y: 56, type: "Student Area", activities: [
    { name: "Study Session", cost: 0, time: 45, effects: { energy: -20, fun: -10 } },
    { name: "Street Food", cost: 1200, time: 10, effects: { hunger: 35, energy: 5 } },
    { name: "Party with Students", cost: 5000, time: 40, effects: { fun: 40, social: 30, energy: -25, hygiene: -15 } }
  ]},
  { name: "FUTO", x: 30, y: 75, type: "University", activities: [
    { name: "Lab Work", cost: 0, time: 50, effects: { energy: -25, fun: -5 } },
    { name: "Campus Cafeteria", cost: 2000, time: 15, effects: { hunger: 40, energy: 10 } },
    { name: "Football Match", cost: 0, time: 35, effects: { fun: 35, energy: -20, social: 20, hygiene: -10 } }
  ]}
];

const properties = [
  { name: "Douglas Luxury Apartment", x: 59, y: 24, price: 1800000, owned: false },
  { name: "Wetheral City Apartment", x: 72, y: 30, price: 1200000, owned: false },
  { name: "New Owerri Villa", x: 80, y: 72, price: 2500000, owned: false },
  { name: "Nekede Starter House", x: 11, y: 68, price: 650000, owned: false }
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
  needs: {
    hunger: 80,
    energy: 75,
    fun: 60,
    social: 55,
    hygiene: 85,
    bladder: 70
  }
};

const NEED_DECAY = {
  hunger: 0.08,
  energy: 0.06,
  fun: 0.05,
  social: 0.04,
  hygiene: 0.03,
  bladder: 0.07
};

// ===================== SETUP =====================
const root = document.getElementById("root");

root.innerHTML = `
<div class="app">
  <header class="topbar">
    <div class="brand">🌆 Owerri <span>Lifestyle</span></div>
    <div class="stats-row">
      <div class="stat">💰 <b id="cash"></b></div>
      <div class="stat">⭐ Level <b id="level"></b></div>
      <div class="stat">❤️ Rep <b id="rep"></b></div>
      <div class="stat">⛽ <b id="fuel"></b>%</div>
      <div class="stat">🚶 <b id="mode"></b></div>
    </div>
  </header>

  <!-- NEEDS BAR -->
  <div class="needs-bar" id="needsBar"></div>

  <div class="layout">
    <div class="mapbox">
      <div class="map" id="map">
        <!-- decorative blocks -->
        <div class="block b1"></div><div class="block b2"></div>
        <div class="block b3"></div><div class="block b4"></div>
        <div class="block b5"></div><div class="block b6"></div>
        <div class="block b7"></div><div class="block b8"></div>
        <div class="block b9"></div><div class="block b10"></div>
        <div class="block b11"></div><div class="block b12"></div>

        <!-- roads -->
        <div class="road h r1"></div>
        <div class="road h r2"></div>
        <div class="road h r3"></div>
        <div class="road v c1"></div>
        <div class="road v c2"></div>
        <div class="road v c3"></div>

        <div id="zones"></div>
        <div id="houses"></div>
        <div class="player" id="player"><div class="person"></div></div>
      </div>
    </div>

    <aside class="side">
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
        <h3>💼 Life</h3>
        <button id="work" class="full">💼 Go To Work</button>
        <button id="travel" class="full">🗺️ Travel</button>
        <button id="club" class="full">🎵 Join Club</button>
        <button id="night" class="full">🍾 Visit Club</button>
      </div>

      <div class="panel">
        <h3>🏠 Property</h3>
        <div id="info">Tap a 🏠 on the map.</div>
        <button id="buy" class="full" style="display:none">🏠 Buy House</button>
        <button id="enter" class="full" style="display:none">🚪 Enter House</button>
      </div>

      <div class="panel">
        <h3>📱 Activity</h3>
        <div id="log" class="log"></div>
      </div>
    </aside>
  </div>
</div>

<!-- LOCATION ACTIVITY PANEL -->
<div class="sheet" id="locationSheet">
  <div class="sheet-content">
    <button class="close-sheet" id="closeSheet">×</button>
    <h2 id="sheetTitle"></h2>
    <p id="sheetType" class="sheet-type"></p>
    <div id="sheetActivities" class="activities"></div>
  </div>
</div>

<!-- HOUSE INTERIOR -->
<div class="interior" id="interior">
  <div class="inhead">
    <b id="houseTitle">🏠 My House</b>
    <button id="leave">Leave House</button>
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

// ===================== HELPERS =====================
const $ = id => document.getElementById(id);

function money(n) {
  return "₦" + Math.floor(n).toLocaleString();
}

function log(msg) {
  const item = document.createElement("div");
  item.textContent = msg;
  $("log").prepend(item);
}

function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}

// ===================== NEEDS =====================
function renderNeeds() {
  const bar = $("needsBar");
  const icons = {
    hunger: "🍔", energy: "⚡", fun: "🎉",
    social: "💬", hygiene: "🚿", bladder: "🚽"
  };

  bar.innerHTML = Object.entries(player.needs).map(([key, value]) => {
    const pct = Math.round(value);
    const color = pct > 60 ? "#4ade80" : pct > 30 ? "#fbbf24" : "#f87171";
    return `
      <div class="need">
        <span class="need-icon">${icons[key]}</span>
        <div class="need-track">
          <div class="need-fill" style="width:${pct}%;background:${color}"></div>
        </div>
        <span class="need-val">${pct}</span>
      </div>
    `;
  }).join("");
}

function decayNeeds() {
  for (const key in NEED_DECAY) {
    player.needs[key] = clamp(player.needs[key] - NEED_DECAY[key]);
  }
  renderNeeds();
}

function applyEffects(effects) {
  if (!effects) return;
  for (const [key, val] of Object.entries(effects)) {
    if (key === "cash") {
      player.cash += val;
    } else if (player.needs[key] !== undefined) {
      player.needs[key] = clamp(player.needs[key] + val);
    }
  }
  renderNeeds();
  update();
}

// ===================== RENDER MAP =====================
function renderZones() {
  const container = $("zones");
  container.innerHTML = "";

  zones.forEach((z, i) => {
    const el = document.createElement("button");
    el.className = "zone";
    el.style.left = z.x + "%";
    el.style.top = z.y + "%";
    el.innerHTML = `<b>${z.name}</b><br><small>${z.type}</small>`;
    el.onclick = () => openLocation(i);
    container.appendChild(el);
  });
}

function renderHouses() {
  const container = $("houses");
  container.innerHTML = "";

  properties.forEach((p, index) => {
    const house = document.createElement("button");
    house.type = "button";
    house.className = p.owned ? "house owned" : "house";
    house.style.left = p.x + "%";
    house.style.top = p.y + "%";
    house.textContent = p.owned ? "✓" : "🏠";
    house.title = p.name;
    house.onclick = () => selectHouse(index);
    container.appendChild(house);
  });
}

function update() {
  $("cash").textContent = money(player.cash);
  $("level").textContent = player.level;
  $("rep").textContent = player.reputation;
  $("fuel").textContent = Math.round(player.fuel);
  $("mode").textContent = player.mode;

  $("player").style.left = player.x + "%";
  $("player").style.top = player.y + "%";

  $("player").innerHTML =
    player.mode === "Drive"
      ? `<div class="car"><span></span></div>`
      : `<div class="person"></div>`;

  renderHouses();
  renderNeeds();
}

// ===================== LOCATION PANEL =====================
function openLocation(index) {
  const z = zones[index];
  $("sheetTitle").textContent = z.name;
  $("sheetType").textContent = z.type;

  const list = $("sheetActivities");
  list.innerHTML = z.activities.map((a, i) => `
    <button class="activity-btn" data-zone="${index}" data-act="${i}">
      <div class="act-name">${a.name}</div>
      <div class="act-meta">
        ${a.cost > 0 ? money(a.cost) : "Free"} · ${a.time} min
      </div>
    </button>
  `).join("");

  list.querySelectorAll(".activity-btn").forEach(btn => {
    btn.onclick = () => doActivity(+btn.dataset.zone, +btn.dataset.act);
  });

  $("locationSheet").classList.add("open");
}

function closeLocation() {
  $("locationSheet").classList.remove("open");
}

function doActivity(zoneIndex, actIndex) {
  const z = zones[zoneIndex];
  const a = z.activities[actIndex];

  if (player.cash < a.cost) {
    log("❌ Not enough money for " + a.name);
    return;
  }

  player.cash -= a.cost;
  applyEffects(a.effects);
  player.reputation += 2;

  // move player to the location
  player.x = z.x;
  player.y = z.y;

  log(`✅ ${a.name} at ${z.name}`);
  closeLocation();
  update();
}

// ===================== HOUSE =====================
function selectHouse(index) {
  const house = properties[index];
  player.selected = house;

  $("info").innerHTML = `
    <b>${house.name}</b><br><br>
    💰 ${money(house.price)}<br><br>
    ${house.owned ? "✅ You own this house." : "🏷️ Available for purchase."}
  `;

  $("buy").style.display = house.owned ? "none" : "block";
  $("enter").style.display = house.owned ? "block" : "none";
  log("🏠 Selected " + house.name);
}

function buyHouse() {
  const house = player.selected;
  if (!house) return;

  if (player.cash < house.price) {
    log("❌ You don't have enough money.");
    return;
  }

  player.cash -= house.price;
  house.owned = true;
  player.reputation += 10;
  log("🎉 You bought " + house.name + "!");
  update();
  selectHouse(properties.indexOf(house));
}

function enterHouse() {
  const house = player.selected;
  if (!house || !house.owned) {
    log("🏠 Buy the house first.");
    return;
  }
  $("houseTitle").textContent = "🏠 " + house.name;
  $("interior").classList.add("show");
  // resting in house restores needs
  applyEffects({ energy: 30, hygiene: 20, bladder: 40, fun: 10 });
  log("🚪 You entered your house and rested.");
}

// ===================== MOVEMENT & ACTIONS =====================
function move(direction) {
  const amount = player.mode === "Drive" ? 3 : 1.4;

  if (player.mode === "Drive") {
    if (player.fuel <= 0) {
      log("⛽ Out of fuel.");
      return;
    }
    player.fuel = clamp(player.fuel - 1, 0, 100);
  }

  if (direction === "up") player.y -= amount;
  if (direction === "down") player.y += amount;
  if (direction === "left") player.x -= amount;
  if (direction === "right") player.x += amount;

  player.x = clamp(player.x, 3, 97);
  player.y = clamp(player.y, 5, 95);

  // small need cost for moving
  player.needs.energy = clamp(player.needs.energy - 0.4);
  player.needs.bladder = clamp(player.needs.bladder - 0.2);

  update();
}

function work() {
  const pay = player.mode === "Drive" ? 45000 : 30000;
  player.cash += pay;
  player.reputation += 3;
  applyEffects({ energy: -25, fun: -10, social: 5 });

  if (player.reputation >= player.level * 120) {
    player.level++;
    log("⭐ Level up!");
  }

  log("💼 You earned " + money(pay) + ".");
  update();
}

function travel() {
  const z = zones[Math.floor(Math.random() * zones.length)];
  player.x = z.x;
  player.y = z.y;
  applyEffects({ energy: -8 });
  log("🗺️ You travelled to " + z.name + ".");
  update();
}

// ===================== EVENT LISTENERS =====================
$("walk").onclick = () => {
  player.mode = "Walk";
  update();
  log("🚶 You are walking.");
};

$("drive").onclick = () => {
  player.mode = "Drive";
  update();
  log("🚗 You are driving.");
};

$("work").onclick = work;
$("travel").onclick = travel;

$("club").onclick = () => {
  player.reputation += 5;
  applyEffects({ fun: 15, social: 20, energy: -10 });
  log("🎵 You joined a lifestyle club.");
  update();
};

$("night").onclick = () => {
  if (player.cash < 15000) {
    log("💸 You need ₦15,000.");
    return;
  }
  player.cash -= 15000;
  player.reputation += 8;
  applyEffects({ fun: 40, social: 25, energy: -30, hygiene: -15, hunger: -10 });
  log("🍾 You enjoyed a night out.");
  update();
};

$("buy").onclick = buyHouse;
$("enter").onclick = enterHouse;
$("leave").onclick = () => {
  $("interior").classList.remove("show");
  log("🚶 You left the house.");
};
$("closeSheet").onclick = closeLocation;

document.querySelectorAll("[data-move]").forEach(btn => {
  btn.onclick = () => move(btn.dataset.move);
});

document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (key === "arrowup" || key === "w") move("up");
  if (key === "arrowdown" || key === "s") move("down");
  if (key === "arrowleft" || key === "a") move("left");
  if (key === "arrowright" || key === "d") move("right");
  if (key === "escape") closeLocation();
});

// ===================== START =====================
renderZones();
renderHouses();
update();

// needs decay every 3 seconds
setInterval(decayNeeds, 3000);
