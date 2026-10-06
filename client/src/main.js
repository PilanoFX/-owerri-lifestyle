const style = document.createElement("style");
style.textContent = `
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0a0e14;color:#fff;font-family:system-ui,-apple-system,sans-serif;overflow-x:hidden}
button{border:0;border-radius:12px;padding:11px 14px;color:#fff;background:#1c2733;font-weight:700;cursor:pointer;font-size:13px;transition:0.15s}
button:active{transform:scale(0.96)}

/* ===== TOP BAR ===== */
.top{padding:14px 16px 10px;background:linear-gradient(180deg,#121820 0%,#0d1218 100%);border-bottom:1px solid #1e2a36;position:sticky;top:0;z-index:50}
.logo{font-size:20px;font-weight:800;margin-bottom:10px;letter-spacing:-0.3px}
.logo span{color:#42d4ff}
.stats{display:flex;gap:7px;flex-wrap:wrap;font-size:12px;margin-bottom:10px}
.stat{background:#18222d;padding:6px 10px;border-radius:10px;border:1px solid #243040}
.needs{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.need{background:#151d27;border-radius:10px;padding:7px 9px;font-size:11px;border:1px solid #1e2a36}
.need-bar{height:5px;background:#1e2a36;border-radius:3px;margin-top:4px;overflow:hidden}
.need-fill{height:100%;border-radius:3px;transition:width 0.35s}

/* ===== LAYOUT ===== */
.layout{display:flex;flex-direction:column;gap:12px;padding:12px}

/* ===== 3D MAP BOX ===== */
.mapbox{
  position:relative;
  width:100%;
  height:min(62vh,560px);
  min-height:400px;
  border-radius:20px;
  overflow:hidden;
  background:#1a2f22;
  border:2px solid #2a4a38;
  box-shadow:
    0 20px 40px rgba(0,0,0,0.55),
    inset 0 0 60px rgba(0,0,0,0.35);
}

/* ===== MAP SURFACE (3D FEEL) ===== */
.map{
  position:absolute;
  inset:0;
  background:
    /* subtle grid */
    linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px),
    linear-gradient(0deg,rgba(255,255,255,0.03) 1px,transparent 1px),
    /* ground gradient */
    linear-gradient(160deg,#1e3a28 0%,#244830 40%,#1a3224 100%);
  background-size:48px 48px,48px 48px,auto;
  transform-style:preserve-3d;
}

/* ===== ROADS (with height) ===== */
.road{
  position:absolute;
  background:#2c3238;
  box-shadow:
    0 6px 0 #1a1e22,
    inset 0 1px 0 rgba(255,255,255,0.06);
  z-index:2;
}
.h{height:42px;width:100%}
.v{width:42px;height:100%}
.r1{top:26%}
.r2{top:52%}
.r3{top:76%}
.c1{left:20%}
.c2{left:47%}
.c3{left:74%}

/* dashed center lines */
.road.h::after{
  content:"";
  position:absolute;
  left:0;right:0;top:50%;
  height:0;
  border-top:3px dashed rgba(255,220,80,0.55);
  transform:translateY(-50%);
}
.road.v::after{
  content:"";
  position:absolute;
  top:0;bottom:0;left:50%;
  width:0;
  border-left:3px dashed rgba(255,220,80,0.55);
  transform:translateX(-50%);
}

/* ===== 3D BUILDINGS ===== */
.block{
  position:absolute;
  background:linear-gradient(145deg,#2f4a36,#3a5c42);
  border-radius:4px 4px 2px 2px;
  box-shadow:
    0 10px 0 #1a2e20,
    0 14px 18px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.08);
  z-index:3;
}
.block::before{ /* roof */
  content:"";
  position:absolute;
  top:-8px;left:0;right:0;
  height:10px;
  background:linear-gradient(90deg,#3d6048,#4a7255);
  border-radius:3px 3px 0 0;
  box-shadow:0 -2px 0 rgba(0,0,0,0.2);
}
.b1{left:3%;top:5%;width:14%;height:14%}
.b2{left:24%;top:4%;width:15%;height:16%}
.b3{left:50%;top:5%;width:14%;height:15%}
.b4{left:75%;top:6%;width:16%;height:14%}
.b5{left:3%;top:36%;width:14%;height:13%}
.b6{left:24%;top:35%;width:15%;height:14%}
.b7{left:50%;top:37%;width:13%;height:12%}
.b8{left:75%;top:36%;width:16%;height:13%}
.b9{left:3%;top:62%;width:14%;height:24%}
.b10{left:24%;top:61%;width:15%;height:25%}
.b11{left:50%;top:63%;width:13%;height:23%}
.b12{left:75%;top:61%;width:16%;height:25%}

/* ===== LOCATION MARKERS (elevated) ===== */
.zone{
  position:absolute;
  transform:translate(-50%,-50%);
  background:rgba(12,18,26,0.94);
  border:1.5px solid #42d4ff;
  padding:6px 10px;
  border-radius:12px;
  font-size:11px;
  z-index:10;
  white-space:nowrap;
  cursor:pointer;
  text-align:center;
  box-shadow:
    0 8px 0 rgba(0,0,0,0.35),
    0 12px 20px rgba(0,0,0,0.4),
    0 0 12px rgba(66,212,255,0.25);
  transition:transform 0.15s, box-shadow 0.15s;
}
.zone:active{
  transform:translate(-50%,-50%) scale(0.94) translateY(4px);
  box-shadow:0 3px 0 rgba(0,0,0,0.35),0 6px 12px rgba(0,0,0,0.3);
}

/* ===== HOUSES ===== */
.house{
  position:absolute;
  transform:translate(-50%,-50%);
  width:40px;height:40px;
  border-radius:50%;
  background:linear-gradient(145deg,#ffd54f,#f4c542);
  color:#111;
  border:3px solid #fff;
  z-index:20;
  font-size:17px;
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;
  box-shadow:
    0 8px 0 rgba(0,0,0,0.3),
    0 12px 18px rgba(0,0,0,0.35);
  transition:transform 0.12s;
}
.house.owned{background:linear-gradient(145deg,#4ade80,#36d278)}
.house:active{transform:translate(-50%,-50%) scale(0.92) translateY(3px)}

/* ===== PLAYER (strong depth) ===== */
.player{
  position:absolute;
  transform:translate(-50%,-50%);
  z-index:30;
  transition:left 0.14s linear, top 0.14s linear;
  filter:drop-shadow(0 10px 8px rgba(0,0,0,0.55));
}
.person{
  width:20px;height:20px;border-radius:50%;
  background:#f1c27d;border:2.5px solid #111;position:relative;
}
.person:after{
  content:"";position:absolute;top:16px;left:1px;
  width:16px;height:14px;background:#4d7cff;border-radius:7px;
}
.car{
  width:42px;height:22px;background:#e63946;border-radius:7px;
  border:2px solid #111;position:relative;
}
.car:before,.car:after{
  content:"";position:absolute;width:9px;height:9px;
  background:#111;border-radius:50%;bottom:-6px;
}
.car:before{left:5px}.car:after{right:5px}
.car span{
  position:absolute;left:12px;top:3px;
  width:16px;height:8px;background:#a0e0ff;border-radius:2px;
}

/* ===== SIDE PANELS ===== */
.side{display:flex;flex-direction:column;gap:11px}
.panel{
  background:linear-gradient(180deg,#151d27,#10161e);
  border:1px solid #1e2a36;
  border-radius:16px;
  padding:14px;
  box-shadow:0 8px 20px rgba(0,0,0,0.25);
}
.panel h3{margin:0 0 11px;font-size:15px;font-weight:700}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.full{width:100%;margin-top:7px}
.controls{display:grid;grid-template-columns:repeat(3,44px);gap:6px;justify-content:center;margin-top:12px}
.controls button{height:42px;padding:0;font-size:17px;background:#1c2733}
.empty{visibility:hidden}
.log{max-height:130px;overflow:auto;font-size:12px}
.log div{padding:5px 0;border-bottom:1px solid #1e2a36}
.actions{display:flex;flex-direction:column;gap:7px;margin-top:9px}
.action-btn{background:#1c2733;text-align:left;padding:10px 13px;border:1px solid #243040}
.action-btn small{display:block;opacity:0.65;font-weight:400;margin-top:2px;font-size:11px}

/* ===== HOUSE INTERIOR ===== */
.interior{display:none;position:fixed;inset:0;background:#121212;z-index:100}
.interior.show{display:block}
.inhead{height:58px;background:#1c2530;padding:14px 18px;display:flex;align-items:center;justify-content:space-between}
.room{position:absolute;top:58px;bottom:0;left:0;right:0;background:linear-gradient(#d4b896 0 52%,#6b4423 52%)}
.window{position:absolute;left:11%;top:9%;width:150px;height:110px;background:#7ec8f5;border:12px solid #fff;box-shadow:0 8px 20px rgba(0,0,0,0.2)}
.tv{position:absolute;right:9%;top:11%;width:190px;height:115px;background:#0a0a0a;border:7px solid #222}
.tv:after{content:"OWERRI";display:flex;height:100%;align-items:center;justify-content:center;color:#42d4ff;font-weight:bold;font-size:19px}
.sofa{position:absolute;left:9%;bottom:15%;width:250px;height:75px;background:#4a4060;border-radius:18px;box-shadow:0 10px 0 #2e2840}
.table{position:absolute;right:22%;bottom:13%;width:130px;height:58px;background:#6b4423;border-radius:7px;box-shadow:0 8px 0 #4a2e18}
.bed{position:absolute;left:28%;bottom:3%;width:290px;height:90px;background:#e0e0ec;border-radius:18px;box-shadow:0 10px 0 #b0b0c0}

/* ===== DESKTOP ===== */
@media(min-width:900px){
  .layout{flex-direction:row;align-items:flex-start}
  .mapbox{flex:1;height:640px;min-height:640px}
  .side{width:310px;flex-shrink:0}
}
`;
document.head.appendChild(style);
