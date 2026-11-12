export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href?: string }[];
};

/**
 * Labels mirror the original menu. Entries without an `href` are intentionally
 * inert, so nothing navigates away to the live uonmdy.edu.mm site.
 */

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "University",
    children: [
      { label: "Aim and Objectives" },
      { label: "History of University" },
      { label: "Vision and Mission" },
      { label: "Organogram" },
      { label: "Campus" },
      { label: "Library" },
      { label: "Foreward by Rector" },
    ],
  },
  {
    label: "Faculty",
    children: [
      { label: "Administrative" },
      { label: "Academic" },
    ],
  },
  {
    label: "Study",
    children: [
      { label: "Courses and Eligibility" },
      { label: "Teaching Hospitals" },
      { label: "Research" },
      { label: "Statistics" },
      { label: "Field Area" },
    ],
  },
  {
    label: "Departments",
    children: [
      { label: "Myanmar" },
      { label: "English" },
      { label: "Physics" },
      { label: "Chemistry" },
      { label: "Human Biology (Physiology and Anatomy)" },
      { label: "Pathology" },
      { label: "Microbiology" },
      { label: "Pharmacology" },
      { label: "Biochemistry" },
      { label: "Fundamental Nursing" },
      { label: "Community Health Nursing" },
      { label: "Maternal and Child Health Nursing" },
      { label: "Adult Health Nursing" },
      { label: "Mental Health Nursing" },
    ],
  },
  {
    label: "Activities",
    children: [
      { label: "News" },
      { label: "Announcement" },
      { label: "Seminars and Workshops" },
    ],
  },
  { label: "Gallery" },
  { label: "Contact us" },
];

export const slides = [
  {
    image: "/images/slides/1.jpg",
    title: "Welcome to our University",
    description: "",
  },
  {
    image: "/images/slides/2.jpg",
    title: "Foreward By Rector",
    description:
      "Welcome to our University of Nursing, Mandalay. It was established since November 1998 ....",
  },
  {
    image: "/images/slides/3.jpg",
    title: "Taw Win Thazin Hall",
    description: "",
  },
  {
    image: "/images/slides/4.jpg",
    title: "NEW MAIN SIX-STOREYED BUILDING",
    description: "",
  },
];

export const announcements = [
  {
    title:
      "ကျန်းမာရေးလူ့စွမ်းအားအရင်းအမြစ်ဦးစီးဌာန၊ သူနာပြုတက္ကသိုလ်-မန္တလေး၊ ၂၀၂၇-ပညာသင်နှစ် အတွက် သူနာပြုသိပ္ပံ(ပေါင်းကူး) B.N.Sc (Bridge) On-Campus...",
  },
  {
    title:
      "ကျန်းမာရေးလူ့စွမ်းအားအရင်းအမြစ်ဦးစီးဌာန၊ သူနာပြုတက္ကသိုလ်-မန္တလေး၊ ၂၀၂၇-ပညာသင်နှစ်အတွက် အထူးပြုသူနာပြုဒီပလိုမာ(၉)လသင်တန်းများ လျှောက်လွှာခေါ်ယူခြင်း",
  },
  {
    title:
      "သူနာပြုတက္ကသိုလ်၊ မန္တလေး (၂၃) ကြိမ်မြောက်နှင့် (၂၄)ကြိမ်မြောက် ဘွဲ့နှင်းသဘင်လျှောက်လွှာခေါ်ယူခြင်း",
  },
  {
    title:
      "သူနာပြုတက္ကသိုလ်-မန္တလေး၌ ၂၀၂၆-ခုနှစ်၊ဇန်နဝါရီလ(၅)ရက်နေ့တွင် ဖွင့်လှစ်မည့် သူနာပြုသိပ္ပံဘွဲ့(ပုံမှန်)သင်တန်းများ ဖွင့်လှစ်မည့်ရက်ကြေညာခြင်း",
  },
  {
    title:
      "သူနာပြုတက္ကသိုလ်-မန္တလေး၌ ၂၀၂၆-ပညာသင်နှစ်အတွက် ဖွင့်လှစ်မည့် အထူးသူနာပြုဒီပလိုမာ (၉)လသင်တန်း တက်ရောက်ခွင့်ရရှိသူများ၏ အမည်စာရင်း",
  },
  {
    title:
      "သူနာပြုတက္ကသိုလ်-မန္တလေး၌ ၂၀၂၆-ပညာသင်နှစ် အတွက် ဖွင့်လှစ်မည့် သူနာပြုသိပ္ပံဘွဲ့ (ပေါင်းကူး) B.N.Sc (Bridge)...",
  },
  {
    title:
      "ဆေးဝါးတက္ကသိုလ်များ၊ ဆေးဘက်ဆိုင်ရာနည်းပညာတက္ကသိုလ်များ၊ သူနာပြုတက္ကသိုလ်များနှင့် အခြေခံကျန်းမာရေးတက္ကသိုလ်၊ မကွေးတို့၏ အတန်းသစ်များဖွင့်လှစ်မည့်အစီအစဉ်",
  },
  {
    title:
      "၂၀၂၆ ပညာသင်နှစ်တွင် သူနာပြုတက္ကသိုလ်-မန္တလေး၌ တက်ရောက်မည့် ပထမနှစ်သူနာပြုသိပ္ပံဘွဲ့(ပုံမှန်) ကျောင်းသား/သူများ အပါအဝင် သင်တန်းသား/သူများအားလုံးအား...",
  },
  {
    title:
      "သူနာပြုတက္ကသိုလ်-မန္တလေး၌ ၂၀၂၆ ပညာသင်နှစ် အတွက် ဖွင့်လှစ်မည့် သူနာပြုသိပ္ပံဘွဲ့ (ပေါင်းကူး) B.N.Sc...",
  },
  {
    title:
      "သူနာပြုတက္ကသိုလ်-မန္တလေး၌ ၂၀၂၆ ပညာသင်နှစ် အတွက် ဖွင့်လှစ်မည့် အထူးသူနာပြုဒီပလိုမာ (၉)လသင်တန်း၏ ဝင်ခွင့်အရည်အချင်းစစ်...",
  },
  {
    title:
      "(၂၀၂၅) ခုနှစ်တွင် တက္ကသိုလ်ဝင်စာမေးပွဲကို STEAMS-1 (ဓာတုဗေဒ၊ ရူပဗေဒ၊ ဇီဝဗေဒ) ဘာသာတွဲ...",
  },
  {
    title:
      "(၂၀၂၅) ခုနှစ်တွင် တက္ကသိုလ်ဝင်စာမေးပွဲကို STEAMS-1 (ဓာတုဗေဒ၊ ရူပဗေဒ၊ ဇီဝဗေဒ) ဘာသာတွဲ...",
  },
];

export const latestNews = [
  {
    image: "/images/news/1.jpg",
    title: "2026 Rector Cup, University of Nursing,Mandalay, 8 August to 15 August, 2026",
  },
  {
    image: "/images/news/2.jpg",
    title:
      "Official visit to Shinawatra Internal University (SIU) from the University of Nursing, Mandalay, Myanmar",
  },
  {
    image: "/images/news/3.jpg",
    title: "သူနာပြုတက္ကသိုလ်၊ မန္တလေး (၂၃)ကြိမ်နှင့် (၂၄)ကြိမ်မြော...",
  },
];

export const newsPagination = ["[1]>", "[2]>", "[3]>", "[4]", ">>"];

export const rectors = [
  { image: "/images/rectors/1.jpg", name: "Prof. Dr. Khin Win Sein", period: "(2020 to date)" },
  { image: "/images/rectors/2.jpg", name: "Prof. Dr. Khin Thet Wai", period: "(2016-2020)" },
  { image: "/images/rectors/3.png", name: "Prof. Dr. Thida", period: "(2015-2016)" },
  { image: "/images/rectors/4.png", name: "Prof. Dr. Mar Lar Win", period: "(2009-2014)" },
  { image: "/images/rectors/5.jpg", name: "Prof. Dr. Khin Nyunt Than", period: "(1998-2009)" },
];

export const mostRead = [
  "Contact (updated)",
  "Teaching Faculties (Community Health Nursing)",
  "Covid 19 prevention by Celebirties",
  "Teaching Faculties (Myanmar)",
  "Teaching Faculties (Maternal And Child Health Nursing)",
];

export const visitorStats = {
  all: 1022460,
  today: 672,
  yesterday: 1325,
  thisWeek: 5283,
  thisMonth: 15546,
  ip: "103.27.119.74",
  datetime: "2026-11-12 14:09",
};

export const galleryImages = Array.from({ length: 62 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

export const campusStats = [
  { value: 131, label: "Current Teaching Staff" },
  { value: 95, label: "Current Office Staff" },
  { value: 1231, label: "Under Graduate Students" },
  { value: 97, label: "Post Graduate Students" },
  { value: 4875, label: "Graduates" },
];
