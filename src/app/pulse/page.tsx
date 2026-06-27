import type { Metadata } from "next";
import PulsePageClient from "./pulseClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("pulse", {
    title: "Seena | Pulse",
    description: "",
  });
}

export default function PulsePage() {
  return <PulsePageClient />;
}
