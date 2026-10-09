/* =========================================================
   Owerri Lifestyle – Stage B (Save Progress) + Private Texting
   ========================================================= */

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://rjpampbvxqjvocwltrxw.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcGFtcGJ2eHFqdm9jd2x0cnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNjA5MDAsImV4cCI6MjEwNjkzNjkwMH0.XgKigi0a8tlrz3qtZBhefgoQc3hkOUDm6Gy69QZ64kQ'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// ---------- GAME DATA ----------
const zones = [
  { name: "IMSU Junction", x: 48, y: 20, type: "Campus", emoji: "🎓",
    actions: [
      { label: "Attend Lecture", cost: 0, hunger: -5, energy: -15, fun: -5, social: 10, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Eat at Cafeteria", cost: 2500, hunger: 40, energy: 10, fun: 5, social: 5, hygiene: -5, bladder: -10, cash: 0 },
      { label: "Hang with Friends", cost: 0, hunger: -5, energy: -10, fun: 25, social: 30, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Fire Service", x: 36, y: 40, type: "City Hub", emoji: "🚒",
    actions: [
      { label: "Volunteer", cost: 0, hunger: -10, energy: -20, fun: 5, social: 15, hygiene: -10, bladder: -5, cash: 8000 },
      { label: "Buy Snacks", cost: 1500, hunger: 25, energy: 5, fun: 5, social: 0, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Douglas", x: 54, y: 46, type: "Downtown", emoji: "🏙️",
    actions: [
      { label: "Shop", cost: 5000, hunger: 0, energy: -10, fun: 20, social: 10, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Eat Out", cost: 4500, hunger: 45, energy: 10, fun: 15, social: 10, hygiene: -5, bladder: -10, cash: 0 },
      { label: "Bank Work", cost: 0, hunger: -5, energy: -25, fun: -10, social: 5, hygiene: 0, bladder: -5, cash: 35000 }
    ]
  },
  { name: "Wetheral", x: 70, y: 28, type: "Urban", emoji: "🏘️",
    actions: [
      { label: "Visit Club", cost: 12000, hunger: -5, energy: -20, fun: 40, social: 35, hygiene: -15, bladder: -10, cash: 0 },
      { label: "Late Night Food", cost: 3000, hunger: 35, energy: 5, fun: 10, social: 5, hygiene: -5, bladder: -10, cash: 0 }
    ]
  },
  { name: "New Owerri", x: 74, y: 70, type: "Residential", emoji: "🏡",
    actions: [
      { label: "Rest at Home", cost: 0, hunger: -5, energy: 40, fun: 5, social: -5, hygiene: 10, bladder: 20, cash: 0 },
      { label: "Neighbour Visit", cost: 0, hunger: -5, energy: -10, fun: 15, social: 25, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Nekede", x: 16, y: 58, type: "Student Area", emoji: "📚",
    actions: [
      { label: "Study", cost: 0, hunger: -5, energy: -20, fun: -10, social: -5, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Party", cost: 8000, hunger: -10, energy: -25, fun: 45, social: 40, hygiene: -20, bladder: -15, cash: 0 },
      { label: "Buy Food", cost: 2000, hunger: 35, energy: 5, fun: 5, social: 0, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "FUTO", x: 26, y: 80, type: "University", emoji: "🔬",
    actions: [
      { label: "Lab Work", cost: 0, hunger: -5, energy: -25, fun: -5, social: 5, hygiene: -5, bladder: -5, cash: 18000 },
      { label: "Campus Hangout", cost: 0, hunger: -5, energy: -10, fun: 20, social: 25, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Owerri Mall", x: 58, y: 58, type: "Shopping", emoji: "🛍️",
    actions: [
      { label: "Shopping Spree", cost: 15000, hunger: 0, energy: -15, fun: 30, social: 10, hygiene: 5, bladder: -5, cash: 0 },
      { label: "Cinema", cost: 4000, hunger: -5, energy: -10, fun: 35, social: 15, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Sam Mbakwe Airport", x: 84, y: 16, type: "Travel", emoji: "✈️",
    actions: [
      { label: "Watch Planes", cost: 0, hunger: -5, energy: -5, fun: 15, social: 5, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Airport Job", cost: 0, hunger: -10, energy: -20, fun: -5, social: 5, hygiene: 0, bladder: -5, cash: 28000 }
    ]
  },
  { name: "Control Post", x: 42, y: 68, type: "Junction", emoji: "🚦",
    actions: [
      { label: "Buy Pure Water", cost: 200, hunger: 5, energy: 0, fun: 0, social: 0, hygiene: 0, bladder: -2, cash: 0 },
      { label: "Okada Ride", cost: 800, hunger: -2, energy: -5, fun: 10, social: 5, hygiene: -5, bladder: -3, cash: 0 }
    ]
  },
  { name: "World Bank", x: 62, y: 22, type: "Area", emoji: "🏦",
    actions: [
      { label: "Bank Transaction", cost: 0, hunger: -3, energy: -8, fun: -5, social: 0, hygiene: 0, bladder: -3, cash: 5000 },
      { label: "Meet People", cost: 0, hunger: -5, energy: -8, fun: 15, social: 25, hygiene: 0, bladder: -5, cash: 0 }
    ]
  },
  { name: "Amakohia", x: 30, y: 30, type: "Residential", emoji: "🏠",
    actions: [
      { label: "Visit Relative", cost: 0, hunger: 10, energy: 5, fun: 15, social: 30, hygiene: 0, bladder: -5, cash: 0 },
      { label: "Buy Local Food", cost: 1800, hunger: 40, energy: 8, fun: 8, social: 5, hygiene: -5, bladder: -8, cash: 0 }
    ]
  }
]

const properties = [
  { name: "Nekede Starter House", x: 12, y: 65, price: 650000, owned: false },
  { name: "Wetheral City Apartment", x: 70, y: 28, price: 1200000, owned: false },
  { name: "Douglas Luxury Apartment", x: 55, y: 42, price: 1800000, owned: false },
  { name: "New Owerri Villa", x: 78, y: 72, price: 2500000, owned: false }
]

let player = {
  x: 49, y: 38, cash: 2500000, level: 1, reputation: 100,
  mode: "Walk", fuel: 100, selected: null, direction: "down",
  hunger: 80, energy: 85, fun: 60, social: 55, hygiene: 90, bladder: 70
}

let currentUser = null
let isNight = false
let currentRoom = "living"
let saveTimeout = null

const others = [
  { id: 1, name: "Chidi", x: 40, y: 35, color: "#e74c3c" },
  { id: 2, name: "Ada", x: 65, y: 55, color: "#9b59b6" },
  { id: 3, name: "Emeka", x: 25, y: 70, color: "#3498db" }
]

// ---------- PRIVATE MESSAGING ----------
let activeChat = null
const conversations = {}

const npcReplies = {
  1: [ // Chidi
    "Wetin dey happen?",
    "I dey Douglas now, you fit meet me?",
    "Abeg no disturb me, I dey hustle 😂",
    "You don chop today?",
    "Oya text me later, I dey move"
  ],
  2: [ // Ada
    "Heyyy 💕",
    "Where you dey?",
    "I just leave Owerri Mall",
    "You wan link up?",
    "Lol stop playing"
  ],
  3: [ // Emeka
    "Bro wetin?",
    "I dey FUTO side",
    "You get change?",
    "Later we go talk",
    "I dey drive, text me"
  ]
}

const root = document.getElementById("root")

const style = document.createElement("style")
style.textContent = `
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0a0e14;color:#fff;font-family:system-ui,-apple-system,sans-serif;overflow-x:hidden}
button{border:0;border-radius:12px;padding:12px 16px;color:#fff;background:#1c2733;font-weight:700;cursor:pointer;font-size:14px;transition:0.15s}
button:active{transform:scale(0.96)}
input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid #2a3542;background:#151d27;color:#fff;font-size:15px;margin-bottom:12px}
input:focus{outline:none;border-color:#42d4ff}

.auth-screen{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;background:linear-gradient(160deg,#0a0e14,#121820)}
.auth-box{width:100%;max-width:400px;background:#151d27;border:1px solid #1e2a36;border-radius:20px;padding:32px 28px;box-shadow:0 20px 50px rgba(0,0,0,0.4)}
.auth-box h1{font-size:26px;margin-bottom:6px;text-align:center}
.auth-box h1 span{color:#42d4ff}
.auth-box p{text-align:center;color:#8b9aab;margin-bottom:24px;font-size:14px}
.auth-tabs{display:flex;gap:8px;margin-bottom:20px}
.auth-tabs button{flex:1;background:#1c2733}
.auth-tabs button.active{background:#42d4ff;color:#0a0e14}
.auth-error{background:#3d1a1a;color:#ff6b6b;padding:10px 14px;border-radius:10px;margin-bottom:14px;font-size:13px;display:none}
.auth-success{background:#1a3d2a;color:#4ade80;padding:10px 14px;border-radius:10px;margin-bottom:14px;font-size:13px;display:none}
.full{width:100%}

.top{padding:14px 16px 10px;background:linear-gradient(180deg,#121820 0%,#0d1218 100%);border-bottom:1px solid #1e2a36;position:sticky;top:0;z-index:50}
.logo{font-size:20px;font-weight:800;margin-bottom:10px}.logo span{color:#42d4ff}
.stats{display:flex;gap:7px;flex-wrap:wrap;font-size:12px;margin-bottom:10px}
.stat{background:#18222d;padding:6px 10px;border-radius:10px;border:1px solid #243040}
.needs{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.need{background:#151d27;border-radius:10px;padding:7px 9px;font-size:11px;border:1px solid #1e2a36}
.need-bar{height:5px;background:#1e2a36;border-radius:3px;margin-top:4px;overflow:hidden}
.need-fill{height:100%;border-radius:3px;transition:width 0.35s}
.layout{display:flex;flex-direction:column;gap:12px;padding:12px}
.mapbox{position:relative;width:100%;height:min(62vh,560px);min-height:400px;border-radius:20px;overflow:hidden;border:2px solid #2a4a38;box-shadow:0 20px 40px rgba(0,0,0,0.55)}
.mapbox.day{background:#1a2f22}.mapbox.night{background:#0d1a14}
.map{position:absolute;inset:0;background:linear-gradient(160deg,#1e3a28,#244830 40%,#1a3224)}
.road{position:absolute;background:#2c3238;z-index:2}.h{height:44px;width:100%}.v{width:44px;height:100%}
.r1{top:26%}.r2{top:52%}.r3{top:76%}.c1{left:20%}.c2{left:47%}.c3{left:74%}
.block{position:absolute;background:linear-gradient(145deg,#2f4a36,#3a5c42);border-radius:3px;z-index:3;box-shadow:0 10px 0 #152218}
.b1{left:3%;top:5%;width:13%;height:13%}.b2{left:23%;top:4%;width:14%;height:18%}
.b3{left:49%;top:5%;width:13%;height:14%}.b4{left:74%;top:6%;width:15%;height:13%}
.b5{left:3%;top:35%;width:13%;height:12%}.b6{left:23%;top:34%;width:14%;height:16%}
.b7{left:49%;top:36%;width:12%;height:11%}.b8{left:74%;top:35%;width:15%;height:12%}
.b9{left:3%;top:61%;width:13%;height:23%}.b10{left:23%;top:60%;width:14%;height:27%}
.b11{left:49%;top:62%;width:12%;height:22%}.b12{left:74%;top:60%;width:15%;height:24%}
.zone{position:absolute;transform:translate(-50%,-50%);background:rgba(12,18,26,0.94);border:1.5px solid #42d4ff;padding:6px 10px;border-radius:12px;font-size:11px;z-index:10;cursor:pointer}
.house{position:absolute;transform:translate(-50%,-50%);width:40px;height:40px;border-radius:50%;background:linear-gradient(145deg,#ffd54f,#f4c542);border:3px solid #fff;z-index:20;font-size:17px;display:flex;align-items:center;justify-content:center;cursor:pointer}
.house.owned{background:linear-gradient(145deg,#4ade80,#36d278)}
.player{position:absolute;transform:translate(-50%,-50%);z-index:30;width:32px;height:32px;display:flex;align-items:center;justify-content:center}
.person{width:22px;height:22px;border-radius:50%;background:#f1c27d;border:2.5px solid #111;position:relative}
.person:after{content:"";position:absolute;top:18px;left:2px;width:16px;height:14px;background:#4d7cff;border-radius:7px}
.other{position:absolute;transform:translate(-50%,-50%);z-index:25;width:26px;height:26px;border-radius:50%;border:2.5px solid #fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;cursor:pointer;transition:transform 0.15s}
.other:hover{transform:scale(1.25);z-index:40}
.side{display:flex;flex-direction:column;gap:11px}
.panel{background:linear-gradient(180deg,#151d27,#10161e);border:1px solid #1e2a36;border-radius:16px;padding:14px}
.panel h3{margin:0 0 11px;font-size:15px}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.controls{display:grid;grid-template-columns:repeat(3,44px);gap:6px;justify-content:center;margin-top:12px}
.controls button{height:42px;padding:0;font-size:17px}
.empty{visibility:hidden}
.log{max-height:130px;overflow:auto;font-size:12px}
.actions{display:flex;flex-direction:column;gap:7px;margin-top:9px}
.action-btn{background:#1c2733;text-align:left;padding:10px 13px}
.logout-btn{background:#3d1a1a;margin-top:10px}

.interior{display:none;position:fixed;inset:0;background:#0f0c0a;z-index:100;overflow:hidden}
.interior.show{display:block}
.inhead{height:56px;background:#1c2530;padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2a3542;position:relative;z-index:20}

.room-tabs{display:flex;gap:6px;padding:10px 12px;background:#151d27;border-bottom:1px solid #2a3542;overflow-x:auto}
.room-tabs button{flex-shrink:0;padding:8px 14px;font-size:13px;background:#1c2733;border:1px solid #2a3542}
.room-tabs button.active{background:#42d4ff;color:#0a0e14;border-color:#42d4ff}

.room-view{position:absolute;top:110px;bottom:100px;left:0;right:0;background:#1a1410;overflow:hidden}
.room-content{position:relative;width:100%;height:100%}
.wall{position:absolute;top:0;left:0;right:0;height:55%;background:linear-gradient(to bottom,#2a3a4a,#1e2a36)}
.floor{position:absolute;bottom:0;left:0;right:0;height:45%;background:linear-gradient(to bottom,#3d2b1f,#2a1e15)}

.living .window{position:absolute;top:8%;right:12%;width:70px;height:50px;background:#87ceeb;border:4px solid #5a4a3a;border-radius:4px}
.living .sofa{position:absolute;bottom:18%;left:12%;width:140px;height:55px;background:#5c4d7e;border-radius:12px;box-shadow:5px 6px 0 rgba(0,0,0,0.3)}
.living .sofa::before{content:"";position:absolute;top:-16px;left:10px;right:10px;height:20px;background:#6b5c8c;border-radius:8px 8px 0 0}
.living .tv{position:absolute;bottom:28%;right:10%;width:90px;height:55px;background:#111;border:5px solid #222;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#42d4ff;font-weight:800;font-size:14px}
.living .rug{position:absolute;bottom:20%;left:30%;width:130px;height:45px;background:radial-gradient(ellipse,#8b3a3a,#5a2525);border-radius:50%;opacity:0.7}

.bedroom .bed{position:absolute;bottom:12%;left:10%;width:170px;height:75px;background:#e8e8f0;border-radius:8px;box-shadow:6px 8px 0 rgba(0,0,0,0.25)}
.bedroom .pillow{position:absolute;top:8px;left:12px;width:55px;height:24px;background:#fff;border-radius:6px}
.bedroom .blanket{position:absolute;bottom:0;left:0;right:0;height:30px;background:#c0c0d0;border-radius:0 0 8px 8px}
.bedroom .wardrobe{position:absolute;bottom:15%;right:8%;width:60px;height:110px;background:#8b5e3c;border-radius:4px;box-shadow:4px 4px 0 rgba(0,0,0,0.2)}

.kitchen .counter{position:absolute;bottom:15%;left:5%;right:5%;height:50px;background:#d4d4d4;border-radius:6px;box-shadow:0 6px 0 #999}
.kitchen .sink{position:absolute;bottom:22%;left:15%;width:50px;height:25px;background:#a0c4e8;border-radius:4px;border:2px solid #7aa0c4}
.kitchen .stove{position:absolute;bottom:22%;right:20%;width:55px;height:30px;background:#333;border-radius:4px}
.kitchen .fridge{position:absolute;bottom:15%;right:5%;width:50px;height:90px;background:#e8e8e8;border-radius:4px;box-shadow:3px 3px 0 rgba(0,0,0,0.2)}

.bathroom .bathtub{position:absolute;bottom:12%;left:8%;width:150px;height:70px;background:#e0f0ff;border:4px solid #b0d0e8;border-radius:12px}
.bathroom .toilet{position:absolute;bottom:15%;right:12%;width:45px;height:55px;background:#f0f0f0;border-radius:8px 8px 4px 4px}
.bathroom .sink-b{position:absolute;bottom:35%;right:15%;width:50px;height:25px;background:#d0e8f8;border-radius:4px;border:2px solid #a0c4e0}

.house-actions{position:absolute;bottom:12px;left:12px;right:12px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;z-index:30}
.house-actions button{background:#1c2733;border:1px solid #2a3542;font-size:13px;padding:12px 6px}

/* ========== PRIVATE DM PANEL ========== */
#dmPanel{
  position:fixed;
  bottom:20px;
  right:20px;
  width:320px;
  max-width:calc(100vw - 40px);
  height:420px;
  background:#151d27;
  border:1px solid #2a3542;
  border-radius:18px;
  display:flex;
  flex-direction:column;
  z-index:200;
  box-shadow:0 20px 50px rgba(0,0,0,0.5);
  transform:translateY(120%);
  opacity:0;
  transition:all 0.25s ease;
  overflow:hidden;
}
#dmPanel.open{
  transform:translateY(0);
  opacity:1;
}
.dm-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 16px;
  background:#1c2733;
  border-bottom:1px solid #2a3542;
  font-weight:700;
}
.dm-header button{
  background:transparent;
  color:#8b9aab;
  font-size:18px;
  padding:4px 8px;
}
.dm-messages{
  flex:1;
  overflow-y:auto;
  padding:14px;
  display:flex;
  flex-direction:column;
  gap:10px;
}
.dm-msg{
  max-width:80%;
  padding:10px 14px;
  border-radius:16px;
  font-size:14px;
  line-height:1.35;
}
.dm-msg.me{
  align-self:flex-end;
  background:#42d4ff;
  color:#0a0e14;
  border-bottom-right-radius:4px;
}
.dm-msg.them{
  align-self:flex-start;
  background:#1c2733;
  border-bottom-left-radius:4px;
}
.dm-msg small{
  display:block;
  font-size:10px;
  opacity:0.6;
  margin-top:4px;
}
.dm-form{
  display:flex;
  gap:8px;
  padding:12px;
  border-top:1px solid #2a3542;
}
.dm-form input{
  flex:1;
  margin:0;
  padding:12px 14px;
  border-radius:12px;
  border:1px solid #2a3542;
  background:#0f1520;
  color:#fff;
  font-size:14px;
}
.dm-form button{
  background:#42d4ff;
  color:#0a0e14;
  padding:0 18px;
  border-radius:12px;
  font-weight:700;
}
`
document.head.appendChild(style)

// ---------- SAVE / LOAD SYSTEM ----------
async function loadPlayerData() {
  if (!currentUser) return

  const { data, error } = await supabase
    .from('players')
    .select('*')
    .eq('id', currentUser.id)
    .single()

  if (data) {
    player.cash = data.cash ?? 2500000
    player.level = data.level ?? 1
    player.reputation = data.reputation ?? 100
    player.fuel = data.fuel ?? 100
    player.hunger = data.hunger ?? 80
    player.energy = data.energy ?? 85
    player.fun = data.fun ?? 60
    player.social = data.social ?? 55
    player.hygiene = data.hygiene ?? 90
    player.bladder = data.bladder ?? 70

    // Restore owned houses
    const owned = data.owned_houses || []
    properties.forEach((p, i) => {
      p.owned = owned.includes(i)
    })
  } else {
    // First time – create player record
    await supabase.from('players').insert({
      id: currentUser.id,
      display_name: currentUser.user_metadata?.display_name || currentUser.email,
      cash: player.cash,
      level: player.level,
      reputation: player.reputation,
      fuel: player.fuel,
      hunger: player.hunger,
      energy: player.energy,
      fun: player.fun,
      social: player.social,
      hygiene: player.hygiene,
      bladder: player.bladder,
      owned_houses: []
    })
  }
}

async function savePlayerData() {
  if (!currentUser) return

  const ownedIndexes = properties
    .map((p, i) => p.owned ? i : null)
    .filter(i => i !== null)

  const { error } = await supabase
    .from('players')
    .upsert({
      id: currentUser.id,
      display_name: currentUser.user_metadata?.display_name || currentUser.email,
      cash: player.cash,
      level: player.level,
      reputation: player.reputation,
      fuel: player.fuel,
      hunger: Math.round(player.hunger),
      energy: Math.round(player.energy),
      fun: Math.round(player.fun),
      social: Math.round(player.social),
      hygiene: Math.round(player.hygiene),
      bladder: Math.round(player.bladder),
      owned_houses: ownedIndexes,
      updated_at: new Date().toISOString()
    })

  if (error) console.error('Save error:', error)
}

// Debounced save (saves 1.5 seconds after last change)
function scheduleSave() {
  clearTimeout(saveTimeout)
  saveTimeout = setTimeout(savePlayerData, 1500)
}

// ---------- AUTH ----------
function showAuthScreen() {
  root.innerHTML = `
    <div class="auth-screen">
      <div class="auth-box">
        <h1>🌆 Owerri <span>Lifestyle</span></h1>
        <p>Create an account or log in to play</p>
        <div class="auth-tabs">
          <button id="tabLogin" class="active">Log In</button>
          <button id="tabSignup">Sign Up</button>
        </div>
        <div id="authError" class="auth-error"></div>
        <div id="authSuccess" class="auth-success"></div>
        <div id="loginForm">
          <input type="email" id="loginEmail" placeholder="Email address" />
          <input type="password" id="loginPassword" placeholder="Password" />
          <button id="btnLogin" class="full">Log In</button>
        </div>
        <div id="signupForm" style="display:none">
          <input type="text" id="signupName" placeholder="Display name" />
          <input type="email" id="signupEmail" placeholder="Email address" />
          <input type="password" id="signupPassword" placeholder="Password (min 6 characters)" />
          <button id="btnSignup" class="full">Create Account</button>
        </div>
      </div>
    </div>
  `
  document.getElementById("tabLogin").onclick = () => {
    document.getElementById("tabLogin").classList.add("active")
    document.getElementById("tabSignup").classList.remove("active")
    document.getElementById("loginForm").style.display = "block"
    document.getElementById("signupForm").style.display = "none"
    hideMessages()
  }
  document.getElementById("tabSignup").onclick = () => {
    document.getElementById("tabSignup").classList.add("active")
    document.getElementById("tabLogin").classList.remove("active")
    document.getElementById("signupForm").style.display = "block"
    document.getElementById("loginForm").style.display = "none"
    hideMessages()
  }
  document.getElementById("btnLogin").onclick = login
  document.getElementById("btnSignup").onclick = signup
}

function hideMessages() {
  document.getElementById("authError").style.display = "none"
  document.getElementById("authSuccess").style.display = "none"
}
function showError(msg) {
  const el = document.getElementById("authError")
  el.textContent = msg
  el.style.display = "block"
  document.getElementById("authSuccess").style.display = "none"
}
function showSuccess(msg) {
  const el = document.getElementById("authSuccess")
  el.textContent = msg
  el.style.display = "block"
  document.getElementById("authError").style.display = "none"
}

async function signup() {
  const name = document.getElementById("signupName").value.trim()
  const email = document.getElementById("signupEmail").value.trim()
  const password = document.getElementById("signupPassword").value
  if (!name || !email || !password) return showError("Please fill all fields")
  if (password.length < 6) return showError("Password must be at least 6 characters")
  const { error } = await supabase.auth.signUp({ email, password, options: { data: { display_name: name } } })
  if (error) return showError(error.message)
  showSuccess("Account created! You can now log in.")
  document.getElementById("tabLogin").click()
}

async function login() {
  const email = document.getElementById("loginEmail").value.trim()
  const password = document.getElementById("loginPassword").value
  if (!email || !password) return showError("Please enter email and password")
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return showError(error.message)
  currentUser = data.user
  await loadPlayerData()
  startGame()
}

async function logout() {
  await savePlayerData()
  await supabase.auth.signOut()
  currentUser = null
  showAuthScreen()
}

async function checkSession() {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    currentUser = session.user
    await loadPlayerData()
    startGame()
  } else {
    showAuthScreen()
  }
}

function startGame() { renderGame() }

function $(id) { return document.getElementById(id) }
function money(n) { return "₦" + Math.floor(n).toLocaleString() }
function log(msg) {
  const el = document.createElement("div")
  el.textContent = msg
  $("log")?.prepend(el)
}
function clamp(v) { return Math.max(0, Math.min(100, v)) }
function needColor(v) {
  if (v > 60) return "#36d278"
  if (v > 30) return "#f4c542"
  return "#e74c3c"
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// ---------- PRIVATE CHAT FUNCTIONS ----------
function openPrivateChat(target) {
  activeChat = target
  if (!conversations[target.id]) conversations[target.id] = []

  let panel = $("dmPanel")
  if (!panel) {
    panel = document.createElement("div")
    panel.id = "dmPanel"
    panel.innerHTML = `
      <div class="dm-header">
        <span id="dmName"></span>
        <button id="dmClose">✕</button>
      </div>
      <div id="dmMessages" class="dm-messages"></div>
      <form id="dmForm" class="dm-form">
        <input id="dmInput" maxlength="160" placeholder="Type a message..." autocomplete="off" />
        <button type="submit">Send</button>
      </form>
    `
    document.body.appendChild(panel)

    $("dmClose").onclick = () => {
      panel.classList.remove("open")
      activeChat = null
    }

    $("dmForm").onsubmit = (e) => {
      e.preventDefault()
      sendPrivateMessage()
    }
  }

  $("dmName").textContent = `💬 ${target.name}`
  renderConversation(target.id)
  panel.classList.add("open")
  $("dmInput").focus()
}

function renderConversation(id) {
  const box = $("dmMessages")
  if (!box) return
  box.innerHTML = ""
  ;(conversations[id] || []).forEach(msg => {
    const div = document.createElement("div")
    div.className = `dm-msg ${msg.from === "me" ? "me" : "them"}`
    div.innerHTML = `<span>${escapeHtml(msg.text)}</span><small>${msg.time}</small>`
    box.appendChild(div)
  })
  box.scrollTop = box.scrollHeight
}

function sendPrivateMessage() {
  if (!activeChat) return
  const input = $("dmInput")
  const text = input.value.trim()
  if (!text) return

  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  conversations[activeChat.id].push({ from: "me", text, time })
  renderConversation(activeChat.id)
  input.value = ""

  // Temporary NPC replies (replace later with real multiplayer)
  setTimeout(() => {
    if (!activeChat) return
    const replies = npcReplies[activeChat.id] || ["Ok"]
    const reply = replies[Math.floor(Math.random() * replies.length)]
    const t = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    conversations[activeChat.id].push({ from: "them", text: reply, time: t })
    renderConversation(activeChat.id)
  }, 800 + Math.random() * 1200)
}

function renderRoom() {
  const view = $("roomView")
  if (!view) return
  let html = `<div class="room-content ${currentRoom}">`
  html += `<div class="wall"></div><div class="floor"></div>`
  if (currentRoom === "living") {
    html += `<div class="window"></div><div class="sofa"></div><div class="tv">OWERRI</div><div class="rug"></div>`
  } else if (currentRoom === "bedroom") {
    html += `<div class="bed"><div class="pillow"></div><div class="blanket"></div></div><div class="wardrobe"></div>`
  } else if (currentRoom === "kitchen") {
    html += `<div class="counter"></div><div class="sink"></div><div class="stove"></div><div class="fridge"></div>`
  } else if (currentRoom === "bathroom") {
    html += `<div class="bathtub"></div><div class="toilet"></div><div class="sink-b"></div>`
  }
  html += `</div>`
  view.innerHTML = html
  document.querySelectorAll(".room-tabs button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.room === currentRoom)
  })
}

function switchRoom(room) {
  currentRoom = room
  renderRoom()
}

function renderGame() {
  root.innerHTML = `
    <div class="top">
      <div class="logo">🌆 Owerri <span>Lifestyle</span></div>
      <div class="stats">
        <div class="stat">💰 <b id="cash"></b></div>
        <div class="stat">⭐ <b id="level"></b></div>
        <div class="stat">❤️ <b id="rep"></b></div>
        <div class="stat">⛽ <b id="fuel"></b>%</div>
        <div class="stat">🚶 <b id="mode"></b></div>
        <div class="stat" id="timeLabel">☀️ Day</div>
      </div>
      <div class="needs" id="needs"></div>
    </div>

    <div class="layout">
      <div class="mapbox day" id="mapbox">
        <div class="map">
          <div class="block b1"></div><div class="block b2"></div><div class="block b3"></div><div class="block b4"></div>
          <div class="block b5"></div><div class="block b6"></div><div class="block b7"></div><div class="block b8"></div>
          <div class="block b9"></div><div class="block b10"></div><div class="block b11"></div><div class="block b12"></div>
          <div class="road h r1"></div><div class="road h r2"></div><div class="road h r3"></div>
          <div class="road v c1"></div><div class="road v c2"></div><div class="road v c3"></div>
          <div id="zones"></div>
          <div id="houses"></div>
          <div id="others"></div>
          <div class="player down" id="player"><div class="person"></div></div>
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
          <button id="toggleTime" class="full" style="margin-top:10px">🌙 Toggle Night</button>
          <button id="logout" class="full logout-btn">Log Out</button>
        </div>

        <div class="panel">
          <h3>📍 Current Location</h3>
          <div id="locInfo">Tap a place on the map</div>
          <div class="actions" id="actions"></div>
        </div>

        <div class="panel">
          <h3>💼 Quick Actions</h3>
          <button id="work" class="full">💼 Go To Work</button>
          <button id="travel" class="full">🗺️ Random Travel</button>
        </div>

        <div class="panel">
          <h3>🏠 Property</h3>
          <div id="info">Tap a 🏠 on the map</div>
          <button id="buy" class="full" style="display:none">🏠 Buy House</button>
          <button id="enter" class="full" style="display:none">🚪 Enter House</button>
        </div>

        <div class="panel">
          <h3>📜 Activity Log</h3>
          <div id="log" class="log"></div>
        </div>
      </div>
    </div>

    <div class="interior" id="interior">
      <div class="inhead">
        <b id="houseTitle">🏠 My House</b>
        <button id="leave">Leave</button>
      </div>
      <div class="room-tabs">
        <button data-room="living" class="active">Living Room</button>
        <button data-room="bedroom">Bedroom</button>
        <button data-room="kitchen">Kitchen</button>
        <button data-room="bathroom">Bathroom</button>
      </div>
      <div class="room-view" id="roomView"></div>
      <div class="house-actions">
        <button onclick="houseAction('sleep')">😴 Sleep</button>
        <button onclick="houseAction('tv')">📺 TV</button>
        <button onclick="houseAction('sofa')">🛋 Sofa</button>
        <button onclick="houseAction('eat')">🍽️ Eat</button>
        <button onclick="houseAction('shower')">🚿 Shower</button>
        <button onclick="houseAction('toilet')">🚽 Toilet</button>
      </div>
    </div>
  `

  // Event listeners
  $("walk").onclick = () => { player.mode = "Walk"; update() }
  $("drive").onclick = () => { player.mode = "Drive"; update() }
  $("toggleTime").onclick = toggleTime
  $("logout").onclick = logout
  $("work").onclick = work
  $("travel").onclick = travel
  $("buy").onclick = buyHouse
  $("enter").onclick = enterHouse
  $("leave").onclick = () => $("interior").classList.remove("show")

  document.querySelectorAll("[data-move]").forEach(btn => {
    btn.onclick = () => move(btn.dataset.move)
  })
  document.querySelectorAll(".room-tabs button").forEach(btn => {
    btn.onclick = () => switchRoom(btn.dataset.room)
  })

  renderZones()
  renderHouses()
  renderOthers()
  update()
  log(`Welcome back, ${currentUser.user_metadata?.display_name || currentUser.email}!`)
}

function renderNeeds() {
  const needs = [
    { key: "hunger", label: "Hunger", emoji: "🍽️" },
    { key: "energy", label: "Energy", emoji: "⚡" },
    { key: "fun", label: "Fun", emoji: "🎉" },
    { key: "social", label: "Social", emoji: "👥" },
    { key: "hygiene", label: "Hygiene", emoji: "🚿" },
    { key: "bladder", label: "Bladder", emoji: "🚽" }
  ]
  $("needs").innerHTML = needs.map(n => `
    <div class="need">${n.emoji} ${n.label} ${Math.round(player[n.key])}
      <div class="need-bar"><div class="need-fill" style="width:${player[n.key]}%;background:${needColor(player[n.key])}"></div></div>
    </div>
  `).join("")
}

function renderZones() {
  const c = $("zones")
  c.innerHTML = ""
  zones.forEach((z, i) => {
    const el = document.createElement("div")
    el.className = "zone"
    el.style.left = z.x + "%"
    el.style.top = z.y + "%"
    el.innerHTML = `${z.emoji}<br><b>${z.name}</b>`
    el.onclick = () => selectZone(i)
    c.appendChild(el)
  })
}

function renderHouses() {
  const c = $("houses")
  c.innerHTML = ""
  properties.forEach((p, i) => {
    const el = document.createElement("button")
    el.type = "button"
    el.className = p.owned ? "house owned" : "house"
    el.style.left = p.x + "%"
    el.style.top = p.y + "%"
    el.textContent = p.owned ? "✓" : "🏠"
    el.onclick = () => selectHouse(i)
    c.appendChild(el)
  })
}

function renderOthers() {
  const c = $("others")
  if (!c) return
  c.innerHTML = ""
  others.forEach(o => {
    const el = document.createElement("div")
    el.className = "other"
    el.style.left = o.x + "%"
    el.style.top = o.y + "%"
    el.style.background = o.color
    el.textContent = o.name[0]
    el.title = `Text ${o.name}`
    el.onclick = (e) => {
      e.stopPropagation()
      openPrivateChat(o)
    }
    c.appendChild(el)
  })
}

function update() {
  $("cash").textContent = money(player.cash)
  $("level").textContent = player.level
  $("rep").textContent = player.reputation
  $("fuel").textContent = player.fuel
  $("mode").textContent = player.mode
  $("player").style.left = player.x + "%"
  $("player").style.top = player.y + "%"
  $("player").className = `player ${player.direction}`
  $("player").innerHTML = player.mode === "Drive" ? `<div class="car"><span></span></div>` : `<div class="person"></div>`
  renderNeeds()
  renderHouses()
  renderOthers()
  scheduleSave()
}

function selectZone(i) {
  const z = zones[i]
  player.x = z.x
  player.y = z.y
  $("locInfo").innerHTML = `<b>${z.emoji} ${z.name}</b><br><small>${z.type}</small>`
  const a = $("actions")
  a.innerHTML = ""
  z.actions.forEach(act => {
    const btn = document.createElement("button")
    btn.className = "action-btn"
    btn.innerHTML = `${act.label}<small>${act.cost > 0 ? money(act.cost) : "Free"}</small>`
    btn.onclick = () => doAction(act)
    a.appendChild(btn)
  })
  log(`📍 Arrived at ${z.name}`)
  update()
}

function doAction(a) {
  if (player.cash < a.cost) return log("❌ Not enough money")
  player.cash -= a.cost
  player.hunger = clamp(player.hunger + a.hunger)
  player.energy = clamp(player.energy + a.energy)
  player.fun = clamp(player.fun + a.fun)
  player.social = clamp(player.social + a.social)
  player.hygiene = clamp(player.hygiene + a.hygiene)
  player.bladder = clamp(player.bladder + a.bladder)
  if (a.cash) player.cash += a.cash
  player.reputation += 2
  log(`✅ ${a.label}`)
  update()
}

function selectHouse(i) {
  const h = properties[i]
  player.selected = h
  $("info").innerHTML = `<b>${h.name}</b><br>💰 ${money(h.price)}<br>${h.owned ? "✅ You own this" : "🏷️ Available"}`
  $("buy").style.display = h.owned ? "none" : "block"
  $("enter").style.display = h.owned ? "block" : "none"
}

function buyHouse() {
  const h = player.selected
  if (!h || h.owned) return
  if (player.cash < h.price) return log("❌ Not enough money")
  player.cash -= h.price
  h.owned = true
  player.reputation += 15
  log("🎉 Bought " + h.name)
  update()
  selectHouse(properties.indexOf(h))
}

function enterHouse() {
  const h = player.selected
  if (!h || !h.owned) return
  $("houseTitle").textContent = "🏠 " + h.name
  currentRoom = "living"
  $("interior").classList.add("show")
  renderRoom()
}

function houseAction(type) {
  if (type === "sleep") { player.energy = clamp(player.energy + 45); log("😴 You slept well") }
  if (type === "tv") { player.fun = clamp(player.fun + 25); log("📺 Watching TV") }
  if (type === "sofa") { player.fun = clamp(player.fun + 15); player.energy = clamp(player.energy + 10); log("🛋 Relaxing") }
  if (type === "eat") { player.hunger = clamp(player.hunger + 35); log("🍽️ Had a meal") }
  if (type === "shower") { player.hygiene = 100; log("🚿 Took a shower") }
  if (type === "toilet") { player.bladder = 100; log("🚽 Used the toilet") }
  update()
}

function move(dir) {
  const step = player.mode === "Drive" ? 3.2 : 1.6
  if (player.mode === "Drive") {
    if (player.fuel <= 0) return log("⛽ Out of fuel")
    player.fuel--
  }
  player.direction = dir
  if (dir === "up") player.y -= step
  if (dir === "down") player.y += step
  if (dir === "left") player.x -= step
  if (dir === "right") player.x += step
  player.x = Math.max(4, Math.min(96, player.x))
  player.y = Math.max(6, Math.min(94, player.y))
  update()
}

function work() {
  const pay = player.mode === "Drive" ? 42000 : 28000
  player.cash += pay
  player.energy = clamp(player.energy - 20)
  player.hunger = clamp(player.hunger - 10)
  player.reputation += 4
  if (player.reputation >= player.level * 120) {
    player.level++
    log("⭐ Level up!")
  }
  log("💼 Earned " + money(pay))
  update()
}

function travel() {
  const z = zones[Math.floor(Math.random() * zones.length)]
  selectZone(zones.indexOf(z))
}

function toggleTime() {
  isNight = !isNight
  $("mapbox").classList.toggle("day", !isNight)
  $("mapbox").classList.toggle("night", isNight)
  $("timeLabel").textContent = isNight ? "🌙 Night" : "☀️ Day"
}

setInterval(() => {
  others.forEach(o => {
    o.x = Math.max(10, Math.min(90, o.x + (Math.random() - 0.5) * 8))
    o.y = Math.max(10, Math.min(90, o.y + (Math.random() - 0.5) * 8))
  })
  renderOthers()
}, 4000)

setInterval(() => {
  player.hunger = clamp(player.hunger - 1.8)
  player.energy = clamp(player.energy - 1.2)
  player.fun = clamp(player.fun - 1.0)
  player.social = clamp(player.social - 0.8)
  player.hygiene = clamp(player.hygiene - 0.7)
  player.bladder = clamp(player.bladder - 1.5)
  update()
}, 12000)

checkSession()
