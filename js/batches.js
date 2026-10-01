/* ============================================================
   WEDA BATCH REGISTRY — THE SINGLE SOURCE OF TRUTH
   ------------------------------------------------------------
   Two delivery tracks, kept completely separate on the site:
       Offline  — classroom at the Donali Chowk centre
       Online   — live classes on Zoom

   ************************************************************
   ONLY  status: "live"  BATCHES APPEAR ON THE SITE
   ************************************************************
   status: "live"   shown on the site right now
   status: "draft"  parked here for later — NEVER shown
   status: "closed" finished — NEVER shown

   To put a batch on the site:  change "draft" to "live".
   To take it off:              change "live" to "draft".
   Nothing else to do. Nothing is queued, scheduled or
   announced in advance — the site only ever shows what is
   actually running.

   A "live" batch is also hidden automatically once its `ends`
   date has passed, so a finished batch can never linger.

   ------------------------------------------------------------
   NO FEES IN THIS FILE — BY DESIGN
   ------------------------------------------------------------
   Fees are deliberately not stored here, so they can never
   appear on a course page or in a pop-up. Enquiries go to a
   counsellor instead.
   ============================================================ */


/* ============================================================
   POP-UP BEHAVIOUR
   ------------------------------------------------------------
   showEveryVisit  true = opens every time someone lands on a
                   course page. false = once per visitor.
   delaySeconds    Wait before it opens. Keep above 0.8.
   ============================================================ */
window.WEDA_POPUP = {
  showEveryVisit: true,
  delaySeconds: 1.2,
};


window.WEDA_BATCHES = [

  /* ==========================================================
     OFFLINE — CLASSROOM, DONALI CHOWK CENTRE, DEHRADUN
     Five batches, all from the 2026-27 classroom creatives.
     ========================================================== */

  {
    id: "nda-classroom-2026-27",
    course: "nda",
    name: "NDA Batch 2026-27",
    track: "Offline",
    status: "live",
    starts: "2026-09-18",
    ends: "2027-04-30",
    startsLabel: "18 Sept 2026",
    duration: "Till April 2027",
    timing: "4:00 PM - 7:00 PM",
    days: "Monday to Friday",
    weeklyTest: "Every Saturday",
    mode: "Classroom - Dehradun",
    platform: "Donali Chowk centre",
    centre: "Shiv Shakti Tower, Near Donali Chowk, Dehradun",
    validTill: "April 2027",
    seatsNote: "Admissions open - limited seats",
    demo: "Free demo classes: 18 to 30 September 2026",
    headline: "NDA Batch 2026-27 is running",
    pitch: "Classroom batch under Col Amardeep Singh, SM (Retd). Detailed course 1 Oct 2026 to 15 Feb 2027, then a crash course to 5 April 2027.",
  },

  {
    id: "cds-classroom-2026-27",
    course: "cds",
    name: "CDS Batch 2026-27",
    track: "Offline",
    status: "live",
    starts: "2026-09-18",
    ends: "2027-04-30",
    startsLabel: "18 Sept 2026",
    duration: "Till April 2027",
    timing: "9:00 AM - 12:00 PM",
    days: "Monday to Friday",
    weeklyTest: "12 weekly + 4 monthly tests",
    mode: "Classroom - Dehradun",
    platform: "Donali Chowk centre",
    centre: "Shiv Shakti Tower, Near Donali Chowk, Dehradun",
    validTill: "April 2027",
    seatsNote: "Admissions open - limited seats",
    demo: "Free demo classes: 18 to 30 September 2026",
    headline: "CDS Batch 2026-27 is running",
    pitch: "Special classroom batch for CDS aspirants under Col Amardeep Singh, SM (Retd), at the new Donali Chowk centre.",
  },

  {
    id: "rimc-classroom-2026-27",
    course: "rimc",
    name: "RIMC Batch 2026-27",
    track: "Offline",
    status: "live",
    starts: "2026-09-18",
    ends: "2026-12-31",
    startsLabel: "18 Sept 2026",
    duration: "Till December 2026",
    timing: "4:00 PM - 7:00 PM",
    days: "Monday to Friday",
    weeklyTest: "Every Saturday",
    mode: "Classroom - Dehradun",
    platform: "Donali Chowk centre",
    centre: "Shiv Shakti Tower, Near Donali Chowk, Dehradun",
    validTill: "December 2026",
    seatsNote: "Admissions open - limited seats",
    demo: "Free demo classes: 18 to 30 September 2026",
    headline: "RIMC Batch 2026-27 is running",
    pitch: "Complete RIMC course from 1 October to November 2026, then December for revision, mock tests and final preparation.",
  },

  {
    id: "sainik-rms-classroom-2026-27",
    course: "sainik-rms",
    name: "Sainik School & RMS Batch 2026-27",
    track: "Offline",
    status: "live",
    starts: "2026-09-18",
    ends: "2027-01-31",
    startsLabel: "18 Sept 2026",
    duration: "Till January 2027",
    timing: "4:00 PM - 7:00 PM",
    days: "Monday to Friday",
    weeklyTest: "Every Saturday",
    mode: "Classroom - Dehradun",
    platform: "Donali Chowk centre",
    centre: "Shiv Shakti Tower, Near Donali Chowk, Dehradun",
    validTill: "January 2027",
    seatsNote: "Admissions open - limited seats",
    demo: "Free demo classes: 18 to 30 September 2026",
    headline: "One batch, two entrance exams",
    pitch: "Complete course 1 October 2026 to January 2027 - revision, mock tests, final preparation and marathon sessions.",
  },

  {
    id: "ssc-gd-classroom-2026-27",
    course: "ssc-gd",
    name: "SSC GD Batch 2026-27",
    track: "Offline",
    status: "live",
    starts: "2026-09-18",
    ends: "2027-04-30",
    startsLabel: "18 Sept 2026",
    duration: "Till April 2027",
    /* Morning slot, confirmed by WEDA. The SSC GD creative prints
       "9:00 PM - 12:00 AM" — that is a typo in the artwork. */
    timing: "9:00 AM - 12:00 PM",
    days: "Monday to Friday",
    weeklyTest: "12 weekly + 4 monthly tests",
    mode: "Classroom - Dehradun",
    platform: "Donali Chowk centre",
    centre: "Shiv Shakti Tower, Near Donali Chowk, Dehradun",
    validTill: "April 2027",
    seatsNote: "Admissions open - limited seats",
    demo: "Free demo classes: 18 to 30 September 2026",
    headline: "SSC GD Batch 2026-27 is running",
    pitch: "Special classroom batch for SSC GD aspirants. Prepare with the right guidance, discipline and strategy.",
  },


  /* ==========================================================
     ONLINE — LIVE ON ZOOM
     Two batches currently on the site.
     ========================================================== */

  {
    id: "rimc-crash-oct-2026",
    course: "rimc",
    name: "RIMC December 2026 - 2 Month Crash Course",
    track: "Online",
    status: "live",
    starts: "2026-10-01",
    ends: "2026-11-30",
    startsLabel: "1 Oct 2026",
    endsLabel: "30 Nov 2026",
    duration: "1 Oct - 30 Nov 2026",
    timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday",
    weeklyTest: "5 weekly + 1 monthly test",
    mode: "Online - Live on Zoom",
    platform: "Live on Zoom",
    centre: "Live online from Dehradun",
    validTill: "30 November 2026",
    target: "RIMC December 2026 Entrance Exam",
    seatsNote: "Special discounts for existing WEDA students and Armed Forces wards",
    demo: "",
    headline: "RIMC December 2026 crash course",
    pitch: "A two-month online crash course on Zoom, built around the RIMC December 2026 entrance exam.",
  },

  /* Two batches start together on 5 October — Class 6 and Class 9.
     They share everything except the class hour, so they run as one
     announcement with the two timings listed side by side. */

  {
    id: "sainik-rms-online-class6-2027",
    course: "sainik-rms",
    name: "Sainik School 6 & RMS 6 - Online",
    variant: "Class 6",
    track: "Online",
    status: "live",
    starts: "2026-10-05",
    ends: "2027-01-28",
    startsLabel: "5 Oct 2026",
    endsLabel: "28 Jan 2027",
    duration: "5 Oct 2026 - 28 Jan 2027",
    timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday",
    weeklyTest: "9 weekly + 3 monthly tests",
    mode: "Online - Live on Zoom",
    platform: "Live on Zoom",
    centre: "Live online from Dehradun",
    validTill: "28 January 2027",
    target: "RMS Entrance 2027 + AISSEE 2027",
    seatsNote: "Special discounts for existing WEDA students and wards of Armed Forces personnel",
    demo: "",
    headline: "Target 2027 - Sainik School & RMS Online",
    pitch: "An intensive, exam-oriented programme for Class 6 and Class 9 aspirants. RMS entrance preparation first, then a full shift to AISSEE.",
    phases: [
      { when: "5 Oct - 10 Dec 2026", title: "Phase 1 - RMS Entrance", desc: "Concept building, RMS exam-oriented practice, previous year questions, regular tests and exam strategy." },
      { when: "11 Dec 2026 - 28 Jan 2027", title: "Phase 2 - Sainik School (AISSEE)", desc: "AISSEE-focused revision, previous year papers, full-length mock tests and final preparation strategy." },
    ],
    includes: [
      "RMS-focused preparation: 5 Oct to 10 Dec",
      "Sainik School-focused preparation: 11 Dec to 28 Jan",
      "9 Weekly Tests",
      "3 Monthly Performance Tests",
      "10 Previous Years' Question Papers",
      "10 Full-Length Mock Tests",
      "Printed Study Material",
      "Practice Assignments & Worksheets",
      "Recorded Classes for Revision",
      "WEDA Learning App Access",
      "Monthly Parent-Teacher Meetings",
      "Regular Performance Tracking",
      "Personality Development Module",
      "RMS Interview Preparation & Guidance",
      "Documentation Assistance",
      "Daily Class Updates & Zoom Links via WhatsApp",
    ],
  },

  {
    id: "sainik-rms-online-class9-2027",
    course: "sainik-rms",
    name: "Sainik School 9 & RMS 9 - Online",
    variant: "Class 9",
    track: "Online",
    status: "live",
    starts: "2026-10-05",
    ends: "2027-01-28",
    startsLabel: "5 Oct 2026",
    endsLabel: "28 Jan 2027",
    duration: "5 Oct 2026 - 28 Jan 2027",
    timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday",
    weeklyTest: "9 weekly + 3 monthly tests",
    mode: "Online - Live on Zoom",
    platform: "Live on Zoom",
    centre: "Live online from Dehradun",
    validTill: "28 January 2027",
    target: "RMS Entrance 2027 + AISSEE 2027",
    seatsNote: "Special discounts for existing WEDA students and wards of Armed Forces personnel",
    demo: "",
    headline: "Target 2027 - Sainik School & RMS Online",
    pitch: "An intensive, exam-oriented programme for Class 6 and Class 9 aspirants. RMS entrance preparation first, then a full shift to AISSEE.",
    phases: [
      { when: "5 Oct - 10 Dec 2026", title: "Phase 1 - RMS Entrance", desc: "Concept building, RMS exam-oriented practice, previous year questions, regular tests and exam strategy." },
      { when: "11 Dec 2026 - 28 Jan 2027", title: "Phase 2 - Sainik School (AISSEE)", desc: "AISSEE-focused revision, previous year papers, full-length mock tests and final preparation strategy." },
    ],
    includes: [
      "RMS-focused preparation: 5 Oct to 10 Dec",
      "Sainik School-focused preparation: 11 Dec to 28 Jan",
      "9 Weekly Tests",
      "3 Monthly Performance Tests",
      "10 Previous Years' Question Papers",
      "10 Full-Length Mock Tests",
      "Printed Study Material",
      "Practice Assignments & Worksheets",
      "Recorded Classes for Revision",
      "WEDA Learning App Access",
      "Monthly Parent-Teacher Meetings",
      "Regular Performance Tracking",
      "Personality Development Module",
      "RMS Interview Preparation & Guidance",
      "Documentation Assistance",
      "Daily Class Updates & Zoom Links via WhatsApp",
    ],
  },


  /* ==========================================================
     PARKED — NOT ON THE SITE
     ----------------------------------------------------------
     From the WEDA Online Courses 2026-27 fee chart and the
     mock test / marathon series chart. These are here so you
     can switch one on the moment you want it live.

     TO USE ONE: change  status: "draft"  to  status: "live"
     ========================================================== */

  {
    id: "ss6-online-sep24",
    course: "sainik-rms",
    name: "Sainik School Class 6 - Online",
    track: "Online",
    status: "draft",
    starts: "2026-09-24", ends: "2026-12-31",
    startsLabel: "24 Sept 2026", endsLabel: "31 Dec 2026",
    duration: "3 months", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "31 December 2026",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Class 6 online batch", pitch: "Three months of live Sainik School Class 6 preparation on Zoom.",
  },

  {
    id: "rms6-vande-bharat-oct",
    course: "sainik-rms",
    name: "RMS Class 6 Vande Bharat - Online",
    track: "Online",
    status: "draft",
    starts: "2026-10-05", ends: "2026-12-10",
    startsLabel: "5 Oct 2026", endsLabel: "10 Dec 2026",
    duration: "30 + 15 + 15 days", timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday", weeklyTest: "Regular testing",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "10 December 2026",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "RMS Class 6 Vande Bharat", pitch: "A staged online RMS course on Zoom - coverage, then revision, then mocks.",
  },

  {
    id: "rms9-vande-bharat-oct",
    course: "sainik-rms",
    name: "RMS Class 9 Vande Bharat - Online",
    track: "Online",
    status: "draft",
    starts: "2026-10-05", ends: "2026-12-12",
    startsLabel: "5 Oct 2026", endsLabel: "12 Dec 2026",
    duration: "30 + 15 + 15 days", timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday", weeklyTest: "Regular testing",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "12 December 2026",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "RMS Class 9 Vande Bharat", pitch: "The Class 9 lateral entry route, taught online on Zoom in three staged blocks.",
  },

  {
    id: "ss6-online-oct19",
    course: "sainik-rms",
    name: "Sainik School Class 6 - Extended Online",
    track: "Online",
    status: "draft",
    starts: "2026-10-19", ends: "2027-01-30",
    startsLabel: "19 Oct 2026", endsLabel: "30 Jan 2027",
    duration: "3.5 months", timing: "5:00 PM - 7:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "30 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Extended Class 6 online batch", pitch: "Three and a half months of live Class 6 preparation on Zoom.",
  },

  {
    id: "ss6-online-nov2",
    course: "sainik-rms",
    name: "Sainik School Class 6 - Online",
    track: "Online",
    status: "draft",
    starts: "2026-11-02", ends: "2027-01-30",
    startsLabel: "2 Nov 2026", endsLabel: "30 Jan 2027",
    duration: "3 months", timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "30 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Class 6 online batch", pitch: "Three months of live Class 6 preparation on Zoom.",
  },

  {
    id: "ss9-online-nov2",
    course: "sainik-rms",
    name: "Sainik School Class 9 - Online",
    track: "Online",
    status: "draft",
    starts: "2026-11-02", ends: "2027-01-30",
    startsLabel: "2 Nov 2026", endsLabel: "30 Jan 2027",
    duration: "3 months", timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "30 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Class 9 online batch", pitch: "Three months of live Class 9 preparation on Zoom.",
  },

  {
    id: "ss6-online-nov16",
    course: "sainik-rms",
    name: "Sainik School Class 6 - Short Online",
    track: "Online",
    status: "draft",
    starts: "2026-11-16", ends: "2027-01-30",
    startsLabel: "16 Nov 2026", endsLabel: "30 Jan 2027",
    duration: "2.5 months", timing: "5:00 PM - 7:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "30 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Short Class 6 online batch", pitch: "Two and a half months of live Class 6 preparation on Zoom.",
  },

  {
    id: "ss9-online-dec1",
    course: "sainik-rms",
    name: "Sainik School Class 9 - Short Online",
    track: "Online",
    status: "draft",
    starts: "2026-12-01", ends: "2027-01-30",
    startsLabel: "1 Dec 2026", endsLabel: "30 Jan 2027",
    duration: "2 months", timing: "6:00 PM - 8:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "30 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Short Class 9 online batch", pitch: "Two months of focused Class 9 preparation on Zoom.",
  },

  {
    id: "ss6-final-marathon-dec",
    course: "sainik-rms",
    name: "Sainik School Class 6 - Final Marathon",
    track: "Online",
    status: "draft",
    starts: "2026-12-14", ends: "2027-01-28",
    startsLabel: "14 Dec 2026", endsLabel: "28 Jan 2027",
    duration: "45 days", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Full-length mock papers",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "28 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Class 6 final marathon", pitch: "Forty-five days of long-form practice on Zoom before the Class 6 paper.",
  },

  {
    id: "rms-mock-marathon-nov",
    course: "sainik-rms",
    name: "RMS Mock Test + Marathon Series",
    track: "Online",
    status: "draft",
    starts: "2026-11-16", ends: "2026-12-12",
    startsLabel: "16 Nov 2026", endsLabel: "12 Dec 2026",
    duration: "25 days", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Full-length mock papers",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "12 December 2026",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "RMS mock test series", pitch: "Twenty-five days of full-length RMS mock papers in exam conditions.",
  },

  {
    id: "sainik-mock-marathon-jan",
    course: "sainik-rms",
    name: "Sainik School Mock Test + Marathon Series",
    track: "Online",
    status: "draft",
    starts: "2027-01-11", ends: "2027-01-30",
    startsLabel: "11 Jan 2027", endsLabel: "30 Jan 2027",
    duration: "20 days", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Full-length mock papers",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "30 January 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "Sainik School mock series", pitch: "Twenty days of full-length AISSEE mock papers in exam conditions.",
  },

  {
    id: "ss69-oneyear-jan",
    course: "sainik-rms",
    name: "Sainik School 6 & 9 - One Year Course",
    track: "Online",
    status: "draft",
    starts: "2027-01-04", ends: "2027-12-31",
    startsLabel: "4 Jan 2027", endsLabel: "31 Dec 2027",
    duration: "1 year", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "31 December 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "One year course", pitch: "A full year of live Sainik School preparation for Class 6 and Class 9 entry.",
  },

  {
    id: "rimc-mock-marathon-nov",
    course: "rimc",
    name: "RIMC Mock Test + Marathon Series",
    track: "Online",
    status: "draft",
    starts: "2026-11-16", ends: "2026-12-05",
    startsLabel: "16 Nov 2026", endsLabel: "5 Dec 2026",
    duration: "20 days", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Full-length mock papers",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "5 December 2026",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "RIMC mock test series", pitch: "Twenty days of full-length RIMC mock papers in exam conditions.",
  },

  {
    id: "rimc-crash-dec",
    course: "rimc",
    name: "RIMC Crash Course - December",
    track: "Online",
    status: "draft",
    starts: "2026-12-14", ends: "2026-12-31",
    startsLabel: "14 Dec 2026", endsLabel: "31 Dec 2026",
    duration: "2 weeks", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Daily practice",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "31 December 2026",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "RIMC December crash course", pitch: "A two-week final push on Zoom before the paper.",
  },

  {
    id: "rimc-foundation-jan",
    course: "rimc",
    name: "RIMC Foundation - Full Course",
    track: "Online",
    status: "draft",
    starts: "2027-01-04", ends: "2027-06-05",
    startsLabel: "4 Jan 2027", endsLabel: "5 June 2027",
    duration: "5 months", timing: "7:00 PM - 9:00 PM",
    days: "Monday to Friday", weeklyTest: "Weekly tests",
    mode: "Online - Live on Zoom", platform: "Live on Zoom",
    centre: "Live online from Dehradun", validTill: "5 June 2027",
    seatsNote: "Online batch - join from anywhere in India", demo: "",
    headline: "RIMC full course", pitch: "The complete five-month RIMC preparation on Zoom, concept by concept.",
  },

];
