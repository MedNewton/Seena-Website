import type { Metadata } from "next";
import SummitPageClient from "./summitClient";
import { buildPageMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("summit", {
    title: "Seena | Summit",
    description: "",
  });
}

export default function SummitPage() {
  return <SummitPageClient />;
}
