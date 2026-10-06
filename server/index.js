import express from "express";
import cors from "cors";
import { WebSocketServer } from "ws";
import http from "http";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    game: "Owerri Lifestyle"
  });
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const players = new Map();

wss.on("connection", (ws) => {
  const id = Math.random().toString(36).slice(2);

  players.set(id, {
    id,
    name: "Player",
    x: 49,
    y: 38
  });

  ws.send(JSON.stringify({
    type: "welcome",
    id,
    players: [...players.values()]
  }));

  broadcast();

  ws.on("message", (raw) => {
    try {
      const message = JSON.parse(raw);
      const player = players.get(id);

      if (!player) return;

      if (message.type === "move") {
        player.x = Math.max(
          0,
          Math.min(100, Number(message.x) || player.x)
        );

        player.y = Math.max(
          0,
          Math.min(100, Number(message.y) || player.y)
        );

        broadcast();
      }

      if (message.type === "name") {
        player.name = String(message.name || "Player").slice(0, 20);
        broadcast();
      }
    } catch (error) {
      console.error(error);
    }
  });

  ws.on("close", () => {
    players.delete(id);
    broadcast();
  });
});

function broadcast() {
  const data = JSON.stringify({
    type: "players",
    players: [...players.values()]
  });

  for (const client of wss.clients) {
    if (client.readyState === 1) {
      client.send(data);
    }
  }
}

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Owerri Lifestyle server running on port ${PORT}`);
});
