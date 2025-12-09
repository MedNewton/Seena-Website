// src/app/page.tsx
"use client";

import { Stack } from "@mui/material";
import Hero from "@/components/home/hero";
import ModernOverdriveSection from "@/components/home/ModernOverdriveSection";
import Explore from "@/components/home/explore";
import PhoneScroll from "@/components/home/phoneScroll";
import Branches from "@/components/home/branches";
import Circles from "@/components/home/circles";

const Home: React.FC = () => {
  return (
    <Stack width="100%">
      <Hero />
      <Stack gap={4}>
        <ModernOverdriveSection />
        <Explore />
        <PhoneScroll />
        <Branches />
        <Circles />
      </Stack>
    </Stack>
  );
};

export default Home;
