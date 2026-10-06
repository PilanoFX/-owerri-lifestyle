const zones = [
  ["IMSU Junction", 50, 25, "Campus district"],
  ["Fire Service", 43, 43, "City hub"],
  ["Douglas", 55, 45, "Downtown"],
  ["Wetheral", 64, 36, "Urban corridor"],
  ["New Owerri", 70, 66, "Residential"],
  ["Nekede", 18, 56, "Student district"],
  ["FUTO", 30, 75, "University area"]
];

const clubs = ["Cartel Lifestyle", "De Angels"];

const player = {
  name: "Player",
  x: 50,
  y: 72,
  cash: 2500000,
  level: 1,
  reputation: 100,
  zone: "New Owerri",
  mode: "Walk"
};

const app = document.querySelector("#app");

app.innerHTML = `
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #101217;
  font-family: Arial, sans-serif;
  color: white;
}

.game {
  min-height: 100vh;
  padding: 12px;
}

header {
  text-align: center;
  margin-bottom: 10px;
}

header h1 {
  margin: 5px 0;
  font-size: 25px;
}

header p {
  margin: 0;
  opacity: .65;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-bottom: 10px;
}

.stats div {
  background: #1c2028;
  padding: 9px 4px;
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
}

.toolbar {
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 8px;
}

.toolbar button,
.club,
.control {
  border: 0;
  border-radius: 10px;
  padding: 10px 12px;
  background: #292f3b;
  color: white;
  font-weight: bold;
}

main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.house {
  position: relative;
  height: 600px;
  overflow: hidden;
  border-radius: 18px;
  background:
    linear-gradient(135deg, #7fb36a 0 25%, #679454 25% 100%);
  box-shadow: 0 12px 35px rgba(0,0,0,.45);
}

.house-title {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 20;
  background: rgba(0,0,0,.55);
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: bold;
}

/* House floor */
.floor {
  position: absolute;
  width: 88%;
  height: 78%;
  left: 6%;
  top: 12%;
  background: #eeeae0;
  transform: skewY(-18deg);
  border: 5px solid #34363b;
  box-shadow: 15px 18px 0 rgba(0,0,0,.18);
}

/* Rooms */
.room {
  position: absolute;
  background: #f7f5ef;
  border: 4px solid #33363b;
  z-index: 3;
}

.living {
  left: 8%;
  top: 18%;
  width: 42%;
  height: 37%;
}

.bedroom {
  left: 51%;
  top: 18%;
  width: 41%;
  height: 37%;
}

.kitchen {
  left: 8%;
  top: 56%;
  width: 42%;
  height: 34%;
}

.bathroom {
  left: 51%;
  top: 56%;
  width: 41%;
  height: 34%;
}

.room-name {
  position: absolute;
  top: 7px;
  left: 8px;
  color: #444;
  font-size: 11px;
  font-weight: bold;
}

/* Furniture */
.sofa {
  position: absolute;
  width: 42%;
  height: 24%;
  left: 8%;
  bottom: 16%;
  background: #b73535;
  border-radius: 8px;
  box-shadow: 0 5px 0 #762020;
}

.table {
  position: absolute;
  width: 25%;
  height: 18%;
  left: 55%;
  top: 42%;
  background: #b9844f;
  border-radius: 50%;
}

.tv {
  position: absolute;
  width: 28%;
  height: 14%;
  right: 8%;
  top: 12%;
  background: #191b20;
  border: 5px solid #555;
  border-radius: 5px;
}

.bed {
  position: absolute;
  width: 55%;
  height: 47%;
  left: 23%;
  top: 25%;
  background: #7e54b7;
  border: 7px solid #875e38;
  border-radius: 5px;
}

.pillow {
  position: absolute;
  width: 35%;
  height: 23%;
  left: 10%;
  top: 8%;
  background: #eee;
  border-radius: 5px;
}

.kitchen-counter {
  position: absolute;
  width: 75%;
  height: 20%;
  left: 12%;
  top: 17%;
  background: #c7c1b7;
  border: 4px solid #777;
}

.fridge {
  position: absolute;
  width: 20%;
  height: 48%;
  right: 8%;
  top: 38%;
  background: #ddd;
  border: 4px solid #aaa;
}

.bathtub {
  position: absolute;
  width: 65%;
  height: 35%;
  left: 17%;
  top: 30%;
  background: white;
  border: 5px solid #bbb;
  border-radius: 40%;
}

/* Player */
.player {
  position: absolute;
  z-index: 15;
  width: 35px;
  height: 45px;
  left: 50%;
  top: 68%;
  transform: translate(-50%, -50%);
  transition: left .08s, top .08s;
}

.player-head {
  width: 17px;
  height: 17px;
  margin: auto;
  background: #c98b68;
  border-radius: 50%;
  border: 2px solid #333;
}

.player-body {
  width: 23px;
  height: 25px;
  margin: 2px auto;
  background: #2877bd;
  border-radius: 8px 8px 4px 4px;
}

.player-shadow {
  width: 32px;
  height: 8px;
  margin: -3px auto 0;
  background: rgba(0,0,0,.25);
  border-radius: 50%;
}

.controls {
  display: grid;
  grid-template-columns: repeat(3, 55px);
  justify-content: center;
  gap: 7px;
  margin-top: 10px;
}

.control {
  height: 50px;
  font-size: 20px;
  padding: 0;
}

.control:nth-child(1) {
  grid-column: 2;
}

.control:nth-child(2) {
  grid-column: 1;
}

.control:nth-child(3) {
  grid-column: 2;
}

.control:nth-child(4) {
  grid-column: 3;
}

.info {
  background: #1b1f27;
  border-radius: 14px;
  padding: 14px;
}

.info h2 {
  margin-top: 0;
}

.action {
  width: 100%;
  margin-top: 7px;
  padding: 11px;
  border: 0;
  border-radius: 9px;
  background: #303744;
  color: white;
  font-weight: bold;
}

@media (min-width: 800px) {
  main {
    flex-direction: row;
  }

  .house {
    flex: 1;
  }

  .info {
    width: 300px;
  }
}
</style>

<div class="game">

<header>
  <h1>🏙️ Owerri Lifestyle</h1>
  <p>Welcome to your new home in Owerri</p>
</header>

<section class="stats">
  <div>💰 ₦<span id="cash"></span></div>
  <div>⭐ Level <span id="level"></span></div>
  <div>🔥 Rep <span id="rep"></span></div>
  <div>🟢 Online <span id="online">1</span></div>
</section>

<section class="toolbar">
  <button onclick="setMode('Walk')">🚶 Walk</button>
  <button onclick="setMode('Drive')">🚗 Drive</button>
  <button onclick="work()">💼 Work</button>
  <button onclick="visitClub()">🎵 Clubs</button>
</section>

<main>

<section class="house" id="house">

<div class="house-title">🏠 My House • New Owerri</div>

<div class="floor">

<div class="room living">
  <span class="room-name">LIVING ROOM</span>
  <div class="sofa"></div>
  <div class="table"></div>
  <div class="tv"></div>
</div>

<div class="room bedroom">
  <span class="room-name">BEDROOM</span>
  <div class="bed">
    <div class="pillow"></div>
  </div>
</div>

<div class="room kitchen">
  <span class="room-name">KITCHEN</span>
  <div class="kitchen-counter"></div>
  <div class="fridge"></div>
</div>

<div class="room bathroom">
  <span class="room-name">BATHROOM</span>
  <div class="bathtub"></div>
</div>

</div>

<div id="player" class="player">
  <div class="player-head"></div>
  <div class="player-body"></div>
  <div class="player-shadow"></div>
</div>

<div class="controls">
  <button class="control" onclick="movePlayer(0,-1)">⬆️</button>
  <button class="control" onclick="movePlayer(-1,0)">⬅️</button>
  <button class="control" onclick="movePlayer(0,1)">⬇️</button>
  <button class="control" onclick="movePlayer(1,0)">➡️</button>
</div>

</section>

<aside class="info">

<h2>📍 <span id="zoneName"></span></h2>

<p id="status"></p>

<button class="action" onclick="interact('🛋️ You are relaxing in the living room.')">
🛋️ Relax
</button>

<button class="action" onclick="interact('📺 You switched on the TV.')">
📺 Watch TV
</button>

<button class="action" onclick="interact('🛏️ You rested on your bed.')">
🛏️ Sleep
</button>

<button class="action" onclick="interact('🍳 You are preparing food in the kitchen.')">
🍳 Cook
</button>

<button class="action" onclick="interact('🛁 You entered the bathroom.')">
🛁 Bathroom
</button>

<h3>Activity</h3>

<div id="activity">
<p>Welcome home. Your Owerri journey begins here.</p>
</div>

</aside>

</main>

</div>
`;

function update() {
  document.querySelector("#cash").textContent =
    player.cash.toLocaleString();

  document.querySelector("#level").textContent =
    player.level;

  document.querySelector("#rep").textContent =
    player.reputation;

  document.querySelector("#zoneName").textContent =
    player.zone;

  document.querySelector("#status").textContent =
    `${player.mode} mode • You are at home in ${player.zone}.`;

  const p = document.querySelector("#player");

  p.style.left = `${player.x}%`;
  p.style.top = `${player.y}%`;
}

function log(message) {
  document.querySelector("#activity").innerHTML =
    `<p>${message}</p>` +
    document.querySelector("#activity").innerHTML;
}

window.setMode = function(mode) {
  player.mode = mode;

  log(`You switched to ${mode} mode.`);

  update();
};

window.work = function() {
  player.cash += 75000;
  player.reputation += 5;

  if (player.reputation >= player.level * 150) {
    player.level++;
    log(`🎉 Level up! You are now level ${player.level}.`);
  } else {
    log("💼 You worked and earned ₦75,000.");
  }

  update();
};

window.visitClub = function() {
  player.zone = "Douglas";
  log("🎵 You are heading toward the Douglas nightlife district.");
  update();
};

window.interact = function(message) {
  log(message);
};

window.movePlayer = function(dx, dy) {

  const step =
    player.mode === "Drive" ? 4 : 2;

  player.x += dx * step;
  player.y += dy * step;

  player.x = Math.max(10, Math.min(90, player.x));
  player.y = Math.max(20, Math.min(88, player.y));

  update();
};

document.addEventListener("keydown", (event) => {

  const key = event.key.toLowerCase();

  if (key === "w" || key === "arrowup") {
    movePlayer(0, -1);
  }

  if (key === "s" || key === "arrowdown") {
    movePlayer(0, 1);
  }

  if (key === "a" || key === "arrowleft") {
    movePlayer(-1, 0);
  }

  if (key === "d" || key === "arrowright") {
    movePlayer(1, 0);
  }
});

update();
