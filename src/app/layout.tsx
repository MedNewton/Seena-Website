import "@/styles/globals.css";

import { type Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import ThemeRegistry from "@/components/layout/themeRegistry";
import Header from "@/components/layout/header";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={bricolageGrotesque.className}>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
