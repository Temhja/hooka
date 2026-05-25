/**
 * HOOKAH RESTAURANT — APP v2 (White Modern)
 */

let currentLang = CONFIG.DEFAULT_LANG;
let allMenuData = [];
let currentCategory = 'all';

// ── INTRO ──────────────────────────────────────────
function enterSite() {
  const intro = document.getElementById('introScreen');
  const site  = document.getElementById('siteWrapper');
  intro.style.animation = 'introOut 0.6s ease forwards';
  setTimeout(() => {
    intro.style.display = 'none';
    site.style.display  = 'block';
    initMenu();
  }, 580);
}
setTimeout(() => {
  if (document.getElementById('introScreen') && document.getElementById('introScreen').style.display !== 'none') enterSite();
}, 7000);

// ── LANG ───────────────────────────────────────────
function toggleLang() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'EN' : 'عر';
  applyLang();
  if (allMenuData.length > 0) renderAll();
}

function applyLang() {
  document.querySelectorAll('[data-ar][data-en]').forEach(el => {
    el.textContent = currentLang === 'ar' ? el.dataset.ar : el.dataset.en;
  });
  const inp = document.getElementById('searchInput');
  if (inp) inp.placeholder = currentLang === 'ar' ? inp.dataset.placeholderAr : inp.dataset.placeholderEn;
  const curr = document.getElementById('modalCurr');
  if (curr) curr.textContent = currentLang === 'ar' ? CONFIG.CURRENCY_AR : CONFIG.CURRENCY_EN;
}

// ── SCROLL HEADER ──────────────────────────────────
window.addEventListener('scroll', () => {
  const h = document.getElementById('siteHeader');
  if (h) h.classList.toggle('scrolled', window.scrollY > 40);
});

// ── NAV ────────────────────────────────────────────
function showSection(s) {
  document.getElementById('menuSection').style.display  = s === 'menu'  ? 'block' : 'none';
  document.getElementById('aboutSection').style.display = s === 'about' ? 'block' : 'none';
  document.querySelectorAll('.hnav-btn').forEach((b, i) => {
    b.classList.toggle('active', (s === 'menu' && i === 0) || (s === 'about' && i === 1));
  });
}

// ── MENU INIT ──────────────────────────────────────
async function initMenu() {
  applyLang();
  document.getElementById('loadingState').style.display = 'flex';
  document.getElementById('gridWrap').style.display = 'none';

  allMenuData = await getMenuData();

  document.getElementById('loadingState').style.display = 'none';
  document.getElementById('gridWrap').style.display = 'block';
  renderAll();

  if (CONFIG.AUTO_REFRESH_MINUTES > 0) {
    setInterval(async () => {
      allMenuData = await getMenuData();
      renderAll();
    }, CONFIG.AUTO_REFRESH_MINUTES * 60000);
  }
}

// ── RENDER ALL ─────────────────────────────────────
function renderAll() {
  renderCatNav();
  renderGrid(currentCategory);
  updateCount();
}

// ── CATEGORIES ─────────────────────────────────────
function getCategories() {
  const seen = new Set(), cats = [];
  allMenuData.forEach(item => {
    const k = item.category_ar;
    if (!seen.has(k)) { seen.add(k); cats.push({ ar: item.category_ar, en: item.category_en }); }
  });
  return cats;
}

function renderCatNav() {
  const cats = getCategories();
  const nav = document.getElementById('catNav');
  const allLabel = currentLang === 'ar' ? 'الكل' : 'All';
  let html = `<button class="cat-pill ${currentCategory==='all'?'active':''}" onclick="selectCat('all')">
    <span class="pill-emoji">🍽️</span>${allLabel}
  </button>`;
  cats.forEach(c => {
    const label = currentLang === 'ar' ? c.ar : c.en;
    const icon = CATEGORY_ICONS[c.ar] || CATEGORY_ICONS[c.en] || '🍴';
    html += `<button class="cat-pill ${currentCategory===c.ar?'active':''}" onclick="selectCat('${esc(c.ar)}')">
      <span class="pill-emoji">${icon}</span>${label}
    </button>`;
  });
  nav.innerHTML = html;
}

function selectCat(cat) {
  currentCategory = cat;
  document.getElementById('searchInput').value = '';
  renderAll();
  document.getElementById('gridWrap').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── RENDER GRID ────────────────────────────────────
function renderGrid(category, query = '') {
  const grid = document.getElementById('menuGrid');
  const q = query.toLowerCase().trim();

  let items = allMenuData.filter(item => {
    if (category !== 'all' && item.category_ar !== category) return false;
    if (q) {
      const n = (currentLang==='ar' ? item.name_ar : item.name_en).toLowerCase();
      const d = (currentLang==='ar' ? item.description_ar : item.description_en).toLowerCase();
      const c = (currentLang==='ar' ? item.category_ar : item.category_en).toLowerCase();
      return n.includes(q) || d.includes(q) || c.includes(q);
    }
    return true;
  });

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state"><h3>${currentLang==='ar'?'لا توجد نتائج':'No results found'}</h3><p>${currentLang==='ar'?'جرب كلمة أخرى':'Try a different search'}</p></div>`;
    return;
  }

  // Single category → list view; All → grouped cards
  if (category !== 'all' && !q) {
    grid.innerHTML = `<div class="menu-list">${items.map(buildListCard).join('')}</div>`;
  } else if (q) {
    // Search results: flat cards
    grid.innerHTML = `<div class="items-grid">${items.map((it,i) => buildCard(it,i)).join('')}</div>`;
  } else {
    grid.innerHTML = buildGrouped(items);
  }
}

function buildGrouped(items) {
  const groups = {};
  items.forEach(item => {
    const k = item.category_ar;
    if (!groups[k]) groups[k] = { ar: item.category_ar, en: item.category_en, items: [] };
    groups[k].items.push(item);
  });
  return Object.values(groups).map(g => {
    const label = currentLang==='ar' ? g.ar : g.en;
    const icon = CATEGORY_ICONS[g.ar] || CATEGORY_ICONS[g.en] || '🍴';
    return `<div class="cat-group">
      <div class="cat-group-header">
        <h3 class="cat-group-title" onclick="selectCat('${esc(g.ar)}')">
          <span class="group-emoji">${icon}</span>${label}
        </h3>
        <span class="cat-group-count">${g.items.length}</span>
      </div>
      <div class="items-grid">${g.items.map((it,i) => buildCard(it,i)).join('')}</div>
    </div>`;
  }).join('');
}

function buildCard(item, i = 0) {
  const name = currentLang==='ar' ? item.name_ar : item.name_en;
  const cat  = currentLang==='ar' ? item.category_ar : item.category_en;
  const curr = currentLang==='ar' ? CONFIG.CURRENCY_AR : CONFIG.CURRENCY_EN;
  const icon = CATEGORY_ICONS[item.category_ar] || '🍴';
  const delay = Math.min(i * 0.04, 0.4);
  const imgHtml = item.image_url ? `<img src="${esc(item.image_url)}" alt="${esc(name)}" loading="lazy" onerror="this.parentElement.classList.add('no-img')">` : '';
  return `<div class="menu-card" style="animation-delay:${delay}s" onclick="openModal(${JSON.stringify(item).replace(/"/g,'&quot;')})">
    <div class="card-img ${item.image_url?'':'no-img'}">
      ${imgHtml}
      <div class="card-img-placeholder">${icon}</div>
    </div>
    <div class="card-body">
      <p class="card-cat-label">${cat}</p>
      <h4 class="card-name">${name}</h4>
      <div class="card-price-row">
        <span class="card-price">${fmt(item.price)}</span>
        <span class="card-curr">${curr}</span>
      </div>
    </div>
  </div>`;
}

function buildListCard(item) {
  const name = currentLang==='ar' ? item.name_ar : item.name_en;
  const desc = currentLang==='ar' ? item.description_ar : item.description_en;
  const curr = currentLang==='ar' ? CONFIG.CURRENCY_AR : CONFIG.CURRENCY_EN;
  const icon = CATEGORY_ICONS[item.category_ar] || '🍴';
  const imgHtml = item.image_url ? `<img src="${esc(item.image_url)}" alt="${esc(name)}" loading="lazy" onerror="this.style.display='none'">` : '';
  return `<div class="list-card" onclick="openModal(${JSON.stringify(item).replace(/"/g,'&quot;')})">
    <div class="list-card-img">
      ${imgHtml}
      ${!item.image_url ? `<span class="list-card-img-placeholder">${icon}</span>` : ''}
    </div>
    <div class="list-card-info">
      <div class="list-card-name">${name}</div>
      ${desc ? `<div class="list-card-desc">${desc}</div>` : ''}
    </div>
    <div>
      <div class="list-card-price">${fmt(item.price)}</div>
      <div class="list-card-curr">${curr}</div>
    </div>
  </div>`;
}

function updateCount() {
  const el = document.getElementById('itemCount');
  if (!el) return;
  const total = allMenuData.length;
  el.textContent = currentLang === 'ar' ? `${total} صنف` : `${total} items`;
}

// ── SEARCH ─────────────────────────────────────────
function filterItems(q) {
  currentCategory = 'all';
  renderCatNav();
  renderGrid('all', q);
}

// ── MODAL ──────────────────────────────────────────
function openModal(item) {
  const name = currentLang==='ar' ? item.name_ar : item.name_en;
  const desc = currentLang==='ar' ? item.description_ar : item.description_en;
  const cat  = currentLang==='ar' ? item.category_ar : item.category_en;

  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalDesc').textContent  = desc || (currentLang==='ar' ? '—' : '—');
  document.getElementById('modalCat').textContent   = cat;
  document.getElementById('modalPrice').textContent = fmt(item.price);
  document.getElementById('modalCurr').textContent  = currentLang==='ar' ? CONFIG.CURRENCY_AR : CONFIG.CURRENCY_EN;

  const img = document.getElementById('modalImg');
  const fallback = document.getElementById('modalFallback');
  if (item.image_url) {
    img.src = item.image_url;
    img.style.display = 'block';
    fallback.style.display = 'none';
    img.onerror = () => { img.style.display='none'; fallback.style.display='flex'; };
  } else {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  }

  const bg = document.getElementById('modalBg');
  bg.style.display = 'flex';
  requestAnimationFrame(() => bg.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalBg') && !e.target.closest('.modal-x')) return;
  const bg = document.getElementById('modalBg');
  bg.classList.remove('open');
  setTimeout(() => { bg.style.display = 'none'; }, 260);
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal({ target: document.getElementById('modalBg') }); });

// ── UTILS ───────────────────────────────────────────
function fmt(n) { return Number(n).toLocaleString('en-US'); }
function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
