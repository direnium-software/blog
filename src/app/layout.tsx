import React from "react";
import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/all.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "../../public/styles/style.css";
import "../../public/styles/responsive.css";
import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";

// For all body text font
const inter = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-text",
  display: "swap",
});

// For all heading fontr
const saira = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Direnium - React Nextjs Multipurpose Startup & Digital Agency Template",
  description: "React Nextjs Multipurpose Startup & Digital Agency Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${saira.variable}`}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
