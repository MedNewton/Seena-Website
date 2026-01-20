// app/about/page.tsx
import type { Metadata } from "next";
import DinnerClubPageClient from "./dinnerClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("dinner-club", {
    title: "Seena | Dinner Club",
    description: "",
  });
}

export default function DinnerClubPage() {
  return <DinnerClubPageClient />;
}