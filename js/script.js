"use strict";

/* ========================================
   1. TRANSLATIONS
   Semua teks yang ditampilkan kepada pengguna
   dikelompokkan berdasarkan bahasa.
======================================== */

const translations = {
  id: {
    pageTitle: "Praditya | Software Developer",
    pageDescription:
      "Praditya — Software Developer yang berfokus pada pengembangan aplikasi mobile dan web.",

    skipLink: "Lewati ke konten utama",
    logoHomeLabel: "Praditya - Beranda",
    navLabel: "Navigasi utama",
    languageGroupLabel: "Pilih bahasa",
    heroMetaLabel: "Area pengembangan",
    techStackLabel: "Teknologi yang digunakan",

    navHome: "Beranda",
    navProjects: "Proyek",
    navEngineering: "Pendekatan",
    navAbout: "Tentang",
    navContact: "Kontak",

    themeToLight: "Ganti ke mode terang",
    themeToDark: "Ganti ke mode gelap",

    menuOpen: "Buka navigasi",
    menuClose: "Tutup navigasi",

    heroEyebrow: "SOFTWARE DEVELOPER / MOBILE & WEB",
    heroLine1: "Membangun software",
    heroLine2: "dengan",
    heroHighlight: "tujuan.",

    heroDescription:
      "Saya mengembangkan aplikasi mobile dan web dengan perhatian pada fungsionalitas, struktur kode, dan pengalaman pengguna.",

    heroButtonProjects: "Lihat Proyek",
    heroButtonContact: "Hubungi Saya",
    heroMetaLocation: "INDONESIA",

    projectsTitle: "Proyek Pilihan",
    projectsDescription: "Beberapa aplikasi yang pernah saya kembangkan.",

    projectOneDescription:
      "Aplikasi mobile untuk mengekstrak teks dari gambar menggunakan Optical Character Recognition (OCR), melalui kamera atau galeri.",

    projectTwoDescription:
      "Aplikasi presensi siswa berbasis RFID dengan validasi kartu terdaftar, pencegahan presensi ganda, dan pencatatan kehadiran harian.",

    viewSource: "Lihat Source Code",

    engineeringTitle: "Pendekatan Engineering",
    engineeringDescription:
      "Prinsip yang saya gunakan dalam proses pengembangan.",

    engineeringOneTitle: "Problem Solving",
    engineeringOneDescription:
      "Memahami kebutuhan dan mengidentifikasi masalah sebelum menentukan solusi.",

    engineeringTwoTitle: "Code Structure",
    engineeringTwoDescription:
      "Menulis kode yang terorganisasi agar lebih mudah dipahami dan dipelihara.",

    engineeringThreeTitle: "Implementation",
    engineeringThreeDescription:
      "Mengembangkan fitur yang berfungsi sesuai kebutuhan dan tujuan aplikasi.",

    aboutTitle: "Tentang Saya",

    aboutParagraphOne:
      "Saya adalah software developer yang tertarik pada pengembangan aplikasi mobile dan web. Saya berfokus pada pembuatan solusi perangkat lunak yang fungsional dan dapat digunakan.",

    aboutParagraphTwo:
      "Saya juga tertarik pada problem solving, kualitas kode, struktur aplikasi, dan pengembangan kemampuan teknis secara berkelanjutan.",

    detailFocus: "FOKUS",
    detailFocusValue: "Mobile & Web Development",
    detailStack: "TECH STACK",
    detailLocation: "LOKASI",
    detailLocationValue: "Indonesia",

    contactTitle: "Mari membangun sesuatu yang bermanfaat.",
    contactDescription:
      "Punya pertanyaan, ide proyek, atau peluang kolaborasi? Silakan hubungi saya.",

    emailLabel: "Email",

    footerText: "Praditya · Pengembang Perangkat Lunak",
    backToTop: "Kembali ke atas ↑",
  },

  en: {
    pageTitle: "Praditya | Software Developer",
    pageDescription:
      "Praditya — Software Developer focused on mobile and web application development.",

    skipLink: "Skip to main content",
    logoHomeLabel: "Praditya - Home",
    navLabel: "Main navigation",
    languageGroupLabel: "Select language",
    heroMetaLabel: "Development areas",
    techStackLabel: "Technologies used",

    navHome: "Home",
    navProjects: "Projects",
    navEngineering: "Approach",
    navAbout: "About",
    navContact: "Contact",

    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",

    menuOpen: "Open navigation",
    menuClose: "Close navigation",

    heroEyebrow: "SOFTWARE DEVELOPER / MOBILE & WEB",
    heroLine1: "Building software",
    heroLine2: "with",
    heroHighlight: "purpose.",

    heroDescription:
      "I develop mobile and web applications with a focus on functionality, code structure, and user experience.",

    heroButtonProjects: "View Projects",
    heroButtonContact: "Contact Me",
    heroMetaLocation: "INDONESIA",

    projectsTitle: "Selected Projects",
    projectsDescription: "A selection of applications I have developed.",

    projectOneDescription:
      "A mobile application that extracts text from images using Optical Character Recognition (OCR), with camera and gallery input.",

    projectTwoDescription:
      "An RFID-based student attendance application with registered card validation, duplicate attendance prevention, and daily attendance records.",

    viewSource: "View Source Code",

    engineeringTitle: "Engineering Approach",
    engineeringDescription:
      "Principles that guide my software development process.",

    engineeringOneTitle: "Problem Solving",
    engineeringOneDescription:
      "Understanding requirements and identifying problems before deciding on a solution.",

    engineeringTwoTitle: "Code Structure",
    engineeringTwoDescription:
      "Writing organized code that is easier to understand and maintain.",

    engineeringThreeTitle: "Implementation",
    engineeringThreeDescription:
      "Developing functional features based on application requirements and goals.",

    aboutTitle: "About Me",

    aboutParagraphOne:
      "I am a software developer interested in mobile and web application development. My focus is on building functional and usable software solutions.",

    aboutParagraphTwo:
      "I am also interested in problem solving, code quality, application structure, and continuously improving my technical skills.",

    detailFocus: "FOCUS",
    detailFocusValue: "Mobile & Web Development",
    detailStack: "TECH STACK",
    detailLocation: "LOCATION",
    detailLocationValue: "Indonesia",

    contactTitle: "Let's build something useful.",
    contactDescription:
      "Have a question, project idea, or collaboration opportunity? Feel free to contact me.",

    emailLabel: "Email",

    footerText: "Praditya · Software Developer",
    backToTop: "Back to top ↑",
  },

  de: {
    pageTitle: "Praditya | Softwareentwickler",
    pageDescription:
      "Praditya — Softwareentwickler mit Schwerpunkt auf der Entwicklung mobiler und webbasierter Anwendungen.",

    skipLink: "Zum Hauptinhalt springen",
    logoHomeLabel: "Praditya - Startseite",
    navLabel: "Hauptnavigation",
    languageGroupLabel: "Sprache auswählen",
    heroMetaLabel: "Entwicklungsbereiche",
    techStackLabel: "Verwendete Technologien",

    navHome: "Startseite",
    navProjects: "Projekte",
    navEngineering: "Arbeitsweise",
    navAbout: "Über mich",
    navContact: "Kontakt",

    themeToLight: "Zum hellen Design wechseln",
    themeToDark: "Zum dunklen Design wechseln",

    menuOpen: "Navigation öffnen",
    menuClose: "Navigation schließen",

    heroEyebrow: "SOFTWAREENTWICKLER / MOBILE & WEB",
    heroLine1: "Software entwickeln",
    heroLine2: "mit",
    heroHighlight: "Ziel.",

    heroDescription:
      "Ich entwickle mobile und webbasierte Anwendungen mit Fokus auf Funktionalität, Code-Struktur und Benutzerfreundlichkeit.",

    heroButtonProjects: "Projekte ansehen",
    heroButtonContact: "Kontakt aufnehmen",
    heroMetaLocation: "INDONESIEN",

    projectsTitle: "Ausgewählte Projekte",
    projectsDescription:
      "Eine Auswahl der Anwendungen, die ich entwickelt habe.",

    projectOneDescription:
      "Eine mobile Anwendung zur Texterkennung aus Bildern mithilfe von Optical Character Recognition (OCR), mit Kamera- und Galerieeingabe.",

    projectTwoDescription:
      "Eine RFID-basierte Anwesenheitsverwaltung für Schüler mit Kartenvalidierung, Vermeidung doppelter Einträge und täglichen Anwesenheitsdaten.",

    viewSource: "Quellcode ansehen",

    engineeringTitle: "Entwicklungsansatz",
    engineeringDescription:
      "Grundsätze, die meinen Entwicklungsprozess leiten.",

    engineeringOneTitle: "Problemlösung",
    engineeringOneDescription:
      "Anforderungen verstehen und Probleme erkennen, bevor eine Lösung festgelegt wird.",

    engineeringTwoTitle: "Code-Struktur",
    engineeringTwoDescription:
      "Strukturierten Code schreiben, der leichter verständlich und wartbar ist.",

    engineeringThreeTitle: "Implementierung",
    engineeringThreeDescription:
      "Funktionen entwickeln, die den Anforderungen und Zielen der Anwendung entsprechen.",

    aboutTitle: "Über mich",

    aboutParagraphOne:
      "Ich bin Softwareentwickler mit Interesse an der Entwicklung mobiler und webbasierter Anwendungen. Mein Fokus liegt auf funktionalen und benutzerfreundlichen Softwarelösungen.",

    aboutParagraphTwo:
      "Außerdem interessiere ich mich für Problemlösung, Codequalität, Anwendungsstruktur und die kontinuierliche Weiterentwicklung meiner technischen Fähigkeiten.",

    detailFocus: "SCHWERPUNKT",
    detailFocusValue: "Mobile & Webentwicklung",
    detailStack: "TECHNOLOGIEN",
    detailLocation: "STANDORT",
    detailLocationValue: "Indonesien",

    contactTitle: "Lass uns etwas Sinnvolles entwickeln.",
    contactDescription:
      "Hast du eine Frage, eine Projektidee oder eine Möglichkeit zur Zusammenarbeit? Schreib mir gerne.",

    emailLabel: "E-Mail",

    footerText: "Praditya · Softwareentwickler",
    backToTop: "Nach oben ↑",
  },
};

/* ========================================
   2. DOM REFERENCES
   Elemen HTML yang digunakan berulang kali
   disimpan agar tidak perlu dicari berkali-kali.
======================================== */

const root = document.documentElement;

const languageButtons = document.querySelectorAll(".language-btn");

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const descriptionMeta = document.querySelector('meta[name="description"]');

const ogTitleMeta = document.querySelector('meta[property="og:title"]');

const ogDescriptionMeta = document.querySelector(
  'meta[property="og:description"]',
);

const themeColorMeta = document.querySelector('meta[name="theme-color"]');

/* ========================================
   3. SAFE STORAGE
   localStorage menyimpan preferensi pengguna
   agar tetap digunakan saat halaman dibuka lagi.
======================================== */

function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    // Bisa terjadi jika browser membatasi akses penyimpanan.
    return null;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Website tetap berfungsi meskipun preferensi tidak tersimpan.
  }
}

/* ========================================
   4. LANGUAGE SWITCHER
======================================== */

let currentLanguage = "id";

/**
 * Mengubah seluruh teks dan label aksesibilitas
 * berdasarkan bahasa yang dipilih.
 */
function setLanguage(language, savePreference = true) {
  const selectedLanguage = translations[language];

  // Abaikan bahasa yang tidak tersedia.
  if (!selectedLanguage) {
    return;
  }

  currentLanguage = language;
  root.lang = language;

  // Mengubah teks pada elemen yang memiliki data-i18n.
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = selectedLanguage[key];

    if (typeof translatedText === "string") {
      element.textContent = translatedText;
    }
  });

  // Mengubah label aksesibilitas tanpa mengubah teks visual.
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const translatedText = selectedLanguage[key];

    if (typeof translatedText === "string") {
      element.setAttribute("aria-label", translatedText);
    }
  });

  // Menandai bahasa yang sedang aktif pada tombol pilihan.
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  // Metadata juga diperbarui agar sesuai dengan bahasa halaman.
  document.title = selectedLanguage.pageTitle;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", selectedLanguage.pageDescription);
  }

  if (ogTitleMeta) {
    ogTitleMeta.setAttribute("content", selectedLanguage.pageTitle);
  }

  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute("content", selectedLanguage.pageDescription);
  }

  // Label tombol harus mengikuti bahasa yang sedang aktif.
  updateThemeLabel();
  updateMenuLabel();

  if (savePreference) {
    writeStorage("portfolio-language", language);
  }
}

// Setiap tombol bahasa memanggil fungsi yang sama.
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

/* ========================================
   5. THEME SWITCHER
======================================== */

/**
 * Mengatur tema website dan memperbarui ikon,
 * label aksesibilitas, serta warna browser.
 */
function setTheme(theme, savePreference = true) {
  const selectedTheme = theme === "light" ? "light" : "dark";

  root.dataset.theme = selectedTheme;

  if (themeIcon) {
    themeIcon.textContent = selectedTheme === "dark" ? "☀" : "☾";
  }

  updateThemeLabel();

  if (themeColorMeta) {
    themeColorMeta.setAttribute(
      "content",
      selectedTheme === "dark" ? "#101522" : "#f3f5f9",
    );
  }

  if (savePreference) {
    writeStorage("portfolio-theme", selectedTheme);
  }
}

/**
 * Label tombol menjelaskan tema tujuan,
 * bukan tema yang sedang digunakan.
 */
function updateThemeLabel() {
  if (!themeToggle) {
    return;
  }

  const key = root.dataset.theme === "dark" ? "themeToLight" : "themeToDark";

  const label = translations[currentLanguage][key];

  if (label) {
    themeToggle.setAttribute("aria-label", label);
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.dataset.theme;

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
  });
}

/* ========================================
   6. MOBILE NAVIGATION
======================================== */

/**
 * Memperbarui label tombol menu berdasarkan
 * kondisi terbuka atau tertutup.
 */
function updateMenuLabel() {
  if (!menuToggle) {
    return;
  }

  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  const key = isOpen ? "menuClose" : "menuOpen";
  const label = translations[currentLanguage][key];

  if (label) {
    menuToggle.setAttribute("aria-label", label);
  }
}

/**
 * Menutup menu dan, jika diminta, mengembalikan
 * fokus keyboard ke tombol pembuka menu.
 */
function closeMenu(returnFocus = false) {
  if (!menuToggle || !navLinks) {
    return;
  }

  navLinks.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");

  updateMenuLabel();

  if (returnFocus) {
    menuToggle.focus();
  }
}

if (menuToggle && navLinks) {
  // Membuka atau menutup menu ketika tombol diklik.
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
      return;
    }

    navLinks.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");

    updateMenuLabel();
  });

  // Menu otomatis tertutup setelah pengguna memilih navigasi.
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Klik di luar menu akan menutup navigasi.
  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (!clickedInsideMenu && !clickedToggle && isOpen) {
      closeMenu();
    }
  });

  // Tombol Escape menutup menu dan mengembalikan fokus.
  document.addEventListener("keydown", (event) => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    if (event.key === "Escape" && isOpen) {
      closeMenu(true);
    }
  });

  // Menu mobile tidak boleh tertinggal dalam keadaan terbuka
  // ketika ukuran layar berubah ke tampilan desktop.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });
}

/* ========================================
   7. RESTORE PREFERENCES
   Jalankan setelah semua fungsi dan event
   listener selesai disiapkan.
======================================== */

const savedLanguage = readStorage("portfolio-language");
const savedTheme = readStorage("portfolio-theme");

// Gunakan bahasa Indonesia jika belum ada preferensi
// atau nilai penyimpanan tidak dikenali.
const initialLanguage =
  savedLanguage && translations[savedLanguage] ? savedLanguage : "id";

// Tema gelap menjadi pilihan awal.
const initialTheme = savedTheme === "light" ? "light" : "dark";

// Parameter false mencegah penulisan ulang ke storage
// saat hanya memulihkan preferensi yang sudah ada.
setLanguage(initialLanguage, false);
setTheme(initialTheme, false);
