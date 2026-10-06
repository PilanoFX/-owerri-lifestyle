// ====================== DATA ======================
const zones = [
  { name: "IMSU Junction", x: 50, y: 22, type: "Campus", emoji: "🎓",
    actions: [
      { name: "Attend Class", cost: 0, time: 30, effects: { energy: -15, fun: -5, social: 5 }, cash: 0 },
      { name: "Hang with Friends", cost: 2000, time: 20, effects: { social: 25, fun: 15, energy: -10 }, cash: 0 },
      { name: "Study Hard", cost: 0, time: 40, effects: { energy: -20, fun: -10 }, cash: 0, rep: 8 }
    ]
  },
  { name: "Fire Service", x: 42, y: 42, type: "City Hub", emoji: "🚒",
    actions: [
      { name: "Report Issue", cost: 0, time: 10, effects: { social: 5 }, cash: 0, rep: 3 },
      { name: "Volunteer", cost: 0, time: 45, effects: { energy: -25, social: 15 }, cash: 15000, rep: 12 }
    ]
  },
  { name: "Douglas", x: 58, y: 48, type: "Downtown", emoji: "🏙️",
    actions: [
      { name: "Office Work", cost: 0, time: 60, effects: { energy: -30, fun: -15 }, cash: 45000, rep: 5 },
      { name: "Lunch", cost: 8000, time: 25, effects: { hunger: 40, fun: 10, energy: 5 }, cash: 0 },
      { name: "Shop", cost: 15000, time: 30, effects: { fun: 10, energy: -10 }, cash: 0 }
    ]
  },
  { name: "Wetheral", x: 72, y: 32, type: "Urban", emoji: "🏘️",
    actions: [
      { name: "Visit Mall", cost: 5000, time: 30, effects: { fun: 20, energy: -10 }, cash: 0 },
      { name: "Coffee & Gist", cost: 3000, time: 20, effects: { social: 20, fun: 15, energy: 5 }, cash: 0 }
    ]
  },
  { name: "New Owerri", x: 78, y: 68, type: "Residential", emoji: "🏡",
    actions: [
      { name: "Rest at Home", cost: 0, time: 40, effects: { energy: 50, hygiene: 10 }, cash: 0 },
      { name: "Invite Friends", cost: 10000, time: 45, effects: { social: 30, fun: 25, energy: -15 }, cash: 0 }
    ]
  },
  { name: "Nekede", x: 18, y: 55, type: "Student Area", emoji: "📚",
    actions: [
      { name: "Cheap Food", cost: 1500, time: 15, effects: { hunger: 35, energy: 5 }, cash: 0 },
      { name: "Party / Hangout", cost: 5000, time: 40, effects: { fun: 35, social: 25, energy: -25, hygiene: -10 }, cash: 0 }
    ]
  },
  { name: "FUTO", x: 28, y: 78, type: "University", emoji: "🔬",
    actions: [
      { name: "Lecture", cost: 0, time: 50, effects: { energy: -20, fun: -10 }, cash: 0, rep: 6 },
      { name: "Lab / Project", cost: 0, time: 60, effects: { energy: -30 }, cash: 20000, rep: 10 },
      { name: "Campus Hangout", cost: 2000, time: 25, effects: { social: 20, fun: 15 }, cash: 0 }
    ]
  }
];

const properties = [
  { name: "Douglas Luxury Apartment", x: 62, y: 28, price: 1800000, owned: false },
  { name: "Wetheral City Apartment", x: 75, y: 38, price: 1200000, owned: false },
  { name: "New Owerri Villa", x: 82, y: 72, price: 2500000, owned: false },
  { name: "Nekede Starter House", x: 12, y: 62, price: 650000, owned: false }
];

const player = {
  x: 48,
  y: 45,
  cash: 2500000,
  level: 1,
  reputation: 100,
  mode: "Walk",
  fuel: 100,
  selectedHouse: null,
  needs: {
    hunger: 80,
    energy: 75,
    fun: 60,
    social: 55,
    hygiene: 70,
    bladder: 65
  }
};

// ====================== SETUP ======================
const root = document.getElementById("root");

root.innerHTML = `
  <div class="app">
    <!-- TOP BAR -->
    <header class="topbar">
      <div class="brand">🌆 Owerri <span>Lifestyle</span></div>
      <div class="stats-row">
        <div class="stat">💰 <b id="cash"></b></div>
        <div class="stat">⭐ <b id="level"></b></div>
        <div class="stat">❤️ <b id="rep"></b></div>
        <div class="stat">⛽ <b id="fuel"></b>%</div>
        <div class="stat">🚶 <b id="mode"></b></div>
      </div>
    </header>

    <!-- 6 NEEDS BARS -->
    <div class="needs-bar" id="needsBar"></div>

    <!-- MAP + SIDEBAR -->
    <div class="main-layout">
      <div class="map-container">
        <div class="map" id="map">
          <!-- City blocks -->
          <div class="block b1"></div><div class="block b2"></div>
          <div class="block b3"></div><div class="block b4"></div>
          <div class="block b5"></div><div class="block b6"></div>
          <div class="block b7"></div><div class="block b8"></div>
          <div class="block b9"></div><div class="block b10"></div>
          <div class="block b11"></div><div class="block b12"></div>

          <!-- Roads -->
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

      <aside class="sidebar">
        <div class="panel">
          <h3>🚗 Movement</h3>
          <div class="grid2">
            <button id="walkBtn">🚶 Walk</button>
            <button id="driveBtn">🚗 Drive</button>
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
          <h3>💼 Quick Actions</h3>
          <button id="workBtn" class="full">💼 Go To Work</button>
          <button id="travelBtn" class="full">🗺️ Random Travel</button>
        </div>

        <div class="panel">
          <h3>🏠 Property</h3>
          <div id="houseInfo">Tap a 🏠 on the map</div>
          <button id="buyBtn" class="full" style="display:none">🏠 Buy House</button>
          <button id="enterBtn" class="full" style="display:none">🚪 Enter House</button>
        </div>

        <div class="panel">
          <h3>📱 Activity</h3>
          <div id="log" class="log"></div>
        </div>
      </aside>
    </div>
  </div>

  <!-- LOCATION MODAL -->
  <div class="modal hidden" id="locationModal">
    <div class="modal-card">
      <button class="close-btn" id="closeModal">×</button>
      <div id="modalContent"></div>
    </div>
  </div>

  <!-- HOUSE INTERIOR -->
  <div class="interior hidden" id="interior">
    <div class="inhead">
      <b id="houseTitle">🏠 My House</b>
      <button id="leaveBtn">Leave</button>
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

// ====================== HELPERS ======================
const $ = id => document.getElementById(id);

function money(n) {
  return "₦" + Math.floor(n).toLocaleString();
}

function log(msg) {
  const el = document.createElement("div");
  el.textContent = msg;
  $("log").prepend(el);
}

function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}

// ====================== NEEDS ======================
const needNames = {
  hunger: "Hunger",
  energy: "Energy",
  fun: "Fun",
  social: "Social",
  hygiene: "Hygiene",
  bladder: "Bladder"
};

const needColors = {
  hunger: "#ff6b6b",
  energy: "#4ecdc4",
  fun: "#ffe66d",
  social: "#a29bfe",
  hygiene: "#74b9ff",
  bladder: "#55efc4"
};

function renderNeeds() {
  const bar = $("needsBar");
  bar.innerHTML = "";
  Object.keys(player.needs).forEach(key => {
    const value = Math.round(player.needs[key]);
    const div = document.createElement("div");
    div.className = "need";
    div.innerHTML = `
      <div class="need-label">${needNames[key]}</div>
      <div class="need-track">
        <div class="need-fill" style="width:${value}%;background:${needColors[key]}"></div>
      </div>
      <div class="need-value">${value}</div>
    `;
    bar.appendChild(div);
  });
}

function decayNeeds() {
  player.needs.hunger  = clamp(player.needs.hunger  - 0.18);
  player.needs.energy  = clamp(player.needs.energy  - 0.14);
  player.needs.fun     = clamp(player.needs.fun     - 0.09);
  player.needs.social  = clamp(player.needs.social  - 0.08);
  player.needs.hygiene = clamp(player.needs.hygiene - 0.07);
  player.needs.bladder = clamp(player.needs.bladder - 0.20);
  renderNeeds();
}
setInterval(decayNeeds, 4000);

// ====================== MAP RENDER ======================
function renderZones() {
  const container = $("zones");
  container.innerHTML = "";
  zones.forEach((z, i) => {
    const el = document.createElement("button");
    el.className = "zone";
    el.style.left = z.x + "%";
    el.style.top  = z.y + "%";
    el.innerHTML = `<span class="zone-emoji">${z.emoji}</span><b>${z.name}</b><small>${z.type}</small>`;
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
    house.style.top  = p.y + "%";
    house.textContent = p.owned ? "✓" : "🏠";
    house.title = p.name;
    house.onclick = () => selectHouse(index);
    container.appendChild(house);
  });
}

function update() {
  $("cash").textContent  = money(player.cash);
  $("level").textContent = player.level;
  $("rep").textContent   = player.reputation;
  $("fuel").textContent  = player.fuel;
  $("mode").textContent  = player.mode;

  $("player").style.left = player.x + "%";
  $("player").style.top  = player.y + "%";
  $("player").innerHTML  = player.mode === "Drive"
    ? `<div class="car"><span></span></div>`
    : `<div class="person"></div>`;

  renderHouses();
  renderNeeds();
}

// ====================== LOCATION PANEL ======================
function openLocation(index) {
  const z = zones[index];
  const content = $("modalContent");

  const actionsHtml = z.actions.map((a, i) => `
    <button class="action-btn" data-zone="${index}" data-action="${i}">
      <div class="action-name">${a.name}</div>
      <div class="action-meta">
        ${a.cost > 0 ? money(a.cost) + " · " : ""}${a.time} min
        ${a.cash ? " · Earn " + money(a.cash) : ""}
      </div>
    </button>
  `).join("");

  content.innerHTML = `
    <div class="loc-header">
      <span class="loc-emoji">${z.emoji}</span>
      <div>
        <h2>${z.name}</h2>
        <p>${z.type}</p>
      </div>
    </div>
    <div class="actions-list">${actionsHtml}</div>
  `;

  content.querySelectorAll(".action-btn").forEach(btn => {
    btn.onclick = () => doAction(+btn.dataset.zone, +btn.dataset.action);
  });

  $("locationModal").classList.remove("hidden");
}

function doAction(zoneIndex, actionIndex) {
  const z = zones[zoneIndex];
  const a = z.actions[actionIndex];

  if (player.cash < a.cost) {
    log("❌ Not enough money");
    return;
  }

  player.x = z.x;
  player.y = z.y;
  player.cash -= a.cost;
  if (a.cash) player.cash += a.cash;
  if (a.rep)  player.reputation += a.rep;

  if (a.effects) {
    Object.keys(a.effects).forEach(k => {
      player.needs[k] = clamp(player.needs[k] + a.effects[k]);
    });
  }

  if (player.reputation >= player.level * 120) {
    player.level++;
    log("⭐ Level up! Now Level " + player.level);
  }

  log(`${z.emoji} ${a.name} at ${z.name}`);
  if (a.cash) log("💰 +" + money(a.cash));

  $("locationModal").classList.add("hidden");
  update();
}

// ====================== HOUSES ======================
function selectHouse(index) {
  const house = properties[index];
  player.selectedHouse = house;

  $("houseInfo").innerHTML = `
    <b>${house.name}</b><br>
    💰 ${money(house.price)}<br>
    ${house.owned ? "✅ Owned" : "🏷️ Available"}
  `;
  $("buyBtn").style.display  = house.owned ? "none" : "block";
  $("enterBtn").style.display = house.owned ? "block" : "none";
  log("🏠 " + house.name);
}

function buyHouse() {
  const house = player.selectedHouse;
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
  const house = player.selectedHouse;
  if (!house || !house.owned) return;

  player.needs.energy  = clamp(player.needs.energy  + 30);
  player.needs.hygiene = clamp(player.needs.hygiene + 20);
  player.needs.bladder = clamp(player.needs.bladder + 25);

  $("houseTitle").textContent = "🏠 " + house.name;
  $("interior").classList.remove("hidden");
  log("🚪 Entered " + house.name);
  update();
}

// ====================== MOVEMENT ======================
function move(dir) {
  const amount = player.mode === "Drive" ? 3.5 : 1.8;

  if (player.mode === "Drive") {
    if (player.fuel <= 0) {
      log("⛽ Out of fuel");
      return;
    }
    player.fuel = Math.max(0, player.fuel - 1);
  }

  if (dir === "up")    player.y -= amount;
  if (dir === "down")  player.y += amount;
  if (dir === "left")  player.x -= amount;
  if (dir === "right") player.x += amount;

  player.x = clamp(player.x, 5, 95);
  player.y = clamp(player.y, 8, 92);

  if (player.mode === "Walk") {
    player.needs.energy = clamp(player.needs.energy - 0.5);
  }

  update();
}

// ====================== QUICK ACTIONS ======================
function work() {
  const pay = player.mode === "Drive" ? 55000 : 35000;
  player.cash += pay;
  player.reputation += 4;
  player.needs.energy = clamp(player.needs.energy - 25);
  player.needs.fun    = clamp(player.needs.fun - 12);

  if (player.reputation >= player.level * 120) {
    player.level++;
    log("⭐ Level up!");
  }
  log("💼 Worked · +" + money(pay));
  update();
}

function travel() {
  const z = zones[Math.floor(Math.random() * zones.length)];
  player.x = z.x;
  player.y = z.y;
  player.needs.energy = clamp(player.needs.energy - 10);
  log("🗺️ Travelled to " + z.name);
  update();
}

// ====================== EVENTS ======================
$("walkBtn").onclick = () => { player.mode = "Walk";  update(); log("🚶 Walking"); };
$("driveBtn").onclick = () => { player.mode = "Drive"; update(); log("🚗 Driving"); };
$("workBtn").onclick = work;
$("travelBtn").onclick = travel;
$("buyBtn").onclick = buyHouse;
$("enterBtn").onclick = enterHouse;
$("leaveBtn").onclick = () => { $("interior").classList.add("hidden"); log("🚶 Left house"); };
$("closeModal").onclick = () => $("locationModal").classList.add("hidden");

document.querySelectorAll("[data-move]").forEach(btn => {
  btn.onclick = () => move(btn.dataset.move);
});

document.addEventListener("keydown", e => {
  const k = e.key.toLowerCase();
  if (k === "arrowup"    || k === "w") move("up");
  if (k === "arrowdown"  || k === "s") move("down");
  if (k === "arrowleft"  || k === "a") move("left");
  if (k === "arrowright" || k === "d") move("right");
});

// ====================== START ======================
renderZones();
renderHouses();
update();
log("Welcome to Owerri Lifestyle 🌆");
