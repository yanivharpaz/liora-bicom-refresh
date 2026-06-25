const treatmentSteps = [
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
];

const trainingHighlights = [
  "קורס אישי ומרוכז בהיקף של 25 שעות",
  "תרגול מעשי עם מקרים אמיתיים",
  "מיועד למטפלים, רופאים ואנשי מקצוע פרא-רפואיים",
  "תעודה בינלאומית של מרכז התדרים בגרמניה",
  "ליווי מקצועי גם לאחר סיום ההכשרה",
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <nav className="top-nav">
          <a href="#about">אודות</a>
          <a href="#method">שיטת הטיפול</a>
          <a href="#training">הכשרת מטפלים</a>
          <a href="#contact">יצירת קשר</a>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Liora Epstein Clinic</p>
          <h1>קליניקה לרפואת תדרים מתקדמת</h1>
          <p className="hero-copy">
            אתר חדש לקליניקה של ליאורה אפשטיין, עם שפה עיצובית עדכנית שמחברת בין
            מקצועיות רפואית, רוגע וחוויה אישית.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              קביעת תור
            </a>
            <a href="#training" className="btn btn-ghost">
              לפרטי ההכשרה
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section section-about" id="about">
          <div>
            <p className="section-kicker">אודות</p>
            <h2>ליאורה אפשטיין</h2>
            <p>
              מאז 1979 ליאורה עוסקת באבחון וטיפול בשיטות תדר מתקדמות, עם ניסיון
              עשיר בעבודה קלינית ובהדרכת מטפלים בארץ ובאירופה.
            </p>
            <p>
              הגישה משלבת ידע רחב ברפואת תדרים עם ראייה הוליסטית של גוף ונפש,
              במטרה לאפשר טיפול מותאם, מדויק ואנושי.
            </p>
          </div>
          <aside className="about-card">
            <h3>תחומי התמחות</h3>
            <ul>
              <li>BICOM Bioresonance Therapy</li>
              <li>BICOMED</li>
              <li>EFT / TENS / Color Therapy</li>
              <li>הדרכת מטפלים וקליניקות</li>
            </ul>
          </aside>
        </section>

        <section className="section section-method" id="method">
          <p className="section-kicker">שיטת הטיפול</p>
          <h2>איך נראה תהליך העבודה בקליניקה?</h2>
          <div className="steps-grid">
            {treatmentSteps.map((step) => (
              <article key={step.title} className="step-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-training" id="training">
          <div>
            <p className="section-kicker">הכשרת מטפלים</p>
            <h2>קורס אישי ללימוד BICOM ו-BICOMED</h2>
            <p>
              מסלול מקצועי ואינטנסיבי למטפלים שמעוניינים להרחיב את ארגז הכלים
              הקליני ולהעמיק באבחון וטיפול מבוססי תדרים.
            </p>
          </div>

          <ul className="training-list">
            {trainingHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section section-contact" id="contact">
          <p className="section-kicker">יצירת קשר</p>
          <h2>נשמח לתאם שיחת היכרות או תור לטיפול</h2>
          <p>
            ניתן לעדכן כאן מספר טלפון, כתובת אימייל וקישור לוואטסאפ בהתאם לפרטי
            הקליניקה העדכניים.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href="mailto:hello@liorabicom.com">
              שליחת אימייל
            </a>
            <a
              className="btn btn-ghost"
              href="https://maps.google.com/?q=Tel+Aviv"
              target="_blank"
              rel="noopener noreferrer"
            >
              הגעה לקליניקה
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
