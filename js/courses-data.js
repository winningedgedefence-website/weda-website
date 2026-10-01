/* ============================================================
   WEDA COURSE PILLAR CONTENT — the evergreen part of the site
   ------------------------------------------------------------
   IMPORTANT: this file holds content that does NOT change often.
   Syllabus, eligibility, selection stages, FAQs.

   Batch dates, fees and seat counts do NOT belong here —
   those live in js/batches.js so you can change a batch without
   touching the pages Google has already ranked.

   Each course below becomes one page at /courses/<id>
   ============================================================ */

window.WEDA_COURSES = [

  /* ========================================================== */
  {
    id: "nda",
    name: "NDA",
    fullName: "National Defence Academy",
    label: "OFFICER ENTRY - AFTER CLASS 12",
    image: "assets/course-nda.webp",
    metaTitle: "NDA Coaching in Dehradun | NDA 2026-27 Batch - The Winning Edge",
    metaDesc: "NDA coaching in Dehradun by The Winning Edge Defence Academy. Complete NDA syllabus, Mathematics and GAT, weekly tests, SSB guidance under Col Amardeep Singh, SM (Retd).",
    tagline: "Mathematics, General Ability, and the interview that follows.",
    intro: [
      "The National Defence Academy examination is conducted by the UPSC twice a year and is the principal route into the Army, Navy and Air Force straight after Class 12. Two papers - Mathematics and the General Ability Test - decide who moves forward, and the Services Selection Board decides who is commissioned.",
      "Our NDA preparation is a classroom course taught Monday to Friday with a written test every Saturday, built around the full published syllabus rather than shortcuts. Concept first, then worksheets, then full-length papers under exam timing.",
    ],
    keywords: ["NDA coaching Dehradun", "NDA preparation", "NDA written exam", "SSB interview"],

    eligibility: [
      { k: "Qualification", v: "Class 12 passed or appearing. Air Force and Naval wings require Physics, Chemistry and Mathematics." },
      { k: "Age", v: "Broadly 16.5 to 19.5 years on the date specified in the notification." },
      { k: "Marital status", v: "Unmarried candidates only." },
      { k: "Conducted by", v: "Union Public Service Commission - twice every year." },
    ],
    eligibilityNote: "Age windows and stream requirements are fixed afresh in each year's official UPSC notification. Always confirm against the current notification before applying.",

    stages: [
      { name: "Written Exam", desc: "Mathematics and the General Ability Test, under time pressure. This is what the classroom hours, worksheets and Saturday tests are aimed at." },
      { name: "SSB Interview", desc: "Five days of psychological tests, group tasks and a personal interview. Officer-like qualities are built over months, not crammed in a week." },
      { name: "Medical & Merit", desc: "Clear the SSB and a full medical board follows. Final selection then comes down to the merit list, built from written and SSB marks together, so every mark earned from day one counts." },
    ],

    syllabus: [
      { name: "Mathematics", topics: "Algebra, Matrices and Determinants, Trigonometry, Analytical Geometry, Differential Calculus, Integral Calculus, Differential Equations, Vector Algebra, Statistics and Probability." },
      { name: "General Ability - English", topics: "Grammar and usage, vocabulary, comprehension, cohesion, spotting errors, sentence improvement." },
      { name: "General Ability - General Knowledge", topics: "Physics, Chemistry, General Science, History and Freedom Movement, Geography, Current Events." },
    ],

    plan: [
      { when: "18 - 30 Sept", sub: "2026", title: "Free demo classes", desc: "Two weeks of open classes at the Donali Chowk centre. Sit in, see the teaching method, and ask questions before committing." },
      { when: "1 Oct - 15 Feb", sub: "2026 to 2027", title: "Detailed course", desc: "The full NDA syllabus taught concept by concept, with practice worksheets and regular tests throughout." },
      { when: "16 Feb - 5 Apr", sub: "2027", title: "Crash course", desc: "Rapid revision of every topic, tightened around speed, accuracy and exam temperament." },
      { when: "After 5 Apr", sub: "2027", title: "Mock tests and marathons", desc: "Full-length mock test series and marathon sessions to finish the preparation in exam conditions." },
    ],

    includes: [
      "Complete NDA-Focused Preparation",
      "12 Weekly Tests",
      "4 Monthly Tests",
      "5 Full-Length Mock Tests",
      "5 Previous Year Papers (PYPs)",
      "Practice Worksheets",
      "Performance Analysis",
      "Concept-Based Classroom Teaching",
      "Personal Guidance & Mentoring",
      "Expert Guidance by Col Amardeep Singh (Retd)",
    ],

    faqs: [
      { q: "When should a student start preparing for the NDA?", a: "Class 11 is the ideal starting point. The Mathematics paper draws directly on the Class 11 and 12 syllabus, so a student preparing alongside school covers the ground twice and enters the exam hall with the fundamentals already settled. Starting in Class 12 is still workable, but the margin for error is thinner." },
      { q: "Can a student from the Arts or Commerce stream apply?", a: "Yes, for the Army wing. The Air Force and Naval wings require Physics, Chemistry and Mathematics at Class 12 level, so students targeting those wings must be in the Science stream." },
      { q: "Do you prepare students for the SSB as well as the written exam?", a: "Yes. SSB interview guidance is built into the NDA course rather than sold separately. Psychological testing, group tasks and interview practice run alongside the written preparation, because officer-like qualities are assessed over five days and cannot be revised the week before." },
      { q: "Is online preparation available if we are not in Dehradun?", a: "Yes. The same faculty teach live online batches with the same test schedule and doubt-clearing. Classroom students additionally get physical training and camp access at the Dehradun centre." },
      { q: "How many attempts does a candidate get?", a: "There is no cap on the number of attempts. The limiting factor is the age window, which allows most candidates a small number of attempts across Class 12 and the two years after it." },
    ],

    related: ["cds", "ssb", "rimc"],
  },

  /* ========================================================== */
  {
    id: "cds",
    name: "CDS",
    fullName: "Combined Defence Services",
    label: "OFFICER ENTRY - AFTER GRADUATION",
    image: "assets/course-1.webp",
    metaTitle: "CDS Coaching in Dehradun | CDS 2026-27 Batch - The Winning Edge",
    metaDesc: "CDS coaching in Dehradun. English, General Knowledge and Elementary Mathematics taught concept by concept, weekly tests and SSB preparation under Col Amardeep Singh, SM (Retd).",
    tagline: "The graduate route to a commission - IMA, INA, AFA and OTA.",
    intro: [
      "The Combined Defence Services examination is the UPSC's graduate entry into the Indian Military Academy, Indian Naval Academy, Air Force Academy and Officers Training Academy. It is held twice a year, and the written paper tests English, General Knowledge and Elementary Mathematics rather than advanced theory.",
      "That makes CDS a paper about accuracy and coverage under time pressure, not difficulty. Our classroom course is built accordingly - full syllabus coverage first, then repeated timed practice until speed stops costing marks.",
    ],
    keywords: ["CDS coaching Dehradun", "CDS preparation", "IMA OTA entry", "CDS written exam"],

    eligibility: [
      { k: "Qualification", v: "A graduate degree from a recognised university. Engineering degree for the Air Force Academy, and a degree with Physics and Mathematics for the Naval Academy." },
      { k: "Age", v: "Varies by academy, broadly between 19 and 25 years." },
      { k: "Marital status", v: "Unmarried for most academy entries. OTA has separate provisions." },
      { k: "Conducted by", v: "Union Public Service Commission - twice every year." },
    ],
    eligibilityNote: "Each academy under CDS has its own age band and degree requirement, and these are restated in every notification. Confirm your specific entry against the current UPSC notification.",

    stages: [
      { name: "Written Exam", desc: "English, General Knowledge and Elementary Mathematics, under time pressure. This is what the classroom hours, worksheets and Saturday tests are aimed at." },
      { name: "SSB Interview", desc: "Five days of psychological tests, group tasks and a personal interview. Officer-like qualities are built over months, not crammed in a week." },
      { name: "Medical & Merit", desc: "A medical board follows, and the final merit list combines written and SSB marks. Every mark earned from day one counts towards the commission." },
    ],

    syllabus: [
      { name: "English", topics: "Comprehension, spotting errors, sentence arrangement, synonyms and antonyms, fill in the blanks, idioms and phrases." },
      { name: "General Knowledge", topics: "Current events, History, Geography, Polity, Economics, General Science, Defence and Ahead of the current affairs cycle." },
      { name: "Elementary Mathematics", topics: "Arithmetic, Number System, Algebra, Trigonometry, Geometry, Mensuration, Statistics. Matric standard, tested at speed." },
    ],

    plan: [
      { when: "18 - 30 Sept", sub: "2026", title: "Free demo classes", desc: "Two weeks of open classes at the Donali Chowk centre. Sit in, see the teaching method, and ask questions before committing." },
      { when: "From 18 Sept", sub: "2026", title: "Complete CDS course", desc: "The full CDS syllabus taught concept by concept, with practice worksheets and regular tests throughout." },
      { when: "Through", sub: "the batch", title: "Testing and analysis", desc: "Twelve weekly tests and four monthly tests, with regular performance analysis after each one." },
      { when: "Valid till", sub: "April 2027", title: "Mock tests and final preparation", desc: "Five full-length mock tests and five previous year papers, worked under exam timing." },
    ],

    includes: [
      "Complete CDS-Focused Preparation",
      "Expert Faculty & Personal Mentoring",
      "12 Weekly Tests + 4 Monthly Tests",
      "5 Full-Length Mock Tests",
      "5 Previous Year Papers (PYPs)",
      "Regular Performance Analysis",
    ],

    faqs: [
      { q: "How is CDS different from the NDA?", a: "NDA is entered after Class 12 and CDS after graduation. The CDS written paper is set at a lower academic level - Elementary Mathematics rather than calculus - but the competition is between graduates, so accuracy and coverage decide the cut-off rather than difficulty." },
      { q: "Can women apply through CDS?", a: "Yes. Women are eligible for the Officers Training Academy entry under CDS, and the written preparation is identical. The SSB assessment standard is the same for all candidates." },
      { q: "Is there a Mathematics paper for the OTA entry?", a: "No. Candidates applying only for the Officers Training Academy sit English and General Knowledge. Candidates applying for IMA, INA or AFA sit all three papers including Elementary Mathematics." },
      { q: "Can a final year student apply?", a: "Yes, candidates in their final year of graduation may apply, subject to producing proof of passing within the deadline stated in the notification." },
      { q: "How long does the full CDS preparation take?", a: "Our classroom course runs from October to the exam with crash revision and mock marathons built in. A candidate starting from the fundamentals should plan on six to seven months of consistent work." },
    ],

    related: ["nda", "ssb", "ssc-gd"],
  },

  /* ========================================================== */
  {
    id: "rimc",
    name: "RIMC",
    fullName: "Rashtriya Indian Military College",
    label: "CLASS 8 ENTRY - DEHRADUN",
    image: "assets/course-rimc.webp",
    metaTitle: "RIMC Coaching in Dehradun | RIMC 2026-27 Batch - The Winning Edge",
    metaDesc: "RIMC coaching in Dehradun. English, Mathematics and General Knowledge for the Rashtriya Indian Military College written exam, plus Viva Voce preparation.",
    tagline: "The oldest feeder to the Academy - and it sits in our own city.",
    intro: [
      "The Rashtriya Indian Military College in Dehradun admits students into Class 8 through a written examination followed by a Viva Voce. It takes a very small intake each term, which makes it one of the most competitive school entrances in the country.",
      "Preparation cannot be a last-term exercise. English, Mathematics and General Knowledge are written by hand against the clock, and the interview board reads confidence and general awareness that a child builds over months. Our RIMC batch is structured around exactly that timeline.",
    ],
    keywords: ["RIMC coaching Dehradun", "RIMC entrance exam", "RIMC preparation", "Class 8 military school"],

    eligibility: [
      { k: "Entry class", v: "Class 8." },
      { k: "Age", v: "Broadly 11.5 to 13 years on the term commencement date." },
      { k: "Qualification", v: "Studying in or passed Class 7 from a recognised school." },
      { k: "Sessions", v: "Two terms a year - January and July." },
    ],
    eligibilityNote: "RIMC fixes its age band precisely against the term start date, and the state-wise seat allocation changes. Confirm against the official RIMC prospectus for the term you are applying to.",

    stages: [
      { name: "Written Exam", desc: "English, Mathematics and General Knowledge, written by hand against the clock. This is what the classroom hours, worksheets and Saturday tests are aimed at." },
      { name: "Viva Voce", desc: "An interview board reads confidence, general awareness and the way your child thinks aloud. Those qualities are built over months in a classroom, not in the week before." },
      { name: "Medical & Merit", desc: "A medical examination follows, and the final merit list combines the written and viva marks. Every mark earned from day one counts towards the seat." },
    ],

    syllabus: [
      { name: "English", topics: "Comprehension, grammar and usage, vocabulary building, essay and letter writing, handwriting and presentation under time." },
      { name: "Mathematics", topics: "Number system, fractions and decimals, ratio and proportion, percentage, profit and loss, simple interest, algebra basics, mensuration, geometry." },
      { name: "General Knowledge", topics: "Current affairs, Indian history and geography, civics, general science, sports, defence awareness and static GK." },
    ],

    plan: [
      { when: "18 - 30 Sept", sub: "2026", title: "Free demo classes", desc: "Two weeks of open classes. Sit in with your child, see the teaching method, and ask questions before committing." },
      { when: "1 Oct - Nov", sub: "2026", title: "Complete RIMC course", desc: "The full RIMC syllabus taught concept by concept, with practice worksheets and regular tests throughout." },
      { when: "December", sub: "2026", title: "Revision and mock tests", desc: "Every topic revised, then full-length mock papers in exam conditions so the real paper feels familiar." },
      { when: "Final stretch", sub: "before the exam", title: "Final preparation", desc: "Long-form practice to finish the preparation, tightened around speed, accuracy and exam temperament." },
    ],

    includes: [
      "RIMC-Focused Complete Preparation",
      "Expert Faculty & Personal Mentoring",
      "Weekly & Monthly Tests",
      "Full-Length Tests & Mock Tests",
      "Previous Year Papers (PYPs)",
      "Practice Worksheets",
      "Performance Analysis",
      "Concept-Based Classroom Teaching",
      "Special Guidance by Col Amardeep Singh (Retd)",
    ],

    faqs: [
      { q: "How competitive is the RIMC entrance?", a: "Very. RIMC takes a small intake each term and allocates seats state-wise, which means a child is competing against the strongest applicants from their own state rather than the national pool. This is why early, structured preparation matters more here than in most school entrances." },
      { q: "When should preparation begin?", a: "Class 6 or early Class 7. The written paper is handwritten and the General Knowledge section rewards awareness accumulated over time, neither of which can be built in a short crash course." },
      { q: "Are girls eligible for RIMC?", a: "Yes. RIMC has admitted girl cadets since 2018, with seats allocated separately. Our batch prepares all candidates to the same standard." },
      { q: "What does the Viva Voce actually assess?", a: "The board is reading clarity of thought, confidence in speaking, general awareness and how a child reasons aloud under mild pressure. We build this through regular oral practice in class rather than treating it as a separate interview coaching module." },
      { q: "Does the handwritten format matter?", a: "It does. Unlike most school entrances which use OMR sheets, RIMC requires handwritten answers. Presentation, legibility and finishing within the time limit all carry weight, so our Saturday tests replicate the handwritten format from the start." },
    ],

    related: ["sainik-rms", "nda"],
  },

  /* ========================================================== */
  {
    id: "sainik-rms",
    name: "Sainik School & RMS",
    fullName: "Sainik School and Rashtriya Military School",
    label: "CLASS 6 & CLASS 9 ENTRY",
    image: "assets/course-sainik.webp",
    metaTitle: "Sainik School & RMS Coaching in Dehradun | 2026-27 Batch - The Winning Edge",
    metaDesc: "Sainik School and RMS entrance coaching in Dehradun. One batch covering AISSEE and the RMS Common Entrance Test for Class 6 and Class 9 entry.",
    tagline: "One batch, two premier defence school entrance exams.",
    intro: [
      "Sainik Schools admit at Class 6 and Class 9 through the All India Sainik School Entrance Examination, and the Rashtriya Military Schools run their own Common Entrance Test at the same entry points. The syllabus overlaps heavily, which is why we teach both in a single classroom batch rather than making families choose.",
      "The paper is Mathematics, language, intelligence and general knowledge on an OMR sheet against the clock. RMS candidates additionally face a viva. A child who prepares properly for one is largely prepared for the other, and gets two chances at a defence school seat in the same year.",
    ],
    keywords: ["Sainik School coaching Dehradun", "AISSEE preparation", "RMS entrance exam", "Class 6 Sainik School"],

    eligibility: [
      { k: "Entry classes", v: "Class 6 and Class 9." },
      { k: "Age - Class 6", v: "Broadly 10 to 12 years as on the date fixed in the notification." },
      { k: "Age - Class 9", v: "Broadly 13 to 15 years as on the date fixed in the notification." },
      { k: "Conducted by", v: "AISSEE for Sainik Schools. A separate Common Entrance Test for RMS." },
    ],
    eligibilityNote: "Age windows are fixed against a specific cut-off date that changes each year, and girls' admission varies by school. Confirm against the current AISSEE and RMS notifications.",

    stages: [
      { name: "Written Entrance", desc: "Mathematics, language, intelligence and general knowledge, on an OMR sheet against the clock. This is what the classroom hours, worksheets and Saturday tests are aimed at." },
      { name: "Interview & Viva", desc: "RMS candidates face a viva after the written stage. Confidence, clarity and the ability to think aloud are built over months in a classroom, not in the week before." },
      { name: "Medical & Merit", desc: "A medical examination follows, and the final merit list is drawn from the written marks. Every mark earned from day one counts towards the seat." },
    ],

    syllabus: [
      { name: "Mathematics", topics: "Number system, fractions, decimals, LCM and HCF, percentage, ratio and proportion, profit and loss, simple interest, geometry, mensuration, data handling." },
      { name: "Language", topics: "Grammar, comprehension, vocabulary, sentence formation, spelling and usage. English and the regional language paper as applicable." },
      { name: "Intelligence", topics: "Analogy, pattern and series, coding-decoding, classification, spatial reasoning, visual and logical puzzles." },
      { name: "General Knowledge", topics: "General science, current affairs, India and the world, sports, defence awareness and static GK." },
    ],

    plan: [
      { when: "18 - 30 Sept", sub: "2026", title: "Free demo classes", desc: "Two weeks of open classes. Sit in with your child, see the teaching method, and ask questions before committing." },
      { when: "1 Oct - Jan", sub: "2026 to 2027", title: "Complete course", desc: "The full Sainik School and RMS syllabus taught concept by concept, with practice worksheets and regular tests throughout." },
      { when: "Through", sub: "the batch", title: "Revision and mock tests", desc: "Ten full-length mock papers and ten previous year papers, worked in exam conditions." },
      { when: "Final stretch", sub: "before the exam", title: "Marathon sessions", desc: "Long-form practice sessions to finish the preparation before the paper." },
    ],

    includes: [
      "Complete Sainik School & RMS Preparation",
      "12 Weekly Tests",
      "4 Monthly Tests",
      "10 Full-Length Mock Papers",
      "10 Previous Year Papers (PYPs)",
      "Practice Worksheets",
      "Performance Analysis",
      "Concept-Based Teaching",
      "Personal Guidance & Mentoring",
      "Expert Guidance by Col Amardeep Singh (Retd)",
    ],

    faqs: [
      { q: "Why teach Sainik School and RMS in one batch?", a: "Because the syllabus overlaps almost entirely. Mathematics, language, intelligence and general knowledge are common to both. Preparing once gives a child two separate chances at a defence school seat in the same admission year, at no extra preparation cost." },
      { q: "Is Class 6 or Class 9 the better entry point?", a: "Class 6 has more seats and a longer runway inside the school system, so it is the stronger entry where the child is eligible. Class 9 remains a genuine second chance, but with fewer vacancies and stiffer competition." },
      { q: "Are girls admitted to Sainik Schools?", a: "Yes. Sainik Schools have admitted girl cadets since 2021, though the number of seats varies between schools. Our batch prepares all candidates to the same standard." },
      { q: "How important is the intelligence section?", a: "More than most parents expect. It carries real weight, it is the section school syllabus does not cover, and it is highly trainable through repeated pattern practice. Children who prepare for it specifically gain a clear margin." },
      { q: "What happens after selection?", a: "Selected candidates go through a medical examination before admission is confirmed. Our counsellors guide families through the document and medical stage as part of the course." },
    ],

    related: ["rimc", "nda"],
  },

  /* ========================================================== */
  {
    id: "ssc-gd",
    name: "SSC GD",
    fullName: "SSC General Duty Constable",
    label: "CONSTABLE ENTRY - AFTER CLASS 10",
    image: "assets/course-2.webp",
    metaTitle: "SSC GD Coaching in Dehradun | SSC GD 2026-27 Batch - The Winning Edge",
    metaDesc: "SSC GD Constable coaching in Dehradun. Reasoning, general knowledge, elementary mathematics and language for the computer based exam, plus PET and PST guidance.",
    tagline: "The uniform after Class 10 - CAPF, Assam Rifles, NIA and SSF.",
    intro: [
      "The SSC GD Constable examination recruits General Duty Constables into the Central Armed Police Forces, Rifleman in the Assam Rifles, and posts in the NIA and SSF. It is a Class 10 level paper, which makes it the widest open door in uniformed service recruitment - and the most heavily contested.",
      "Eighty questions across reasoning, general knowledge, elementary mathematics and language, answered on a computer against the clock. Then the physical stage. Our course runs the written preparation in the classroom and tells candidates plainly to start the running from day one, not after the result.",
    ],
    keywords: ["SSC GD coaching Dehradun", "SSC GD constable preparation", "CAPF recruitment", "SSC GD PET PST"],

    eligibility: [
      { k: "Qualification", v: "Class 10 passed from a recognised board." },
      { k: "Age", v: "Broadly 18 to 23 years, with relaxation for reserved categories as notified." },
      { k: "Physical standards", v: "Height, chest and running standards vary by gender, category and region." },
      { k: "Conducted by", v: "Staff Selection Commission." },
    ],
    eligibilityNote: "Physical standards differ for candidates from hill regions and scheduled tribes, and the age relaxation table changes. Confirm against the current SSC notification.",

    stages: [
      { name: "Computer Based Exam", desc: "Eighty questions across reasoning, general knowledge, elementary mathematics and language, against the clock. This is what the classroom hours, worksheets and Saturday tests are aimed at." },
      { name: "PET & PST", desc: "The race, then height and chest measurement against the standard for your category. Fitness is built over months, so start alongside the classes rather than after the result." },
      { name: "Medical & Merit", desc: "A detailed medical examination follows, and the final merit list is drawn from your written marks. Every mark earned from day one counts towards where you finish." },
    ],

    syllabus: [
      { name: "General Intelligence & Reasoning", topics: "Analogies, similarities and differences, spatial visualisation, coding and decoding, series, non-verbal reasoning." },
      { name: "General Knowledge & Awareness", topics: "Current affairs, India and its neighbours, history, culture, geography, economy, polity, scientific research." },
      { name: "Elementary Mathematics", topics: "Number systems, computation of whole numbers, decimals and fractions, percentage, ratio and proportion, averages, interest, profit and loss, discount, mensuration, time and distance." },
      { name: "English / Hindi", topics: "Basic comprehension, grammar, vocabulary, error spotting and usage in the chosen language." },
    ],

    plan: [
      { when: "18 - 30 Sept", sub: "2026", title: "Free demo classes", desc: "Two weeks of open classes at the Donali Chowk centre. Sit in, see the teaching method, and ask questions before committing." },
      { when: "From 18 Sept", sub: "2026", title: "Complete SSC GD course", desc: "The full SSC GD syllabus taught concept by concept, with practice worksheets and regular tests throughout." },
      { when: "Through", sub: "the batch", title: "Testing and analysis", desc: "Twelve weekly tests and four monthly tests, with regular performance analysis after each one." },
      { when: "Valid till", sub: "April 2027", title: "Mock tests and final preparation", desc: "Five full-length mock tests and five previous year papers, worked under exam timing." },
    ],

    includes: [
      "Complete SSC GD-Focused Preparation",
      "Expert Faculty & Personal Mentoring",
      "12 Weekly Tests + 4 Monthly Tests",
      "5 Full-Length Mock Tests",
      "5 Previous Year Papers (PYPs)",
      "Regular Performance Analysis",
    ],

    faqs: [
      { q: "When should I start the physical preparation?", a: "On day one, alongside the classes. This is the single most common mistake candidates make. The race is not something you can train for in the few weeks between the written result and the PET - it needs months of consistent running, and candidates who wait lose at a stage they had already earned." },
      { q: "Is the written paper difficult?", a: "The level is Class 10, so no individual question is hard. The difficulty is volume and speed - eighty questions with negative marking on a computer screen. Accuracy under time pressure is what separates the merit list, and that is purely a matter of practice." },
      { q: "Can I attempt the paper in Hindi?", a: "Yes. The language section offers English or Hindi, and the rest of the paper is available in both. Choose the language you read fastest in, not the one you think looks better." },
      { q: "Which forces recruit through SSC GD?", a: "The Central Armed Police Forces - BSF, CISF, CRPF, SSB and ITBP - along with Rifleman in the Assam Rifles, and posts in the NIA and the Secretariat Security Force." },
      { q: "Does negative marking apply?", a: "Yes, and it is the reason blind guessing costs candidates their rank. Our test analysis tracks attempted versus correct so a candidate learns where their personal guessing line sits." },
    ],

    related: ["cds", "nda", "ssb"],
  },

  /* ========================================================== */
  {
    id: "ssb",
    name: "SSB",
    fullName: "Services Selection Board",
    label: "INTERVIEW - FIVE DAY ASSESSMENT",
    image: "assets/course-ssb.webp",
    metaTitle: "SSB Interview Coaching in Dehradun | The Winning Edge Defence Academy",
    metaDesc: "SSB interview preparation in Dehradun. Screening, psychological tests, GTO ground tasks and the personal interview, under mentors who have sat on both sides of the board.",
    tagline: "Five days that decide a commission - and they are not a test of knowledge.",
    intro: [
      "The Services Selection Board is not an examination. It is a five day assessment of whether a candidate has the qualities an officer needs, watched by three independent assessors - a psychologist, a Group Testing Officer and an interviewing officer - who never compare notes until the final board.",
      "That structure is why SSB cannot be crammed. A candidate who performs an answer gets caught, because the three assessors are reading the same person through different instruments and inconsistency shows. Our capsule works on the qualities themselves, then on presenting them honestly under pressure.",
    ],
    keywords: ["SSB interview coaching Dehradun", "SSB preparation", "GTO tasks", "psychological tests SSB"],

    eligibility: [
      { k: "Who attends", v: "Candidates who have cleared the written stage of NDA, CDS, AFCAT, TA, or who hold a direct entry call letter." },
      { k: "Duration", v: "Five days, conducted at a Selection Centre." },
      { k: "Assessed by", v: "A psychologist, a Group Testing Officer and an interviewing officer, independently." },
      { k: "Outcome", v: "Recommendation, followed by a medical board and the final merit list." },
    ],
    eligibilityNote: "Entry routes and call letter conditions differ by service and by entry scheme. Confirm against the notification you applied under.",

    stages: [
      { name: "Screening - Day 1", desc: "Officer Intelligence Rating tests, then Picture Perception and Description followed by group discussion. Roughly half the candidates are sent home the same day, so the first hours matter disproportionately." },
      { name: "Psychology & GTO", desc: "Thematic Apperception, Word Association, Situation Reaction and Self Description, then nine group tasks on the ground - group discussion, planning exercise, progressive group task, command task and the individual obstacles." },
      { name: "Interview & Conference", desc: "A personal interview drawing on your Personal Information Questionnaire, then the final board where all three assessors present their independent findings together." },
    ],

    syllabus: [
      { name: "Screening Stage", topics: "Officer Intelligence Rating - verbal and non-verbal reasoning at speed. Picture Perception and Description Test. Narration and group discussion." },
      { name: "Psychological Tests", topics: "Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self Description Test. Written under strict time limits by design." },
      { name: "GTO Ground Tasks", topics: "Group Discussion, Group Planning Exercise, Progressive Group Task, Half Group Task, Individual Obstacles, Command Task, Snake Race, Lecturette, Final Group Task." },
      { name: "Personal Interview", topics: "PIQ-based questioning, current affairs, self awareness, career reasoning, handling of stress and contradiction." },
    ],

    plan: [
      { when: "Stage 1", sub: "Assessment", title: "Where you actually stand", desc: "A full diagnostic against the fifteen officer-like qualities, so preparation targets your real gaps rather than a generic checklist." },
      { when: "Stage 2", sub: "Core work", title: "Psychology and personality", desc: "Written psychological tests under exact time limits, reviewed individually. The aim is a consistent, honest response pattern - not a rehearsed one." },
      { when: "Stage 3", sub: "Ground", title: "GTO tasks in the open", desc: "Full ground tasks run outdoors with real obstacles, so group behaviour, initiative and physical courage are assessed in the conditions they will be tested in." },
      { when: "Stage 4", sub: "Board", title: "Interview and conference practice", desc: "Mock interviews against your own PIQ, followed by a simulated board conference and a written assessment of how you came across." },
    ],

    includes: [
      "Full five-day SSB simulation",
      "Officer Intelligence Rating practice",
      "Psychological test review, individually marked",
      "All nine GTO tasks on an outdoor ground",
      "Mock personal interviews on your own PIQ",
      "Lecturette and group discussion drills",
      "Current affairs briefing for the interview",
      "Personal mentoring on officer-like qualities",
      "Honest post-assessment debrief",
      "Special guidance under Col Amardeep Singh, SM (Retd)",
    ],

    faqs: [
      { q: "Can the SSB be prepared for at all, or is it innate?", a: "It can be prepared for, but not faked. The assessors are trained to spot a rehearsed candidate, and a performed personality fails on consistency across three independent assessments. What preparation genuinely does is remove avoidable errors, build real confidence in group settings, and make a candidate articulate about who they already are." },
      { q: "Why do so many candidates get screened out on day one?", a: "Because screening rewards speed and clarity, and most candidates meet the format for the first time on the day. The Officer Intelligence Rating is timed tightly and the picture perception narration is short. Both are entirely trainable, which is why our capsule front-loads them." },
      { q: "What are officer-like qualities?", a: "Fifteen assessed traits grouped into effective intelligence, social adjustment, social effectiveness and dynamic qualities - things like reasoning ability, initiative, responsibility, cooperation, determination and courage. They are assessed through behaviour, never asked about directly." },
      { q: "Is a repeated attempt held against a candidate?", a: "No. Assessors have no access to your previous board's findings, and each assessment starts clean. What does hurt is repeating the same avoidable mistakes, which is exactly what an honest debrief after a failed attempt is for." },
      { q: "Do you offer SSB preparation alongside written coaching?", a: "Yes. SSB guidance is built into our NDA and CDS courses rather than sold separately, because officer-like qualities develop over months. The intensive capsule is for candidates who already hold a call letter." },
    ],

    related: ["nda", "cds", "ssc-gd"],
  },


];
