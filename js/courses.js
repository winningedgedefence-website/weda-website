/* ============================================================
   WEDA COURSES + BATCH ENGINE
   ------------------------------------------------------------
   Reads js/courses-data.js and js/batches.js, then builds:
     • the full course page body        (courses/<id>.html)
     • the batch strip (always visible) (course pages)
     • the batch pop-up (once per batch) (course pages)
     • NEW BATCH badges                 (courses.html)
     • the homepage batch ribbon        (index.html)
     • the /batches tracking dashboard  (batches.html)
     • Course / FAQ / Breadcrumb schema (all course pages)

   Nothing here needs editing to announce a batch — edit
   js/batches.js only.
   ============================================================ */
(() => {
  const COURSES = window.WEDA_COURSES || [];
  const BATCHES = window.WEDA_BATCHES || [];
  if (!COURSES.length) return;

  const SITE = 'https://thewinningedge.co.in';
  /* The number printed on every 2026-27 creative and used across the
     rest of the site. The old landing pages used 8437001122 — if that
     line is still the one you want on batch pages, change it here. */
  const PHONE = '+917417656633';
  const PHONE_LABEL = '+91 74176 56633';
  const WA = 'https://wa.me/917417656633';

  /* Pages inside /courses/ need ../ in front of every asset path. */
  const base = document.body.dataset.base || '';
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const byId = id => COURSES.find(c => c.id === id);

  /* Tracks whose pop-up has already been shown on this page view, so a
     visitor sees each track's announcement once and never the wrong one. */
  const popupShown = new Set();

  /* Add ?preview=YYYY-MM-DD to any URL to see the site exactly as it
     will look on that date. Nothing else changes — it only moves the
     campaign clock, so you can check a batch handover before it happens.
     Example: /courses/sainik-rms?preview=2026-10-06 */
  const PREVIEW = (() => {
    const m = /[?&]preview=(\d{4}-\d{2}-\d{2})/.exec(location.search);
    if (!m) return null;
    const d = new Date(m[1] + 'T00:00:00');
    return isNaN(d) ? null : d;
  })();

  const today = () => {
    if (PREVIEW) return new Date(PREVIEW);
    const d = new Date(); d.setHours(0, 0, 0, 0); return d;
  };

  if (PREVIEW) {
    document.addEventListener('DOMContentLoaded', () => {
      const bar = document.createElement('div');
      bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#0c0c0e;color:#fff;font:600 12px/1.4 monospace;letter-spacing:.12em;text-transform:uppercase;padding:10px 16px;text-align:center;';
      bar.textContent = 'Preview mode — showing the site as on ' + PREVIEW.toDateString();
      document.body.appendChild(bar);
    });
  }
  const asDate = iso => { const d = new Date(iso + 'T00:00:00'); return isNaN(d) ? null : d; };

  /* Days until a date. Negative = already started. */
  const daysTo = iso => {
    const t = asDate(iso);
    if (!t) return null;
    return Math.round((t - today()) / 86400000);
  };

  /* ==========================================================
     WHAT THE SITE SHOWS
     ----------------------------------------------------------
     Only batches marked  status: "live"  in js/batches.js.
     Nothing is queued, scheduled or announced in advance.
     A live batch is dropped automatically once its end date
     has passed, so a finished batch can never linger.
     ========================================================== */
  const openBatches = () => BATCHES.filter(b => {
    if (b.status !== 'live') return false;
    if (!b.ends) return true;
    const left = daysTo(b.ends);
    return left === null || left >= 0;
  });

  /* The two delivery tracks. They rotate INDEPENDENTLY, so an online
     batch never switches off a running classroom batch and vice versa. */
  const TRACKS = [
    { id: 'Offline', label: 'Offline', sub: 'Dehradun Centre' },
    { id: 'Online', label: 'Online', sub: 'Live on Zoom' },
  ];
  const trackOf = b => (b.track === 'Online' ? 'Online' : 'Offline');

  /* Which tracks this course has any batch for, in tab order. */
  const tracksFor = courseId => TRACKS.filter(t =>
    openBatches().some(b => b.course === courseId && trackOf(b) === t.id));

  /* The live batches for a course on a given track. */
  function activeFor(courseId, track) {
    return openBatches()
      .filter(b => b.course === courseId && (!track || trackOf(b) === track))
      .sort((a, b) => a.starts.localeCompare(b.starts));
  }

  /* The single batch this page is about — the one on its own track. */
  function batchFor(courseId) {
    const lead = leadTrack(courseId);
    if (lead) {
      const hit = activeFor(courseId, lead.id)[0];
      if (hit) return hit;
    }
    for (const t of tracksFor(courseId)) {
      const hit = activeFor(courseId, t.id)[0];
      if (hit) return hit;
    }
    return null;
  }

  /* Every live batch across every course — for the ribbon and board. */
  const currentCampaigns = () =>
    COURSES.reduce((acc, c) => acc.concat(activeFor(c.id)), []);

  /* The line that sits under a batch name everywhere it appears. */
  const batchStatusLine = b => {
    const d = daysTo(b.starts);
    if (d === null) return b.startsLabel || '';
    if (d > 1) return `Starts in ${d} days · ${b.startsLabel}`;
    if (d === 1) return `Starts tomorrow · ${b.startsLabel}`;
    if (d === 0) return `Starts today · ${b.startsLabel}`;
    const over = b.ends ? daysTo(b.ends) : null;
    if (over !== null && over < 0) return `Ran ${b.startsLabel} to ${b.endsLabel || b.validTill}`;
    return `Running since ${b.startsLabel} · joining still open`;
  };

  /* Where a batch sits in time right now. */
  const phaseOf = b => {
    const s = daysTo(b.starts);
    const e = b.ends ? daysTo(b.ends) : null;
    if (s > 0) return 'upcoming';
    if (e !== null && e < 0) return 'finished';
    return 'running';
  };

  /* ==========================================================
     1. COURSE PAGE
     ========================================================== */
  const host = document.getElementById('coursePage');
  if (host) {
    const c = byId(host.dataset.course);
    if (c) {
      const b = batchFor(c.id);
      document.title = c.metaTitle;
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', c.metaDesc);
      const canon = document.querySelector('link[rel="canonical"]');
      if (canon) canon.setAttribute('href', `${SITE}/courses/${c.id}`);

      host.innerHTML = `
      <header class="phead">
        <div class="watermark">${esc(c.name.toUpperCase())}</div>
        <div class="wrap">
          <div class="phead__crumb" data-a>
            <a href="${base}index.html">HQ</a><i>/</i>
            <a href="${base}courses.html">COURSES</a><i>/</i>
            <span class="here">${esc(c.name.toUpperCase())}</span>
          </div>
          <h1 class="lines">
            <span class="ln"><span>${esc(c.name)} <span class="rd">Preparation</span></span></span>
            <span class="ln"><span class="strk">${esc(c.fullName)}</span></span>
          </h1>
          <p class="phead__lede" data-a>${esc(c.tagline)}</p>
          <div class="phead__meta">
            <span class="chip" data-a><span class="dot"></span>${b ? 'Admissions Open' : 'Enquiries Open'}</span>
            <span class="chip" data-a data-d="0.08">${esc(c.label)}</span>
            <span class="chip" data-a data-d="0.16">Dehradun · Online</span>
          </div>
        </div>
      </header>

      ${trackPanels(c)}

      <!-- 01 OVERVIEW -->
      <section class="section" style="padding-top:26px;">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>01</em> — Overview</div>
              <h2 class="h-xl">What the <span class="rd">${esc(c.name)}</span> is</h2>
            </div>
            <p class="mono-note" data-a>// THE EXAM, IN PLAIN TERMS</p>
          </div>
          <div class="prose" data-a>${c.intro.map(p => `<p>${esc(p)}</p>`).join('')}</div>
        </div>
      </section>

      <!-- 02 ELIGIBILITY -->
      <section class="section frame-line">
        <div class="watermark">ELIGIBILITY</div>
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>02</em> — Who Can Apply</div>
              <h2 class="h-xl">Eligibility <span class="rd">&amp; Entry</span></h2>
            </div>
          </div>
          <div class="spec-grid">
            ${c.eligibility.map((e, i) => `
              <div class="spec glass" data-a data-d="${(i * 0.06).toFixed(2)}">
                <span class="spec__k">${esc(e.k)}</span>
                <span class="spec__v">${esc(e.v)}</span>
              </div>`).join('')}
          </div>
          <p class="disclaim" data-a><b>//</b> ${esc(c.eligibilityNote)}</p>
        </div>
      </section>

      <!-- 03 SELECTION STAGES -->
      <section class="section">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>03</em> — The Route</div>
              <h2 class="h-xl">What Clearing It <span class="rd">Takes</span></h2>
            </div>
            <p class="mono-note" data-a>// EVERY STAGE, START TO SELECTION</p>
          </div>
          <div class="stage-grid">
            ${c.stages.map((s, i) => `
              <article class="stage glass glass--hov" data-a data-d="${(i * 0.08).toFixed(2)}">
                <span class="stage__n">0${i + 1}</span>
                <h3>${esc(s.name)}</h3>
                <p>${esc(s.desc)}</p>
              </article>`).join('')}
          </div>
        </div>
      </section>

      <!-- 04 SYLLABUS -->
      <section class="section frame-line">
        <div class="watermark">SYLLABUS</div>
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>04</em> — Course Coverage</div>
              <h2 class="h-xl">The <span class="rd">Syllabus</span></h2>
            </div>
            <p class="mono-note" data-a>// TAUGHT CONCEPT BY CONCEPT</p>
          </div>
          <div class="syl-list">
            ${c.syllabus.map((s, i) => `
              <div class="syl glass" data-a data-d="${(i * 0.06).toFixed(2)}">
                <h3>${esc(s.name)}</h3>
                <p>${esc(s.topics)}</p>
              </div>`).join('')}
          </div>
        </div>
      </section>

      <!-- 05 HOW THE YEAR RUNS -->
      <section class="section">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>05</em> — The Plan</div>
              <h2 class="h-xl">How The Year <span class="rd">Runs</span></h2>
            </div>
            <p class="mono-note" data-a>// FOUR STAGES TO THE EXAM HALL</p>
          </div>
          <ol class="tl">
            ${c.plan.map((p, i) => `
              <li class="tl__i" data-a data-d="${(i * 0.07).toFixed(2)}">
                <div class="tl__when"><b>${esc(p.when)}</b><span>${esc(p.sub)}</span></div>
                <div class="tl__body glass">
                  <h3>${esc(p.title)}</h3>
                  <p>${esc(p.desc)}</p>
                </div>
              </li>`).join('')}
          </ol>
        </div>
      </section>

      <!-- 06 INCLUDES -->
      <section class="section frame-line">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>06</em> — Included</div>
              <h2 class="h-xl">What The Batch <span class="rd">Includes</span></h2>
            </div>
          </div>
          <ul class="inc-grid">
            ${((b && b.includes && b.includes.length) ? b.includes : c.includes).map((it, i) => `
              <li class="inc glass" data-a data-d="${(i * 0.03).toFixed(2)}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true"><path d="M4 12.5l5.2 5.2L20 7"/></svg>
                <span>${esc(it)}</span>
              </li>`).join('')}
          </ul>
        </div>
      </section>

      <!-- 07 FAQ -->
      <section class="section">
        <div class="watermark">FAQ</div>
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>07</em> — Questions</div>
              <h2 class="h-xl">${esc(c.name)} <span class="rd">FAQs</span></h2>
            </div>
            <p class="mono-note" data-a>// THE THINGS PARENTS ACTUALLY ASK</p>
          </div>
          <div class="faq">
            ${c.faqs.map((f, i) => `
              <details class="faq__i glass" data-a data-d="${(i * 0.05).toFixed(2)}"${i === 0 ? ' open' : ''}>
                <summary><span>${esc(f.q)}</span><i></i></summary>
                <div class="faq__a"><p>${esc(f.a)}</p></div>
              </details>`).join('')}
          </div>
        </div>
      </section>

      <!-- 08 RELATED -->
      <section class="section frame-line">
        <div class="wrap">
          <div class="sec-head">
            <div>
              <div class="kicker"><em>08</em> — Also Consider</div>
              <h2 class="h-lg">Related <span class="rd">Courses</span></h2>
            </div>
          </div>
          <div class="rel-grid">
            ${(c.related || []).map(rid => {
              const r = byId(rid); if (!r) return '';
              const rb = batchFor(rid);
              return `
              <a class="rel glass glass--hov" href="${base}courses/${esc(r.id)}.html" data-a>
                <span class="rel__lbl">${esc(r.label)}</span>
                <b>${esc(r.name)}</b>
                <p>${esc(r.tagline)}</p>
                ${rb ? `<span class="rel__badge">New batch</span>` : ''}
              </a>`;
            }).join('')}
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section" style="padding-top:0;">
        <div class="wrap">
          <div class="cta-banner glass" data-a>
            <div class="glow"></div>
            <h2>Ready To Join The <span class="rd">${esc(c.name)} Batch?</span></h2>
            <p>Talk to a counsellor, or walk into the Donali Chowk centre and sit in on a class before you decide.</p>
            <div class="cta-banner__btns">
              <a href="${base}contact.html#enroll" class="btn">Enquire Now ⟶</a>
              <a href="${WA}" class="btn btn--glass" target="_blank" rel="noopener">WhatsApp Us</a>
              <a href="tel:${PHONE}" class="btn btn--glass">${PHONE_LABEL}</a>
            </div>
          </div>
        </div>
      </section>`;

      injectSchema(c, b);
      /* Announce the track this page IS — never the other one. */
      const lead = leadTrack(c.id);
      if (lead) showPopupFor(lead.id, c);
    }
  }

  /* ==========================================================
     TRACK TABS — Offline / Online
     Each track shows its own current campaign and its own
     timings. Switching tabs never mixes the two.
     ========================================================== */
  /* A page can be opened straight onto a track:
       /courses/rimc?track=online     /courses/rimc?track=offline
     Otherwise it leads with the first track that has a live batch. */
  function leadTrack(courseId) {
    const tracks = tracksFor(courseId);
    if (!tracks.length) return null;
    const asked = (/[?&]track=(offline|online)/i.exec(location.search) || [])[1];
    if (asked) {
      const want = asked.toLowerCase() === 'online' ? 'Online' : 'Offline';
      const hit = tracks.find(t => t.id === want);
      if (hit) return hit;
    }
    return tracks.find(t => activeFor(courseId, t.id).length) || tracks[0];
  }

  function trackPanels(c) {
    const tracks = tracksFor(c.id);
    if (!tracks.length) return '';

    const lead = leadTrack(c.id);

    const panel = t => {
      const live = activeFor(c.id, t.id);
      if (live.length) return live.map(b => batchStrip(b, c)).join('');
      return `
        <div class="bstrip bstrip--empty glass" data-a>
          <div class="bstrip__flag">${t.id === 'Online' ? 'Online' : 'Classroom'}</div>
          <div class="bstrip__main">
            <h2>Ask us about the next batch</h2>
            <p>Call or message for the current ${esc(t.label.toLowerCase())} schedule</p>
          </div>
          <a href="${base}contact.html#enroll" class="btn btn--glass">Ask About Dates ⟶</a>
        </div>`;
    };

    /* One track only — no need for a switcher. */
    if (tracks.length === 1) {
      return `<section class="bstrip-wrap"><div class="wrap">${panel(tracks[0])}</div></section>`;
    }

    /* The tabs are real links, so each track is genuinely its own page
       with its own URL. The pop-up is then derived from the address on
       every load — there is no in-page state that can fall out of step
       and announce the wrong track. */
    const hrefFor = trackId => {
      const q = new URLSearchParams(location.search);
      q.set('track', trackId.toLowerCase());
      return '?' + q.toString();
    };

    return `
    <section class="bstrip-wrap">
      <div class="wrap">
        <nav class="btabs" aria-label="Batch type" data-a>
          ${tracks.map(t => {
            const live = activeFor(c.id, t.id);
            const on = t.id === lead.id;
            return `
            <a class="btab${on ? ' is-on' : ''}" href="${hrefFor(t.id)}"
               ${on ? 'aria-current="page"' : ''} data-track="${t.id}">
              <b>${esc(t.label)}</b>
              <span>${esc(t.sub)}</span>
              ${live.length ? `<i class="btab__dot"><span class="pulse"></span></i>` : ''}
            </a>`;
          }).join('')}
        </nav>
        ${tracks.map(t => `
          <div class="bpanel" data-track="${t.id}"${t.id === lead.id ? '' : ' hidden'}>
            ${panel(t)}
          </div>`).join('')}
      </div>
    </section>`;
  }

  /* ==========================================================
     POP-UP GATE
     ----------------------------------------------------------
     A visitor only ever sees the pop-up for the track they are
     actually looking at, and only once per track per visit.
     Switching to Online shows the online batch; it never shows
     an offline batch to someone reading the online tab.
     ========================================================== */
  function showPopupFor(trackId, c) {
    if (popupShown.has(trackId)) return;
    const list = activeFor(c.id, trackId);
    if (!list.length) return;
    popupShown.add(trackId);
    const open = document.getElementById('batchPop');
    if (open) open.remove();
    mountPopup(list, c);
  }

  /* ---------- the always-visible batch strip ---------- */
  function batchStrip(b, c) {
    return `
    <section class="bstrip-wrap">
      <div class="wrap">
        <div class="bstrip glass" data-a id="batchStrip">
          <div class="bstrip__flag"><span class="pulse"></span>${trackOf(b) === 'Online' ? 'Online' : 'Classroom'} · ${phaseOf(b) === 'upcoming' ? 'Starting Soon' : 'Open'}</div>
          <div class="bstrip__main">
            <h2>${esc(b.name)}</h2>
            <p>${esc(batchStatusLine(b))}</p>
          </div>
          <dl class="bstrip__facts">
            <div><dt>Duration</dt><dd>${esc(b.duration || b.validTill)}</dd></div>
            <div><dt>Timing</dt><dd>${esc(b.timing)}</dd></div>
            <div><dt>Days</dt><dd>${esc(b.days)}</dd></div>
            <div><dt>Platform</dt><dd>${esc(b.platform || b.mode)}</dd></div>
          </dl>
          <a href="${base}contact.html#enroll" class="btn">Book A Seat ⟶</a>
        </div>
      </div>
    </section>`;
  }

  /* ==========================================================
     2. BATCH POP-UP  (once per batch, per visitor)
     ========================================================== */
  function mountPopup(list, c) {
    const batches = Array.isArray(list) ? list : [list];
    if (!batches.length) return;
    /* The lead batch carries the shared wording; siblings that start on the
       same day (Class 6 and Class 9, say) are listed with their own hours. */
    const b = batches[0];

    const cfg = window.WEDA_POPUP || {};
    const everyVisit = cfg.showEveryVisit !== false;
    const key = 'weda_batch_seen_' + batches.map(x => x.id).join('+');

    /* When showEveryVisit is off, a visitor who has already dismissed
       this batch does not see it again until the batch id changes. */
    if (!everyVisit) {
      let seen = false;
      try { seen = localStorage.getItem(key) === '1'; } catch (e) { seen = false; }
      if (seen) return;
    }

    const el = document.createElement('div');
    el.className = 'bpop';
    el.id = 'batchPop';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-labelledby', 'bpopTitle');
    el.innerHTML = `
      <div class="bpop__scrim" data-close></div>
      <div class="bpop__card glass">
        <button class="bpop__x" data-close aria-label="Close">✕</button>
        <span class="bpop__flag"><span class="pulse"></span>${trackOf(b) === 'Online' ? 'Online Batch' : 'Classroom Batch'} · ${phaseOf(b) === 'upcoming' ? 'Announced' : 'Open'}</span>
        <h2 id="bpopTitle">${esc(b.headline)}</h2>
        <p class="bpop__pitch">${esc(b.pitch)}</p>

        <div class="bpop__date">
          <span class="bpop__date-k">Classes start</span>
          <b>${esc(b.startsLabel)}</b>
          <span class="bpop__date-s">${esc(batchStatusLine(b))}</span>
        </div>

        ${batches.length > 1 ? `
        <div class="bpop__classes">
          <span class="bpop__classes-k">Two batches, same start date</span>
          ${batches.map(x => `
            <div class="bpop__class">
              <b>${esc(x.variant || x.name)}</b>
              <span>${esc(x.timing)}</span>
            </div>`).join('')}
        </div>` : ''}

        <dl class="bpop__facts">
          <div><dt>Duration</dt><dd>${esc(b.duration || b.validTill)}</dd></div>
          ${batches.length > 1 ? '' : `<div><dt>Timing</dt><dd>${esc(b.timing)}</dd></div>`}
          <div><dt>Days</dt><dd>${esc(b.days)}</dd></div>
          <div><dt>Platform</dt><dd>${esc(b.platform || b.mode)}</dd></div>
          ${batches.length > 1 ? `<div><dt>Testing</dt><dd>${esc(b.weeklyTest)}</dd></div>` : ''}
        </dl>

        ${(b.phases || []).length ? `
        <ol class="bpop__phases">
          ${b.phases.map(p => `
            <li>
              <span class="bpop__phase-when">${esc(p.when)}</span>
              <b>${esc(p.title)}</b>
              <span class="bpop__phase-desc">${esc(p.desc)}</span>
            </li>`).join('')}
        </ol>` : ''}

        ${b.target ? `<p class="bpop__demo"><b>//</b> Target exam: ${esc(b.target)}</p>` : ''}
        ${b.demo ? `<p class="bpop__demo"><b>//</b> ${esc(b.demo)}</p>` : ''}

        <div class="bpop__btns">
          <a href="${base}contact.html#enroll" class="btn">Book A Seat ⟶</a>
          <a href="${WA}" class="btn btn--glass" target="_blank" rel="noopener">WhatsApp</a>
          <a href="tel:${PHONE}" class="btn btn--glass">Call ${PHONE_LABEL}</a>
        </div>
        <p class="bpop__seats">${esc(b.seatsNote)} · ${esc(b.centre)}</p>
      </div>`;

    document.body.appendChild(el);

    const close = () => {
      el.classList.remove('is-on');
      /* Only remember the dismissal when we are in once-per-visitor mode. */
      if (!everyVisit) {
        try { localStorage.setItem(key, '1'); } catch (e) { /* private mode */ }
      }
      setTimeout(() => el.remove(), 420);
      document.removeEventListener('keydown', onKey);
      if (window.lenis) window.lenis.start();
    };
    const onKey = e => { if (e.key === 'Escape') close(); };

    el.addEventListener('click', e => { if (e.target.hasAttribute('data-close')) close(); });
    document.addEventListener('keydown', onKey);

    /* Open once the page has painted, or as soon as they scroll a
       little — whichever comes first. Never instantly on load. */
    let opened = false;
    const open = () => {
      if (opened) return; opened = true;
      el.classList.add('is-on');
      const x = el.querySelector('.bpop__x');
      if (x) x.focus();
      window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => { if (window.scrollY > 240) open(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    const delay = Math.max(0.6, parseFloat(cfg.delaySeconds) || 1.2) * 1000;
    setTimeout(open, delay);
  }

  /* ==========================================================
     3. NEW BATCH BADGES  (courses.html)
     ========================================================== */
  const hub = document.getElementById('courseHub');
  if (hub) {
    hub.innerHTML = COURSES.map((c, i) => {
      const b = batchFor(c.id);
      return `
      <article class="course-row glass glass--hov" data-a id="course-${esc(c.id)}">
        <div class="course-row__media pframe" data-plx>
          <img src="${base}${esc(c.image)}" alt="${esc(c.name)} preparation — The Winning Edge Defence Academy" loading="lazy">
          <span class="pframe__cap"><b>//</b> ${esc(c.label)}</span>
          ${b ? `<span class="pframe__badge"><span class="pulse"></span>New Batch</span>` : ''}
        </div>
        <div>
          <h2>${esc(c.name)}</h2>
          <div class="course-row__progs">${c.syllabus.slice(0, 3).map(s => `<span>${esc(s.name)}</span>`).join('<i>|</i>')}</div>
          <p>${esc(c.tagline)} ${esc(c.intro[0].split('. ')[0])}.</p>
          ${tracksFor(c.id).map(t => {
            const live = activeFor(c.id, t.id);
            if (!live.length) return '';
            const href = `${base}courses/${esc(c.id)}.html?track=${t.id.toLowerCase()}`;
            /* Each batch line links to its OWN track's page, so clicking an
               online batch never lands anyone on the classroom page. */
            return live.map(tb => `
              <a class="course-row__batch course-row__batch--${t.id.toLowerCase()}" href="${href}">
                <em>${esc(t.label)}</em> <b>${esc(tb.name)}</b> — ${esc(batchStatusLine(tb))} · ${esc(tb.timing)}
              </a>`).join('');
          }).join('')}
          <!-- No track pills here: the batch line above already names the
               track, and the buttons below repeat it a third time. -->
          <div class="course-row__btns">
            ${tracksFor(c.id).map((t, i) => `
              <a href="${base}courses/${esc(c.id)}.html?track=${t.id.toLowerCase()}"
                 class="btn${i ? ' btn--glass' : ''}">${esc(t.label)} Details ⟶</a>`).join('')}
            <a href="${base}contact.html#enroll" class="btn btn--glass">Enquire</a>
          </div>
        </div>
      </article>`;
    }).join('');
  }

  /* ==========================================================
     3b. ENQUIRY FORM COURSE LIST  (contact.html)
     ----------------------------------------------------------
     Built from the course data so the dropdown cannot drift out
     of step with the courses actually on the site. It used to be
     hardcoded, and still offered SSC GD, JNV and UP Sainik School
     after those were retired, while missing CDS entirely.
     ========================================================== */
  const courseSelect = document.getElementById('courseSelect');
  if (courseSelect) {
    const extras = ['Digital Courses', 'Not sure yet — please advise'];
    courseSelect.innerHTML =
      '<option value="" disabled selected>Choose course</option>' +
      COURSES.map(c => `<option>${esc(c.name)}</option>`).join('') +
      extras.map(x => `<option>${esc(x)}</option>`).join('');
  }

  /* ==========================================================
     4. HOMEPAGE BATCH RIBBON  (index.html)
     ========================================================== */
  const ribbon = document.getElementById('batchRibbon');
  if (ribbon) {
    const live = currentCampaigns();
    if (!live.length) { ribbon.remove(); }
    else {
      ribbon.innerHTML = `
      <div class="wrap">
        <div class="ribbon glass" data-a>
          <div class="ribbon__head">
            <span class="ribbon__flag"><span class="pulse"></span>Admissions Open</span>
            <h2>Batches running right now</h2>
            <p>Classroom at our Donali Chowk centre, and live online classes on Zoom.</p>
          </div>
          <div class="ribbon__list">
            ${live.map(b => {
              const c = byId(b.course);
              return `
              <a class="rib" href="${base}courses/${esc(b.course)}.html?track=${trackOf(b).toLowerCase()}">
                <b>${esc(c ? c.name : b.course)}</b>
                <span>${esc(b.startsLabel)}</span>
                <i>${esc(b.timing)} · ${esc(b.track || '')}</i>
              </a>`;
            }).join('')}
          </div>
          <a href="${base}batches.html" class="btn btn--glass">See All Running Batches ⟶</a>
        </div>
      </div>`;
    }
  }

  /* ==========================================================
     5. /batches  — THE TRACKING DASHBOARD
     ========================================================== */
  const board = document.getElementById('batchBoard');
  if (board) {
    /* Only what is actually running. No queue, no counts, no fees. */
    const live = currentCampaigns();

    const row = b => {
      const c = byId(b.course);
      return `
      <article class="brow glass glass--hov" data-a>
        <div class="brow__head">
          <span class="brow__status is-open"><span class="pulse"></span>${trackOf(b) === 'Online' ? 'Online' : 'Classroom'}</span>
          <h3>${esc(b.name)}</h3>
          <p>${esc(batchStatusLine(b))}</p>
        </div>
        <dl class="brow__facts">
          <div><dt>Course</dt><dd>${esc(c ? c.name : b.course)}</dd></div>
          <div><dt>Starts</dt><dd>${esc(b.startsLabel)}</dd></div>
          <div><dt>Duration</dt><dd>${esc(b.duration || b.validTill || '-')}</dd></div>
          <div><dt>Timing</dt><dd>${esc(b.timing)}</dd></div>
          <div><dt>Days</dt><dd>${esc(b.days)}</dd></div>
          <div><dt>Platform</dt><dd>${esc(b.platform || b.mode)}</dd></div>
          ${b.target ? `<div><dt>Target exam</dt><dd>${esc(b.target)}</dd></div>` : ''}
          ${b.weeklyTest ? `<div><dt>Testing</dt><dd>${esc(b.weeklyTest)}</dd></div>` : ''}
        </dl>
        <div class="brow__btns">
          <a href="${base}courses/${esc(b.course)}.html?track=${trackOf(b).toLowerCase()}" class="btn btn--glass">${esc(c ? c.name : b.course)} Course ⟶</a>
          <a href="${base}contact.html#enroll" class="btn">Book A Seat</a>
        </div>
      </article>`;
    };

    const render = filter => {
      const items = filter === 'all' ? live : live.filter(b => trackOf(b) === filter);
      if (!items.length) {
        return `<p class="mono-note" data-a>// NO BATCH RUNNING IN THIS TRACK — CALL US FOR THE CURRENT SCHEDULE</p>`;
      }
      return `<div class="bboard">${items.map(row).join('')}</div>`;
    };

    const filters = [
      { id: 'all', label: 'All Batches', sub: 'Classroom and online' },
      { id: 'Offline', label: 'Offline', sub: 'Dehradun Centre' },
      { id: 'Online', label: 'Online', sub: 'Live on Zoom' },
    ];

    board.innerHTML = `
      <div class="btabs btabs--board" role="tablist" aria-label="Batch track" data-a>
        ${filters.map((f, i) => `
          <button class="btab${i === 0 ? ' is-on' : ''}" role="tab" type="button"
                  aria-selected="${i === 0}" data-filter="${f.id}">
            <b>${f.label}</b>
            <span>${f.sub}</span>
          </button>`).join('')}
      </div>
      <div id="boardBody">${render('all')}</div>`;

    const body = board.querySelector('#boardBody');
    board.querySelectorAll('.btab').forEach(tab => tab.addEventListener('click', () => {
      const want = tab.dataset.filter;
      board.querySelectorAll('.btab').forEach(t => {
        const on = t.dataset.filter === want;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', String(on));
      });
      body.innerHTML = render(want);
      body.querySelectorAll('[data-a]').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    }));
  }

  /* ==========================================================
     6. SCHEMA — Course + FAQPage + BreadcrumbList
     Google reads this to build rich results. Rich results lift
     click-through, and click-through lifts ranking.
     ========================================================== */
  function injectSchema(c, b) {
    const url = `${SITE}/courses/${c.id}`;
    const org = {
      '@type': 'EducationalOrganization',
      name: 'The Winning Edge Defence Academy',
      url: SITE,
      telephone: PHONE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shiv Shakti Tower, Near Donali Chowk',
        addressLocality: 'Dehradun',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
    };

    const course = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      '@id': url + '#course',
      name: `${c.fullName} Preparation`,
      description: c.metaDesc,
      url: url,
      provider: org,
      educationalLevel: c.label,
      teaches: c.syllabus.map(s => s.name),
      inLanguage: 'en-IN',
    };

    if (b) {
      course.hasCourseInstance = [{
        '@type': 'CourseInstance',
        name: b.name,
        courseMode: ['Onsite', 'Online'],
        startDate: b.starts,
        location: {
          '@type': 'Place',
          name: 'The Winning Edge Defence Academy',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Shiv Shakti Tower, Near Donali Chowk',
            addressLocality: 'Dehradun',
            addressRegion: 'Uttarakhand',
            addressCountry: 'IN',
          },
        },
        courseSchedule: {
          '@type': 'Schedule',
          byDay: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        },
      }];
      /* No price in the schema — fees are not published on batch pages. */
      course.offers = [{
        '@type': 'Offer',
        category: 'Paid',
        availability: 'https://schema.org/InStock',
        url: `${SITE}/contact`,
      }];
    }

    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': url + '#faq',
      mainEntity: c.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };

    const crumbs = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Courses', item: SITE + '/courses' },
        { '@type': 'ListItem', position: 3, name: c.name, item: url },
      ],
    };

    [course, faq, crumbs].forEach(obj => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.textContent = JSON.stringify(obj);
      document.head.appendChild(s);
    });
  }
})();
