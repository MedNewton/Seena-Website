// src/app/page.tsx
"use client";

import { Stack } from "@mui/material";
import Hero from "@/components/home/hero";
import ModernOverdriveSection from "@/components/home/ModernOverdriveSection";
import SeenaDifferentSection from "@/components/home/SeenaDifferentSection";
import Explore from "@/components/home/explore";
import BiggerThanProductSection from "@/components/home/BiggerThanProductSection";
import FaqSection from "@/components/home/FaqSection";
import Footer from "@/components/layout/footer";

const HomePageClient: React.FC = () => {
  return (
    <Stack width="100%">
      <Hero />
      <Stack gap={2} sx={{
        px: { xs: 0, md: 3 },
      }}>
        <ModernOverdriveSection />
        <SeenaDifferentSection />
        <Explore />
        <BiggerThanProductSection />
        <FaqSection />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default HomePageClient;
