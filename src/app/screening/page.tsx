// app/about/page.tsx
import type { Metadata } from "next";
import ScreeningPageClient from "./screeningClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("screening", {
    title: "Seena | Screening",
    description: "",
  });
}

export default function ScreeningPage() {
  return <ScreeningPageClient />;
}