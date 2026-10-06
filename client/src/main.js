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
  fuel: 100,
  selectedProperty: null
};

const root = document.getElementById("root");

const style = document.createElement("style");

style.textContent = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #080b10;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  border: 0;
  border-radius: 10px;
  padding: 11px 14px;
  background: #1c2430;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  filter: brightness(1.15);
}

.app {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, rgba(31, 68, 100, .35), transparent 35%),
    #080b10;
}

.topbar {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 18px;
  background: #10151d;
  border-bottom: 1px solid #26303d;
  position: sticky;
  top: 0;
  z-index: 20;
}

.logo {
  font-size: 20px;
  font-weight: 900;
}

.logo span {
  color: #4dd0ff;
}

.stats {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.stat {
  background: #171e28;
  border: 1px solid #293442;
  padding: 8px 11px;
  border-radius: 9px;
  font-size: 12px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 310px;
  gap: 14px;
  padding: 14px;
}

.map-wrap {
  position: relative;
  min-height: 650px;
  overflow: hidden;
  border-radius: 18px;
  border: 1px solid #293442;
  background: #263b2d;
}

.map {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background:
    linear-gradient(90deg, transparent 48%, rgba(255,255,255,.06) 48%, rgba(255,255,255,.06) 52%, transparent 52%),
    linear-gradient(0deg, transparent 47%, rgba(255,255,255,.05) 47%, rgba(255,255,255,.05) 53%, transparent 53%),
    #29422e;
}

.road {
  position: absolute;
  background: #363b42;
  box-shadow: inset 0 0 0 2px rgba(255,255,255,.04);
}

.road.horizontal {
  left: 0;
  width: 100%;
  height: 42px;
}

.road.vertical {
  top: 0;
  height: 100%;
  width: 42px;
}

.road.r1 { top: 30%; }
.road.r2 { top: 60%; }
.road.r3 { top: 82%; }

.road.c1 { left: 25%; }
.road.c2 { left: 51%; }
.road.c3 { left: 73%; }

.road::after {
  content: "";
  position: absolute;
  background: repeating-linear-gradient(
    90deg,
    transparent 0 22px,
    rgba(255,220,80,.8) 22px 38px
  );
  height: 3px;
  left: 0;
  right: 0;
  top: 19px;
}

.road.vertical::after {
  top: 0;
  bottom: 0;
  left: 19px;
  right: auto;
  width: 3px;
  height: auto;
  background: repeating-linear-gradient(
    0deg,
    transparent 0 22px,
    rgba(255,220,80,.8) 22px 38px
  );
}

.city-block {
  position: absolute;
  background: #315437;
  border: 1px solid rgba(255,255,255,.05);
}

.block1 { left: 3%; top: 5%; width: 18%; height: 18%; }
.block2 { left: 29%; top: 5%; width: 17%; height: 20%; }
.block3 { left: 55%; top: 5%; width: 15%; height: 20%; }
.block4 { left: 77%; top: 7%; width: 17%; height: 18%; }
.block5 { left: 3%; top: 38%; width: 18%; height: 17%; }
.block6 { left: 28%; top: 37%; width: 17%; height: 18%; }
.block7 { left: 56%; top: 39%; width: 14%; height: 16%; }
.block8 { left: 78%; top: 39%; width: 17%; height: 16%; }
.block9 { left: 4%; top: 65%; width: 17%; height: 26%; }
.block10 { left: 29%; top: 64%; width: 17%; height: 27%; }
.block11 { left: 56%; top: 64%; width: 14%; height: 27%; }
.block12 { left: 78%; top: 64%; width: 17%; height: 27%; }

.tree {
  position: absolute;
  width: 14px;
  height: 14px;
  background: #173d20;
  border-radius: 50%;
  box-shadow: 0 2px 0 #102718;
}

.t1 { left: 8%; top: 10%; }
.t2 { left: 17%; top: 20%; }
.t3 { left: 34%; top: 12%; }
.t4 { left: 63%; top: 14%; }
.t5 { left: 87%; top: 14%; }
.t6 { left: 10%; top: 47%; }
.t7 { left: 39%; top: 47%; }
.t8 { left: 84%; top: 48%; }
.t9 { left: 15%; top: 78%; }
.t10 { left: 39%; top: 83%; }
.t11 { left: 63%; top: 82%; }
.t12 { left: 89%; top: 82%; }

.zone {
  position: absolute;
  transform: translate(-50%, -50%);
  background: rgba(7, 12, 18, .82);
  border: 1px solid rgba(77,208,255,.5);
  padding: 7px 9px;
  border-radius: 9px;
  font-size: 11px;
  white-space: nowrap;
  z-index: 4;
}

.zone strong {
  display: block;
  color: #4dd0ff;
}

.player {
  position: absolute;
  width: 24px;
  height: 32px;
  transform: translate(-50%, -50%);
  z-index: 10;
  transition: left .12s, top .12s;
}

.person {
  width: 18px;
  height: 18px;
  margin: auto;
  border-radius: 50%;
  background: #f1c27d;
  border: 3px solid #151a21;
  position: relative;
}

.person::after {
  content: "";
  position: absolute;
  left: 1px;
  right: 1px;
  top: 15px;
  height: 14px;
  background: #4d7cff;
  border-radius: 7px 7px 3px 3px;
}

.car {
  width: 38px;
  height: 20px;
  margin-top: 7px;
  background: #d62828;
  border-radius: 7px;
  border: 2px solid #151515;
  position: relative;
}

.car::before,
.car::after {
  content: "";
  position: absolute;
  width: 9px;
  height: 9px;
  background: #111;
  border-radius: 50%;
  bottom: -6px;
}

.car::before { left: 4px; }
.car::after { right: 4px; }

.car-window {
  position: absolute;
  width: 15px;
  height: 8px;
  left: 10px;
  top: 2px;
  background: #9bd9ff;
  border-radius: 3px;
}

.property-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 6;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #f6c344;
  color: #151515;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  border: 3px solid #fff;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,.4);
}

.property-marker.owned {
  background: #49d17d;
}

.side {
  background: #10151d;
  border: 1px solid #293442;
  border-radius: 18px;
  padding: 14px;
  min-height: 650px;
}

.panel {
  background: #151c25;
  border: 1px solid #293442;
  border-radius: 14px;
  padding: 13px;
  margin-bottom: 12px;
}

.panel h3 {
  margin: 0 0 10px;
  font-size: 15px;
}

.mode-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.action {
  width: 100%;
  margin-top: 7px;
}

.primary {
  background: #1769aa;
}

.success {
  background: #16834a;
}

.danger {
  background: #9d2525;
}

.muted {
  color: #98a5b5;
  font-size: 12px;
}

.log {
  max-height: 170px;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.5;
}

.log div {
  padding: 5px 0;
  border-bottom: 1px solid #232d38;
}

.mobile-controls {
  display: grid;
  grid-template-columns: repeat(3, 50px);
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
}

.mobile-controls button {
  height: 45px;
  padding: 0;
}

.mobile-controls .empty {
  visibility: hidden;
}

.interior {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 100;
  background: #111;
}

.interior.active {
  display: block;
}

.interior-top {
  height: 65px;
  padding: 12px 18px;
  background: #171d25;
  border-bottom: 1px solid #303a47;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.interior-room {
  position: absolute;
  inset: 65px 0 0;
  background:
    linear-gradient(#d8c4a4 0 56%, #76533a 56% 100%);
  overflow: hidden;
}

.window {
  position: absolute;
  top: 10%;
  left: 15%;
  width: 180px;
  height: 125px;
  background: linear-gradient(#74c7f5, #b9ecff);
  border: 12px solid #eee;
}

.window::after {
  content: "";
  position: absolute;
  width: 5px;
  top: 0;
  bottom: 0;
  left: 50%;
  background: #eee;
}

.window::before {
  content: "";
  position: absolute;
  height: 5px;
  left: 0;
  right: 0;
  top: 50%;
  background: #eee;
}

.tv {
  position: absolute;
  right: 13%;
  top: 15%;
  width: 230px;
  height: 140px;
  background: #090b0e;
  border: 8px solid #222;
  border-radius: 8px;
}

.tv::after {
  content: "OWERRI";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #4dd0ff;
  font-weight: 900;
  font-size: 24px;
}

.sofa {
  position: absolute;
  left: 12%;
  bottom: 17%;
  width: 300px;
  height: 90px;
  background: #493f62;
  border-radius: 25px 25px 8px 8px;
}

.sofa::before {
  content: "";
  position: absolute;
  left: 15px;
  right: 15px;
  top: -35px;
  height: 50px;
  background: #493f62;
  border-radius: 25px 25px 0 0;
}

.table {
  position: absolute;
  right: 32%;
  bottom: 14%;
  width: 160px;
  height: 70px;
  background: #70492e;
  border-radius: 10px;
}

.table::before,
.table::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 70px;
  background: #4a2e1d;
  bottom: -60px;
}

.table::before { left: 15px; }
.table::after { right: 15px; }

.rug {
  position: absolute;
  left: 30%;
  bottom: 8%;
  width: 400px;
  height: 110px;
  background: #8a3541;
  border-radius: 50%;
}

.bedroom-door {
  position: absolute;
  right: 5%;
  bottom: 0;
  width: 130px;
  height: 260px;
  background: #5d3827;
  border: 8px solid #392319;
}

.bedroom-door::after {
  content: "";
  position: absolute;
  right: 15px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d6b15a;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }

  .side {
    min-height: auto;
  }

  .map-wrap {
    min-height: 560px;
  }
}

@media (max-width: 600px) {
  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .stats {
    width: 100%;
  }

  .layout {
    padding: 8px;
  }

  .map-wrap {
    min-height: 500px;
  }

  .zone {
    font-size: 9px;
  }

  .window {
    width: 120px;
    height: 90px;
  }

  .tv {
    width: 150px;
    height: 90px;
  }

  .sofa {
    width: 220px;
  }
}
`;

document.head.appendChild(style);

root.innerHTML = `
<div class="app">

  <div class="topbar">
    <div class="logo">🌆 Owerri <span>Lifestyle</span></div>

    <div class="stats">
      <div class="stat">💰 <span id="cash">₦2,500,000</span></div>
      <div class="stat">⭐ Level <span id="level">1</span></div>
      <div class="stat">❤️ Rep <span id="rep">100</span></div>
      <div class="stat">⛽ Fuel <span id="fuel">100%</span></div>
      <div class="stat">🚶 <span id="mode">Walk</span></div>
    </div>
  </div>

  <div class="layout">

    <div class="map-wrap">

      <div class="map" id="map">

        <div class="city-block block1"></div>
        <div class="city-block block2"></div>
        <div class="city-block block3"></div>
        <div class="city-block block4"></div>
        <div class="city-block block5"></div>
        <div class="city-block block6"></div>
        <div class="city-block block7"></div>
        <div class="city-block block8"></div>
        <div class="city-block block9"></div>
        <div class="city-block block10"></div>
        <div class="city-block block11"></div>
        <div class="city-block block12"></div>

        <div class="road horizontal r1"></div>
        <div class="road horizontal r2"></div>
        <div class="road horizontal r3"></div>

        <div class="road vertical c1"></div>
        <div class="road vertical c2"></div>
        <div class="road vertical c3"></div>

        <div class="tree t1"></div>
        <div class="tree t2"></div>
        <div class="tree t3"></div>
        <div class="tree t4"></div>
        <div class="tree t5"></div>
        <div class="tree t6"></div>
        <div class="tree t7"></div>
        <div class="tree t8"></div>
        <div class="tree t9"></div>
        <div class="tree t10"></div>
        <div class="tree t11"></div>
        <div class="tree t12"></div>

        <div id="zones"></div>
        <div id="properties"></div>

        <div class="player" id="player">
          <div class="person"></div>
        </div>

      </div>
    </div>

    <div class="side">

      <div class="panel">
        <h3>🚶 Movement</h3>

        <div class="mode-buttons">
          <button id="walkBtn" class="primary">🚶 Walk</button>
          <button id="driveBtn">🚗 Drive</button>
        </div>

        <div class="mobile-controls">
          <button class="empty"></button>
          <button data-move="up">▲</button>
          <button class="empty"></button>

          <button data-move="left">◀</button>
          <button data-move="down">▼</button>
          <button data-move="right">▶</button>
        </div>

        <p class="muted">
          Use the buttons or keyboard arrows/WASD.
        </p>
      </div>

      <div class="panel">
        <h3>💼 Life</h3>

        <button id="workBtn" class="action success">
          💼 Go To Work
        </button>

        <button id="travelBtn" class="action">
          🗺️ Travel
        </button>

        <button id="clubBtn" class="action">
          🎵 Join Club
        </button>

        <button id="visitClubBtn" class="action">
          🍾 Visit Club
        </button>
      </div>

      <div class="panel">
        <h3>🏠 Properties</h3>

        <div id="propertyInfo" class="muted">
          Select a yellow house marker on the map.
        </div>

        <button id="buyBtn" class="action success" style="display:none;">
          🏠 Buy House
        </button>

        <button id="enterBtn" class="action primary" style="display:none;">
          🚪 Enter House
        </button>
      </div>

      <div class="panel">
        <h3>📱 Activity</h3>
        <div id="log" class="log"></div>
      </div>

    </div>

  </div>
</div>

<div class="interior" id="interior">

  <div class="interior-top">
    <strong id="interiorTitle">🏠 My House</strong>
    <button id="leaveHouse" class="danger">Leave House</button>
  </div>

  <div class="interior-room">
    <div class="window"></div>
    <div class="tv"></div>
    <div class="sofa"></div>
    <div class="table"></div>
    <div class="rug"></div>
    <div class="bedroom-door"></div>
  </div>

</div>
`;

const cashEl = document.getElementById("cash");
const levelEl = document.getElementById("level");
const repEl = document.getElementById("rep");
const fuelEl = document.getElementById("fuel");
const modeEl = document.getElementById("mode");
const playerEl = document.getElementById("player");
const zonesEl = document.getElementById("zones");
const propertiesEl = document.getElementById("properties");
const propertyInfoEl = document.getElementById("propertyInfo");
const buyBtn = document.getElementById("buyBtn");
const enterBtn = document.getElementById("enterBtn");
const logEl = document.getElementById("log");
const interior = document.getElementById("interior");
const interiorTitle = document.getElementById("interiorTitle");

function money(value) {
  return "₦" + Math.max(0, Math.floor(value)).toLocaleString();
}

function log(message) {
  const item = document.createElement("div");
  item.textContent = message;

  logEl.prepend(item);

  while (logEl.children.length > 8) {
    logEl.removeChild(logEl.lastChild);
  }
}

function update() {
  cashEl.textContent = money(player.cash);
  levelEl.textContent = player.level;
  repEl.textContent = player.reputation;
  fuelEl.textContent = player.fuel + "%";
  modeEl.textContent = player.mode;

  playerEl.style.left = player.x + "%";
  playerEl.style.top = player.y + "%";

  if (player.mode === "Drive") {
    playerEl.innerHTML = `
      <div class="car">
        <div class="car-window"></div>
      </div>
    `;
  } else {
    playerEl.innerHTML = `
      <div class="person"></div>
    `;
  }

  updateZone();
  updateProperties();
}

function updateZone() {
  let closest = zones[0];
  let distance = Infinity;

  for (const zone of zones) {
    const dx = player.x - zone[1];
    const dy = player.y - zone[2];
    const d = Math.sqrt(dx * dx + dy * dy);

    if (d < distance) {
      distance = d;
      closest = zone;
    }
  }

  player.zone = closest[0];
}

function renderZones() {
  zonesEl.innerHTML = "";

  zones.forEach(zone => {
    const el = document.createElement("div");

    el.className = "zone";
    el.style.left = zone[1] + "%";
    el.style.top = zone[2] + "%";

    el.innerHTML = `
      <strong>${zone[0]}</strong>
      <span>${zone[3]}</span>
    `;

    zonesEl.appendChild(el);
  });
}

function renderProperties() {
  propertiesEl.innerHTML = "";

  properties.forEach((property, index) => {
    const marker = document.createElement("button");

    marker.className =
      "property-marker" + (property.owned ? " owned" : "");

    marker.style.left = property.x + "%";
    marker.style.top = property.y + "%";

    marker.textContent = property.owned ? "✓" : "🏠";

    marker.title = property.name;

    marker.addEventListener("click", () => {
      selectProperty(index);
    });

    propertiesEl.appendChild(marker);
  });
}

function updateProperties() {
  renderProperties();

  const owned = properties.filter(property => property.owned).length;

  if (!player.selectedProperty) {
    propertyInfoEl.innerHTML = `
      <div>Select a yellow house marker on the map.</div>
      <br>
      <strong>Owned homes: ${owned}</strong>
    `;

    buyBtn.style.display = "none";
    enterBtn.style.display = "none";

    return;
  }

  const property = player.selectedProperty;

  propertyInfoEl.innerHTML = `
    <strong>${property.name}</strong>
    <br><br>
    ${property.description}
    <br><br>
    💰 Price: ${money(property.price)}
    <br>
    ${property.owned ? "✅ You own this property." : "🏷️ Available for purchase."}
    <br><br>
    🏠 Owned homes: ${owned}
  `;

  if (property.owned) {
    buyBtn.style.display = "none";
    enterBtn.style.display = "block";
  } else {
    buyBtn.style.display = "block";
    enterBtn.style.display = "none";
  }
}

function selectProperty(index) {
  player.selectedProperty = properties[index];

  log("🏠 Selected " + properties[index].name);

  updateProperties();
}

function buyProperty() {
  const property = player.selectedProperty;

  if (!property) {
    log("Select a house first.");
    return;
  }

  if (property.owned) {
    log("You already own this house.");
    return;
  }

  if (player.cash < property.price) {
    log("❌ You don't have enough money.");
    return;
  }

  player.cash -= property.price;
  property.owned = true;

  player.reputation += 10;

  log("🎉 Congratulations! You bought " + property.name + ".");

  update();
}

function enterHouse() {
  const property = player.selectedProperty;

  if (!property || !property
