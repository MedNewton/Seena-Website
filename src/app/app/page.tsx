// app/about/page.tsx
import type { Metadata } from "next";
import AppPageClient from "./AppClient";

import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("app", {
    title: "Seena | Digital Experiences",
  description: "",
  });
}

export default function AppPage() {
  return <AppPageClient />;
}