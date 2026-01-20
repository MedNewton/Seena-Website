// app/about/page.tsx
import type { Metadata } from "next";
import CirclesPageClient from "./circlesClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("circles", {
    title: "Seena | Circles",
    description: "",
  });
}

export default function CirclesPage() {
  return <CirclesPageClient />;
}