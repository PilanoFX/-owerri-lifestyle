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

let state = {
  name: 'Guest',
  x: 43,
  y: 43,
  cash: 2500000,
  level: 2,
  rep: 100,
  zone: 'Fire Service',
  vehicle: 'walk'
};

const root = document.querySelector('#root');

if (!root) {
  throw new Error('Game container #root was not found.');
}

root.innerHTML = `
  <div class="app">

    <header class="top">
      <div>
        <div class="brand">🌆 OWERRI <span>LIFESTYLE</span></div>
        <div class="tag">Live your life. Build your name. Own Owerri.</div>
      </div>

      <div class="status">
        <span>● Online</span>
        <b>1 online</b>
      </div>
    </header>

    <section class="login panel">
      <div>
        <strong>Player name</strong>
        <small>Choose a name other players will see.</small>
      </div>

      <form id="loginForm">
        <input id="nameInput" maxlength="18" value="Guest" placeholder="e.g. Chioma">
        <button type="submit">Enter City</button>
      </form>
    </section>

    <section class="stats">

      <div>
        💰
        <b id="cash">₦2,500,000</b>
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

        <div id="world">

          <div class="terrain t1"></div>
          <div class="terrain t2"></div>

          <div class="road r1"></div>
          <div class="road r2"></div>

          ${zones.map(zone => `
            <button
              class="place"
              style="left:${zone[1]}%;top:${zone[2]}%"
              data-zone="${zone[0]}"
            >
              📍 ${zone[0]}
            </button>
          `).join('')}

          <div
            id="player"
            class="avatar me"
            style="left:${state.x}%;top:${state.y}%"
          >
            <span>🧍🏾</span>
            <b>${state.name}</b>
          </div>

        </div>

        <div class="controls">
          <button data-mode="walk" class="active">🚶 Walk</button>
          <button data-mode="drive">🚗 Drive</button>
          <button id="work">💼 Work +₦75k</button>
          <button id="shopButton">🛍️ Shop</button>
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
            <button class="clubButton">Join</button>
          </div>

          <div class="club">
            <div>
              <b>👼 De Angels</b>
              <small>Music • Social • Events</small>
            </div>
            <button class="clubButton">Join</button>
          </div>

        </section>

        <section>
          <h2>🏠 Properties</h2>
          <div class="property">
            <div>
              <b>New Owerri Apartment</b>
              <small>New Owerri • For sale</small>
            </div>
            <button>₦850k</button>
          </div>
        </section>

        <section>
          <h2>💬 City Chat</h2>

          <div id="chat" class="chat"></div>

          <form id="chatForm" class="chatForm">
            <input id="chatInput" maxlength="140" placeholder="Say something…">
            <button type="submit">Send</button>
          </form>

        </section>

      </aside>

    </section>

    <div id="shop" class="modal hidden">
      <div class="modalCard">
        <button id="closeShop" class="close">×</button>

        <h2>🛍️ City Garage</h2>
        <p>Choose your vehicle.</p>

        <div class="vehicle">
          <div>
            <b>🏍️ Okada</b>
            <small>₦350,000</small>
          </div>
          <button data-vehicle="bike">Buy</button>
        </div>

        <div class="vehicle">
          <div>
            <b>🚗 City Sedan</b>
            <small>₦2,500,000</small>
          </div>
          <button data-vehicle="sedan">Buy</button>
        </div>

        <div class="vehicle">
          <div>
            <b>🚙 Owerri SUV</b>
            <small>₦6,500,000</small>
          </div>
          <button data-vehicle="suv">Buy</button>
        </div>

      </div>
    </div>

    <div id="toast" class="toast"></div>

    <footer>
      Owerri Lifestyle • Explore Owerri • Build your name • Own the city
    </footer>

  </div>
`;

function money(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

function showMessage(message) {
  const toast = document.querySelector('#toast');

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

function updateStats() {
  document.querySelector('#cash').textContent = money(state.cash);
  document.querySelector('#level').textContent = state.level;
  document.querySelector('#rep').textContent = state.rep;
  document.querySelector('#zone').textContent = state.zone;

  const player = document.querySelector('#player');

  if (player) {
    player.style.left = state.x + '%';
    player.style.top = state.y + '%';

    player.querySelector('b').textContent = state.name;
    player.querySelector('span').textContent =
      state.vehicle === 'walk' ? '🧍🏾' : '🚗';
  }
}

function travel(zoneName) {
  const zone = zones.find(item => item[0] === zoneName);

  if (!zone) return;

  state.x = zone[1];
  state.y = zone[2];
  state.zone = zone[0];
  state.rep += 2;

  updateStats();

  showMessage('📍 Arrived at ' + zone[0]);
}

document.querySelectorAll('.place').forEach(button => {
  button.addEventListener('click', () => {
    travel(button.dataset.zone);
  });
});

const locations = document.querySelector('#locations');

locations.innerHTML = zones.map(zone => `
  <button class="locationButton" data-location="${zone[0]}">
    📍
    <span>
      <b>${zone[0]}</b>
      <small>${zone[3]}</small>
    </span>
  </button>
`).join('');

document.querySelectorAll('.locationButton').forEach(button => {
  button.addEventListener('click', () => {
    travel(button.dataset.location);
  });
});

document.querySelector('#loginForm').addEventListener('submit', event => {
  event.preventDefault();

  const input = document.querySelector('#nameInput');
  const name = input.value.trim();

  if (!name) return;

  state.name = name;

  updateStats();

  showMessage('Welcome to Owerri, ' + name + '!');
});

document.querySelector('#work').addEventListener('click', () => {
  state.cash += 75000;
  state.rep += 1;

  updateStats();

  showMessage('💼 You earned ₦75,000!');
});

document.querySelectorAll('[data-mode]').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelectorAll('[data-mode]').forEach(item => {
      item.classList.remove('active');
    });

    button.classList.add('active');

    if (
      button.dataset.mode === 'drive' &&
      state.vehicle === 'walk'
    ) {
      showMessage('🚗 Buy a vehicle first.');
      return;
    }

    showMessage(
      button.dataset.mode === 'drive'
        ? '🚗 Driving mode activated.'
        : '🚶 Walking mode activated.'
    );
  });
});

document.querySelector('#shopButton').addEventListener('click', () => {
  document.querySelector('#shop').classList.remove('hidden');
});

document.querySelector('#closeShop').addEventListener('click', () => {
  document.querySelector('#shop').classList.add('hidden');
});

document.querySelectorAll('[data-vehicle]').forEach(button => {

  button.addEventListener('click', () => {

    const vehicle = button.dataset.vehicle;

    const prices = {
      bike: 350000,
      sedan: 2500000,
      suv: 6500000
    };

    const names = {
      bike: 'Okada',
      sedan: 'City Sedan',
      suv: 'Owerri SUV'
    };

    if (state.cash < prices[vehicle]) {
      showMessage('❌ You do not have enough cash.');
      return;
    }

    state.cash -= prices[vehicle];
    state.vehicle = vehicle;

    updateStats();

    showMessage('🚗 You bought a ' + names[vehicle] + '!');
  });

});

document.querySelectorAll('.clubButton').forEach(button => {

  button.addEventListener('click', () => {

    state.rep += 5;

    updateStats();

    showMessage('🎉 Club joined!');
  });

});

document.querySelector('#chatForm').addEventListener('submit', event => {

  event.preventDefault();

  const input = document.querySelector('#chatInput');
  const message = input.value.trim();

  if (!message) return;

  const chat = document.querySelector('#chat');

  const item = document.createElement('div');

  item.innerHTML = `
    <b>${state.name}</b>
    <span>${message}</span>
  `;

  chat.prepend(item);

  input.value = '';
});

window.addEventListener('keydown', event => {

  if (
    event.target.matches('input, textarea, button')
  ) {
    return;
  }

  const key = event.key.toLowerCase();

  if (
    !['w', 'a', 's', 'd'].includes(key) &&
    !event.key.startsWith('Arrow')
  ) {
    return;
  }

  event.preventDefault();

  const driveMode =
    document.querySelector('[data-mode].active')?.dataset.mode === 'drive';

  const step = driveMode ? 3 : 1.5;

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

  updateStats();
});

updateStats();
