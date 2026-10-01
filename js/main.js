/* ============================================================
   THE WINNING EDGE — shared behaviors (all pages)
   Guarded by element existence so one file serves every page.
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const desk = matchMedia('(min-width: 1061px)').matches;
/* Pages inside /courses/ set data-base="../" on <body>, so anything this
   file injects has to prefix its own asset and link paths with it. */
const BASE = (document.body && document.body.dataset.base) || '';

/* ---------- Lenis smooth scroll ---------- */
let lenis = null;
if (!reduced && typeof Lenis !== 'undefined') {
  lenis = new Lenis({ duration: 1.05, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  window.lenis = lenis;
}

/* ---------- CONTENT RENDERER — builds sections from js/content.js ----------
   Add/remove courses & photos by editing js/content.js only. */
(() => {
  const C = window.WEDA_CONTENT;
  if (!C) return;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const courseList = document.getElementById('courseList');
  if (courseList && C.courses) {
    courseList.innerHTML = C.courses.map((c, i) => `
      <article class="course-row glass glass--hov" data-a id="course-${i + 1}">
        <div class="course-row__media pframe" data-plx>
          <img src="${esc(c.image)}" alt="${esc(c.title)} — The Winning Edge Defence Academy" loading="lazy">
          <span class="pframe__cap"><b>//</b> ${esc(c.label)}</span>
        </div>
        <div>
          <h2>${esc(c.title)}</h2>
          ${(c.programs || []).length ? `<div class="course-row__progs">${c.programs.map(p => `<span>${esc(p)}</span>`).join('<i>|</i>')}</div>` : ''}
          <p>${esc(c.desc)}</p>
          <div class="course-row__tags">${(c.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <a href="${esc(c.link || 'contact.html')}" class="btn${c.accent ? '' : ' btn--glass'}"${c.external ? ' target="_blank" rel="noopener"' : ''}>${esc(c.button)} ⟶</a>
        </div>
      </article>`).join('');
  }

  /* A screenshot framed as a browser window, so it reads as "this is a
     real site you can go to" rather than a stray image on the page. */
  const shot = (src, label, alt) => `
    <figure class="shot" data-a>
      <div class="shot__bar"><i></i><i></i><i></i><span>${esc(label)}</span></div>
      <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">
    </figure>`;

  /* ---- DIGITAL COURSES block (courses.html) ---- */
  const digiBox = document.getElementById('digitalBox');
  if (digiBox && C.digital) {
    const d = C.digital;
    digiBox.innerHTML = `
      <div class="digi glass" data-a>
        <div class="digi__body">
          <h3>${esc(d.title)}</h3>
          <p>${esc(d.desc)}</p>
          <ul class="digi__list">
            ${(d.items || []).map(it => `<li><b>${esc(it.name)}</b><span>${esc(it.note)}</span></li>`).join('')}
          </ul>
          <a href="${esc(d.link)}" class="btn" target="_blank" rel="noopener">${esc(d.button)} ⟶</a>
        </div>
        ${d.shot ? shot(d.shot, 'WEDA App — courses.store', 'The WEDA app course store') : ''}
      </div>`;
  }

  /* ---- BLOG INDEX (blog.html) ----
     First post is featured; the rest fall into a grid beneath it. */
  const blogBox = document.getElementById('blogList');
  if (blogBox && C.posts && C.posts.length) {
    const [lead, ...rest] = C.posts;
    blogBox.innerHTML = `
      <a href="${esc(lead.link)}" class="pcard pcard--lead glass glass--hov" data-a>
        <span class="pcard__tag">★ Featured · ${esc(lead.category)}</span>
        <h3>${esc(lead.title)}</h3>
        <p>${esc(lead.excerpt)}</p>
        <div class="pcard__foot">
          <span class="pcard__meta">${esc(lead.author)} · ${esc(lead.meta)}</span>
          <span class="pcard__go">Read the brief <span class="arr">⟶</span></span>
        </div>
      </a>
      ${rest.length ? `<div class="pgrid">${rest.map((p, i) => `
        <a href="${esc(p.link)}" class="pcard glass glass--hov" data-a data-d="${((i + 1) * 0.06).toFixed(2)}">
          <span class="pcard__tag">${esc(p.category)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.excerpt)}</p>
          <div class="pcard__foot">
            <span class="pcard__meta">${esc(p.meta)}</span>
            <span class="pcard__go">Read <span class="arr">⟶</span></span>
          </div>
        </a>`).join('')}</div>` : ''}`;
  }

  /* ---- WEDA BOOKS block (courses.html) ---- */
  const booksBox = document.getElementById('booksBox');
  if (booksBox && C.books) {
    const b = C.books;
    booksBox.innerHTML = `
      <div class="books" data-a>
        ${b.shot ? shot(b.shot, esc(b.site || 'WEDA Books'), 'The WEDA Books store') : ''}
        <div class="books__body">
          <span class="books__tag">${esc(b.tagline)}</span>
          <p>${esc(b.desc)}</p>
          <ul class="books__list">
            ${(b.items || []).map(it => `
              <li${it.soon ? ' class="is-soon"' : ''}>
                <b>${esc(it.name)}</b>
                <span>${it.soon ? 'Coming soon' : esc(it.note || '')}</span>
              </li>`).join('')}
          </ul>
          <a href="${esc(b.link)}" class="btn" target="_blank" rel="noopener">${esc(b.cta)} ⟶</a>
        </div>
      </div>`;
  }

  /* ---- LOW-COST LEARNING band (courses.html) ---- */
  const lowBox = document.getElementById('lowcostBox');
  if (lowBox && C.lowcost) {
    const l = C.lowcost;
    lowBox.innerHTML = `
      <div class="lowcost glass" data-a>
        <div class="glow"></div>
        <span class="lowcost__tag">Low-Cost Learning</span>
        <h3>${esc(l.title)}</h3>
        <p>${esc(l.desc)}</p>
        <a href="${esc(l.link)}" class="btn" target="_blank" rel="noopener">${esc(l.button)} ⟶</a>
      </div>`;
  }

  /* ============================================================
     CAROUSEL — one component, used by Strikers, Gallery and
     Goalkeeper on about.html. Every slide sits in a fixed-ratio
     frame so heights never vary; the photo is the whole slide.
     Native overflow scrolling, so swipe and trackpad work; the
     arrows and dots are conveniences on top.
     ============================================================ */
  const buildCarousel = (mount, slides, opt = {}) => {
    if (!mount || !slides || !slides.length) return;
    const variant = opt.variant || 'portrait';   // portrait | wide
    const n = slides.length;

    /* The reel never ends: the slide list is rendered three times over and
       we sit in the middle copy. Once a scroll settles past a copy boundary
       we jump back by exactly one copy width — instantly, so it is
       invisible — which leaves infinite runway in both directions. */
    const LOOP = n >= 3;
    const reps = LOOP ? 3 : 1;
    const cell = (s, i, copy) => `
      <figure class="wcar__slide"${copy ? ' aria-hidden="true"' : ''}>
        <img src="${esc(s.image || s.photo)}" alt="${copy ? '' : esc(s.name || s.caption || opt.label || 'WEDA')}"
             loading="${!copy && i < 4 ? 'eager' : 'lazy'}" decoding="async">
        ${(s.name || s.caption) ? `<figcaption>${esc(s.name || s.caption)}</figcaption>` : ''}
      </figure>`;

    mount.innerHTML = `
      <div class="wcar wcar--${variant}" data-a>
        <div class="wcar__viewport">
          <div class="wcar__track" tabindex="0" role="region" aria-label="${esc(opt.label || 'Photo carousel')}">
            ${Array.from({ length: reps }, (_, c) => slides.map((s, i) => cell(s, i, c !== (LOOP ? 1 : 0))).join('')).join('')}
          </div>
        </div>
        <div class="wcar__bar">
          <div class="wcar__dots" role="tablist" aria-label="Slide position"></div>
          <div class="wcar__nav">
            <button type="button" class="wcar__b" data-dir="-1" aria-label="Previous">‹</button>
            <button type="button" class="wcar__b" data-dir="1" aria-label="Next">›</button>
          </div>
        </div>
      </div>`;

    const track = mount.querySelector('.wcar__track');
    const dots = mount.querySelector('.wcar__dots');
    const btns = mount.querySelectorAll('.wcar__b');
    let wanted = null;

    const all = () => [...track.querySelectorAll('.wcar__slide')];
    const positions = () => {
      const list = all();
      if (!list.length) return [];
      const base = list[0].offsetLeft;
      return list.map(s => s.offsetLeft - base);
    };
    const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);
    const setWidth = () => (LOOP ? track.scrollWidth / reps : maxScroll());

    dots.innerHTML = Array.from({ length: n }, (_, i) =>
      `<button type="button" class="wcar__dot" role="tab" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join('');

    const sync = () => {
      if (!LOOP) {
        const max = maxScroll();
        btns.forEach(b => {
          const back = Number(b.dataset.dir) < 0;
          b.disabled = back ? track.scrollLeft <= 2 : track.scrollLeft >= max - 2;
        });
      }
      const pos = positions();
      let nearest = 0, best = Infinity;
      pos.forEach((x, i) => { const d = Math.abs(x - track.scrollLeft); if (d < best) { best = d; nearest = i; } });
      const active = ((nearest % n) + n) % n;
      dots.querySelectorAll('.wcar__dot').forEach((d, i) => {
        d.classList.toggle('is-on', i === active);
        d.setAttribute('aria-selected', i === active);
      });
    };

    /* Re-centre on the middle copy. Only ever called once scrolling has
       stopped, so it never interrupts an animation the user can see. */
    const recentre = () => {
      if (!LOOP) return;
      const sw = setWidth();
      if (track.scrollLeft < sw * 0.5) track.scrollLeft += sw;
      else if (track.scrollLeft > sw * 1.5) track.scrollLeft -= sw;
    };

    const go = dir => {
      const pos = positions();
      const max = maxScroll();
      const here = wanted ?? track.scrollLeft;
      const target = dir > 0 ? pos.find(x => x > here + 8) : [...pos].reverse().find(x => x < here - 8);
      wanted = Math.max(0, Math.min(target ?? (dir > 0 ? max : 0), max));
      track.scrollTo({ left: wanted, behavior: 'smooth' });
    };

    btns.forEach(b => b.addEventListener('click', () => { pause(); go(Number(b.dataset.dir)); resumeSoon(); }));

    dots.addEventListener('click', e => {
      const d = e.target.closest('.wcar__dot');
      if (!d) return;
      pause();
      const pos = positions();
      const idx = Number(d.dataset.i) + (LOOP ? n : 0);   // the middle copy
      wanted = Math.min(pos[idx] ?? 0, maxScroll());
      track.scrollTo({ left: wanted, behavior: 'smooth' });
      resumeSoon();
    });

    let settle, lastScroll = 0;
    track.addEventListener('scroll', () => {
      lastScroll = performance.now();
      sync();
      clearTimeout(settle);
      settle = setTimeout(() => { wanted = null; recentre(); sync(); }, 160);
    }, { passive: true });

    /* Independent idle check. Autoplay's own scrolling can keep resetting
       the settle timer, which would starve the wrap and let the reel run
       off the end of the last copy. */
    setInterval(() => {
      if (performance.now() - lastScroll > 320) { recentre(); sync(); }
    }, 600);

    // let horizontal trackpad gestures through — Lenis owns vertical scroll
    track.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.stopPropagation();
    }, { passive: true });

    /* Autoplay — keeps moving on its own, but yields the moment someone
       wants to look, and stays off entirely for reduced-motion users. */
    let timer = null, resumeT = null;
    const tick = () => { if (!document.hidden) go(1); };
    const play = () => { if (!reduced && !timer) timer = setInterval(tick, opt.interval || 3800); };
    const pause = () => { clearInterval(timer); timer = null; clearTimeout(resumeT); };
    const resumeSoon = () => { clearTimeout(resumeT); resumeT = setTimeout(play, 5000); };

    ['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(ev =>
      mount.addEventListener(ev, pause, { passive: true }));
    ['mouseleave', 'focusout'].forEach(ev =>
      mount.addEventListener(ev, resumeSoon, { passive: true }));
    document.addEventListener('visibilitychange', () => (document.hidden ? pause() : resumeSoon()));

    addEventListener('resize', () => { requestAnimationFrame(() => { recentre(); sync(); }); });

    // start on the middle copy so there is runway behind us too
    requestAnimationFrame(() => {
      if (LOOP) track.scrollLeft = setWidth();
      sync();
      play();
    });
  };

  /* ---- STRIKERS: mentor photo carousel (about.html) ---- */
  buildCarousel(document.getElementById('strikerGrid'), C.strikers, { variant: 'portrait', label: 'Our mentors' });

  /* ---- GOALKEEPER: support team photo carousel (about.html) ---- */
  buildCarousel(document.getElementById('keeperGrid'), C.goalkeeper, { variant: 'portrait', label: 'Support team' });

  /* ---- GALLERY: life at the academy (about.html) ---- */
  buildCarousel(document.getElementById('reconGrid'), C.gallery, { variant: 'wide', label: 'Inside the academy' });

  /* ---- SEMINARS & EVENTS: square crops, four across (about.html) ---- */
  buildCarousel(document.getElementById('eventGrid'), C.gallerySquare, { variant: 'portrait', label: 'Seminars and events' });

  /* ---- ACHIEVERS: selected cadets (about.html) ---- */
  buildCarousel(document.getElementById('achieverGrid'), C.achieverBadges, { variant: 'badge', label: 'Our achievers' });


  /* ---- FEE STRUCTURE (fees.html) ----
     One duration at a time, chosen by the tabs. The sheet prices every
     course three ways (1 year / 6 months / crash), and showing all three
     alongside Online and Offline would be six money columns — unreadable
     on a phone. Tabs keep the table to the shape of the supplied format:
     S. No. | Batch | Online | Offline | Remark. */
  const feeBox = document.getElementById('feeTables');
  if (feeBox && C.fees && C.fees.batches) {
    const f = C.fees;
    const durs = f.durations || [{ key: 'y1', label: 'Fee' }];

    const money = v => v
      ? `<span class="fee-money"><i>₹</i>${esc(v.replace(/^₹/, ""))}</span>`
      : '<span class="fee-na" aria-label="not applicable">&ndash;</span>';

    const table = key => `
      <div class="fee-scroll">
        <table class="fee-table fee-table--batches">
          <thead>
            <tr>
              <th scope="col" class="c-sno">#</th>
              <th scope="col" class="c-batch">Batch</th>
              <th scope="col" class="c-fee">Online</th>
              <th scope="col" class="c-fee">Offline<small>without schooling &amp; hostel</small></th>
              <th scope="col" class="c-fee">Offline<small>with schooling &amp; hostel</small></th>
              <th scope="col" class="c-rem">Remark</th>
            </tr>
          </thead>
          <tbody>
            ${f.batches.map((b, i) => `
              <tr>
                <td class="c-sno" data-l="#"><span class="fee-sno">${i + 1}</span></td>
                <th scope="row" class="c-batch" data-l="Batch">
                  <span class="fee-batch">${esc(b.batch)}</span>
                  ${b.code ? `<span class="fee-code">${esc(b.code)}</span>` : ""}
                </th>
                <td class="c-fee" data-l="Online">${money(b.online && b.online[key])}</td>
                <td class="c-fee" data-l="Offline">${money(b.offline && b.offline[key])}</td>
                <td class="c-fee" data-l="Offline + Schooling &amp; Hostel">${money(b.offlineHostel && b.offlineHostel[key])}</td>
                <td class="c-rem" data-l="Remark">${b.remark ? esc(b.remark) : ""}</td>
              </tr>`).join("")}
          </tbody>
        </table>
      </div>`;

    feeBox.innerHTML = `
      <div class="fee-card glass" data-a>
        <div class="fee-card__head">
          <h3>${esc(f.title || 'Fee Structure')}</h3>
          <span>Registration Fee: ${esc(f.registration || '')}</span>
        </div>
        <div class="fee-tabs" role="tablist" aria-label="Course duration">
          ${durs.map((d, i) => `<button type="button" class="fee-tab${i === 0 ? ' is-on' : ''}" role="tab"
            aria-selected="${i === 0}" data-key="${esc(d.key)}">${esc(d.label)}</button>`).join('')}
        </div>
        ${durs.map((d, i) => `<div class="fee-pane${i === 0 ? ' is-on' : ''}" data-key="${esc(d.key)}"${i === 0 ? '' : ' hidden'}>${table(d.key)}</div>`).join('')}
      </div>
      ${f.gstNote ? `<p class="fee-gst" data-a>${esc(f.gstNote)}</p>` : ''}
      ${(f.notes || []).length ? `<ul class="fee-notes" data-a>${f.notes.map(n => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}`;

    feeBox.addEventListener('click', e => {
      const t = e.target.closest('.fee-tab');
      if (!t) return;
      feeBox.querySelectorAll('.fee-tab').forEach(b => {
        const on = b === t;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', on);
      });
      feeBox.querySelectorAll('.fee-pane').forEach(p => {
        const on = p.dataset.key === t.dataset.key;
        p.classList.toggle('is-on', on);
        p.hidden = !on;
      });
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  }

  /* ---- HOMEPAGE: Our Preparation cards ---- */
  const prepGrid = document.getElementById('prepGrid');
  if (prepGrid && C.preparation) {
    prepGrid.innerHTML = C.preparation.map((p, i) => `
      <a href="${esc(p.link)}" class="prep-card glass glass--hov${p.image ? '' : ' prep-card--txt'}" data-a data-d="${(i * 0.06).toFixed(2)}">
        ${p.image ? `<div class="prep-card__img pframe">
          <img src="${esc(p.image)}" alt="${esc(p.name)} preparation — WEDA" loading="lazy">
        </div>` : ''}
        <div class="prep-card__body">
          ${p.entry ? `<span class="prep-card__entry">${esc(p.entry)}</span>` : ''}
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.note)}</p>
          <span class="prep-card__go">View <span class="arr">⟶</span></span>
        </div>
      </a>`).join('');
  }

  /* ---- HOMEPAGE: WEDA Ecosystem tiles ---- */
  const ecoGrid = document.getElementById('ecoGrid');
  if (ecoGrid && C.ecosystem) {
    ecoGrid.innerHTML = C.ecosystem.map((e, i) => {
      const ext = /^https?:/.test(e.link);
      return `
      <a href="${esc(e.link)}" class="eco-tile glass glass--hov" data-a data-d="${(i * 0.06).toFixed(2)}"${ext ? ' target="_blank" rel="noopener"' : ''}>
        <span class="eco-tile__tag">${esc(e.tag)}</span>
        <h3>${esc(e.name)}</h3>
        <p>${esc(e.text)}</p>
        <span class="eco-tile__go">${esc(e.cta)} <span class="arr">⟶</span></span>
      </a>`;
    }).join('');
  }

  /* ---- HOMEPAGE: preparation journey strip ---- */
  const jStrip = document.getElementById('journeyStrip');
  if (jStrip && C.journey) {
    jStrip.innerHTML = C.journey.map((s, i) => `
      <div class="jstep" data-a data-d="${(i * 0.06).toFixed(2)}">
        <span class="jstep__no">${String(i + 1).padStart(2, '0')}</span>
        <b>${esc(s)}</b>
      </div>`).join('<span class="jarrow" aria-hidden="true">⟶</span>');
  }

  const polaroidTab = (p, i) => `
    <div class="polaroid${p.hold === 'tape' ? ' polaroid--tape' : ''}">
      ${p.hold === 'tape' ? '' : '<span class="polaroid__pin"></span>'}
      <img src="${esc(p.image)}" alt="${esc(p.caption)} — WEDA" loading="lazy">
      <span class="polaroid__cap"><span>${esc(p.caption)}</span><b>${String(i + 1).padStart(2, '0')}</b></span>
    </div>`;

  /* ---- GALLERY TABS: only runs if a #galleryTabs element exists.
     The standalone gallery page was removed; About Us is the one
     gallery now. Harmless no-op on every current page. ---- */
  const gtabs = document.getElementById('galleryTabs');
  if (gtabs && C.galleryTabs) {
    const cats = [
      { key: 'achievements', label: 'Student Achievements' },
      { key: 'mentors',      label: 'Our Mentors' },
      { key: 'activities',   label: 'Our Activities' },
    ].filter(c => (C.galleryTabs[c.key] || []).length);

    gtabs.innerHTML = `
      <div class="gtab-bar" role="tablist">
        ${cats.map((c, i) => `<button class="gtab${i === 0 ? ' is-on' : ''}" role="tab" aria-selected="${i === 0}" aria-controls="gpanel-${c.key}" id="gtab-${c.key}" data-cat="${c.key}">${esc(c.label)}</button>`).join('')}
      </div>
      ${cats.map((c, i) => `
        <div class="gpanel${i === 0 ? ' is-on' : ''}" id="gpanel-${c.key}" role="tabpanel" aria-labelledby="gtab-${c.key}"${i === 0 ? '' : ' hidden'}>
          <div class="recon__grid">${C.galleryTabs[c.key].map(polaroidTab).join('')}</div>
        </div>`).join('')}`;

    /* placeholder — gallery tab handler attaches below */
    gtabs.addEventListener('click', e => {
      const btn = e.target.closest('.gtab');
      if (!btn) return;
      gtabs.querySelectorAll('.gtab').forEach(b => {
        const on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', on);
      });
      gtabs.querySelectorAll('.gpanel').forEach(p => {
        const on = p.id === `gpanel-${btn.dataset.cat}`;
        p.classList.toggle('is-on', on);
        p.hidden = !on;
      });
      ScrollTrigger.refresh();
    });
  }

  /* ============================================================
     GOOGLE REVIEWS (index.html) — live from the official listing.

     Everything rendered here comes from /api/reviews, which reads
     the Google Places API server-side. Nothing is hand-written.
     If the API is not configured or fails, we show the summary
     shell and a link to Google — we never fabricate a review.
     ============================================================ */
  const grBox = document.getElementById('googleReviews');
  if (grBox && C.googleReviews) {
    const G = C.googleReviews;

    /* The page-wide [data-a] reveal is registered once at load, so anything
       injected later (this section arrives after a fetch) would stay stuck
       at opacity 0. Reveal freshly injected nodes ourselves. */
    const revealNew = root => {
      if (typeof gsap === 'undefined') return;
      root.querySelectorAll('[data-a]').forEach(el => {
        gsap.to(el, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          delay: parseFloat(el.dataset.d || 0),
          scrollTrigger: { trigger: el, start: 'top 95%', once: true },
        });
      });
    };
    const stars = n => {
      const full = Math.round(n || 0);
      return `<span class="grstars" aria-label="${n} out of 5">${'★'.repeat(full)}${'☆'.repeat(Math.max(0, 5 - full))}</span>`;
    };
    const googleMark = `<span class="gmark" aria-hidden="true"><b>G</b>oogle</span>`;

    const shell = (summaryHtml, listHtml, note) => `
      <div class="greviews" data-a>
        <div class="greviews__sum glass">
          ${googleMark}
          ${summaryHtml}
          <div class="greviews__acts">
            <a href="${esc(G.profileUrl)}" class="btn btn--glass" target="_blank" rel="noopener">View all Google Reviews ⟶</a>
          </div>
          ${listHtml ? `<div class="grnav">
            <button type="button" class="grnav__b" data-dir="-1" aria-label="Previous reviews">‹</button>
            <button type="button" class="grnav__b" data-dir="1" aria-label="Next reviews">›</button>
          </div>` : ''}
        </div>
        <div class="greviews__slider">
          <div class="greviews__track" tabindex="0" role="region" aria-label="Google reviews">${listHtml}</div>
        </div>
      </div>
      ${note ? `<p class="greviews__note">${note}</p>` : ''}`;

    const card = (name, rating, when, text, photo) => `
      <article class="gcard glass">
        <header>
          ${photo
            ? `<img class="gcard__pic" src="${esc(photo)}" alt="${esc(name || '')}" width="38" height="38" decoding="async" referrerpolicy="no-referrer"
                 onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'gcard__pic gcard__pic--ph',textContent:'${esc((name || '?').charAt(0))}'}))">`
            : `<span class="gcard__pic gcard__pic--ph">${esc((name || '?').charAt(0))}</span>`}
          <div>
            <b>${esc(name || 'Google user')}</b>
            <span>${stars(rating)}${when ? ` · ${esc(when)}` : ''}</span>
          </div>
          <span class="gcard__g" aria-hidden="true">G</span>
        </header>
        <div class="gcard__body">
          <p class="gcard__text">${esc(text)}</p>
          <button type="button" class="gcard__more" hidden>Read more</button>
        </div>
      </article>`;

    /* Slider arrows + "Read more". Called after every render because the
       markup is rebuilt when the fetch resolves. */
    const wireReviews = () => {
      const track = grBox.querySelector('.greviews__track');

      // "Read more" — only offered on cards whose text is actually clipped.
      grBox.querySelectorAll('.gcard').forEach(cardEl => {
        const p = cardEl.querySelector('.gcard__text');
        const btn = cardEl.querySelector('.gcard__more');
        if (!p || !btn) return;
        // let layout settle before measuring the clamp
        requestAnimationFrame(() => {
          if (p.scrollHeight - p.clientHeight > 4) btn.hidden = false;
        });
        btn.addEventListener('click', () => {
          const open = cardEl.classList.toggle('is-open');
          btn.textContent = open ? 'Read less' : 'Read more';
          if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        });
      });

      if (!track) return;

      /* Scroll to a card's exact offset rather than scrollBy(). With
         scroll-snap: mandatory a relative scroll gets re-snapped back to
         the card it started on, so paging would stall after one step. */
      /* `wanted` is where we asked the track to end up. Paging from it
         rather than from live scrollLeft means a second click landing
         mid-animation advances another card instead of recomputing from
         a half-finished position. Cleared whenever the user scrolls. */
      let wanted = null;

      const go = dir => {
        const list = [...track.querySelectorAll('.gcard')];
        if (!list.length) return;
        const base = list[0].offsetLeft;              // track's own origin
        const pos = list.map(c => c.offsetLeft - base);
        const max = Math.max(0, track.scrollWidth - track.clientWidth);
        const here = wanted ?? track.scrollLeft;
        const target = dir > 0
          ? pos.find(x => x > here + 8)
          : [...pos].reverse().find(x => x < here - 8);
        wanted = Math.max(0, Math.min(target ?? (dir > 0 ? max : 0), max));
        track.scrollTo({ left: wanted, behavior: 'smooth' });
      };

      const btns = grBox.querySelectorAll('.grnav__b');
      btns.forEach(b => b.addEventListener('click', () => go(Number(b.dataset.dir))));

      // grey out an arrow when there is nowhere further to go
      const sync = () => {
        const max = track.scrollWidth - track.clientWidth - 2;
        btns.forEach(b => {
          const back = Number(b.dataset.dir) < 0;
          b.disabled = back ? track.scrollLeft <= 2 : track.scrollLeft >= max;
        });
      };
      // once the animation settles (or the user swipes), trust the real position
      let settle;
      track.addEventListener('scroll', () => {
        sync();
        clearTimeout(settle);
        settle = setTimeout(() => { wanted = null; }, 140);
      }, { passive: true });
      addEventListener('resize', sync);
      sync();

      /* Lenis hijacks wheel events for the smooth page scroll, which stops
         trackpad swiping inside the slider. Hand horizontal intent back. */
      track.addEventListener('wheel', e => {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.stopPropagation();
      }, { passive: true });
    };

    const summaryBlock = (rating, total) => `
      <div class="greviews__score">
        <b>${typeof rating === 'number' ? rating.toFixed(1) : '★'}</b>
        ${typeof rating === 'number' ? stars(rating) : ''}
        <small>${total ? `${Number(total).toLocaleString('en-IN')}+ Google reviews` : 'See our reviews on Google'}</small>
      </div>`;

    /* Fallback: the reviews kept in content.js. Used when the Google API
       is not configured. Nothing here is generated — it is whatever the
       academy has put in that file. */
    const renderFallback = () => {
      grBox.innerHTML = shell(
        summaryBlock(G.rating, G.total),
        (G.reviews || []).map(r => card(r.name, r.stars, r.when, r.text, r.photo)).join(''),
        'Reviews from our Google Business Profile. Open the listing to read every review and leave your own.'
      );
      wireReviews(); revealNew(grBox); if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    };

    // Neutral placeholder while the request is in flight.
    grBox.innerHTML = shell(
      `<div class="greviews__score"><b>—</b>${stars(0)}<small>Loading Google rating…</small></div>`,
      '', ''
    );

    fetch('/api/reviews')
      .then(r => r.json())
      .then(d => {
        // Live Google data wins whenever it is available.
        if (d && d.ok && typeof d.rating === 'number') {
          grBox.innerHTML = shell(
            summaryBlock(d.rating, d.total),
            (d.reviews || []).map(rv => card(rv.author, rv.rating, rv.relative, rv.text, rv.photo)).join(''),
            'Live from our official Google Business Profile. Google returns up to five reviews at a time — open the listing to read them all.'
          );
          wireReviews(); revealNew(grBox); if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        } else {
          renderFallback();
        }
      })
      .catch(renderFallback);
  }

  const polaroid = (p, i, prefix) => `
    <div class="polaroid${p.hold === 'tape' ? ' polaroid--tape' : ''}" data-a data-d="${(i * 0.07).toFixed(2)}">
      ${p.hold === 'tape' ? '' : '<span class="polaroid__pin"></span>'}
      <img src="${esc(p.image)}" alt="${esc(p.caption)} — WEDA" loading="lazy">
      <span class="polaroid__cap"><span>${esc(p.caption)}</span><b>${prefix} ${String(i + 1).padStart(2, '0')}</b></span>
    </div>`;

  /* about.html's gallery is rendered by buildCarousel above, not here */

  const awall = document.getElementById('awall');
  if (awall && C.achievers) awall.innerHTML = C.achievers.map((p, i) => polaroid(p, i, '★')).join('');

  const strip = document.getElementById('stripRow');
  if (strip && C.filmstrip) {
    const imgs = C.filmstrip.map(src => `<div class="pframe"><img src="${esc(src)}" alt="WEDA academy" loading="lazy"></div>`).join('');
    strip.innerHTML = imgs + imgs; /* doubled for the seamless loop */
  }
})();

/* ---------- page wipe: exit on load, enter on internal nav ---------- */
const wipe = document.getElementById('wipe');
function wipeOut(){
  if (reduced) { wipe.classList.add('is-done'); return; }
  gsap.timeline({ onComplete: () => wipe.classList.add('is-done') })
    .to('.wipe__logo', { opacity: 0, y: -22, duration: 0.4, ease: 'power2.in' }, 0.12)
    .to('.wipe__p--1', { scaleY: 0, duration: 0.75, ease: 'power4.inOut' }, 0.22)
    .to('.wipe__p--2', { scaleY: 0, duration: 0.75, ease: 'power4.inOut' }, 0.34);
}
function wipeIn(href){
  if (reduced) { location.href = href; return; }
  wipe.classList.remove('is-done');
  gsap.set(['.wipe__p--1', '.wipe__p--2'], { scaleY: 0, transformOrigin: 'bottom' });
  gsap.set('.wipe__logo', { opacity: 0, y: 22 });
  gsap.timeline({ onComplete: () => location.href = href })
    .to('.wipe__p--2', { scaleY: 1, duration: 0.55, ease: 'power4.inOut' }, 0)
    .to('.wipe__p--1', { scaleY: 1, duration: 0.55, ease: 'power4.inOut' }, 0.1)
    .to('.wipe__logo', { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, 0.4);
}
document.querySelectorAll('a[href$=".html"], a[href="index.html"]').forEach(a => {
  const href = a.getAttribute('href');
  if (/^https?:/i.test(href)) return;
  a.addEventListener('click', e => {
    e.preventDefault();
    if (href.split('#')[0] === location.pathname.split('/').pop()) return;
    wipeIn(href);
  });
});
window.addEventListener('pageshow', e => { if (e.persisted) wipeOut(); });
wipeOut();

/* ---------- active nav link ---------- */
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__links a, .mnav a').forEach(a => {
  if (a.getAttribute('href') === here) a.classList.add('on');
});

/* ---------- same-page anchors via lenis ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: -90, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ---------- custom cursor ---------- */
const dot = document.getElementById('curDot'), ring = document.getElementById('curRing');
if (dot && desk) {
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08 }), dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3' });
  window.addEventListener('pointermove', e => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); });
  document.querySelectorAll('a, button, .glass--hov, .pframe').forEach(el => {
    el.addEventListener('pointerenter', () => document.body.classList.add('cur-hover'));
    el.addEventListener('pointerleave', () => document.body.classList.remove('cur-hover'));
  });
} else if (dot) { dot.remove(); ring.remove(); }

/* ---------- nav hide on scroll down ---------- */
const nav = document.getElementById('nav');
let lastY = 0;
ScrollTrigger.create({
  onUpdate(self){
    const y = self.scroll();
    nav.classList.toggle('hidden', y > 420 && y > lastY);
    lastY = y;
  }
});

/* ---------- mobile menu ---------- */
const mnav = document.getElementById('mnav');
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => mnav.classList.add('open'));
  document.getElementById('mnavX').addEventListener('click', () => mnav.classList.remove('open'));
  mnav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));
}

/* ---------- generic reveals ---------- */
document.querySelectorAll('[data-a]').forEach(el => {
  gsap.to(el, {
    y: 0, opacity: 1, duration: 0.95, ease: 'power3.out',
    delay: parseFloat(el.dataset.d || 0),
    scrollTrigger: { trigger: el, start: 'top 90%', once: true }
  });
});
document.querySelectorAll('.lines').forEach(block => {
  gsap.to(block.querySelectorAll('.ln > span'), {
    y: 0, duration: 1.05, ease: 'power4.out', stagger: 0.1,
    scrollTrigger: { trigger: block, start: 'top 88%', once: true }
  });
});

/* ---------- counters ---------- */
function counter(el){
  const t = parseFloat(el.dataset.count), dec = !!el.dataset.decimal, o = { v: 0 };
  gsap.to(o, { v: t, duration: 1.7, ease: 'power2.out', onUpdate(){
    el.textContent = dec ? (o.v / 10).toFixed(1) : Math.round(o.v).toLocaleString('en-IN');
  }});
}
document.querySelectorAll('[data-count]').forEach(el => {
  ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => counter(el) });
});

/* ---------- hero intro (home only) ---------- */
if (document.querySelector('.hero__title')) {
  gsap.set('.hero__title .row > span', { y: '112%' });
  gsap.set('.hero__badge, .hero__sub, .hero__ctas, .hero__cue, .hero__rails', { opacity: 0 });
  gsap.set('.shard', { opacity: 0, y: 46 });
  gsap.timeline({ delay: reduced ? 0 : 0.65 })
    .to('.hero__title .row > span', { y: 0, duration: 1.1, ease: 'power4.out', stagger: 0.1 }, 0)
    .to('.hero__badge, .hero__sub, .hero__ctas', { opacity: 1, duration: 0.9, ease: 'power2.out', stagger: 0.12 }, 0.45)
    .to('.shard', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, 0.6)
    .to('.hero__cue, .hero__rails', { opacity: 1, duration: 0.8 }, 1);
  // gentle float
  if (!reduced) document.querySelectorAll('.shard').forEach((s, i) => {
    gsap.to(s, { y: '+=13', duration: 2.5 + i * 0.4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * 0.35 });
  });
  // mouse parallax on shards + orbs
  if (desk && !reduced) {
    window.addEventListener('pointermove', e => {
      const cx = e.clientX / innerWidth - 0.5, cy = e.clientY / innerHeight - 0.5;
      document.querySelectorAll('.shard').forEach((s, i) => {
        gsap.to(s, { x: cx * (16 + i * 7), duration: 1, ease: 'power2.out', overwrite: 'auto' });
      });
      gsap.to('.orb--r1', { x: cx * -34, y: cy * -22, duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
      gsap.to('.orb--w',  { x: cx * 26,  y: cy * 20,  duration: 1.4, ease: 'power2.out', overwrite: 'auto' });
    });
  }
  // hero exit parallax
  if (!reduced) {
    gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.4 } })
      .to('.hero__center', { yPercent: -22, opacity: 0.1, ease: 'none' }, 0)
      .to('.shard', { yPercent: 34, opacity: 0, ease: 'none' }, 0);
  }
}

/* ---------- orbs drift with scroll (all pages) ---------- */
if (!reduced) {
  gsap.to('.orb--r1', { yPercent: 26, ease: 'none', scrollTrigger: { scrub: 1.2 } });
  gsap.to('.orb--r2', { yPercent: -20, ease: 'none', scrollTrigger: { scrub: 1.2 } });
}

/* ---------- word-by-word manifesto (about) ---------- */
const mani = document.querySelector('[data-words]');
if (mani) {
  const walk = node => {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(tok => {
          if (/^\s*$/.test(tok)) frag.appendChild(document.createTextNode(tok));
          else { const s = document.createElement('span'); s.className = 'wd'; s.textContent = tok; frag.appendChild(s); }
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1) walk(ch);
    });
  };
  walk(mani);
  gsap.to(mani.querySelectorAll('.wd'), {
    opacity: 1, stagger: 0.045, ease: 'none',
    scrollTrigger: { trigger: mani, start: 'top 80%', end: 'bottom 48%', scrub: 0.4 }
  });
}

/* ---------- timeline bar (about) ---------- */
const tbar = document.querySelector('.tline__bar');
if (tbar) gsap.to(tbar, { scaleX: 1, duration: 1.5, ease: 'power3.inOut',
  scrollTrigger: { trigger: '.tline', start: 'top 75%', once: true } });

/* ---------- media parallax inside frames ---------- */
if (!reduced) document.querySelectorAll('[data-plx] img').forEach(img => {
  gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none',
    scrollTrigger: { trigger: img.closest('[data-plx]'), start: 'top bottom', end: 'bottom top', scrub: true } });
});

/* ---------- drift rows (results) ---------- */
document.querySelectorAll('[data-drift]').forEach(row => {
  const dir = +row.dataset.drift, half = row.scrollWidth / 2;
  gsap.set(row, { x: dir === 1 ? -half : 0 });
  gsap.to(row, { x: dir === 1 ? 0 : -half, duration: 46, ease: 'none', repeat: -1 });
});

/* ---------- footer big word ---------- */
const fw = document.querySelector('.foot__word');
if (fw && !reduced) gsap.fromTo(fw, { yPercent: 46 }, { yPercent: 0, ease: 'none',
  scrollTrigger: { trigger: '.foot', start: 'top 96%', end: 'top 50%', scrub: true } });

/* ---------- 3D tilt on [data-tilt] glass cards ---------- */
if (desk && !reduced) document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    gsap.to(card, {
      rotateX: ((e.clientY - r.top) / r.height - 0.5) * -6,
      rotateY: ((e.clientX - r.left) / r.width - 0.5) * 8,
      transformPerspective: 900, duration: 0.5, ease: 'power2.out'
    });
  });
  card.addEventListener('pointerleave', () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1,0.5)' }));
});

/* ---------- ARMOURED DIVISION: tank SVG, convoys, footer patrol ---------- */
const TANK_SVG = `
<svg class="tank-svg" viewBox="0 0 128 58" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g class="hullg">
    <circle class="smoke" cx="14" cy="30" r="5" fill="#9a9aa2"/>
    <rect x="70" y="16" width="46" height="4.5" rx="2" fill="#2e2e36" stroke="rgba(255,255,255,.22)" stroke-width=".6"/>
    <rect x="112" y="14.4" width="7" height="7.6" rx="1.6" fill="#2e2e36" stroke="rgba(255,255,255,.22)" stroke-width=".6"/>
    <g class="flash">
      <polygon points="121,18 128,14.6 124.4,18 128,21.4" fill="#ff3546"/>
      <circle cx="121.5" cy="18" r="2.6" fill="#ffb199"/>
    </g>
    <path d="M42 8h26c4 0 7 3 7 7v9H37v-11c0-3 2-5 5-5z" fill="#26262e" stroke="rgba(255,255,255,.25)" stroke-width=".7"/>
    <rect x="49" y="3.5" width="10" height="6" rx="2" fill="#2e2e36" stroke="rgba(255,255,255,.2)" stroke-width=".6"/>
    <path d="M52.6 15.4l2.6-2.4 2.6 2.4-1 3-3.2 0z" fill="#e11d2e"/>
    <path d="M24 24h76c3.5 0 6 2.6 6 6l-4 8H20l-2-8c0-3.4 2.6-6 6-6z" fill="#1d1d24" stroke="rgba(255,255,255,.25)" stroke-width=".7"/>
    <image href="${BASE}assets/logo-mark.png" x="72" y="26" width="14" height="11" opacity=".95"/>
  </g>
  <rect x="16" y="36" width="94" height="19" rx="9.5" fill="#101014" stroke="rgba(255,255,255,.3)" stroke-width=".8"/>
  <g stroke="rgba(255,255,255,.4)" stroke-width=".7" fill="#1a1a20">
    <circle class="wheel" cx="30" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="47" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="64" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="81" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
    <circle class="wheel" cx="97" cy="45.5" r="5.4" stroke-dasharray="3 2.6"/>
  </g>
</svg>`;
document.querySelectorAll('.convoy__tank').forEach(el => el.innerHTML = TANK_SVG);
/* footer patrol tank on every page — drives across the footer line as you scroll the page */
const foot = document.querySelector('.foot');
if (foot) {
  foot.insertAdjacentHTML('afterbegin', `<div class="foot__tankline"><div class="foot__tank">${TANK_SVG}</div></div>`);
  if (!reduced) {
    const ft = foot.querySelector('.foot__tank');
    gsap.to(ft, {
      x: () => Math.max(0, document.documentElement.clientWidth - 220),
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true }
    });
  }
}
/* footer full-logo swap (keeps HTML DRY across pages) */
const fLogo = document.querySelector('.foot__about .nav__logo');
if (fLogo) fLogo.outerHTML = `<a href="${BASE}index.html" class="foot-logo"><img src="${BASE}assets/logo.png" alt="WEDA — The Winning Edge Defence Academy"></a>`;

/* ---------- form toast ---------- */
const form = document.getElementById('regForm');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const t = document.getElementById('toast');
  t.classList.add('show'); e.target.reset();
  setTimeout(() => t.classList.remove('show'), 4200);
});
