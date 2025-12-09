// src/app/layout.tsx
import "@/styles/globals.css";

import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  Montserrat,
} from "next/font/google";
import ThemeRegistry from "@/components/layout/themeRegistry";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Seena",
  description: "Seena",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={[
          // default font for the whole app
          bricolageGrotesque.className,
          // expose all variables so we can use them in MUI `sx`
          bricolageGrotesque.variable,
          inter.variable,
          montserrat.variable,
        ].join(" ")}
      >
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
