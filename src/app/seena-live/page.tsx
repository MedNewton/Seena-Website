// app/about/page.tsx
import type { Metadata } from "next";
import SeenaLivePageClient from "./SeenaLiveClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("seena-live", {
    title: "Seena | Seena Live",
    description: "",
  });
}

export default function SeenaLivePage() {
  return <SeenaLivePageClient />;
}