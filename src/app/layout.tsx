// src/app/layout.tsx
import "@/styles/globals.css";

import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  Montserrat,
  Raleway
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

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Seena | Reset Your Body, Mind, and Soul",
  description: "Seena | Reset Your Body, Mind, and Soul",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Seena | Reset Your Body, Mind, and Soul",
    description: "Seena | Reset Your Body, Mind, and Soul",
    images: "/og-image.png",
  },
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
          raleway.variable,
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
