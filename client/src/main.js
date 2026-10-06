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
  document.body.innerHTML = "<h1>Game container missing</h1>";
  throw new Error("Missing #root");
}

root.innerHTML = `
  <div class="game">

    <header>
      <h1>🌆 Owerri Lifestyle</h1>
      <p>Live the city. Build your lifestyle.</p>
    </header>

    <section class="stats">
      <div>💰 ₦<span id="cash"></span></div>
      <div>⭐ Level <span id="level"></span></div>
      <div>🔥 Rep <span id="rep"></span></div>
      <div>🟢 Online <span id="online">1</span></div>
    </section>

    <section class="toolbar">
      <button id="walkBtn">🚶 Walk</button>
      <button id="driveBtn">🚗 Drive</button>
      <button id="workBtn">💼 Work +₦75k</button>
      <button id="clubBtn">🎵 Clubs</button>
    </section>

    <main>

      <section class="map" id="map">

        <div class="road road1"></div>
        <div class="road road2"></div>

        ${zones.map((zone, index) => `
          <button
            class="location"
            style="left:${zone[1]}%;top:${zone[2]}%"
            data-zone="${index}"
          >
            📍 ${zone[0]}
          </button>
        `).join("")}

        <div id="player" class="player">🧍</div>

      </section>

      <aside>

        <h2>📍 <span id="zoneName"></span></h2>

        <p id="status">
          You are exploring Owerri.
        </p>

        <h3>🌃 Nightlife</h3>

        ${clubs.map((club, index) => `
          <button
            class="club"
            data-club="${index}"
          >
            🎵 ${club}
          </button>
        `).join("")}

        <h3>🎮 Controls</h3>

        <p>
          Use WASD or arrow keys to move around the city.
        </p>

        <div id="activity">
          <p>Welcome to Owerri Lifestyle.</p>
        </div>

      </aside>

    </main>

  </div>
`;

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

function log(message) {

  const activity =
    document.querySelector("#activity");

  activity.innerHTML =
    `<p>${message}</p>` +
    activity.innerHTML;
}

function setMode(mode) {

  player.mode = mode;

  log(
    mode === "Drive"
      ? "🚗 You are now driving around Owerri."
      : "🚶 You are now walking around Owerri."
  );

  update();
}

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

document.querySelector("#walkBtn").onclick = () => {
  setMode("Walk");
};

document.querySelector("#driveBtn").onclick = () => {
  setMode("Drive");
};

document.querySelector("#workBtn").onclick = () => {
  work();
};

document.querySelector("#clubBtn").onclick = () => {
  visitClub();
};

document.querySelectorAll("[data-zone]")
  .forEach(button => {

    button.onclick = () => {

      travel(
        Number(button.dataset.zone)
      );

    };

  });

document.querySelectorAll("[data-club]")
  .forEach(button => {

    button.onclick = () => {

      joinClub(
        Number(button.dataset.club)
      );

    };

  });

document.addEventListener("keydown", event => {

  if (
    event.target.tagName === "INPUT" ||
    event.target.tagName === "TEXTAREA"
  ) {
    return;
  }

  const key = event.key.toLowerCase();

  const step =
    player.mode === "Drive"
      ? 3
      : 1.5;

  if (
    key === "w" ||
    key === "arrowup"
  ) {
    player.y -= step;
  }

  if (
    key === "s" ||
    key === "arrowdown"
  ) {
    player.y += step;
  }

  if (
    key === "a" ||
    key === "arrowleft"
  ) {
    player.x -= step;
  }

  if (
    key === "d" ||
    key === "arrowright"
  ) {
    player.x += step;
  }

  player.x =
    Math.max(2, Math.min(98, player.x));

  player.y =
    Math.max(5, Math.min(95, player.y));

  update();

});

update();
