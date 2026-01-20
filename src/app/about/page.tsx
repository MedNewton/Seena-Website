// app/about/page.tsx
import type { Metadata } from "next";
import AboutPageClient from "./AboutClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("about", {
    title: "Seena | About",
    description: "Learn about Seena's story, mission, and values.",
  });
}

export default function AboutPage() {
  return <AboutPageClient />;
}