// app/about/page.tsx
import type { Metadata } from "next";
import HomePageClient from "./homeClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("home", {
    title: "Seena | Reset Your Body, Mind, and Soul",
    description: "",
  });
}

export default function DinnerClubPage() {
  return <HomePageClient />;
}