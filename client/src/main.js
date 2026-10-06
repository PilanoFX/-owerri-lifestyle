const zones = [
  ["IMSU Junction", 50, 25, "Campus district"],
  ["Fire Service", 43, 43, "City hub"],
  ["Douglas", 55, 45, "Downtown"],
  ["Wetheral", 64, 36, "Urban corridor"],
  ["New Owerri", 70, 66, "Residential"],
  ["Nekede", 18, 56, "Student district"],
  ["FUTO", 30, 75, "University area"]
];

const clubs = [
  "Cartel Lifestyle",
  "De Angels"
];

const properties = [
  {
    name: "Douglas Luxury Apartment",
    x: 59,
    y: 24,
    price: 1800000,
    description: "A premium apartment close to downtown nightlife."
  },
  {
    name: "Wetheral City Apartment",
    x: 72,
    y: 30,
    price: 1200000,
    description: "A modern apartment in the heart of the city."
  },
  {
    name: "New Owerri Villa",
    x: 80,
    y: 72,
    price: 2500000,
    description: "A beautiful villa in one of Owerri's growing residential areas."
  },
  {
    name: "Nekede Starter House",
    x: 11,
    y: 68,
    price: 650000,
    description: "An affordable home close to the student district."
  }
];

const player = {
  name: "Player",
  x: 49,
  y: 38,
  cash: 2500000,
  level: 1,
  reputation: 100,
  zone: "Fire Service",
  mode: "Walk",
  fuel: 100
};

const root = document.querySelector("#root");

if (!root) {
  throw new Error("Root element not found.");
}

const style = document.createElement("style");

style.textContent = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #080b10;
  color: white;
}

button {
  font-family: inherit;
}

.game {
  min-height: 100vh;
  background: #080b10;
}

.header {
  padding: 16px;
  background: linear-gradient(135deg, #111827, #080b10);
  border-bottom: 1px solid #263244;
}

.logo {
  font-size: 24px;
  font-weight: 900;
  letter-spacing: .5px;
}

.subtitle {
  color: #94a3b8;
  font-size: 13px;
  margin-top: 4px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 14px;
}

.stat {
  background: #111827;
  border: 1px solid #263244;
  border-radius: 12px;
  padding: 10px;
}

.stat small {
  display: block;
  color: #94a3b8;
  font-size: 10px;
}

.stat strong {
  display: block;
  margin-top: 5px;
  font-size: 14px;
}

.toolbar {
  display: flex;
  gap: 8px;
  padding: 12px;
  overflow-x: auto;
  background: #0d131d;
  border-bottom: 1px solid #263244;
}

.toolbar button {
  border: 0;
  border-radius: 10px;
  padding: 11px 14px;
  background: #1c2736;
  color: white;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
}

.toolbar button:hover {
  background: #263548;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 12px;
  padding: 12px;
}

.map-wrap {
  position: relative;
  min-height: 650px;
  border: 2px solid #263244;
  border-radius: 18px;
  overflow: hidden;
  background: #467d42;
  box-shadow: 0 15px 50px rgba(0,0,0,.35);
}

.map {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 20%, rgba(255,255,255,.05), transparent 18%),
    radial-gradient(circle at 80% 70%, rgba(0,0,0,.08), transparent 25%),
    #4c8548;
}

.road {
  position: absolute;
  background: #303842;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,.04);
}

.road::after {
  content: "";
  position: absolute;
  background: repeating-linear-gradient(
    to right,
    #e6c84f 0 28px,
    transparent 28px 50px
  );
  height: 3px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: .8;
}

.road1 {
  left: 0;
  right: 0;
  top: 43%;
  height: 70px;
}

.road2 {
  top: 0;
  bottom: 0;
  left: 47%;
  width: 70px;
}

.road3 {
  left: 0;
  right: 0;
  top: 70%;
  height: 48px;
}

.road4 {
  top: 0;
  bottom: 0;
  left: 70%;
  width: 42px;
}

.road2::after,
.road4::after {
  top: 0;
  bottom: 0;
  left: 50%;
  right: auto;
  width: 3px;
  height: auto;
  background: repeating-linear-gradient(
    to bottom,
    #e6c84f 0 28px,
    transparent 28px 50px
  );
  transform: translateX(-50%);
}

.house {
  position: absolute;
  width: 58px;
  height: 45px;
  background: #d9b382;
  border: 3px solid #714c2c;
  border-radius: 5px;
  box-shadow: 0 7px 12px rgba(0,0,0,.25);
}

.house::before {
  content: "";
  position: absolute;
  left: -6px;
  right: -6px;
  top: -20px;
  height: 27px;
  background: #9d493f;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.house::after {
  content: "";
  position: absolute;
  width: 13px;
  height: 20px;
  background: #523a2d;
  bottom: 0;
  left: 22px;
}

.h1 { left: 7%; top: 15%; }
.h2 { left: 20%; top: 12%; }
.h3 { left: 78%; top: 13%; }
.h4 { left: 83%; top: 45%; }
.h5 { left: 75%; top: 82%; }
.h6 { left: 18%; top: 82%; }
.h7 { left: 4%; top: 42%; }

.shop {
  position: absolute;
  width: 65px;
  height: 42px;
  background: #e7e2c6;
  border: 3px solid #594c36;
  border-radius: 4px;
  text-align: center;
  font-size: 9px;
  font-weight: 900;
  color: #3b3022;
  padding-top: 15px;
  box-shadow: 0 6px 12px rgba(0,0,0,.2);
}

.shop1 { left: 32%; top: 33%; }
.shop2 { left: 57%; top: 55%; }
.shop3 { left: 76%; top: 55%; }

.tree {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #164d29;
  box-shadow: 0 7px 0 #7b542d;
}

.t1 { left: 14%; top: 28%; }
.t2 { left: 25%; top: 63%; }
.t3 { left: 39%; top: 18%; }
.t4 { left: 62%; top: 78%; }
.t5 { left: 88%; top: 27%; }
.t6 { left: 91%; top: 76%; }
.t7 { left: 9%; top: 76%; }

.light {
  position: absolute;
  width: 5px;
  height: 38px;
  background: #343b45;
}

.light::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff0a8;
  left: -5px;
  top: -6px;
  box-shadow: 0 0 18px rgba(255,240,168,.7);
}

.l1 { left: 45%; top: 35%; }
.l2 { left: 52%; top: 57%; }
.l3 { left: 68%; top: 41%; }
.l4 { left: 28%; top: 42%; }

.city-car {
  position: absolute;
  width: 42px;
  height: 21px;
  border-radius: 7px;
  background: #263b55;
  border: 2px solid #101923;
  transform: rotate(90deg);
}

.city-car::before,
.city-car::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 5px;
  background: #080b10;
  bottom: -5px;
  border-radius: 2px;
}

.city-car::before {
  left: 4px;
}

.city-car::after {
  right: 4px;
}

.city-car1 { left: 31%; top: 41%; }
.city-car2 { left: 63%; top: 43%; }
.city-car3 { left: 70%; top: 68%; }
.city-car4 { left: 21%; top: 69%; }

.zone-btn {
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255,255,255,.25);
  background: rgba(7,12,18,.82);
  color: white;
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 800;
  cursor: pointer;
  z-index: 8;
}

.zone-btn:hover {
  background: #182536;
}

.property {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px;
  border: 2px solid #f4d35e;
  background: rgba(16, 24, 39, .95);
  border-radius: 50%;
  font-size: 21px;
  cursor: pointer;
  z-index: 12;
  box-shadow: 0 0 16px rgba(244,211,94,.35);
}

.property:hover {
  transform: translate(-50%, -50%) scale(1.12);
}

.property.owned {
  border-color: #22c55e;
  box-shadow: 0 0 18px rgba(34,197,94,.5);
}

#player {
  position: absolute;
  width: 26px;
  height: 34px;
  border-radius: 13px 13px 8px 8px;
  background: #2563eb;
  border: 3px solid white;
  transform: translate(-50%, -50%);
  z-index: 20;
  transition: left .12s, top .12s;
}

#player::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #d9a679;
  left: 4px;
  top: -9px;
  border: 2px solid white;
}

#player-car {
  position: absolute;
  width: 52px;
  height: 27px;
  background: #d62828;
  border: 3px solid #111827;
  border-radius: 10px 14px 9px 9px;
  transform: translate(-50%, -50%);
  z-index: 21;
  transition: left .12s, top .12s;
  box-shadow: 0 7px 15px rgba(0,0,0,.35);
}

#player-car::before {
  content: "";
  position: absolute;
  left: 13px;
  top: -8px;
  width: 25px;
  height: 13px;
  background: #9dd6ef;
  border: 2px solid #111827;
  border-radius: 7px 7px 2px 2px;
}

#player-car::after {
  content: "●     ●";
  position: absolute;
  color: #080b10;
  left: 7px;
  bottom: -12px;
  font-size: 16px;
  letter-spacing: 4px;
}

.sidebar {
  background: #101722;
  border: 1px solid #263244;
  border-radius: 18px;
  padding: 14px;
  overflow-y: auto;
  max-height: 650px;
}

.panel {
  background: #151f2d;
  border: 1px solid #2a374a;
  border-radius: 14px;
  padding: 12px;
  margin-bottom: 12px;
}

.panel h3 {
  margin: 0 0 10px;
  font-size: 15px;
}

.info {
  color: #b8c4d4;
  font-size: 12px;
  line-height: 1.6;
}

.property-info {
  background: #0c131d;
  border-radius: 10px;
  padding: 10px;
  color: #dbe4ef;
  font-size: 12px;
  line-height: 1.6;
  min-height: 100px;
}

.buy-btn {
  width: 100%;
  margin-top: 9px;
  padding: 12px;
  border: 0;
  border-radius: 10px;
  background: #eab308;
  color: #171717;
  font-weight: 900;
  cursor: pointer;
}

.buy-btn:disabled {
  background: #374151;
  color: #9ca3af;
  cursor: not-allowed;
}

.club-btn {
  width: 100%;
  padding: 10px;
  margin-top: 7px;
  border: 0;
  border-radius: 9px;
  background: #202c3d;
  color: white;
  cursor: pointer;
  text-align: left;
}

.mobile-controls {
  display: grid;
  grid-template-columns: repeat(3, 48px);
  gap: 6px;
  justify-content: center;
  margin-top: 10px;
}

.mobile-controls button {
  height: 42px;
  border: 0;
  border-radius: 9px;
  background: #243246;
  color: white;
  font-size: 18px;
}

.mobile-controls .empty {
  visibility: hidden;
}

.log {
  max-height: 160px;
  overflow-y: auto;
  font-size: 11px;
  color: #aebbd0;
  line-height: 1.55;
}

.log div {
  padding: 5px 0;
  border-bottom: 1px solid rgba(255,255,255,.05);
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .map-wrap {
    min-height: 560px;
  }

  .sidebar {
    max-height: none;
  }
}

@media (max-width: 600px) {
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .layout {
    padding: 7px;
  }

  .map-wrap {
    min-height: 500px;
    border-radius: 12px;
  }

  .house {
    transform: scale(.8);
  }
}
`;

document.head.appendChild(style);

root.innerHTML = `
<div class="game">

  <header class="header">
    <div class="logo">🌆 Owerri Lifestyle</div>
    <div class="subtitle">Live the city. Build your lifestyle.</div>

    <div class="stats">
      <div class="stat">
        <small>💰 CASH</small>
        <strong id="cash">₦2,500,000</strong>
      </div>

      <div class="stat">
        <small>⭐ LEVEL</small>
        <strong id="level">1</strong>
      </div>

      <div class="stat">
        <small>🔥 REP</small>
        <strong id="rep">100</strong>
      </div>

      <div class="stat">
        <small>⛽ FUEL</small>
        <strong id="fuel">100%</strong>
      </div>
    </div>
  </header>

  <div class="toolbar">
    <button id="walkBtn">🚶 Walk</button>
    <button id="driveBtn">🚗 Drive</button>
    <button id="workBtn">💼 Work +₦75k</button>
    <button id="clubBtn">🎵 Clubs</button>
  </div>

  <main class="layout">

    <section class="map-wrap">
      <div class="map">

        <div class="road road1"></div>
        <div class="road road2"></div>
        <div class="road road3"></div>
        <div class="road road4"></div>

        <div class="house h1"></div>
        <div class="house h2"></div>
        <div class="house h3"></div>
        <div class="house h4"></div>
        <div class="house h5"></div>
        <div class="house h6"></div>
        <div class="house h7"></div>

        <div class="shop shop1">SHOP</div>
        <div class="shop shop2">MART</div>
        <div class="shop shop3">FOOD</div>

        <div class="tree t1"></div>
        <div class="tree t2"></div>
        <div class="tree t3"></div>
        <div class="tree t4"></div>
        <div class="tree t5"></div>
        <div class="tree t6"></div>
        <div class="tree t7"></div>

        <div class="light l1"></div>
        <div class="light l2"></div>
        <div class="light l3"></div>
        <div class="light l4"></div>

        <div class="city-car city-car1"></div>
        <div class="city-car city-car2"></div>
        <div class="city-car city-car3"></div>
        <div class="city-car city-car4"></div>

        ${zones.map((zone, index) => `
          <button
            class="zone-btn"
            style="left:${zone[1]}%;top:${zone[2]}%"
            data-zone="${index}"
          >
            📍 ${zone[0]}
          </button>
        `).join("")}

        ${properties.map((property, index) => `
          <button
            class="property"
            id="property-${index}"
            style="left:${property.x}%;top:${property.y}%"
            data-property="${index}"
            title="${property.name}"
          >
            🏠
          </button>
        `).join("")}

        <div id="player"></div>
        <div id="player-car" style="display:none;"></div>

      </div>
    </section>

    <aside class="sidebar">

      <section class="panel">
        <h3>📍 Current Location</h3>
        <div class="info">
          Zone: <strong id="zone">Fire Service</strong><br>
          Status: <strong id="status">Walking</strong>
        </div>
      </section>

      <section class="panel">
        <h3>🏠 Properties</h3>

        <div class="info">
          Owned: <strong id="ownedCount">0 / 4</strong>
        </div>

        <div id="propertyInfo" class="property-info">
          Tap a 🏠 house on the map to view the property.
        </div>

        <button id="buyPropertyBtn" class="buy-btn" disabled>
          🔑 Buy House
        </button>
      </section>

      <section class="panel">
        <h3>🎵 Nightlife</h3>

        <button class="club-btn" data-club="0">
          🎧 Cartel Lifestyle
        </button>

        <button class="club-btn" data-club="1">
          🎶 De Angels
        </button>
      </section>

      <section class="panel">
        <h3>🎮 Controls</h3>

        <div class="info">
          Desktop: WASD or Arrow Keys<br>
          Walk = normal movement<br>
          Drive = faster movement + fuel
        </div>

        <div class="mobile-controls">
          <button class="empty">•</button>
          <button data-move="up">⬆️</button>
          <button class="empty">•</button>

          <button data-move="left">⬅️</button>
          <button data-move="down">⬇️</button>
          <button data-move="right">➡️</button>
        </div>
      </section>

      <section class="panel">
        <h3>📜 Activity</h3>
        <div id="log" class="log"></div>
      </section>

    </aside>

  </main>
</div>
`;

const cashEl = document.querySelector("#cash");
const levelEl = document.querySelector("#level");
const repEl = document.querySelector("#rep");
const fuelEl = document.querySelector("#fuel");
const zoneEl = document.querySelector("#zone");
const statusEl = document.querySelector("#status");
const playerEl = document.querySelector("#player");
const playerCarEl = document.querySelector("#player-car");
const logEl = document.querySelector("#log");
const propertyInfoEl = document.querySelector("#propertyInfo");
const buyPropertyBtn = document.querySelector("#buyPropertyBtn");
const ownedCountEl = document.querySelector("#ownedCount");

let selectedProperty = null;

function money(value) {
  return "₦" + value.toLocaleString("en-NG");
}

function update() {
  cashEl.textContent = money(player.cash);
  levelEl.textContent = player.level;
  repEl.textContent = player.reputation;
  fuelEl.textContent = Math.max(0, Math.floor(player.fuel)) + "%";
  zoneEl.textContent = player.zone;
  statusEl.textContent = player.mode === "Drive" ? "Driving" : "Walking";

  playerEl.style.left = player.x + "%";
  playerEl.style.top = player.y + "%";

  playerCarEl.style.left = player.x + "%";
  playerCarEl.style.top = player.y + "%";

  if (player.mode === "Drive") {
    playerEl.style.display = "none";
    playerCarEl.style.display = "block";
  } else {
    playerEl.style.display = "block";
    playerCarEl.style.display = "none";
  }

  updateProperties();
}

function log(message) {
  const entry = document.createElement("div");
  entry.textContent = "• " + message;
  logEl.prepend(entry);
}

function setMode(mode) {
  if (mode === "Drive" && player.fuel <= 0) {
    log("⛽ You are out of fuel.");
    return;
  }

  player.mode = mode;

  if (mode === "Drive") {
    log("🚗 You are now driving around Owerri.");
  } else {
    log("🚶 You are now walking.");
  }

  update();
}

function work() {
  player.cash += 75000;
  player.reputation += 5;

  const needed = player.level * 150;

  if (player.reputation >= needed) {
    player.level++;
    log("🎉 Level up! You reached Level " + player.level + ".");
  }

  log("💼 You completed a job and earned ₦75,000.");
  update();
}

function travel(index) {
  const zone = zones[index];

  player.x = zone[1];
  player.y = zone[2];
  player.zone = zone[0];
  player.reputation += 2;

  log("📍 You travelled to " + zone[0] + ".");
  update();
}

function joinClub(index) {
  const club = clubs[index];

  player.reputation += 10;

  log("🎵 You visited " + club + " and gained reputation.");
  update();
}

function visitClub() {
  const index = zones.findIndex(z => z[0] === "Douglas");

  if (index !== -1) {
    travel(index);
  }
}

function movePlayer(direction) {
  let step = player.mode === "Drive" ? 3 : 1.5;

  if (player.mode === "Drive") {
    if (player.fuel <= 0) {
      log("⛽ Your car has run out of fuel.");
      setMode("Walk");
      return;
    }

    player.fuel -= 0.4;
  }

  if (direction === "up") {
    player.y -= step;
  }

  if (direction === "down") {
    player.y += step;
  }

  if (direction === "left") {
    player.x -= step;
  }

  if (direction === "right") {
    player.x += step;
  }

  player.x = Math.max(2, Math.min(98, player.x));
  player.y = Math.max(5, Math.min(95, player.y));

  update();
}

function selectProperty(index) {
  selectedProperty = index;

  const property = properties[index];

  const ownedText = property.owned
    ? "✅ YOU OWN THIS PROPERTY"
    : "🏷️ Available for purchase";

  propertyInfoEl.innerHTML = `
    <strong>${property.name}</strong><br>
    ${property.description}<br><br>
    💰 Price: <strong>${money(property.price)}</strong><br>
    ${ownedText}
  `;

  buyPropertyBtn.disabled = property.owned;

  if (property.owned) {
    buyPropertyBtn.textContent = "✅ Property Owned";
  } else {
    buyPropertyBtn.textContent = "🔑 Buy House";
  }

  update();
}

function updateProperties() {
  const owned = properties.filter(property => property.owned).length;

  ownedCountEl.textContent = owned + " / " + properties.length;

  properties.forEach((property, index) => {
    const marker = document.querySelector("#property-" + index);

    if (!marker) return;

    if (property.owned) {
      marker.textContent = "🔑";
      marker.classList.add("owned");
    } else {
      marker.textContent = "🏠";
      marker.classList.remove("owned");
    }
  });

  if (selectedProperty !== null) {
    const property = properties[selectedProperty];

    const ownedText = property.owned
      ? "✅ YOU OWN THIS PROPERTY"
      : "🏷️ Available for purchase";

    propertyInfoEl.innerHTML = `
      <strong>${property.name}</strong><br>
      ${property.description}<br><br>
      💰 Price: <strong>${money(property.price)}</strong><br>
      ${ownedText}
    `;

    buyPropertyBtn.disabled = property.owned;

    if (property.owned) {
      buyPropertyBtn.textContent = "✅ Property Owned";
    } else {
      buyPropertyBtn.textContent = "🔑 Buy House";
    }
  }
}

function buyProperty() {
  if (selectedProperty === null) {
    log("🏠 Select a property first.");
    return;
  }

  const property = properties[selectedProperty];

  if (property.owned) {
    log("🏠 You already own this property.");
    return;
  }

  if (player.cash < property.price) {
    log("❌ You do not have enough money to buy this house.");
    return;
  }

  player.cash -= property.price;
  property.owned = true;
  player.reputation += 15;

  log(
    "🎉 Congratulations! You bought " +
    property.name +
    " for " +
    money(property.price) +
    "."
  );

  log("🔑 This property is now YOUR PROPERTY.");

  update();
}

document.querySelector("#walkBtn").addEventListener("click", () => {
  setMode("Walk");
});

document.querySelector("#driveBtn").addEventListener("click", () => {
  setMode("Drive");
});

document.querySelector("#workBtn").addEventListener("click", work);

document.querySelector("#clubBtn").addEventListener("click", visitClub);

document.querySelector("#buyPropertyBtn").addEventListener("click", buyProperty);

document.querySelectorAll("[data-zone]").forEach(button => {
  button.addEventListener("click", () => {
    travel(Number(button.dataset.zone));
  });
});

document.querySelectorAll("[data-property]").forEach(button => {
  button.addEventListener("click", () => {
    selectProperty(Number(button.dataset.property));
  });
});

document.querySelectorAll("[data-club]").forEach(button => {
  button.addEventListener("click", () => {
    joinClub(Number(button.dataset.club));
  });
});

document.querySelectorAll("[data-move]").forEach(button => {
  button.addEventListener("click", () => {
    movePlayer(button.dataset.move);
  });
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();

  if (key === "w" || event.key === "ArrowUp") {
    movePlayer("up");
  }

  if (key === "s" || event.key === "ArrowDown") {
    movePlayer("down");
  }

  if (key === "a" || event.key === "ArrowLeft") {
    movePlayer("left");
  }

  if (key === "d" || event.key === "ArrowRight") {
    movePlayer("right");
  }
});

log("🌆 Welcome to Owerri Lifestyle.");
log("🏠 Four properties are available to buy.");
log("💡 Tap a 🏠 marker to inspect a property.");

update();
