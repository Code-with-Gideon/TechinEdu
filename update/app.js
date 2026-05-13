/* TechinEdu — shared JS: header, photo cycle, scroll reveals, counters, tweaks panel */

(function () {
  // ---------- Persist tweaks across pages ----------
  const TWEAKS_KEY = "techinedu.tweaks.v1";
  const DEFAULTS = { palette: "lagoon", motion: 1 };
  let tweaks = DEFAULTS;
  try {
    const saved = JSON.parse(localStorage.getItem(TWEAKS_KEY) || "null");
    if (saved && typeof saved === "object") tweaks = Object.assign({}, DEFAULTS, saved);
  } catch (e) {}

  function applyTweaks() {
    const root = document.documentElement;
    if (tweaks.palette === "lagoon") root.removeAttribute("data-palette");
    else root.setAttribute("data-palette", tweaks.palette);
    root.style.setProperty("--motion", tweaks.motion);
  }

  function saveTweaks() {
    try { localStorage.setItem(TWEAKS_KEY, JSON.stringify(tweaks)); } catch (e) {}
  }

  applyTweaks();

  // ---------- Header on scroll ----------
  const header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Burger ----------
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".site-header .nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("is-open");
      burger.textContent = nav.classList.contains("is-open") ? "Close" : "Menu";
    });
  }

  // ---------- Hero photo cycle ----------
  const cycle = document.querySelector(".hero-cycle");
  if (cycle) {
    const frames = Array.from(cycle.querySelectorAll(".frame"));
    const dotsHost = document.querySelector(".hero-dots");
    const captionT = document.querySelector(".hero-frame-info span.t");
    const captionN = document.querySelector(".hero-frame-info span.n");
    let i = 0;
    let timer;
    if (dotsHost) {
      frames.forEach((_, idx) => {
        const b = document.createElement("button");
        b.type = "button"; b.setAttribute("aria-label", "Frame " + (idx + 1));
        b.addEventListener("click", () => { go(idx); restart(); });
        dotsHost.appendChild(b);
      });
    }
    function go(n) {
      frames[i].classList.remove("is-active");
      frames[i].classList.add("is-prev");
      i = (n + frames.length) % frames.length;
      frames[i].classList.remove("is-prev");
      frames[i].classList.add("is-active");
      if (dotsHost) {
        dotsHost.querySelectorAll("button").forEach((b, x) => b.classList.toggle("is-active", x === i));
      }
      if (captionT) captionT.textContent = frames[i].dataset.caption || "";
      if (captionN) captionN.textContent = String(i + 1).padStart(2, "0") + " / " + String(frames.length).padStart(2, "0");
    }
    function tick() { go(i + 1); }
    function start() { timer = setInterval(tick, 4200); }
    function restart() { clearInterval(timer); start(); }
    go(0);
    start();
  }

  // ---------- Scroll reveals ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll("[data-reveal], [data-reveal-stagger]").forEach((el) => io.observe(el));

  // ---------- Counter animation ----------
  const counters = document.querySelectorAll("[data-count]");
  const cio = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      cio.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      const t0 = performance.now();
      function step(t) {
        const k = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        const v = Math.round(target * eased);
        el.textContent = v.toLocaleString() + suffix;
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => cio.observe(c));

  // ---------- Tweaks panel ----------
  const fab = document.querySelector(".tweaks-fab");
  const panel = document.querySelector(".tweaks-panel");
  if (fab && panel) {
    fab.addEventListener("click", () => panel.classList.toggle("open"));
    document.addEventListener("click", (e) => {
      if (!panel.classList.contains("open")) return;
      if (panel.contains(e.target) || fab.contains(e.target)) return;
      panel.classList.remove("open");
    });
    panel.querySelectorAll("[data-set]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [key, val] = btn.dataset.set.split(":");
        tweaks[key] = isNaN(+val) ? val : +val;
        applyTweaks();
        saveTweaks();
        // refresh actives
        panel.querySelectorAll("[data-set]").forEach((b) => {
          const [k, v] = b.dataset.set.split(":");
          const cur = String(tweaks[k]);
          b.classList.toggle("is-active", cur === v);
        });
      });
    });
    // init active state
    panel.querySelectorAll("[data-set]").forEach((b) => {
      const [k, v] = b.dataset.set.split(":");
      const cur = String(tweaks[k]);
      b.classList.toggle("is-active", cur === v);
    });
  }

  // ---------- Form prevent ----------
  document.querySelectorAll("form[data-fake]").forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = f.querySelector("button[type=submit]");
      if (btn) {
        const old = btn.textContent;
        btn.textContent = "Thanks — we'll be in touch ✓";
        btn.disabled = true;
        setTimeout(() => { btn.textContent = old; btn.disabled = false; f.reset(); }, 2600);
      }
    });
  });

  // ---------- Hero parallax (light) ----------
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > window.innerHeight) return;
      const k = Math.min(1, y / window.innerHeight);
      cycle.style.transform = `translateY(${k * 60}px)`;
      const inner = hero.querySelector(".hero-inner");
      if (inner) inner.style.transform = `translateY(${k * -30}px)`;
      inner.style.opacity = String(1 - k * 0.5);
    }, { passive: true });
  }
})();
