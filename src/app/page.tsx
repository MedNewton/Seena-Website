// src/app/page.tsx
"use client";

import { Stack } from "@mui/material";
import Hero from "@/components/home/hero";

const Home: React.FC = () => {
  return (
    <Stack width="100%">
      <Hero />
    </Stack>
  );
};

export default Home;
