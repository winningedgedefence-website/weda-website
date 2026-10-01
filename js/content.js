/* ============================================================
   WEDA SITE CONTENT — edit this file to add/remove things.
   No coding knowledge needed. Rules:
   1. Every item lives between { ... } braces, ending with a comma.
   2. TO REMOVE something: delete its whole { ... }, block.
   3. TO ADD something: copy an existing { ... }, block, paste it
      below, and change the text/image.
   4. Images: put the photo file inside the assets/ folder first,
      then write its name here as "assets/your-photo.jpg".
   After editing, redeploy (ask Claude: "deploy the site").
   ============================================================ */

window.WEDA_CONTENT = {

  /* ============================================================
     1. COURSES  (courses.html)
     Four main categories. "programs" = the exam names listed
     inside the category. "tags" = the little red pills.
     accent: true = solid red button, false = outline button.
     ============================================================ */
  courses: [
    {
      title: "School Entrance Exams",
      label: "CLASS 6 & CLASS 9 ENTRY",
      image: "assets/course-sainik.webp",
      programs: ["Sainik School", "RMS", "UP Sainik School", "JNV"],
      desc: "One structured track for every school-level entrance: Mathematics, English, General Knowledge, Intelligence and interview readiness. Weekly mock tests, ranked leaderboards and no mercy on weak fundamentals.",
      tags: ["Online", "Offline", "Digital"],
      button: "Enquire Now",
      accent: true,
    },
    {
      title: "RIMC",
      label: "RASHTRIYA INDIAN MILITARY COLLEGE",
      image: "assets/course-rimc.webp",
      programs: ["Written Exam", "Viva Voce", "Medical Guidance"],
      desc: "Dedicated preparation for the Rashtriya Indian Military College entrance — Mathematics, English and General Knowledge, followed by Viva Voce interview drills. Fundamentals before speed, then full-length mocks under exam timing.",
      tags: ["Online", "Offline", "Digital"],
      button: "Enquire Now",
      accent: true,
    },
    {
      title: "NDA",
      label: "NATIONAL DEFENCE ACADEMY",
      image: "assets/course-nda.webp",
      programs: ["Mathematics", "General Ability Test", "Current Affairs"],
      desc: "Officer-grade preparation for the NDA written examination, built around the full syllabus with weekly testing and doubt-clearing from mentors who have taught on both sides of the selection board.",
      tags: ["Online", "Offline", "Hybrid"],
      button: "Enquire Now",
      accent: true,
    },
    {
      title: "SSB",
      label: "SERVICES SELECTION BOARD",
      image: "assets/course-ssb.webp",
      programs: ["Psychology Tests", "GTO Tasks", "Personal Interview"],
      desc: "The full SSB assault course — screening, psychology tests, GTO ground tasks and personal interview drills that break a candidate down and rebuild them as selection material.",
      tags: ["Online", "Offline", "Hybrid"],
      button: "Enquire Now",
      accent: true,
    },
  ],

  /* ============================================================
     1c. HOMEPAGE — OUR PREPARATION  (index.html)
     One card per exam. "note" is the small supporting line.
     "entry" is the little label in the corner of the card.

     These mirror the four categories on the Courses page and share its
     artwork, one image per card. The creatives carry their own headline
     type, so the card frame matches the source ratio and never crops.
     ============================================================ */
  preparation: [
    { name: "Sainik School",  entry: "Class 6 & 9",   note: "Also covers RMS, UP Sainik School and JNV entrance.",     image: "assets/course-sainik.webp", link: "courses.html#course-1" },
    { name: "RIMC",           entry: "Class 8 Entry", note: "Written exam, Viva Voce and interview readiness.",        image: "assets/course-rimc.webp",   link: "courses.html#course-2" },
    { name: "NDA",            entry: "Officer Entry", note: "Written examination plus full SSB preparation.",          image: "assets/course-nda.webp",    link: "courses.html#course-3" },
    { name: "SSB",            entry: "Interview",     note: "Psychology tests, GTO tasks and the personal interview.", image: "assets/course-ssb.webp",    link: "courses.html#course-4" },
  ],

  /* ============================================================
     1d. HOMEPAGE — WEDA ECOSYSTEM  (index.html)
     Four compact tiles. Change "link" only to a real URL.
     ============================================================ */
  ecosystem: [
    {
      name: "WEDA App",
      tag: "Digital Learning",
      text: "Video courses, mock tests, practice sets and study resources on your phone.",
      cta: "Explore WEDA App",
      link: "https://ewfqe.courses.store/",
    },
    {
      name: "WEDA Books",
      tag: "Study Material",
      text: "Preparation books and practice resources for RIMC, Sainik School and RMS.",
      cta: "Explore WEDA Books",
      link: "https://wedabooks.com/",
    },
    {
      name: "WEDA Defence Plus",
      tag: "Video Platform",
      text: "The extended video guidance channel for defence aspirants.",
      cta: "Watch on YouTube",
      link: "https://www.youtube.com/@thewinningedgedefenceplus",
    },
    /* WEDA Gurukool is intentionally not listed — there is no public link
       for it yet. To add it back, copy one of the blocks above, change the
       name/tag/text and put the real URL in "link". */
  ],

  /* ============================================================
     1e. HOMEPAGE — PREPARATION JOURNEY strip  (index.html)
     ============================================================ */
  journey: ["Learn", "Practice", "Test", "Analyse", "Improve"],

  /* ============================================================
     1f. GOOGLE REVIEWS  (index.html)
     Reviews are pulled live from the official Google listing by
     /api/reviews — nothing is written here by hand on purpose.
     profileUrl = the public listing people can click through to.
     ============================================================ */
  googleReviews: {
    profileUrl: "https://share.google/UaB1ukRY7ot2y6hwH",
    listingName: "The Winning Edge - RIMC, RMS, Sainik School Coaching in Dehradun",

    /* Headline numbers shown next to the stars.
       Update these whenever the real figures on the listing change. */
    /* current figures on the Google listing (checked via the map embed) */
    rating: 4.7,
    total: 455,

    /* ---------------------------------------------------------------
       REVIEWS SHOWN ON THE HOMEPAGE

       How this works: if a Google API key is ever configured, the page
       uses live data from /api/reviews and ignores this list entirely.
       Until then it shows the reviews below.

       >>> IMPORTANT <<<
       These were carried over from WEDA's own existing website, where
       they appeared under the 4.6-star Google badge. They have NOT been
       checked against the live Google listing. Confirm each one is a
       real Google review, or replace the list with copies of the real
       ones. Never add a review that was not actually written by a
       customer on Google.

       ORDER = the order they appear on the page. Put the newest review
       first. (Nobody can work out "latest" automatically from this file —
       it has no dates until you add them.)

       TO EDIT: each review is one { ... }, block.
       name  = reviewer's name exactly as it appears on Google
       stars = 1 to 5
       when  = e.g. "3 months ago"  (leave "" to hide the date)
       text  = the review, copied word for word — do not rewrite it
       photo = OPTIONAL reviewer picture, e.g. "assets/review-anita.jpg".
               Save the image into the assets/ folder first. If you leave
               photo out, the card shows a red circle with their initial.
       --------------------------------------------------------------- */
    reviews: [
      { name: "Sumit",         stars: 5, when: "", photo: "", text: "The disciplined environment prepares students not just academically but mentally and physically for a career in the armed forces." },
      { name: "Amit Mishra",   stars: 5, when: "", photo: "", text: "Best coaching for RIMC preparation in Dehradun! Focus on written exams and personality development — crucial for SSB interviews." },
      { name: "Shivam Katyal", stars: 5, when: "", photo: "", text: "Remarkable improvement — rigorous training with strong focus on current affairs, maths and English boosted my son's confidence." },
      { name: "Amrita Kaur",   stars: 5, when: "", photo: "", text: "The Winning Edge lives up to its name! Intensive study plan focused on the RIMC syllabus and weekly tests for consistent preparation." },
      { name: "R. K.",         stars: 5, when: "", photo: "", text: "Wonderful coaching helped my son crack AISSEE and get selected in Sainik School Satara. Sincere thanks to Col Amardeep Sir and team." },
      { name: "Satwant Singh", stars: 5, when: "", photo: "", text: "Better experience for a better future — my son attended summer camp at WEDA. The best coaching centre." },
      { name: "Kanakalata Devi", stars: 5, when: "", photo: "", text: "Doing a great job — teaching with care and moral values, without any fee. Jai Hind, saluting Sir!" },
      { name: "Jyoti Thakur",  stars: 5, when: "", photo: "", text: "Everything was planned at their best level — the webinar enhanced the knowledge of students brilliantly." },
    ],
  },

  /* ============================================================
     2. DIGITAL COURSES  (courses.html #digital)
     Self-paced recorded courses. Change "link" to point
     somewhere else if the store URL ever changes.
     ============================================================ */
  digital: {
    title: "Digital Courses",
    desc: "Self-paced recorded ammunition — structured video lectures and digital workbooks you can start today. Train from anywhere, anytime, at your own command.",
    shot: "assets/shot-app.webp",
    link: "https://ewfqe.courses.store/",
    button: "Explore Digital Courses",
    items: [
      { name: "Sainik School", note: "Recorded lectures + workbooks" },
      { name: "RIMC",          note: "Recorded lectures + workbooks" },
      { name: "RMS",           note: "Recorded lectures + workbooks" },
    ],
  },

  /* ============================================================
     1g. BLOG INDEX  (blog.html)

     Every article lives on its own page. To add one:
       1. copy blog-sainik-school-myths.html to blog-<your-slug>.html
       2. replace the <article class="post"> contents and the <h1>
       3. copy a { ... }, block below and point "link" at the new file
     The first entry in the list is shown as the featured post.
     ============================================================ */
  posts: [
    {
      title: "RIMC December 2026 GK Syllabus Changed: How Should Students Prepare for the New General Knowledge Paper?",
      link: "blog-rimc-gk-syllabus-2026-preparation.html",
      category: "RIMC",
      meta: "WEDA Exam Intel · 11 min read",
      author: "Col Amardeep Sir, SM (Retd.)",
      excerpt: "RIMC has notified a far wider General Knowledge syllabus for the December 2026 RIMCEE — 37 topic areas spanning science, environment, defence, culture and current affairs. The paper pattern, the eight preparation buckets, a 5-layer method and a practical 12-week plan.",
    },
    {
      title: "Has the School Education Timeline Overtaken NDA Eligibility?",
      link: "blog-nda-age-eligibility-school-education-timeline.html",
      category: "NDA",
      meta: "Policy Perspective · 5 min read",
      author: "Col Amardeep Sir, SM (Retd.)",
      excerpt: "Most students now finish Class XII at eighteen, leaving fewer NDA attempts than the previous generation had. RIMC and RMS have already revised their age limits — should the NDA framework be reviewed too?",
    },
    {
      title: "Before You Fill Any Sainik School Application Form, Read This First",
      link: "blog-before-you-apply-sainik-school.html",
      category: "Admissions",
      meta: "WEDA Parent Knowledge Series · Issue 01 · 9 min read",
      author: "Col Amardeep Sir, SM (Retd.)",
      excerpt: "Four institutions, four different doors — Sainik School, New Sainik School, RMS and RIMC are not the same system. A six-question readiness check every family should run before touching an application form.",
    },
    {
      title: "Fifteen Things Parents Believe About Sainik School Admissions That Simply Are Not True",
      link: "blog-sainik-school-myths.html",
      category: "Sainik School",
      meta: "Parent Knowledge Series · 12 min read",
      author: "Col Amardeep Sir, SM (Retd.)",
      excerpt: "A defence quota that is smaller than everyone says. Girls who can apply but do not. An interview that does not exist. Fifteen beliefs families act on every admission season, and what is actually the case.",
    },
  ],

  /* ============================================================
     2b. WEDA BOOKS  (courses.html #books)
     Categories are read off the WEDA Books storefront itself, so the
     two titles it marks "coming soon" are shown that way here too.
     ============================================================ */
  books: {
    tagline: "Books that prepare you to serve",
    desc: "WEDA Books is the publishing arm of the academy — printed and digital preparation material written for the same syllabus our batches follow.",
    shot: "assets/shot-books.webp",
    site: "wedabooks.com",
    link: "https://wedabooks.com/",
    cta: "Explore WEDA Books",
    items: [
      { name: "Sainik School & RMS — Class 6", note: "All-in-one practice sets and previous-year papers. Bilingual, English & Hindi." },
      { name: "Sainik School & RMS — Class 9", note: "Complete content as per syllabus, mock tests and mini-practice sets." },
      { name: "RIMC Entrance Examination",     note: "Previous-year papers 2018–2024 with complete bilingual solutions." },
      { name: "NDA",                            soon: true },
      { name: "SSB Interview",                  soon: true },
    ],
  },

  /* ============================================================
     3. LOW-COST LEARNING  (courses.html #lowcost)
     ============================================================ */
  lowcost: {
    title: "Learn More. Spend Less. Prepare Better.",
    desc: "Access valuable defence-exam preparation content at little to no cost through our YouTube channel.",
    link: "https://www.youtube.com/@TheWinningEdgeDefence",
    button: "Subscribe to Our YouTube Channel",
  },

  /* ============================================================
     4. THE TEAM  (about.html)
     CAPTAIN     = leadership
     STRIKERS    = mentors / faculty
     GOALKEEPER  = support team
     ============================================================ */

  /* --- STRIKERS: mentors, shown as a photo carousel.
     Names come from the supplied photo filenames. No subject or
     designation is listed because none was supplied — add a
     role: "Mathematics" line to any block if you want one shown. --- */
  strikers: [
    { name: "Neeraj Sir",      photo: "assets/striker-neeraj-sir.webp" },
    { name: "Bimla Ma'am",     photo: "assets/striker-bimla-maam.webp" },
    { name: "Kamal Ma'am",     photo: "assets/striker-kamal-maam.webp" },
    { name: "Varun Sir",       photo: "assets/striker-varun-sir.webp" },
    { name: "Mahrose Sir",     photo: "assets/striker-mahrose-sir.webp" },
    { name: "Pankaj Sir",      photo: "assets/striker-pankaj-sir.webp" },
    { name: "Parveen Jha Sir", photo: "assets/striker-parveen-jha-sir.webp" },
    { name: "Vikram Sir",      photo: "assets/striker-vikram-sir.webp" },
    { name: "Ankit Sir",       photo: "assets/striker-ankit-sir.webp" },
  ],

  /* --- GOALKEEPER: support team, shown as a photo carousel.
     Names come from the supplied photo filenames. --- */
  goalkeeper: [
    { name: "Anjali Ma'am",   photo: "assets/keeper-anjali-maam.webp" },
    { name: "Anshul Ma'am",   photo: "assets/keeper-anshul-maam.webp" },
    { name: "Jaanvi Ma'am",   photo: "assets/keeper-jaanvi-maam.webp" },
    { name: "Jagriti Ma'am",  photo: "assets/keeper-jagriti-maam.webp" },
    { name: "Jyoti Ma'am",    photo: "assets/keeper-jyoti-maam.webp" },
    { name: "Karan Sir",      photo: "assets/keeper-karan-sir.webp" },
    { name: "Raveena Ma'am",  photo: "assets/keeper-raveena-maam.webp" },
    { name: "Sumit Sir",      photo: "assets/keeper-sumit-sir.webp" },
    { name: "Harshita Ma'am", photo: "assets/keeper-harshita-maam.webp" },
    { name: "Tripti Ma'am",   photo: "assets/keeper-tripti-maam.webp" },
  ],

  /* ============================================================
     5. FEE STRUCTURE  (fees.html)

     SOURCE: WEDA_Fees_2026_27_Updated.xlsx (sheet "WEDA Fees 2026-27").
     Every amount below is transcribed from that sheet exactly as
     written — nothing rounded, added or assumed.

     Prices are per duration, so the page shows one duration at a
     time via the tabs; "" means the sheet had no price in that cell.
     ============================================================ */
  fees: {
    published: true,
    title: "WEDA Fees 2026–27",

    durations: [
      { key: "y1",    label: "1 Year" },
      { key: "m6",    label: "6 Months" },
      { key: "crash", label: "Crash Course" },
    ],

    /* Three modes per batch, each priced by duration.

       online          — from the sheet
       offlineHostel   — offline WITH schooling + hostel. NOT in the
                         spreadsheet; supplied separately by WEDA and
                         offered for NDA only, full year. Leave "" for
                         any batch that does not offer it.
       offline         — offline WITHOUT schooling + hostel, i.e. the
                         sheet's single "Offline" column, matching its
                         own remark on the SS6 row. */
    batches: [
      {
        batch: "Sainik School – Class 6",
        code: "SS6",
        online:  { y1: "₹49,500", m6: "₹36,500", crash: "₹20,500" },
        offlineHostel: { y1: "", m6: "", crash: "" },
        offline: { y1: "₹52,500", m6: "₹39,500", crash: "₹23,500" },
        remark: "One batch covers all four Class 6 entrances — Sainik School, RMS, UP Sainik School and JNV.",
      },
      {
        batch: "Sainik School – Class 9",
        code: "SS9",
        online:  { y1: "₹49,500", m6: "₹36,500", crash: "₹20,500" },
        offlineHostel: { y1: "", m6: "", crash: "" },
        offline: { y1: "₹52,500", m6: "₹39,500", crash: "₹23,500" },
        remark: "Class 9 lateral entry — Maths, Science, English, Social Science and General Knowledge.",
      },
      {
        batch: "RIMC",
        code: "RIMC",
        online:  { y1: "₹50,500", m6: "₹37,500", crash: "₹22,500" },
        offlineHostel: { y1: "", m6: "", crash: "" },
        offline: { y1: "₹58,500", m6: "₹40,500", crash: "₹25,500" },
        remark: "Written paper plus Viva Voce drilling for the Class 8 entry to Dehradun.",
      },
      {
        batch: "NDA",
        code: "NDA",
        online:  { y1: "₹65,000", m6: "₹36,500", crash: "₹20,500" },
        offlineHostel: { y1: "₹2,60,000", m6: "", crash: "" },
        offline: { y1: "₹75,000", m6: "₹37,500", crash: "₹22,500" },
        remark: "Mathematics and General Ability Test, followed by the full SSB assault course.",
      },
      {
        batch: "RMS Interview Course",
        code: "RMS-INT",
        online:  { y1: "", m6: "", crash: "₹9,500" },
        offlineHostel: { y1: "", m6: "", crash: "" },
        offline: { y1: "", m6: "", crash: "" },
        remark: "10-day intensive. Interview board practice and personality development.",
      },
      {
        batch: "RIMC Interview Course",
        code: "RIMC-INT",
        online:  { y1: "", m6: "", crash: "₹12,500" },
        offlineHostel: { y1: "", m6: "", crash: "" },
        offline: { y1: "", m6: "", crash: "" },
        remark: "10-day intensive. Viva Voce rehearsal, current affairs and spoken confidence.",
      },
    ],

    registration: "₹1,000/-",
    /* wording requested for the page */
    gstNote: "GST is inclusive in the above-mentioned fees.",
    /* remaining remarks, straight from the sheet */
    notes: [
      "The fee is inclusive of applicable taxes.",
      "For course duration other than mentioned above, please connect with the counselling team.",
    ],
  },

  /* ============================================================
     6. GALLERY TABS — no longer used. The only gallery now lives in
     the About Us page carousel (see "gallery" further down). Kept so
     the three photo groupings are not lost if you want them back.
     ============================================================ */
  galleryTabs: {
    achievements: [
      { image: "assets/achiever-1.webp", caption: "THE BATCH",     hold: "pin"  },
      { image: "assets/achiever-2.webp", caption: "CLASSROOM OPS", hold: "tape" },
      { image: "assets/achiever-3.webp", caption: "THE GRIND",     hold: "pin"  },
      { image: "assets/achiever-4.webp", caption: "MESS HALL",     hold: "tape" },
    ],
    mentors: [
      { image: "assets/mentor-neeraj.webp",    caption: "NEERAJ SIR",     hold: "pin"  },
      { image: "assets/mentor-niharika.webp",  caption: "NIHARIKA GUPTA", hold: "tape" },
      { image: "assets/mentor-pratima.webp",   caption: "PRATIMA JADON",  hold: "pin"  },
      { image: "assets/mentor-rajvinder.webp", caption: "RAJVINDER KAUR", hold: "tape" },
      { image: "assets/mentor-sonil.webp",     caption: "SONIL MAM",      hold: "pin"  },
      { image: "assets/mentor-tanmay.webp",    caption: "TANMAY GUPTA",   hold: "tape" },
    ],
    activities: [
      { image: "assets/gallery-3.webp", caption: "FORMATION",       hold: "pin"  },
      { image: "assets/gallery-1.webp", caption: "THE UNIT",        hold: "tape" },
      { image: "assets/gallery-4.webp", caption: "DRILLS",          hold: "pin"  },
      { image: "assets/gallery-5.webp", caption: "FIELDCRAFT",      hold: "tape" },
      { image: "assets/gallery-6.webp", caption: "DISCIPLINE",      hold: "pin"  },
      { image: "assets/gallery-7.webp", caption: "ESPRIT DE CORPS", hold: "tape" },
      { image: "assets/gallery-2.webp", caption: "TRAINING CAMP",   hold: "pin"  },
      { image: "assets/gallery-8.webp",caption: "ON THE GROUND",   hold: "tape" },
    ],
  },

  /* ------- ACHIEVERS carousel (about.html) -------
     Split out of the two 3x3 collage sheets, one badge per file.
     No names attached: none were supplied, and these are children —
     add  name: "..."  to a block only if you have permission to publish
     it, and it will appear as a caption under the photo. */
  achieverBadges: [
    { image: "assets/student-01.webp" },
    { image: "assets/student-02.webp" },
    { image: "assets/student-03.webp" },
    { image: "assets/student-04.webp" },
    { image: "assets/student-05.webp" },
    { image: "assets/student-06.webp" },
    { image: "assets/student-07.webp" },
    { image: "assets/student-08.webp" },
    { image: "assets/student-09.webp" },
    { image: "assets/student-10.webp" },
    { image: "assets/student-11.webp" },
    { image: "assets/student-12.webp" },
    { image: "assets/student-13.webp" },
    { image: "assets/student-14.webp" },
    { image: "assets/student-15.webp" },
    { image: "assets/student-16.webp" },
    { image: "assets/student-17.webp" },
    { image: "assets/student-18.webp" },
    { image: "assets/student-19.webp" },
    { image: "assets/student-20.webp" },
    { image: "assets/student-21.webp" },
    { image: "assets/student-22.webp" },
    { image: "assets/student-23.webp" },
    { image: "assets/student-24.webp" },
    { image: "assets/student-25.webp" },
    { image: "assets/student-26.webp" },
    { image: "assets/student-27.webp" },
    { image: "assets/student-28.webp" },
    { image: "assets/student-29.webp" },
  ],

  /* ------- GALLERY carousel (about.html) -------
     Life at the academy. All 3:2 so the frame never jumps.
     caption is optional — leave "" for no label. */
  gallery: [
    { image: "assets/camp-img-9332.jpg", caption: "" },
    { image: "assets/camp-untitled-design-67.webp", caption: "" },
    { image: "assets/camp-img-1252.webp", caption: "" },
    { image: "assets/camp-img-9672.webp", caption: "" },
    { image: "assets/camp-img-1262.webp", caption: "" },
    { image: "assets/camp-img-9576.webp", caption: "" },
    { image: "assets/camp-aasz6511.webp", caption: "" },
    { image: "assets/camp-img-9531.webp", caption: "" },
    { image: "assets/camp-img-6250.webp", caption: "" },
    { image: "assets/camp-img-1005.webp", caption: "" },
    { image: "assets/camp-img-6087.webp", caption: "" },
    { image: "assets/camp-img-0962.webp", caption: "" },
    { image: "assets/camp-img-6112.webp", caption: "" },
    { image: "assets/camp-img-6526.webp", caption: "" },
    { image: "assets/camp-whatsapp-image-2025-12-27-at-9-18-29-am.webp", caption: "" },
    { image: "assets/camp-whatsapp-image-2026-01-01-at-10-22-50-pm.webp", caption: "" },
    { image: "assets/camp-event-01.webp", caption: "" },
    { image: "assets/camp-event-02.webp", caption: "" },
    { image: "assets/camp-event-03.webp", caption: "" },
    { image: "assets/camp-event-04.webp", caption: "" },
  ],

  /* ------- SEMINARS & EVENTS carousel (about.html) -------
     A separate carousel because these photos were shot vertically on
     phones. Squeezing a tall phone photo into the 4:3 frame above would
     throw away more than half of it and cut heads off, so these are
     cropped to 1:1 instead and shown four across.

     TO ADD A PHOTO: crop it square (1:1) before saving it into assets/,
     then copy a line below. Anything not square will stretch the row. */
  gallerySquare: [
    { image: "assets/event-01.webp", full: "assets/photo-01.webp", caption: "" },
    { image: "assets/event-02.webp", full: "assets/photo-02.webp", caption: "" },
    { image: "assets/event-03.webp", full: "assets/photo-03.webp", caption: "" },
    { image: "assets/event-04.webp", full: "assets/photo-04.webp", caption: "" },
    { image: "assets/event-05.webp", full: "assets/photo-05.webp", caption: "" },
    { image: "assets/event-06.webp", full: "assets/photo-06.webp", caption: "" },
    { image: "assets/event-07.webp", full: "assets/photo-07.webp", caption: "" },
    { image: "assets/event-08.webp", full: "assets/photo-08.webp", caption: "" },
    { image: "assets/event-09.webp", full: "assets/photo-09.webp", caption: "" },
    { image: "assets/event-10.webp", full: "assets/photo-10.webp", caption: "" },
    { image: "assets/event-11.webp", full: "assets/photo-11.webp", caption: "" },
    { image: "assets/event-12.webp", full: "assets/photo-12.webp", caption: "" },
    { image: "assets/event-13.webp", full: "assets/photo-13.webp", caption: "" },
    { image: "assets/event-14.webp", full: "assets/photo-14.webp", caption: "" },
    { image: "assets/event-15.webp", full: "assets/photo-15.webp", caption: "" },
    { image: "assets/event-16.webp", full: "assets/photo-16.webp", caption: "" },
    { image: "assets/event-17.webp", full: "assets/photo-17.webp", caption: "" },
  ],

  /* ------- ACHIEVER WALL photos (results.html) ------- */
  achievers: [
    { image: "assets/achiever-1.webp", caption: "THE BATCH",     hold: "pin"  },
    { image: "assets/achiever-2.webp", caption: "CLASSROOM OPS", hold: "tape" },
    { image: "assets/achiever-3.webp", caption: "THE GRIND",     hold: "pin"  },
    { image: "assets/achiever-4.webp", caption: "MESS HALL",     hold: "tape" },
  ],

  /* ------- FILMSTRIP photos (results.html, auto-scrolling) ------- */
  filmstrip: [
    "assets/gallery-2.webp",
    "assets/gallery-4.webp",
    "assets/gallery-5.webp",
    "assets/gallery-6.webp",
    "assets/gallery-7.webp",
    "assets/gallery-8.webp",
  ],

};
