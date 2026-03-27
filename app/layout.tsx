import type { Metadata } from "next";
import { Epilogue, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Epilogue({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Gonzalez",
  description: "Full Stack Developer and Software Engineering Student from Baja California, Mexico. Passionate about emerging technologies and software development.",
  keywords: ["Kevin Gonzalez", "Full Stack Developer", "Software Engineering Student", "Baja California", "Mexico", "Emerging Technologies", "Software Development"],
  authors: [{ name: "Kevin Gonzalez", url: "https://kewvy.dev" }],
  creator: "Kevin Gonzalez",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Kevin Gonzalez",
    description: "Full Stack Developer and Software Engineering Student from Baja California, Mexico. Passionate about emerging technologies and software development.",
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
