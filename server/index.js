import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    game: "Owerri Lifestyle"
  });
});

const clientDist = path.join(__dirname, "..", "client", "dist");

app.use(express.static(clientDist));

app.use((req, res, next) => {
  if (req.method !== "GET") return next();

  res.sendFile(
    path.join(clientDist, "index.html"),
    (error) => {
      if (error) next(error);
    }
  );
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const players = new Map();

const cleanName = (value) =>
  String(value || "Player")
    .replace(/[^a-zA-Z0-9 _-]/g, "")
    .trim()
    .slice(0, 18) || "Player";

function publicPlayer(player) {
  return {
    id: player.id,
    name: player.name,
    username: player.name,
    x: player.x,
    y: player.y,
    zone: player.zone,
    mode: player.mode,
    color: player.color
  };
}

function send(ws, payload) {
  if (ws.readyState === 1) ws.send(JSON.stringify(payload));
}

function broadcastPlayers() {
  const payload = {
    type: "players",
    players: [...players.values()].map(publicPlayer),
    online: players.size
  };
  const raw = JSON.stringify(payload);
  for (const client of wss.clients) {
    if (client.readyState === 1) client.send(raw);
  }
}

wss.on("connection", (ws) => {
  const id = Math.random().toString(36).slice(2, 12);
  const palette = ["#e74c3c", "#9b59b6", "#3498db", "#f39c12", "#1abc9c", "#e67e22", "#e91e63"];
  const player = {
    id,
    ws,
    name: "Player",
    x: 49,
    y: 38,
    zone: "Fire Service",
    mode: "Walk",
    color: palette[Math.floor(Math.random() * palette.length)]
  };
  players.set(id, player);

  send(ws, {
    type: "welcome",
    id,
    players: [...players.values()].map(publicPlayer),
    online: players.size
  });
  broadcastPlayers();

  ws.on("message", (raw) => {
    let message;
    try {
      message = JSON.parse(raw.toString());
    } catch {
      return;
    }

    if (message.type === "name") {
      player.name = cleanName(message.name);
      if (typeof message.zone === "string") player.zone = message.zone.slice(0, 40);
      broadcastPlayers();
      return;
    }

    if (message.type === "move") {
      const x = Number(message.x);
      const y = Number(message.y);
      if (Number.isFinite(x)) player.x = Math.max(3, Math.min(97, x));
      if (Number.isFinite(y)) player.y = Math.max(5, Math.min(95, y));
      if (typeof message.zone === "string") player.zone = message.zone.slice(0, 40);
      if (message.mode === "Walk" || message.mode === "Drive") player.mode = message.mode;
      broadcastPlayers();
      return;
    }

    if (message.type === "chat") {
      const text = String(message.text || "").replace(/[<>]/g, "").trim().slice(0, 160);
      if (!text) return;
      const payload = JSON.stringify({
        type: "chat",
        fromId: player.id,
        name: player.name,
        text,
        at: Date.now()
      });
      for (const client of wss.clients) {
        if (client.readyState === 1) client.send(payload);
      }
      return;
    }

    if (message.type === "dm") {
      const target = players.get(String(message.to || ""));
      const text = String(message.text || "").replace(/[<>]/g, "").trim().slice(0, 160);
      if (!target || !text) return;
      send(target.ws, {
        type: "dm",
        fromId: player.id,
        fromName: player.name,
        text,
        at: Date.now()
      });
    }
  });

  ws.on("close", () => {
    players.delete(id);
    broadcastPlayers();
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Owerri Lifestyle server running on port ${PORT}`);
});
