// =====================================================================
//  game-api.js — data layer
//  Live mode: Supabase REST (publishable key).  Demo mode: add ?demo to the
//  URL — everything runs in this browser via localStorage (rehearsal only;
//  open presenter.html?demo and play.html?demo in tabs of the SAME browser).
// =====================================================================
(function () {
  const C = window.GAME_CONFIG;
  const params = new URLSearchParams(location.search);
  const DEMO = params.has("demo");
  let clockOffset = 0;   // serverTime - localTime (ms), learned from response Date headers

  function now() { return Date.now() + clockOffset; }

  // ------------------------------------------------------------ LIVE
  async function http(path, opts) {
    const res = await fetch(C.supabaseUrl.replace(/\/$/, "") + path, Object.assign({
      headers: { apikey: C.supabaseKey, Authorization: "Bearer " + C.supabaseKey,
                 "Content-Type": "application/json" },
      cache: "no-store"
    }, opts || {}));
    const d = res.headers.get("date");
    if (d) { const off = Date.parse(d) - Date.now(); clockOffset = clockOffset ? (clockOffset * 0.7 + off * 0.3) : off; }
    if (!res.ok) throw new Error("HTTP " + res.status + ": " + (await res.text()).slice(0, 200));
    const t = await res.text();
    return t ? JSON.parse(t) : null;
  }
  const rpc = (fn, args) => http("/rest/v1/rpc/" + fn, { method: "POST", body: JSON.stringify(args || {}) });

  const live = {
    async state() {
      const rows = await http("/rest/v1/dl_game_state?id=eq.1&select=round,status,seconds,opened_at");
      if (!rows || !rows.length) throw new Error("No game_state row — was setup.sql run?");
      return rows[0];
    },
    hostLogin: (pin) => rpc("dl_host_login", { p_pin: pin }),
    hostControl: (pin, round, status) => rpc("dl_host_control", { p_pin: pin, p_round: round, p_status: status }),
    hostReset: (pin) => rpc("dl_host_reset", { p_pin: pin }),
    join: (device, name) => rpc("dl_join_game", { p_device: device, p_name: name }),
    submit: (device, round, choice) => rpc("dl_submit_answer", { p_device: device, p_round: round, p_choice: choice }),
    playerCount: () => rpc("dl_get_player_count"),
    roundStats: (round) => rpc("dl_get_round_stats", { p_round: round }),
    leaderboard: (limit) => rpc("dl_get_leaderboard", { p_limit: limit }),
    myStatus: (device) => rpc("dl_get_my_status", { p_device: device })
  };

  // ------------------------------------------------------------ DEMO (mirrors setup.sql)
  const KEY = "derbyTriviaDemo";
  const demoKey = (r) => "ABCD"[(r * 7 + 1) % 4];          // fake answer key for rehearsal only
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; } };
  const fresh = () => ({ state: { round: 0, status: "idle", seconds: C.secondsPerQuestion || 20, opened_at: null },
                         players: {}, answers: {}, reveals: {} });
  const db = () => load() || fresh();
  const save = (d) => localStorage.setItem(KEY, JSON.stringify(d));
  const pts = (ms, sec) => 1000 + Math.max(0, Math.min(500, Math.floor(500 * (1 - ms / Math.max(sec * 1000, 1)))));
  function ranked(d) {
    const rows = Object.entries(d.players).map(([dev, p]) => {
      let score = 0, correct = 0, time = 0;
      Object.entries(d.answers[dev] || {}).forEach(([r, a]) => {
        if (d.reveals[r] && a.choice === d.reveals[r]) { score += pts(a.ms, d.state.seconds); correct++; time += a.ms; }
      });
      return { device: dev, name: p.name, joined: p.joined, score, correct, time_ms: time };
    });
    rows.sort((a, b) => b.score - a.score || b.correct - a.correct || a.time_ms - b.time_ms || a.joined - b.joined);
    rows.forEach((r, i) => r.rank = i + 1);
    return rows;
  }
  const demo = {
    async state() { return db().state; },
    async hostLogin() { return true; },
    async hostControl(pin, round, status) {
      const d = db(); d.state.round = round; d.state.status = status;
      if (status === "open") d.state.opened_at = new Date().toISOString();
      if (status === "revealed") d.reveals[round] = demoKey(round);
      save(d); return "ok";
    },
    async hostReset() { save(fresh()); return "ok"; },
    async join(device, name) {
      name = (name || "").replace(/\s+/g, " ").trim().slice(0, 20); if (!name) return "bad_name";
      const d = db(); d.players[device] = { name, joined: (d.players[device] || {}).joined || Date.now() }; save(d); return "ok";
    },
    async submit(device, round, choice) {
      const d = db(), s = d.state;
      if (!d.players[device]) return "not_joined";
      if (s.status !== "open" || s.round !== round) return "closed";
      const ms = Math.max(0, Date.now() - Date.parse(s.opened_at));
      if (ms > (s.seconds + 2) * 1000) return "closed";
      d.answers[device] = d.answers[device] || {};
      if (d.answers[device][round]) return "locked";
      d.answers[device][round] = { choice, ms }; save(d); return "ok";
    },
    async playerCount() { return Object.keys(db().players).length; },
    async roundStats(round) {
      const d = db(), list = Object.values(d.answers).map(a => a[round]).filter(Boolean), rev = !!d.reveals[round];
      const counts = { A: 0, B: 0, C: 0, D: 0 }; list.forEach(a => counts[a.choice]++);
      return { total: list.length, players: Object.keys(d.players).length, revealed: rev, counts: rev ? counts : null };
    },
    async leaderboard(limit) {
      return ranked(db()).slice(0, limit || 10).map(r => ({ rank: r.rank, name: r.name, score: r.score, correct: r.correct, time_ms: r.time_ms }));
    },
    async myStatus(device) {
      const d = db(); if (!d.players[device]) return { joined: false };
      const me = ranked(d).find(r => r.device === device), r = d.state.round;
      const a = (d.answers[device] || {})[r], ans = d.reveals[r] || null;
      return { joined: true, name: me.name, score: me.score, correct: me.correct, rank: me.rank,
               players: Object.keys(d.players).length, my_choice: a ? a.choice : null, round_answer: ans,
               round_points: a && ans ? (a.choice === ans ? pts(a.ms, d.state.seconds) : 0) : null };
    }
  };

  window.GameAPI = Object.assign({ DEMO, now }, DEMO ? demo : live);
})();
