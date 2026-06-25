import type { Metadata } from "next";
import { Alef, Assistant } from "next/font/google";
import "./globals.css";

const alef = Alef({
  variable: "--font-alef",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ליאורה אפשטיין | רפואת תדרים מתקדמת",
  description:
    "האתר הרשמי של ליאורה אפשטיין: טיפול ב-BICOM, הכשרת מטפלים ושירותי רפואת תדרים מתקדמת.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${alef.variable} ${assistant.variable}`}>
      <body style={{ fontFamily: "var(--font-assistant), sans-serif" }}>{children}</body>
    </html>
  );
}
