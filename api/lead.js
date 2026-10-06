/* ============================================================
   ENQUIRY FORM — server-side handler (Vercel Serverless Function)

   Takes the registration form on contact.html and emails it to the
   academy. Before this existed the form threw every lead away: it had
   no action, the submit handler called preventDefault() and reset(),
   and the parent was still shown "Registration received".

   ------------------------------------------------------------
   SETUP — one environment variable
   ------------------------------------------------------------
     WEB3FORMS_KEY   Free access key from https://web3forms.com

   Get the key:
     1. Go to web3forms.com
     2. Enter winningedgedefence@gmail.com
     3. The key arrives in that inbox straight away. No account,
        no password, no card.

   Add it to Vercel (Project -> Settings -> Environment Variables),
   name it WEB3FORMS_KEY, then redeploy.

   The key lives only here, never in the browser, so it cannot be
   scraped off the page and abused.

   ------------------------------------------------------------
   IF THE KEY IS MISSING
   ------------------------------------------------------------
   This returns ok:false and the form tells the parent plainly that
   it could not send, offering WhatsApp instead. It never claims a
   lead was received when it was not.
   ============================================================ */

const LEAD_INBOX = 'winningedgedefence@gmail.com';

const clean = (v, max = 200) =>
  String(v == null ? '' : v).replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, reason: 'Use POST.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  /* Hidden field no human can see. Bots fill everything, so anything
     here means a bot — accept it silently rather than tipping it off. */
  if (clean(body.company)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const state = clean(body.state, 120);
  const course = clean(body.course, 120);

  const missing = [];
  if (!name) missing.push('name');
  if (!phone) missing.push('phone');
  if (!email) missing.push('email');
  if (!course) missing.push('course');
  if (missing.length) {
    return res.status(400).json({ ok: false, reason: 'Missing: ' + missing.join(', ') });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ ok: false, reason: 'That email address does not look right.' });
  }
  if (phone.replace(/\D/g, '').length < 10) {
    return res.status(400).json({ ok: false, reason: 'That phone number looks too short.' });
  }

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    /* Say so honestly. The form then shows the WhatsApp fallback
       instead of pretending the lead went through. */
    console.error('[lead] WEB3FORMS_KEY is not set — lead could not be delivered:', { name, phone, email, state, course });
    return res.status(503).json({
      ok: false,
      configured: false,
      reason: 'The enquiry form is not connected to an inbox yet.',
    });
  }

  try {
    const r = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: key,
        to: LEAD_INBOX,
        subject: `New enquiry — ${name} (${course})`,
        from_name: 'WEDA Website',
        replyto: email,
        Name: name,
        Phone: phone,
        Email: email,
        State: state || '—',
        Course: course,
        Received: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST',
        Source: clean(body.page, 200) || 'contact page',
      }),
    });

    const out = await r.json().catch(() => ({}));
    if (!r.ok || out.success === false) {
      console.error('[lead] delivery failed', r.status, out);
      return res.status(502).json({ ok: false, reason: 'The mail service rejected it.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[lead] error', err);
    return res.status(502).json({ ok: false, reason: 'Could not reach the mail service.' });
  }
}
