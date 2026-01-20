// app/about/page.tsx
import type { Metadata } from "next";
import ExperiencesPageClient from "./experiencesClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("experiences", {
    title: "Seena | Real Experiences",
    description: "",
  });
}

export default function ExperiencesPage() {
  return <ExperiencesPageClient />;
}