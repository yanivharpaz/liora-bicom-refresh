"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = "he" | "en" | "de";

const languageLabels: Record<Lang, string> = {
  he: "עברית",
  en: "English",
  de: "Deutsch",
};

const content: Record<
  Lang,
  {
    nav: { about: string; method: string; training: string; contact: string };
    eyebrow: string;
    heroTitle: string;
    heroCopy: string;
    ctaPrimary: string;
    ctaSecondary: string;
    aboutKicker: string;
    aboutTitle: string;
    portraitAlt: string;
    portraitCaption: string;
    aboutText1: string;
    aboutText2: string;
    expertiseTitle: string;
    expertiseList: string[];
    methodKicker: string;
    methodTitle: string;
    treatmentSteps: { title: string; text: string }[];
    trainingKicker: string;
    trainingTitle: string;
    trainingText: string;
    trainingHighlights: string[];
    contactKicker: string;
    contactTitle: string;
    contactText: string;
    contactEmail: string;
    contactMap: string;
  }
> = {
  he: {
    nav: {
      about: "אודות",
      method: "שיטת הטיפול",
      training: "הכשרת מטפלים",
      contact: "יצירת קשר",
    },
    eyebrow: "Liora Epstein Clinic",
    heroTitle: "קליניקה לרפואת תדרים מתקדמת",
    heroCopy:
      "אתר חדש לקליניקה של ליאורה אפשטיין, עם שפה עיצובית עדכנית שמחברת בין מקצועיות רפואית, רוגע וחוויה אישית.",
    ctaPrimary: "קביעת תור",
    ctaSecondary: "לפרטי ההכשרה",
    aboutKicker: "אודות",
    aboutTitle: "ליאורה אפשטיין",
    portraitAlt: "ליאורה אפשטיין",
    portraitCaption: "ליאורה אפשטיין - קליניקה לרפואת תדרים מתקדמת",
    aboutText1:
      "מאז 1979 ליאורה עוסקת באבחון וטיפול בשיטות תדר מתקדמות, עם ניסיון עשיר בעבודה קלינית ובהדרכת מטפלים בארץ ובאירופה.",
    aboutText2:
      "הגישה משלבת ידע רחב ברפואת תדרים עם ראייה הוליסטית של גוף ונפש, במטרה לאפשר טיפול מותאם, מדויק ואנושי.",
    expertiseTitle: "תחומי התמחות",
    expertiseList: [
      "BICOM Bioresonance Therapy",
      "BICOMED",
      "EFT / TENS / Color Therapy",
      "הדרכת מטפלים וקליניקות",
    ],
    methodKicker: "שיטת הטיפול",
    methodTitle: "איך נראה תהליך העבודה בקליניקה?",
    treatmentSteps: [
      {
        title: "תשאול והבנה מעמיקה",
        text: "מתחילים בהקשבה לסיפור האישי, להיסטוריה הרפואית ולמה שהגוף מאותת עכשיו.",
      },
      {
        title: "סריקה ואבחון תדרים",
        text: "באמצעות מערכות BICOM ו-BICOMED מאתרים עומסים, חסרים וגורמים מפריעים.",
      },
      {
        title: "איזון מותאם אישית",
        text: "בונים תהליך עדין ומדורג שמסייע לגוף לחזור לאיזון אנרגטי ותפקודי.",
      },
      {
        title: "ליווי מתמשך",
        text: "התכנית מותאמת לאורך הדרך עם הנחיות ותמיכה כדי לשמור על תוצאות לאורך זמן.",
      },
    ],
    trainingKicker: "הכשרת מטפלים",
    trainingTitle: "קורס אישי ללימוד BICOM ו-BICOMED",
    trainingText:
      "מסלול מקצועי ואינטנסיבי למטפלים שמעוניינים להרחיב את ארגז הכלים הקליני ולהעמיק באבחון וטיפול מבוססי תדרים.",
    trainingHighlights: [
      "קורס אישי ומרוכז בהיקף של 25 שעות",
      "תרגול מעשי עם מקרים אמיתיים",
      "מיועד למטפלים, רופאים ואנשי מקצוע פרא-רפואיים",
      "תעודה בינלאומית של מרכז התדרים בגרמניה",
      "ליווי מקצועי גם לאחר סיום ההכשרה",
    ],
    contactKicker: "יצירת קשר",
    contactTitle: "נשמח לתאם שיחת היכרות או תור לטיפול",
    contactText:
      "ניתן לעדכן כאן מספר טלפון, כתובת אימייל וקישור לוואטסאפ בהתאם לפרטי הקליניקה העדכניים.",
    contactEmail: "שליחת אימייל",
    contactMap: "הגעה לקליניקה",
  },
  en: {
    nav: {
      about: "About",
      method: "Treatment Method",
      training: "Practitioner Training",
      contact: "Contact",
    },
    eyebrow: "Liora Epstein Clinic",
    heroTitle: "Advanced Frequency Medicine Clinic",
    heroCopy:
      "A refreshed website for Liora Epstein's clinic, combining medical professionalism, calm aesthetics, and personal care.",
    ctaPrimary: "Book Appointment",
    ctaSecondary: "View Training",
    aboutKicker: "About",
    aboutTitle: "Liora Epstein",
    portraitAlt: "Liora Epstein",
    portraitCaption: "Liora Epstein - Advanced Frequency Medicine Clinic",
    aboutText1:
      "Since 1979, Liora has specialized in advanced frequency-based diagnostics and treatment, with extensive clinical and teaching experience in Israel and Europe.",
    aboutText2:
      "Her approach combines deep knowledge of frequency medicine with a holistic body-mind perspective, enabling precise and compassionate care.",
    expertiseTitle: "Areas of Expertise",
    expertiseList: [
      "BICOM Bioresonance Therapy",
      "BICOMED",
      "EFT / TENS / Color Therapy",
      "Practitioner and clinic training",
    ],
    methodKicker: "Treatment Method",
    methodTitle: "What does the clinic process look like?",
    treatmentSteps: [
      {
        title: "In-depth Consultation",
        text: "We begin by understanding your history, current symptoms, and the personal context behind them.",
      },
      {
        title: "Frequency Scan & Analysis",
        text: "Using BICOM and BICOMED, we identify stressors, deficiencies, and interfering factors.",
      },
      {
        title: "Personalized Balancing",
        text: "A gentle, tailored process supports the body in restoring energetic and functional balance.",
      },
      {
        title: "Ongoing Guidance",
        text: "The program evolves with your progress and includes support to help sustain long-term outcomes.",
      },
    ],
    trainingKicker: "Practitioner Training",
    trainingTitle: "Personal Intensive Course in BICOM & BICOMED",
    trainingText:
      "A focused professional track for practitioners who want to expand their clinical toolbox and deepen frequency-based diagnostics and treatment skills.",
    trainingHighlights: [
      "25-hour personal intensive format",
      "Hands-on practice with real clinical scenarios",
      "Designed for practitioners, physicians, and allied professionals",
      "International certificate from the German frequency center",
      "Professional guidance after course completion",
    ],
    contactKicker: "Contact",
    contactTitle: "Let's schedule a consultation or treatment appointment",
    contactText:
      "Phone, email, and WhatsApp details can be updated here according to the clinic's latest contact information.",
    contactEmail: "Send Email",
    contactMap: "Clinic Location",
  },
  de: {
    nav: {
      about: "Uber Liora",
      method: "Behandlungsmethode",
      training: "Therapeuten-Ausbildung",
      contact: "Kontakt",
    },
    eyebrow: "Liora Epstein Klinik",
    heroTitle: "Klinik fur fortgeschrittene Frequenzmedizin",
    heroCopy:
      "Eine moderne Website fur die Klinik von Liora Epstein, die medizinische Professionalitat, Ruhe und personliche Betreuung verbindet.",
    ctaPrimary: "Termin buchen",
    ctaSecondary: "Ausbildung ansehen",
    aboutKicker: "Uber Liora",
    aboutTitle: "Liora Epstein",
    portraitAlt: "Liora Epstein",
    portraitCaption: "Liora Epstein - Klinik fur fortgeschrittene Frequenzmedizin",
    aboutText1:
      "Seit 1979 arbeitet Liora mit fortgeschrittenen frequenzbasierten Diagnose- und Behandlungsmethoden und verfugt uber umfangreiche klinische und didaktische Erfahrung in Israel und Europa.",
    aboutText2:
      "Ihr Ansatz verbindet fundiertes Wissen in der Frequenzmedizin mit einer ganzheitlichen Sicht auf Korper und Psyche - fur prazise und menschliche Betreuung.",
    expertiseTitle: "Fachgebiete",
    expertiseList: [
      "BICOM Bioresonance Therapy",
      "BICOMED",
      "EFT / TENS / Color Therapy",
      "Schulung von Therapeuten und Kliniken",
    ],
    methodKicker: "Behandlungsmethode",
    methodTitle: "Wie sieht der Ablauf in der Klinik aus?",
    treatmentSteps: [
      {
        title: "Ausfuhrliche Anamnese",
        text: "Zu Beginn erfassen wir Vorgeschichte, aktuelle Beschwerden und den personlichen Kontext.",
      },
      {
        title: "Frequenz-Scan & Analyse",
        text: "Mit BICOM und BICOMED werden Belastungen, Mangel und storende Faktoren identifiziert.",
      },
      {
        title: "Individuelle Balance",
        text: "Ein sanfter, individueller Prozess unterstutzt den Korper bei der Wiederherstellung von Gleichgewicht.",
      },
      {
        title: "Kontinuierliche Begleitung",
        text: "Der Plan wird laufend angepasst und durch Begleitung fur langfristige Stabilitat erganzt.",
      },
    ],
    trainingKicker: "Therapeuten-Ausbildung",
    trainingTitle: "Intensivkurs in BICOM und BICOMED",
    trainingText:
      "Ein professioneller, kompakter Kurs fur Therapeuten, die ihr klinisches Spektrum erweitern und frequenzbasierte Diagnostik vertiefen mochten.",
    trainingHighlights: [
      "25-stundiges, personliches Intensivformat",
      "Praxisnahes Training mit realen Fallen",
      "Fur Therapeuten, Arzte und medizinische Fachberufe",
      "Internationales Zertifikat des Frequenzzentrums in Deutschland",
      "Fachliche Begleitung auch nach Kursende",
    ],
    contactKicker: "Kontakt",
    contactTitle: "Vereinbaren Sie ein Erstgesprach oder einen Behandlungstermin",
    contactText:
      "Telefon, E-Mail und WhatsApp konnen hier entsprechend den aktuellen Klinikdaten aktualisiert werden.",
    contactEmail: "E-Mail senden",
    contactMap: "Zur Klinik",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");
  const c = content[lang];
  const direction = lang === "he" ? "rtl" : "ltr";

  return (
    <div className="site-shell" dir={direction} lang={lang}>
      <header className="hero" id="top">
        <div className="language-switch" role="group" aria-label="Language selector">
          {(Object.keys(languageLabels) as Lang[]).map((code) => (
            <button
              key={code}
              type="button"
              className={`lang-btn${lang === code ? " active" : ""}`}
              onClick={() => setLang(code)}
            >
              {languageLabels[code]}
            </button>
          ))}
        </div>

        <nav className="top-nav">
          <a href="#about">{c.nav.about}</a>
          <a href="#method">{c.nav.method}</a>
          <a href="#training">{c.nav.training}</a>
          <a href="#contact">{c.nav.contact}</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.heroTitle}</h1>
          <p className="hero-copy">{c.heroCopy}</p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              {c.ctaPrimary}
            </a>
            <a href="#training" className="btn btn-ghost">
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-about" id="about">
          <div>
            <p className="section-kicker">{c.aboutKicker}</p>
            <h2>{c.aboutTitle}</h2>
            <figure className="portrait-wrap">
              <Image
                src="/liora-epstein.jpg"
                alt={c.portraitAlt}
                width={900}
                height={600}
                className="portrait-image"
                priority
              />
              <figcaption>{c.portraitCaption}</figcaption>
            </figure>
            <p>{c.aboutText1}</p>
            <p>{c.aboutText2}</p>
          </div>
          <aside className="about-card">
            <h3>{c.expertiseTitle}</h3>
            <ul>
              {c.expertiseList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="section section-method" id="method">
          <p className="section-kicker">{c.methodKicker}</p>
          <h2>{c.methodTitle}</h2>
          <div className="steps-grid">
            {c.treatmentSteps.map((step) => (
              <article key={step.title} className="step-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-training" id="training">
          <div>
            <p className="section-kicker">{c.trainingKicker}</p>
            <h2>{c.trainingTitle}</h2>
            <p>{c.trainingText}</p>
          </div>

          <ul className="training-list">
            {c.trainingHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section section-contact" id="contact">
          <p className="section-kicker">{c.contactKicker}</p>
          <h2>{c.contactTitle}</h2>
          <p>{c.contactText}</p>

          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:hello@liorabicom.com">
              {c.contactEmail}
            </a>
            <a
              className="btn btn-ghost"
              href="https://maps.google.com/?q=Tel+Aviv"
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.contactMap}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
