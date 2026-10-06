const zones = [
  ["IMSU Junction", 50, 25, "Campus"],
  ["Fire Service", 43, 43, "City Hub"],
  ["Douglas", 55, 45, "Downtown"],
  ["Wetheral", 64, 36, "Urban"],
  ["New Owerri", 70, 66, "Residential"],
  ["Nekede", 18, 56, "Student Area"],
  ["FUTO", 30, 75, "University"]
];

const properties = [
  {
    name: "Douglas Luxury Apartment",
    x: 59,
    y: 24,
    price: 1800000,
    description: "Premium apartment near downtown.",
    owned: false
  },
  {
    name: "Wetheral City Apartment",
    x: 72,
    y: 30,
    price: 1200000,
    description: "Modern apartment in Wetheral.",
    owned: false
  },
  {
    name: "New Owerri Villa",
    x: 80,
    y: 72,
    price: 2500000,
    description: "Beautiful villa in New Owerri.",
    owned: false
  },
  {
    name: "Nekede Starter House",
    x: 11,
    y: 68,
    price: 650000,
    description: "Affordable starter home.",
    owned: false
  }
];

const player = {
  x: 49,
  y: 38,
  cash: 2500000,
  level: 1,
  reputation: 100,
  mode: "Walk",
  fuel: 100,
  selected: null
};

const root = document.getElementById("root");

const style = document.createElement("style");

style.textContent = `
*{box-sizing:border-box}
body{margin:0;background:#080b10;color:white;font-family:Arial}
button{border:0;border-radius:9px;padding:10px;color:white;background:#202a36;font-weight:bold}
.app{min-height:100vh}
.top{padding:14px;background:#10161e;border-bottom:1px solid #303b48}
.logo{font-size:21px;font-weight:bold;margin-bottom:10px}
.logo span{color:#42d4ff}
.stats{display:flex;gap:7px;flex-wrap:wrap}
.stat{background:#19212b;padding:7px 10px;border-radius:8px;font-size:12px}
.layout{display:grid;grid-template-columns:1fr 300px;gap:12px;padding:12px}
.mapbox{height:650px;position:relative;overflow:hidden;border-radius:16px;background:#29462f;border:1px solid #33413a}
.map{position:absolute;inset:0}
.road{position:absolute;background:#383d44}
.h{height:42px;width:100%}
.v{width:42px;height:100%}
.r1{top:30%}.r2{top:60%}.r3{top:82%}
.c1{left:25%}.c2{left:51%}.c3{left:73%}
.block{position:absolute;background:#315337}
.b1{left:3%;top:5%;width:18%;height:18%}
.b2{left:29%;top:5%;width:17%;height:20%}
.b3{left:55%;top:5%;width:15%;height:20%}
.b4{left:77%;top:7%;width:17%;height:18%}
.b5{left:3%;top:38%;width:18%;height:17%}
.b6{left:28%;top:37%;width:17%;height:18%}
.b7{left:56%;top:39%;width:14%;height:16%}
.b8{left:78%;top:39%;width:17%;height:16%}
.b9{left:4%;top:65%;width:17%;height:26%}
.b10{left:29%;top:64%;width:17%;height:27%}
.b11{left:56%;top:64%;width:14%;height:27%}
.b12{left:78%;top:64%;width:17%;height:27%}
.zone{position:absolute;transform:translate(-50%,-50%);background:#101820dd;border:1px solid #42d4ff;padding:6px 8px;border-radius:8px;font-size:10px;z-index:4;white-space:nowrap}
.house{position:absolute;transform:translate(-50%,-50%);width:35px;height:35px;border-radius:50%;background:#f4c542;color:#111;border:3px solid white;z-index:7}
.house.owned{background:#36d278}
.player{position:absolute;transform:translate(-50%,-50%);z-index:10}
.person{width:20px;height:20px;border-radius:50%;background:#f1c27d;border:3px solid #111;position:relative}
.person:after{content:"";position:absolute;top:17px;left:0;width:17px;height:15px;background:#4d7cff;border-radius:7px}
.car{width:42px;height:22px;background:#d62828;border-radius:7px;border:2px solid #111;position:relative}
.car:before,.car:after{content:"";position:absolute;width:9px;height:9px;background:#111;border-radius:50%;bottom:-6px}
.car:before{left:4px}.car:after{right:4px}
.car span{position:absolute;left:11px;top:2px;width:16px;height:8px;background:#9ddcff}
.side{background:#10161e;border:1px solid #303b48;border-radius:16px;padding:12px}
.panel{background:#151d27;border:1px solid #303b48;border-radius:12px;padding:12px;margin-bottom:10px}
.panel h3{margin:0 0 10px}
.full{width:100%;margin-top:7px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.log{max-height:170px;overflow:auto;font-size:12px}
.log div{padding:5px 0;border-bottom:1px solid #29323d}
.controls{display:grid;grid-template-columns:repeat(3,45px);gap:5px;justify-content:center;margin-top:10px}
.controls button{height:42px;padding:0}
.empty{visibility:hidden}
.interior{display:none;position:fixed;inset:0;background:#151515;z-index:100}
.interior.show{display:block}
.inhead{height:65px;background:#202832;padding:12px 18px;display:flex;align-items:center;justify-content:space-between}
.room{position:absolute;top:65px;bottom:0;left:0;right:0;background:linear-gradient(#d8c4a4 0 55%,#755239 55%)}
.window{position:absolute;left:15%;top:12%;width:170px;height:120px;background:#82d5fa;border:12px solid white}
.tv{position:absolute;right:12%;top:15%;width:220px;height:130px;background:#080808;border:8px solid #222}
.tv:after{content:"OWERRI";display:flex;height:100%;align-items:center;justify-content:center;color:#42d4ff;font-weight:bold;font-size:22px}
.sofa{position:absolute;left:12%;bottom:18%;width:290px;height:85px;background:#4b4163;border-radius:20px}
.table{position:absolute;right:30%;bottom:15%;width:150px;height:65px;background:#70492e;border-radius:8px}
.bed{position:absolute;left:37%;bottom:5%;width:330px;height:100px;background:#d8d8e8;border-radius:20px}
@media(max-width:850px){.layout{grid-template-columns:1fr}.mapbox{height:520px}}
`;

document.head.appendChild(style);

root.innerHTML = `
<div class="app">

  <div class="top">
    <div class="logo">🌆 Owerri <span>Lifestyle</span></div>
    <div class="stats">
      <div class="stat">💰 <b id="cash"></b></div>
      <div class="stat">⭐ Level <b id="level"></b></div>
      <div class="stat">❤️ Rep <b id="rep"></b></div>
      <div class="stat">⛽ <b id="fuel"></b>%</div>
      <div class="stat">🚶 <b id="mode"></b></div>
    </div>
  </div>

  <div class="layout">

    <div class="mapbox">
      <div class="map" id="map">

        <div class="block b1"></div>
        <div class="block b2"></div>
        <div class="block b3"></div>
        <div class="block b4"></div>
        <div class="block b5"></div>
        <div class="block b6"></div>
        <div class="block b7"></div>
        <div class="block b8"></div>
        <div class="block b9"></div>
        <div class="block b10"></div>
        <div class="block b11"></div>
        <div class="block b12"></div>

        <div class="road h r1"></div>
        <div class="road h r2"></div>
        <div class="road h r3"></div>

        <div class="road v c1"></div>
        <div class="road v c2"></div>
        <div class="road v c3"></div>

        <div id="zones"></div>
        <div id="houses"></div>

        <div class="player" id="player">
          <div class="person"></div>
        </div>

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
        <h3>💼 Life</h3>
        <button id="work" class="full">💼 Go To Work</button>
        <button id="travel" class="full">🗺️ Travel</button>
        <button id="club" class="full">🎵 Join Club</button>
        <button id="night" class="full">🍾 Visit Club</button>
      </div>

      <div class="panel">
        <h3>🏠 Property</h3>
        <div id="info">Select a house on the map.</div>
        <button id="buy" class="full" style="display:none">🏠 Buy House</button>
        <button id="enter" class="full" style="display:none">🚪 Enter House</button>
      </div>

      <div class="panel">
        <h3>📱 Activity</h3>
        <div id="log" class="log"></div>
      </div>

    </div>
  </div>
</div>

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

const $ = id => document.getElementById(id);

function money(n) {
  return "₦" + Math.floor(n).toLocaleString();
}

function log(text) {
  const div = document.createElement("div");
  div.textContent = text;
  $("log").prepend(div);
}

function renderZones() {
  $("zones").innerHTML = "";

  zones.forEach(z => {
    const el = document.createElement("div");
    el.className = "zone";
    el.style.left = z[1] + "%";
    el.style.top = z[2] + "%";
    el.innerHTML = `<b>${z[0]}</b><br>${z[3]}`;
    $("zones").appendChild(el);
  });
}

function renderHouses() {
  $("houses").innerHTML = "";

  properties.forEach((p, i) => {
    const el = document.createElement("button");

    el.className = "house" + (p.owned ? " owned" : "");
    el.style.left = p.x + "%";
    el.style.top = p.y + "%";
    el.textContent = p.owned ? "✓" : "🏠";

    el.onclick = () => selectHouse(i);

    $("houses").appendChild(el);
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

  if (player.mode === "Drive") {
    $("player").innerHTML = `
      <div class="car"><span></span></div>
    `;
  } else {
    $("player").innerHTML = `<div class="person"></div>`;
  }

  renderHouses();
}

function selectHouse(index) {
  player.selected = properties[index];

  const p = player.selected;

  $("info").innerHTML = `
    <b>${p.name}</b>
    <br><br>
    ${p.description}
    <br><br>
    💰 ${money(p.price)}
    <br><br>
    ${p.owned ? "✅ You own this house." : "🏷️ Available for purchase."}
  `;

  if (p.owned) {
    $("buy").style.display = "none";
    $("enter").style.display = "block";
  } else {
    $("buy").style.display = "block";
    $("enter").style.display = "none";
  }

  log("🏠 Selected " + p.name);
}

function buyHouse() {
  const p = player.selected;

  if (!p) {
    log("Select a house first.");
    return;
  }

  if (p.owned) {
    log("You already own this house.");
    return;
  }

  if (player.cash < p.price) {
    log("❌ You don't have enough money.");
    return;
  }

  player.cash -= p.price;
  p.owned = true;
  player.reputation += 10;

  log("🎉 You bought " + p.name + "!");

  update();
  selectHouse(properties.indexOf(p));
}

function enterHouse() {
  const p = player.selected;

  if (!p || !p.owned) {
    log("You must own the house first.");
    return;
  }

  $("houseTitle").textContent = "🏠 " + p.name;
  $("interior").classList.add("show");

  log("🚪 You entered your house.");
}

function move(direction) {
  let amount = player.mode === "Drive" ? 3 : 1.4;

  if (player.mode === "Drive") {
    if (player.fuel <= 0) {
      log("⛽ Out of fuel.");
      return;
    }

    player.fuel--;
  }

  if (direction === "up") player.y -= amount;
  if (direction === "down") player.y += amount;
  if (direction === "left") player.x -= amount;
  if (direction === "right") player.x += amount;

  player.x = Math.max(3, Math.min(97, player.x));
  player.y = Math.max(5, Math.min(95, player.y));

  update();
}

function work() {
  const pay = player.mode === "Drive" ? 45000 : 30000;

  player.cash += pay;
  player.reputation += 3;

  if (player.reputation >= player.level * 120) {
    player.level++;
    log("⭐ Level up!");
  }

  log("💼 You worked and earned " + money(pay) + ".");
  update();
}

function travel() {
  const z = zones[Math.floor(Math.random() * zones.length)];

  player.x = z[1];
  player.y = z[2];

  if (player.mode === "Drive") {
    player.fuel = Math.max(0, player.fuel - 5);
  }

  log("🗺️ You travelled to " + z[0] + ".");
  update();
}

function joinClub() {
  player.reputation += 5;
  log("🎵 You joined an Owerri lifestyle club.");
  update();
}

function visitClub() {
  if (player.cash < 15000) {
    log("💸 You need ₦15,000.");
    return;
  }

  player.cash -= 15000;
  player.reputation += 8;

  log("🍾 You enjoyed a night out.");
  update();
}

$("walk").onclick = () => {
  player.mode = "Walk";
  log("🚶 You are walking.");
  update();
};

$("drive").onclick = () => {
  if (player.fuel <= 0) {
    log("⛽ Your car has no fuel.");
    return;
  }

  player.mode = "Drive";
  log("🚗 You are driving.");
  update();
};

$("work").onclick = work;
$("travel").onclick = travel;
$("club").onclick = joinClub;
$("night").onclick = visitClub;
$("buy").onclick = buyHouse;
$("enter").onclick = enterHouse;

$("leave").onclick = () => {
  $("interior").classList.remove("show");
  log("🚶 You left the house.");
};

document.querySelectorAll("[data-move]").forEach(button => {
  button.onclick = () => move(button.dataset.move);
});

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();

  if (key === "arrowup" || key === "w") move("up");
  if (key === "arrowdown" || key === "s") move("down");
  if (key === "arrowleft" || key === "a") move("left");
  if (key === "arrowright" || key === "d") move("right");
});

renderZones();
renderHouses();

log("🌆 Welcome to Owerri Lifestyle.");
log("🚶 Explore Owerri and build your life.");
log("💼 Work to make money.");
log("🏠 Buy your own home.");

update();
