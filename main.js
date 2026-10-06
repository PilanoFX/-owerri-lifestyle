import './style.css';

const zones = [
  ['IMSU Junction', 50, 25, 'Campus district'],
  ['Fire Service', 43, 43, 'City hub'],
  ['Douglas', 55, 45, 'Downtown'],
  ['Wetheral', 64, 36, 'Urban corridor'],
  ['New Owerri', 70, 66, 'Residential'],
  ['Nekede', 18, 56, 'Student district'],
  ['FUTO', 30, 75, 'University area']
];

const vehicleList = [
  { id: 'bike', name: 'Okada', price: 350000 },
  { id: 'sedan', name: 'City Sedan', price: 2500000 },
  { id: 'suv', name: 'Owerri SUV', price: 6500000 }
];

let state = {
  id: null,
  name: 'Guest',
  x: 49,
  y: 43,
  cash: 2500000,
  rep: 100,
  level: 2,
  zone: 'Fire Service',
  vehicle: 'walk',
  properties: [],
  propertiesData: [],
  online: 1,
  players: []
};

const root = document.querySelector('#root');

if (!root) {
  document.body.innerHTML = `
    <div style="padding:30px;color:white;background:#080b10;font-family:Arial">
      <h2>Owerri Lifestyle</h2>
      <p>The game container is missing. Please make sure index.html has:</p>
      <code>&lt;div id="root"&gt;&lt;/div&gt;</code>
    </div>
  `;
  throw new Error('Missing #root');
}

root.innerHTML = `
<div class="app">

  <header class="top">
    <div>
      <div class="brand">🌆 OWERRI <span>LIFESTYLE</span></div>
      <div class="tag">Live your life. Build your name. Own Owerri.</div>
    </div>

    <div class="status">
      <span id="conn">● Offline Mode</span>
      <b id="online">1 online</b>
    </div>
  </header>

  <section class="login panel">
    <div>
      <strong>Player name</strong>
      <small>Choose a name other players will see.</small>
    </div>

    <form id="loginForm">
      <input
        id="nameInput"
        maxlength="18"
        placeholder="e.g. Chioma"
        value="Guest"
      />
      <button>Enter City</button>
    </form>
  </section>

  <section class="stats">

    <div>
      💰
      <b id="cash">₦2.50M</b>
      <small>Cash</small>
    </div>

    <div>
      ⭐
      <b id="level">2</b>
      <small>Level</small>
    </div>

    <div>
      ❤️
      <b id="rep">100</b>
      <small>Reputation</small>
    </div>

    <div>
      📍
      <b id="zone">Fire Service</b>
      <small>Current area</small>
    </div>

  </section>

  <section class="game">

    <div class="worldWrap">

      <div id="world"></div>

      <div class="controls">
        <button data-mode="walk" class="active">🚶 Walk</button>
        <button data-mode="drive">🚗 Drive</button>
        <button id="work">💼 Work +₦75k</button>
        <button id="buyMenu">🛍️ Shop</button>
      </div>

    </div>

    <aside class="side">

      <section>
        <h2>📍 Explore Owerri</h2>
        <div id="locations" class="locations"></div>
      </section>

      <section>
        <h2>🎉 Clubs</h2>

        <div class="club">
          <div>
            <b>🔥 Cartel Lifestyle</b>
            <small>Nightlife • Social • Status</small>
          </div>

          <button data-club="Cartel Lifestyle">Join</button>
        </div>

        <div class="club">
          <div>
            <b>👼 De Angels</b>
            <small>Music • Social • Events</small>
          </div>

          <button data-club="De Angels">Join</button>
        </div>
      </section>

      <section>
        <h2>🏠 Properties</h2>
        <div id="properties"></div>
      </section>

      <section>
        <h2>💬 City Chat</h2>

        <div id="chat" class="chat"></div>

        <form id="chatForm" class="chatForm">
          <input
            id="chatInput"
            maxlength="140"
            placeholder="Say something…"
          />
          <button>Send</button>
        </form>
      </section>

    </aside>

  </section>

  <div id="shop" class="modal hidden">

    <div class="modalCard">

      <button class="close" id="closeShop">×</button>

      <h2>🛍️ City Garage</h2>

      <p>Buy a vehicle to move around faster.</p>

      <div id="vehicles"></div>

    </div>

  </div>

  <div id="toast" class="toast" aria-live="polite"></div>

  <footer>
    Owerri Lifestyle MVP • Explore Owerri • Build your character • Own the city
  </footer>

</div>
`;

const world = document.querySelector('#world');

function money(number) {
  return '₦' + Number(number || 0).toLocaleString('en-NG', {
    maximumFractionDigits: 0
  });
}

function toast(message) {
  const element = document.querySelector('#toast');

  element.textContent = message;
  element.classList.add('show');

  clearTimeout(window.__toast);

  window.__toast = setTimeout(() => {
    element.classList.remove('show');
  }, 2600);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[character]));
}

function renderWorld() {

  world.innerHTML = `
    <div class="terrain t1"></div>
    <div class="terrain t2"></div>

    <div class="road r1"></div>
    <div class="road r2"></div>
    <div class="road r3"></div>
    <div class="road r4"></div>

    ${zones.map(([name, x, y, description]) => `
      <button
        class="place"
        style="left:${x}%;top:${y}%"
        data-zone="${escapeHtml(name)}"
        title="${escapeHtml(description)}"
      >
        📍 ${escapeHtml(name)}
      </button>
    `).join('')}

    <div
      class="avatar me"
      style="left:${state.x}%;top:${state.y}%"
    >
      <span>${state.vehicle === 'walk' ? '🧍🏾' : '🚗'}</span>
      <b>${escapeHtml(state.name)}</b>
    </div>

    ${state.players.map(player => `
      <div
        class="avatar"
        style="left:${player.x}%;top:${player.y}%"
      >
        <span>${player.vehicle === 'walk' ? '🧍🏾' : '🚗'}</span>
        <b>${escapeHtml(player.name)}</b>
      </div>
    `).join('')}
  `;

  world.querySelectorAll('.place').forEach(button => {
    button.addEventListener('click', () => {
      travel(button.dataset.zone);
    });
  });
}

function travel(zone) {

  const selectedZone = zones.find(zoneData => zoneData[0] === zone);

  if (!selectedZone) return;

  state.x = selectedZone[1];
  state.y = selectedZone[2];
  state.zone = zone;
  state.rep += 2;

  renderUI();

  toast(`📍 Arrived at ${zone}`);
}

function renderLocations() {

  const locations = document.querySelector('#locations');

  locations.innerHTML = zones.map(
    ([name, x, y, description]) => `
      <button data-loc="${escapeHtml(name)}">
        <span>📍</span>

        <span>
          <b>${escapeHtml(name)}</b>
          <small>${escapeHtml(description)}</small>
        </span>
      </button>
    `
  ).join('');

  document.querySelectorAll('[data-loc]').forEach(button => {
    button.onclick = () => travel(button.dataset.loc);
  });
}

function renderProperties() {

  const properties = state.propertiesData || [];

  document.querySelector('#properties').innerHTML =
    properties.length
      ? properties.map(property => `
          <div class="property">

            <div>
              <b>${escapeHtml(property.name)}</b>
              <small>
                ${escapeHtml(property.zone)}
                • ${property.owner ? 'Owned' : 'For sale'}
              </small>
            </div>

            ${
              property.owner
                ? '<span class="owned">OWNED</span>'
                : `<button>${money(property.price)}</button>`
            }

          </div>
        `).join('')
      : `
        <div class="empty">
          No properties available yet.
        </div>
      `;
}

function renderVehicles() {

  document.querySelector('#vehicles').innerHTML =
    vehicleList.map(vehicle => `
      <div class="vehicle">

        <div>
          <b>${vehicle.name}</b>
          <small>${money(vehicle.price)}</small>
        </div>

        <button
          data-vehicle="${vehicle.id}"
        >
          ${state.vehicle === vehicle.id ? 'Selected' : 'Buy'}
        </button>

      </div>
    `).join('');

  document.querySelectorAll('[data-vehicle]').forEach(button => {

    button.onclick = () => {

      const vehicle = vehicleList.find(
        item => item.id === button.dataset.vehicle
      );

      if (!vehicle) return;

      if (state.vehicle === vehicle.id) {
        toast(`${vehicle.name} selected`);
        return;
      }

      if (state.cash < vehicle.price) {
        toast('Not enough cash for this vehicle.');
        return;
      }

      state.cash -= vehicle.price;
      state.vehicle = vehicle.id;

      renderUI();

      toast(`🚗 You bought a ${vehicle.name}!`);
    };

  });
}

function renderUI() {

  document.querySelector('#cash').textContent = money(state.cash);
  document.querySelector('#level').textContent = state.level;
  document.querySelector('#rep').textContent = state.rep;
  document.querySelector('#zone').textContent = state.zone;
  document.querySelector('#online').textContent =
    `${state.online} online`;

  renderWorld();
  renderProperties();
  renderVehicles();
}

renderLocations();
renderUI();

document.querySelector('#loginForm').addEventListener(
  'submit',
  event => {

    event.preventDefault();

    const name = document
      .querySelector('#nameInput')
      .value
      .trim();

    if (!name) return;

    state.name = name;

    document.querySelector('#conn').textContent =
      '● Playing';

    renderUI();

    toast(`Welcome to Owerri, ${name}!`);
  }
);

document.querySelector('#work').onclick = () => {

  state.cash += 75000;
  state.rep += 1;

  renderUI();

  toast('💼 You worked and earned ₦75,000');
};

document.querySelectorAll('[data-mode]').forEach(button => {

  button.onclick = () => {

    document
      .querySelectorAll('[data-mode]')
      .forEach(item => item.classList.remove('active'));

    button.classList.add('active');

    if (
      button.dataset.mode === 'drive' &&
      state.vehicle === 'walk'
    ) {
      toast('🚗 Buy a vehicle first.');
      return;
    }

    toast(
      button.dataset.mode === 'drive'
        ? 'You are now driving.'
        : 'You are now walking.'
    );
  };

});

document.querySelector('#buyMenu').onclick = () => {
  document
    .querySelector('#shop')
    .classList.remove('hidden');
};

document.querySelector('#closeShop').onclick = () => {
  document
    .querySelector('#shop')
    .classList.add('hidden');
};

document.querySelectorAll('[data-club]').forEach(button => {

  button.onclick = () => {

    state.rep += 5;

    renderUI();

    toast(`🎉 You joined ${button.dataset.club}`);
  };

});

document.querySelector('#chatForm').addEventListener(
  'submit',
  event => {

    event.preventDefault();

    const input = document.querySelector('#chatInput');

    const message = input.value.trim();

    if (!message) return;

    const chat = document.querySelector('#chat');

    const item = document.createElement('div');

    item.innerHTML = `
      <b>${escapeHtml(state.name)}</b>
      <span>${escapeHtml(message)}</span>
    `;

    chat.prepend(item);

    input.value = '';

    while (chat.children.length > 40) {
      chat.lastChild.remove();
    }
  }
);

window.addEventListener('keydown', event => {

  if (
    event.target.matches('input, textarea, button')
  ) {
    return;
  }

  const key = event.key.toLowerCase();

  if (
    !'wasd'.includes(key) &&
    !event.key.startsWith('Arrow')
  ) {
    return;
  }

  event.preventDefault();

  const driving =
    document.querySelector('[data-mode].active')?.dataset.mode === 'drive';

  const step = driving ? 3.2 : 1.8;

  if (key === 'w' || event.key === 'ArrowUp') {
    state.y = Math.max(5, state.y - step);
  }

  if (key === 's' || event.key === 'ArrowDown') {
    state.y = Math.min(95, state.y + step);
  }

  if (key === 'a' || event.key === 'ArrowLeft') {
    state.x = Math.max(3, state.x - step);
  }

  if (key === 'd' || event.key === 'ArrowRight') {
    state.x = Math.min(97, state.x + step);
  }

  renderWorld();

});
