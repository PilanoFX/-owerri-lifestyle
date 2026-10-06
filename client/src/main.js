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

const player = {
  name: "Player",
  x: 49,
  y: 38,
  cash: 2500000,
  level: 1,
  reputation: 100,
  zone: "Fire Service",
  mode: "Walk"
};

const root = document.querySelector("#root");

if (!root) {
  document.body.innerHTML =
    "<h1 style='color:red;padding:30px'>Game container missing</h1>";

  throw new Error("Missing #root");
}


/* =========================
   CITY STYLE
========================= */

const style = document.createElement("style");

style.textContent = `
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #080b10;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  overflow-x: hidden;
}

button {
  font-family: inherit;
}

.game {
  width: 100%;
  max-width: 1450px;
  margin: auto;
  padding: 20px;
}

/* HEADER */

header {
  padding: 24px;
  text-align: center;
  margin-bottom: 15px;

  background:
    linear-gradient(
      135deg,
      #19212c,
      #080c12
    );

  border: 1px solid #344050;
  border-radius: 20px;

  box-shadow:
    0 15px 40px rgba(0,0,0,.4);
}

header h1 {
  margin: 0;
  font-size: 34px;
}

header p {
  color: #aeb8c6;
}

/* STATS */

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.stats div {
  background: #151c26;
  border: 1px solid #303b4a;
  border-radius: 14px;
  padding: 15px;
  text-align: center;
  font-weight: bold;
}

/* TOOLBAR */

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.toolbar button {
  padding: 12px 18px;
  border: 1px solid #3b4656;
  border-radius: 12px;
  background: #202936;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.toolbar button:hover {
  background: #2e3948;
  transform: translateY(-2px);
}

/* MAIN */

main {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 310px;
  gap: 15px;
}

/* CITY MAP */

.map {
  position: relative;
  min-height: 680px;
  overflow: hidden;

  border-radius: 22px;
  border: 3px solid #3d4958;

  background:
    linear-gradient(
      135deg,
      #315b3b,
      #24462e
    );

  box-shadow:
    inset 0 0 120px rgba(0,0,0,.55),
    0 20px 50px rgba(0,0,0,.45);
}

/* GRASS DETAILS */

.map::before {
  content: "";
  position: absolute;
  inset: 0;

  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255,255,255,.04),
      transparent 25%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(255,255,255,.03),
      transparent 25%
    );

  pointer-events: none;
}

/* ROADS */

.road {
  position: absolute;
  z-index: 1;
  background: #292e35;

  box-shadow:
    inset 0 0 0 2px rgba(255,255,255,.05);
}

.road1 {
  width: 100%;
  height: 72px;
  top: 43%;
}

.road2 {
  width: 72px;
  height: 100%;
  left: 50%;
}

.road3 {
  width: 85%;
  height: 48px;
  left: 8%;
  top: 70%;
  transform: rotate(-8deg);
}

.road4 {
  width: 48px;
  height: 80%;
  left: 25%;
  top: 10%;
  transform: rotate(7deg);
}

/* ROAD MARKINGS */

.road1::after,
.road3::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  top: 50%;
  left: 0;

  background:
    repeating-linear-gradient(
      90deg,
      #e4d25d 0 30px,
      transparent 30px 55px
    );
}

.road2::after,
.road4::after {
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  left: 50%;
  top: 0;

  background:
    repeating-linear-gradient(
      0deg,
      #e4d25d 0 30px,
      transparent 30px 55px
    );
}

/* HOUSES */

.house {
  position: absolute;
  z-index: 2;

  width: 82px;
  height: 60px;

  background: #d7d0ba;
  border: 3px solid #746e60;
  border-radius: 5px;

  box-shadow:
    0 7px 14px rgba(0,0,0,.35);
}

.house::before {
  content: "";

  position: absolute;

  left: -7px;
  top: -22px;

  width: 0;
  height: 0;

  border-left: 48px solid transparent;
  border-right: 48px solid transparent;
  border-bottom: 25px solid #813f32;
}

.house::after {
  content: "";

  position: absolute;

  width: 15px;
  height: 20px;

  left: 32px;
  bottom: 0;

  background: #51483c;
}

/* WINDOWS */

.house-window {
  position: absolute;
  width: 13px;
  height: 13px;
  background: #86c6df;
  border: 2px solid #4c5559;
  z-index: 3;
}

/* HOUSES POSITIONS */

.h1 {
  left: 6%;
  top: 12%;
}

.h2 {
  left: 29%;
  top: 9%;
}

.h3 {
  left: 68%;
  top: 10%;
}

.h4 {
  left: 82%;
  top: 29%;
}

.h5 {
  left: 6%;
  top: 76%;
}

.h6 {
  left: 37%;
  top: 79%;
}

.h7 {
  left: 76%;
  top: 76%;
}

/* SHOPS */

.shop {
  position: absolute;
  z-index: 3;

  width: 90px;
  height: 62px;

  background: #e3a83b;

  border: 3px solid #8b6120;
  border-radius: 7px;

  box-shadow:
    0 7px 15px rgba(0,0,0,.4);
}

.shop::before {
  content: "SHOP";

  position: absolute;

  left: 8px;
  right: 8px;
  top: 7px;

  padding: 4px;

  text-align: center;

  color: white;
  background: #a52f2f;

  font-size: 11px;
  font-weight: bold;
}

.shop::after {
  content: "";

  position: absolute;

  width: 16px;
  height: 22px;

  left: 37px;
  bottom: 0;

  background: #513d29;
}

.shop1 {
  left: 14%;
  top: 36%;
}

.shop2 {
  left: 67%;
  top: 43%;
}

.shop3 {
  left: 33%;
  top: 58%;
}

/* TREES */

.tree {
  position: absolute;
  z-index: 3;
  font-size: 34px;

  filter:
    drop-shadow(
      0 5px 3px rgba(0,0,0,.4)
    );
}

.t1 {
  left: 2%;
  top: 30%;
}

.t2 {
  left: 24%;
  top: 3%;
}

.t3 {
  left: 72%;
  top: 52%;
}

.t4 {
  left: 92%;
  top: 61%;
}

.t5 {
  left: 15%;
  top: 67%;
}

.t6 {
  left: 57%;
  top: 85%;
}

.t7 {
  left: 88%;
  top: 10%;
}

/* STREET LIGHTS */

.street-light {
  position: absolute;
  z-index: 4;
  font-size: 25px;
}

.l1 {
  left: 42%;
  top: 37%;
}

.l2 {
  left: 58%;
  top: 37%;
}

.l3 {
  left: 42%;
  top: 51%;
}

.l4 {
  left: 58%;
  top: 51%;
}

/* CARS */

.car {
  position: absolute;
  z-index: 6;

  width: 48px;
  height: 25px;

  border-radius: 9px 9px 5px 5px;

  box-shadow:
    0 5px 8px rgba(0,0,0,.5);

  border: 2px solid rgba(0,0,0,.4);
}

.car::before {
  content: "";

  position: absolute;

  width: 18px;
  height: 10px;

  left: 13px;
  top: 3px;

  background: #9ed1e8;

  border-radius: 3px;
}

.car::after {
  content: "";

  position: absolute;

  width: 8px;
  height: 8px;

  left: 4px;
  bottom: -5px;

  border-radius: 50%;

  background: #111;

  box-shadow:
    31px 0 #111;
}

.car1 {
  background: #c72d2d;
  left: 34%;
  top: 40%;
}

.car2 {
  background: #e4c42c;
  left: 62%;
  top: 47%;
}

.car3 {
  background: #3477c7;
  left: 48%;
  top: 61%;
  transform: rotate(90deg);
}

.car4 {
  background: #eee;
  left: 19%;
  top: 43%;
}

/* LOCATION MARKERS */

.location {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 8;

  background: #101720;
  color: white;

  border: 2px solid rgba(255,255,255,.25);
  border-radius: 12px;

  padding: 9px 12px;

  font-size: 12px;
  font-weight: bold;

  cursor: pointer;

  box-shadow:
    0 7px 18px rgba(0,0,0,.55);
}

.location:hover {
  transform:
    translate(-50%, -50%)
    scale(1.08);

  background: #263343;
}

/* PLAYER */

.player {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 20;

  width: 55px;
  height: 55px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    rgba(255,196,0,.25);

  border: 3px solid white;

  font-size: 31px;

  box-shadow:
    0 0 0 5px rgba(255,196,0,.1),
    0 0 30px rgba(255,196,0,.6);

  transition:
    left .1s,
    top .1s;
}

/* SIDE PANEL */

aside {
  background: #151c26;

  border: 1px solid #303b4a;

  border-radius: 20px;

  padding: 20px;

  box-shadow:
    0 15px 35px rgba(0,0,0,.35);
}

aside h2 {
  margin-top: 0;
}

aside h3 {
  margin-top: 25px;
}

#status {
  color: #aeb8c6;
}

.club {
  display: block;
  width: 100%;

  margin: 8px 0;

  padding: 11px;

  border-radius: 11px;

  background: #202936;
  color: white;

  border: 1px solid #3a4656;

  cursor: pointer;
  font-weight: bold;
}

.club:hover {
  background: #2e3948;
}

/* ACTIVITY */

#activity {
  margin-top: 20px;

  background: #0d1219;

  border: 1px solid #293440;

  border-radius: 12px;

  padding: 12px;

  max-height: 220px;

  overflow-y: auto;
}

#activity p {
  color: #c6cfda;

  padding-bottom: 10px;

  border-bottom:
    1px solid #222b35;
}

/* MOBILE CONTROLS */

.mobile-controls {
  display: none;
}

.mobile-controls button {
  width: 60px;
  height: 52px;

  border-radius: 12px;

  background: #202936;
  color: white;

  border: 1px solid #3b4656;

  font-size: 20px;
}

/* MOBILE */

@media (max-width: 850px) {

  .game {
    padding: 10px;
  }

  header h1 {
    font-size: 25px;
  }

  .stats {
    grid-template-columns: repeat(2, 1fr);
  }

  main {
    grid-template-columns: 1fr;
  }

  .map {
    min-height: 520px;
  }

  aside {
    order: 2;
  }

  .mobile-controls {
    display: grid;

    grid-template-columns:
      repeat(3, 60px);

    justify-content: center;

    gap: 6px;

    margin-top: 15px;
  }

  .mobile-controls button:nth-child(1) {
    grid-column: 2;
  }

  .mobile-controls button:nth-child(2) {
    grid-column: 1;
  }

  .mobile-controls button:nth-child(3) {
    grid-column: 2;
  }

  .mobile-controls button:nth-child(4) {
    grid-column: 3;
  }

  .house,
  .shop {
    transform: scale(.75);
  }

  .location {
    font-size: 9px;
    padding: 6px 8px;
  }
}
`;

document.head.appendChild(style);


/* =========================
   GAME HTML
========================= */

root.innerHTML = `
<div class="game">

<header>
  <h1>🌆 Owerri Lifestyle</h1>
  <p>Live the city. Build your lifestyle.</p>
</header>


<section class="stats">

  <div>
    💰 ₦<span id="cash"></span>
  </div>

  <div>
    ⭐ Level <span id="level"></span>
  </div>

  <div>
    🔥 Rep <span id="rep"></span>
  </div>

  <div>
    🟢 Online <span id="online">1</span>
  </div>

</section>


<section class="toolbar">

  <button id="walkBtn">
    🚶 Walk
  </button>

  <button id="driveBtn">
    🚗 Drive
  </button>

  <button id="workBtn">
    💼 Work +₦75k
  </button>

  <button id="clubBtn">
    🎵 Clubs
  </button>

</section>


<main>

<section class="map">

  <div class="road road1"></div>
  <div class="road road2"></div>
  <div class="road road3"></div>
  <div class="road road4"></div>


  <!-- HOUSES -->

  <div class="house h1">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>

  <div class="house h2">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>

  <div class="house h3">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>

  <div class="house h4">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>

  <div class="house h5">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>

  <div class="house h6">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>

  <div class="house h7">
    <div class="house-window" style="left:10px;top:18px"></div>
    <div class="house-window" style="left:57px;top:18px"></div>
  </div>


  <!-- SHOPS -->

  <div class="shop shop1"></div>
  <div class="shop shop2"></div>
  <div class="shop shop3"></div>


  <!-- TREES -->

  <div class="tree t1">🌳</div>
  <div class="tree t2">🌴</div>
  <div class="tree t3">🌳</div>
  <div class="tree t4">🌴</div>
  <div class="tree t5">🌳</div>
  <div class="tree t6">🌴</div>
  <div class="tree t7">🌳</div>


  <!-- STREET LIGHTS -->

  <div class="street-light l1">💡</div>
  <div class="street-light l2">💡</div>
  <div class="street-light l3">💡</div>
  <div class="street-light l4">💡</div>


  <!-- CARS -->

  <div class="car car1"></div>
  <div class="car car2"></div>
  <div class="car car3"></div>
  <div class="car car4"></div>


  <!-- LOCATIONS -->

  ${zones.map((zone, index) => `
    <button
      class="location"
      style="
        left:${zone[1]}%;
        top:${zone[2]}%;
      "
      data-zone="${index}"
    >
      📍 ${zone[0]}
    </button>
  `).join("")}


  <!-- PLAYER -->

  <div
    id="player"
    class="player"
    style="
      left:${player.x}%;
      top:${player.y}%;
    "
  >
    🧍
  </div>

</section>


<aside>

  <h2>
    📍 <span id="zoneName"></span>
  </h2>

  <p id="status">
    You are exploring Owerri.
  </p>


  <h3>
    🌃 Nightlife
  </h3>


  ${clubs.map((club, index) => `
    <button
      class="club"
      data-club="${index}"
    >
      🎵 ${club}
    </button>
  `).join("")}


  <h3>
    🎮 Controls
  </h3>

  <p>
    Use WASD or arrow keys to move around the city.
  </p>


  <div
    class="mobile-controls"
  >

    <button data-move="up">⬆️</button>

    <button data-move="left">⬅️</button>

    <button data-move="down">⬇️</button>

    <button data-move="right">➡️</button>

  </div>


  <div id="activity">

    <p>
      Welcome to Owerri Lifestyle.
    </p>

  </div>

</aside>

</main>

</div>
`;


/* =========================
   UPDATE
========================= */

function update() {

  document.querySelector("#cash").textContent =
    player.cash.toLocaleString("en-NG");

  document.querySelector("#level").textContent =
    player.level;

  document.querySelector("#rep").textContent =
    player.reputation;

  document.querySelector("#zoneName").textContent =
    player.zone;

  document.querySelector("#player").style.left =
    `${player.x}%`;

  document.querySelector("#player").style.top =
    `${player.y}%`;

  document.querySelector("#status").textContent =
    `${player.mode} mode • ${player.zone}`;
}


/* =========================
   ACTIVITY
========================= */

function log(message) {

  const activity =
    document.querySelector("#activity");

  activity.innerHTML =
    `<p>${message}</p>` +
    activity.innerHTML;
}


/* =========================
   WALK / DRIVE
========================= */

function setMode(mode) {

  player.mode = mode;

  if (mode === "Drive") {

    log(
      "🚗 You are now driving around Owerri."
    );

  } else {

    log(
      "🚶 You are now walking around Owerri."
    );

  }

  update();
}


/* =========================
   WORK
========================= */

function work() {

  player.cash += 75000;
  player.reputation += 5;

  if (
    player.reputation >=
    player.level * 150
  ) {

    player.level++;

    log(
      `🎉 Level up! You are now level ${player.level}.`
    );

  } else {

    log(
      "💼 You finished a job and earned ₦75,000."
    );

  }

  update();
}


/* =========================
   TRAVEL
========================= */

function travel(index) {

  const zone = zones[index];

  player.x = zone[1];
  player.y = zone[2];

  player.zone = zone[0];

  player.reputation += 2;

  log(
    `📍 You travelled to ${zone[0]} — ${zone[3]}.`
  );

  update();
}


/* =========================
   CLUB
========================= */

function joinClub(index) {

  const club = clubs[index];

  player.reputation += 10;

  log(
    `🎵 You joined ${club}. Reputation +10.`
  );

  update();
}


function visitClub() {

  player.x = 55;
  player.y = 45;

  player.zone = "Douglas";

  log(
    "🌃 You headed toward the nightlife district."
  );

  update();
}


/* =========================
   PLAYER MOVEMENT
========================= */

function movePlayer(direction) {

  const step =
    player.mode === "Drive"
      ? 3
      : 1.5;


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


  player.x =
    Math.max(
      2,
      Math.min(98, player.x)
    );

  player.y =
    Math.max(
      5,
      Math.min(95, player.y)
    );


  update();
}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
  "keydown",
  event => {

    const key =
      event.key.toLowerCase();

    if (
      key === "w" ||
      key === "arrowup"
    ) {
      movePlayer("up");
    }

    if (
      key === "s" ||
      key === "arrowdown"
    ) {
      movePlayer("down");
    }

    if (
      key === "a" ||
      key === "arrowleft"
    ) {
      movePlayer("left");
    }

    if (
      key === "d" ||
      key === "arrowright"
    ) {
      movePlayer("right");
    }

  }
);


/* =========================
   BUTTONS
========================= */

document.querySelector("#walkBtn").onclick =
  () => setMode("Walk");

document.querySelector("#driveBtn").onclick =
  () => setMode("Drive");

document.querySelector("#workBtn").onclick =
  () => work();

document.querySelector("#clubBtn").onclick =
  () => visitClub();


/* =========================
   LOCATIONS
========================= */

document
  .querySelectorAll("[data-zone]")
  .forEach(button => {

    button.onclick = () => {

      travel(
        Number(button.dataset.zone)
      );

    };

  });


/* =========================
   CLUBS
========================= */

document
  .querySelectorAll("[data-club]")
  .forEach(button => {

    button.onclick = () => {

      joinClub(
        Number(button.dataset.club)
      );

    };

  });


/* =========================
   MOBILE BUTTONS
========================= */

document
  .querySelectorAll("[data-move]")
  .forEach(button => {

    button.onclick = () => {

      movePlayer(
        button.dataset.move
      );

    };

  });


/* =========================
   START
========================= */

update();
