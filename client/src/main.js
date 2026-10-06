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

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="game">
    <header>
      <h1>Owerri Lifestyle</h1>
      <p>Live the city. Build your lifestyle.</p>
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
      <button onclick="work()">💼 Work +₦75k</button>
      <button onclick="visitClub()">🎵 Clubs</button>
    </section>

    <main>
      <section class="map" id="map">
        <div class="road road1"></div>
        <div class="road road2"></div>

        ${zones.map((z, i) => `
          <button
            class="location"
            style="left:${z[1]}%;top:${z[2]}%"
            onclick="travel(${i})"
          >
            ${z[0]}
          </button>
        `).join("")}

        <div id="player" class="player">🧍</div>
      </section>

      <aside>
        <h2>📍 ${player.zone}</h2>
        <p id="status">You are exploring Owerri.</p>

        <h3>Nightlife</h3>
        ${clubs.map(c => `
          <button class="club" onclick="joinClub('${c}')">
            ${c}
          </button>
        `).join("")}

        <h3>Controls</h3>
        <p>Use WASD or arrow keys to move.</p>

        <div id="activity">
          <p>Welcome to Owerri Lifestyle.</p>
        </div>
      </aside>
    </main>
  </div>
`;

function update() {
  document.querySelector("#cash").textContent =
    player.cash.toLocaleString();

  document.querySelector("#level").textContent = player.level;
  document.querySelector("#rep").textContent = player.reputation;

  const p = document.querySelector("#player");

  p.style.left = `${player.x}%`;
  p.style.top = `${player.y}%`;

  document.querySelector("#status").textContent =
    `${player.mode} mode • ${player.zone}`;
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
    log("💼 You finished a job and earned ₦75,000.");
  }

  update();
};

window.travel = function(index) {
  const zone = zones[index];

  player.x = zone[1];
  player.y = zone[2];
  player.zone = zone[0];

  player.reputation += 2;

  log(`📍 You travelled to ${zone[0]} — ${zone[3]}.`);

  update();
};

window.joinClub = function(club) {
  player.reputation += 10;

  log(`🎵 You joined ${club}. Reputation +10.`);

  update();
};

window.visitClub = function() {
  player.x = 55;
  player.y = 45;
  player.zone = "Douglas";

  log("🌃 You headed toward the nightlife district.");

  update();
};

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  const step = player.mode === "Drive" ? 3 : 1.5;

  if (key === "w" || key === "arrowup") {
    player.y -= step;
  }

  if (key === "s" || key === "arrowdown") {
    player.y += step;
  }

  if (key === "a" || key === "arrowleft") {
    player.x -= step;
  }

  if (key === "d" || key === "arrowright") {
    player.x += step;
  }

  player.x = Math.max(2, Math.min(98, player.x));
  player.y = Math.max(5, Math.min(95, player.y));

  update();
});

update();
