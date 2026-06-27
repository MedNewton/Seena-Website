import type { Metadata } from "next";
import LivePageClient from "./liveClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("live", {
    title: "Seena | Live",
    description: "",
  });
}

export default function LivePage() {
  return <LivePageClient />;
}
