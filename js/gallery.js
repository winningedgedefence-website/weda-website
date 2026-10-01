/* ============================================================
   GALLERY PAGE — every photo, full frame
   ------------------------------------------------------------
   Builds the wall on gallery.html from js/content.js. Nothing is
   cropped here: a masonry column layout lets each photo keep its
   own shape, tall or wide, so no part of any image is cut off.

   Photos come from two lists in js/content.js:
     gallery        the camp and academy photos (4:3)
     gallerySquare  the seminar and event photos — this page uses
                    their "full" version, the uncropped original

   Click any photo to open it large. Esc or a click closes it.
   ============================================================ */
(() => {
  const wall = document.getElementById('galleryWall');
  const C = window.WEDA_CONTENT;
  if (!wall || !C) return;

  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* Events first — they are the newest — then the camp archive. */
  const shots = []
    .concat((C.gallerySquare || []).map(p => ({ src: p.full || p.image, caption: p.caption })))
    .concat((C.gallery || []).map(p => ({ src: p.image, caption: p.caption })));

  if (!shots.length) return;

  wall.innerHTML = `
    <div class="gwall">
      ${shots.map((p, i) => `
        <figure class="gwall__i" data-a data-d="${((i % 8) * 0.04).toFixed(2)}">
          <button type="button" class="gwall__btn" data-full="${esc(p.src)}" aria-label="Open photo ${i + 1} larger">
            <img src="${esc(p.src)}" alt="${esc(p.caption || 'The Winning Edge Defence Academy, Dehradun')}"
                 loading="${i < 6 ? 'eager' : 'lazy'}" decoding="async">
          </button>
          ${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ''}
        </figure>`).join('')}
    </div>`;

  const count = document.getElementById('galCount');
  if (count) count.textContent = shots.length;

  /* ---------- lightbox ---------- */
  const box = document.createElement('div');
  box.className = 'glight';
  box.innerHTML = `
    <button class="glight__x" aria-label="Close">✕</button>
    <button class="glight__nav glight__nav--prev" aria-label="Previous">‹</button>
    <img alt="">
    <button class="glight__nav glight__nav--next" aria-label="Next">›</button>`;
  document.body.appendChild(box);

  const img = box.querySelector('img');
  let at = 0;

  const show = i => {
    at = (i + shots.length) % shots.length;
    img.src = shots[at].src;
    img.alt = shots[at].caption || 'The Winning Edge Defence Academy, Dehradun';
  };
  const open = i => {
    show(i);
    box.classList.add('is-on');
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();
  };
  const close = () => {
    box.classList.remove('is-on');
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start();
  };

  wall.addEventListener('click', e => {
    const b = e.target.closest('.gwall__btn');
    if (!b) return;
    open(shots.findIndex(s => s.src === b.dataset.full));
  });

  box.addEventListener('click', e => {
    if (e.target.closest('.glight__nav--next')) return show(at + 1);
    if (e.target.closest('.glight__nav--prev')) return show(at - 1);
    if (!e.target.closest('img')) close();
  });

  document.addEventListener('keydown', e => {
    if (!box.classList.contains('is-on')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(at + 1);
    if (e.key === 'ArrowLeft') show(at - 1);
  });
})();
