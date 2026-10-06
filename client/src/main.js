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
    description: "A premium apartment close to downtown nightlife.",
    owned: false
  },
  {
    name: "Wetheral City Apartment",
    x: 72,
    y: 30,
    price: 1200000,
    description: "A modern apartment in the heart of the city.",
    owned: false
  },
  {
    name: "New Owerri Villa",
    x: 80,
    y: 72,
    price: 2500000,
    description: "A beautiful villa in a growing residential area.",
    owned: false
  },
  {
    name: "Nekede Starter House",
    x: 11,
    y: 68,
    price: 650000,
    description: "An affordable home close to the student district.",
    owned: false
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
}

.map {
  position: absolute;
  inset: 0;
  background: #4c8548;
}

.road {
  position: absolute;
  background: #303842;
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

.property {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 42px;
  height: 42px;
  border: 2px solid #f4d35e;
  background: rgba(16,24,39,.95);
  border-radius: 50%;
  font-size: 21px;
  cursor: pointer;
  z-index: 12;
}

.property.owned {
  border-color: #22c55e;
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

.sidebar {
  background: #101722;
  border: 1px solid #263244;
  border-radius: 18px;
  padding: 14px;
  max-height: 650px;
  overflow-y: auto;
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
  font-size: 12px;
  line-height: 1.6;
  min-height: 90px;
}

.buy-btn,
.enter-btn {
  width: 100%;
  margin-top: 9px;
  padding: 12px;
  border: 0;
  border-radius: 10px;
  font-weight: 900;
  cursor: pointer;
}

.buy-btn {
  background: #eab308;
  color: #171717;
}

.enter-btn {
  background: #22c55e;
  color: #052e16;
}

.buy-btn:disabled,
.enter-btn:disabled {
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

/* HOUSE INTERIOR */

.interior {
  display: none;
  position: absolute;
  inset: 0;
  z-index: 100;
  background: #c7b299;
  color: #171717;
}

.interior.active {
  display: block;
}

.interior-header {
  height: 58px;
  background: #171c24;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
}

.interior-title {
  font-weight: 900;
}

.leave-house {
  border: 0;
  background: #dc2626;
  color: white;
  border-radius: 9px;
  padding: 9px 13px;
  font-weight: 800;
  cursor: pointer;
}

.room {
  position: absolute;
  inset: 58px 0 0;
  background:
    linear-gradient(#d6c4ad 0 65%, #8a6549 65% 100%);
  overflow: hidden;
}

.wall {
  position: absolute;
  left: 5%;
  right: 5%;
  top: 7%;
  height: 54%;
  background: #eadcc9;
  border: 8px solid #8d674d;
  border-bottom-width: 12px;
}

.window {
  position: absolute;
  left: 13%;
  top: 14%;
  width: 105px;
  height: 85px;
  background: #8ec5e6;
  border: 9px solid #704b37;
}

.window::after {
  content: "";
  position: absolute;
  left: 47%;
  top: 0;
  bottom: 0;
  width: 5px;
  background: #704b37;
}

.window::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 47%;
  height: 5px;
  background: #704b37;
}

.tv {
  position: absolute;
  right: 14%;
  top: 18%;
  width: 135px;
  height: 80px;
  background: #111827;
  border: 8px solid #30343b;
  border-radius: 5px;
}

.tv::after {
  content: "OWERRI LIFE";
  color: #67e8f9;
  font-size: 10px;
  font-weight: 900;
  position: absolute;
  top: 30px;
  left: 25px;
}

.sofa {
  position: absolute;
  left: 14%;
  bottom: 16%;
  width: 230px;
  height: 75px;
  background: #31566b;
  border-radius: 20px 20px 8px 8px;
  border: 6px solid #253b4a;
}

.sofa::before {
  content: "";
  position: absolute;
  left: -12px;
  bottom: 0;
  width: 24px;
  height: 65px;
  background: #253b4a;
  border-radius: 10px;
}

.table {
  position: absolute;
  right: 18%;
  bottom: 16%;
  width: 125px;
  height: 55px;
  background: #704b37;
  border-radius: 10px;
}

.table::before,
.table::after {
  content: "";
  position: absolute;
  bottom: -42px;
  width: 9px;
  height: 45px;
  background: #4d3326;
}

.table::before {
  left: 15px;
}

.table::after {
  right: 15px;
}

.rug {
  position: absolute;
  left: 32%;
  right: 32%;
  bottom: 7%;
  height: 65px;
  background: #7d3f4a;
  border-radius: 50%;
  border: 5px solid #63303a;
}

.bedroom-door {
  position: absolute;
  right: 8%;
  top: 18%;
  width: 70px;
  height: 145px;
  background: #714c35;
  border: 7px solid #4c3426;
}

.bedroom-door::after {
  content: "BEDROOM";
  position: absolute;
  color: white;
  font-size: 8px;
  font-weight: bold;
  transform: rotate(-90deg);
  top: 63px;
  left: 15px;
}

.interior-note {
  position: absolute;
  bottom: 9%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,.75);
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 12px;
  text-align: center;
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
      >
        🏠
      </button>
    `).join("")}

    <div id="player"></div>
    <div id="player-car" style="display:none;"></div>

    <div id="interior" class="interior">

      <div class="interior-header">
        <div>
          <div class="interior-title">🏠 <span id="interiorName">My Home</span></div>
        </div>

        <button id="leaveHouse" class="leave-house">
          🚪 Leave House
        </button>
      </div>

      <div class="room">

        <div class="wall"></div>

        <div class="window"></div>

        <div class="tv"></div>

        <div class="bedroom-door"></div>

        <div class="sofa"></div>

        <div class="table"></div>

        <div class="rug"></div>

        <div class="interior-note">
          🛋️ Welcome home!<br>
          Your Owerri Life home is yours.
        </div>

      </div>

    </div>

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

  <button id="enterHouseBtn" class="enter-btn" disabled>
    🚪 Enter House
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
const enterHouseBtn = document.querySelector("#enterHouseBtn");
const ownedCountEl = document.querySelector("#ownedCount");

const interior = document.querySelector("#interior");
const interiorName = document.querySelector("#interiorName");
const leaveHouseBtn = document.querySelector("#leaveHouse");

let selectedProperty = null;

function money(value) {
  return "₦" + value.toLocaleString("en-NG");
}

function log(message) {
  const entry = document.createElement("div");
  entry.textContent = "• " + message;
  logEl.prepend(entry);
}

function update() {

  cashEl.textContent = money(player.cash);
  levelEl.textContent = player.level;
  repEl.textContent = player.reputation;
  fuelEl.textContent = Math.max(0, Math.floor(player.fuel)) + "%";

  zoneEl.textContent = player.zone;

  statusEl.textContent =
    player.mode === "Drive"
      ? "Driving"
      : "Walking";

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

  player.reputation += 10
