// src/app/layout.tsx
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

/* Create a CSS variable we can use in global styles */
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-base",
});

export const metadata: Metadata = {
  title: "Your Name — EE Portfolio",
  description: "Projects in embedded, power, RF, robotics, FPGA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={robotoMono.variable}>
      <body>{children}</body>
    </html>
  );
}
