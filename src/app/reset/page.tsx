// app/about/page.tsx
import type { Metadata } from "next";
import ResetPageClient from "./resetClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("reset", {
    title: "Seena | Reset",
    description: "",
  });
}

export default function ResetPage() {
  return <ResetPageClient />;
}