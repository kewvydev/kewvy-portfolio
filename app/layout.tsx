import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const headingFont = localFont({
  src: "./fonts/Anton-Regular.ttf",
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = localFont({
  src: "./fonts/DM-Sans-Variable.ttf",
  weight: "100 1000",
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Gonzalez",
  description:
    "Full Stack Developer and Software Engineering student in Baja California, Mexico. Projects, experience, and contact.",
  keywords: [
    "Kevin Gonzalez",
    "Full Stack Developer",
    "Software Engineering Student",
    "Baja California",
    "Mexico",
    "Emerging Technologies",
    "Software Development",
  ],
  authors: [{ name: "Kevin Gonzalez", url: "https://kewvy.dev" }],
  creator: "Kevin Gonzalez",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Kevin Gonzalez",
    description:
      "Full Stack Developer and Software Engineering student in Baja California, Mexico. Projects, experience, and contact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
