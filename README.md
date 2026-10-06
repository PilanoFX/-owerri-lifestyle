# Owerri Lifestyle — Multiplayer MVP

A playable browser-game MVP for Owerri Lifestyle. It includes a real WebSocket multiplayer server, player names, live movement, city locations, work income, reputation/levels, clubs, vehicles, properties, and city chat.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run build
npm start
```

Then open `http://localhost:3000` in two browser tabs. Use different player names to see both players moving in the same world.

For development with hot reload:

```bash
npm install
npm run dev
```

## Deploy

Deploy this project as a long-running Node.js service (not a static-only host). The server serves the Vite build and keeps the WebSocket connection alive.

Recommended production setup:
- Node.js host with WebSocket support
- HTTPS/WSS
- Environment-based secrets
- Persistent PostgreSQL/Supabase database for accounts, inventories, vehicles and properties
- Redis/pub-sub later when scaling to multiple game servers

## Current MVP limitations

The multiplayer world is real-time, but player data and property ownership are currently in server memory. Restarting the server resets the world. Add PostgreSQL/Supabase persistence before treating it as a production economy.

The locations are a game-world representation and are not a navigation map.
