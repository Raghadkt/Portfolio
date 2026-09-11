/* =========================================================
   MAIN SCRIPT
   ========================================================= */

/* ---------- Theme (Light / Dark) ---------- */
(function initTheme(){
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();

function updateThemeIcon(){
  const btn = document.getElementById("themeToggle");
  if(!btn) return;
  const theme = document.documentElement.getAttribute("data-theme");
  btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  updateThemeIcon();

  const themeBtn = document.getElementById("themeToggle");
  if(themeBtn){
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateThemeIcon();
    });
  }

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if(menuBtn && navLinks){
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      menuBtn.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.textContent = "☰";
      });
    });
  }

  /* ---------- Active link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  if(sections.length && navAnchors.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          navAnchors.forEach(a => a.classList.remove("active"));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if(active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(sec => observer.observe(sec));
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if(revealEls.length){
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- Back to top ---------- */
  const backBtn = document.getElementById("backToTop");
  if(backBtn){
    window.addEventListener("scroll", () => {
      backBtn.classList.toggle("show", window.scrollY > 500);
    });
    backBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  }

  /* ---------- Render dynamic content ---------- */
  renderProjects();
  renderCertificates();
  renderExperience();
  renderAchievements();
  initProjectFilters();

  /* ---------- Contact form (mailto fallback) ---------- */
  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const message = document.getElementById("cf-message").value.trim();
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
    });
  }
});

/* ---------- Render Projects ---------- */
function renderProjects(filter = "all"){
  const grid = document.getElementById("projectsGrid");
  if(!grid || typeof PROJECTS === "undefined") return;
  const items = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(p => `
    <article class="card reveal">
      <div class="card-img">${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.parentElement.textContent='Project Image'">` : "Project Image"}</div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p>${p.shortDesc}</p>
        <div class="tool-tags">${p.tools.map(t => `<span>${t}</span>`).join("")}</div>
        <a class="card-link" href="project.html?id=${p.id}">View Project <span class="arrow">→</span></a>
      </div>
    </article>
  `).join("");
  document.querySelectorAll("#projectsGrid .reveal").forEach(el => {
    el.classList.add("in");
  });
}

function initProjectFilters(){
  const buttons = document.querySelectorAll(".filter-btn");
  if(!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ---------- Render Certificates ---------- */
function renderCertificates(){
  const grid = document.getElementById("certificatesGrid");
  if(!grid || typeof CERTIFICATES === "undefined") return;
  grid.innerHTML = CERTIFICATES.map(c => `
    <article class="card reveal in">
      <div class="card-body">
        <h3>${c.title}</h3>
        <div class="meta-row"><span>${c.issuer}</span><span>${c.year}</span></div>
        <div class="card-actions">
          <a href="${c.file}" target="_blank" rel="noopener">View Certificate</a>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------- Render Experience ---------- */
function renderExperience(){
  const wrap = document.getElementById("experienceTimeline");
  if(!wrap || typeof EXPERIENCE === "undefined") return;
  wrap.innerHTML = EXPERIENCE.map(e => `
    <div class="timeline-item reveal in">
      <div class="timeline-date">${e.date}</div>
      <div class="timeline-content">
        <h3>${e.title}</h3>
        <div class="org">${e.org}</div>
        <p>${e.description}</p>
      </div>
    </div>
  `).join("");
}

/* ---------- Render Achievements ---------- */
function renderAchievements(){
  const grid = document.getElementById("achievementsGrid");
  if(!grid || typeof ACHIEVEMENTS === "undefined") return;
  grid.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="ach-item reveal in">
      <div class="cat">${a.category}</div>
      <h4>${a.title}</h4>
      <p>${a.description}</p>
    </div>
  `).join("");
}
