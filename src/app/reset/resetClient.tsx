"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import ResetBackgroundLayer from "@/components/reset/ResetBackgroundLayer";
import ResetHero from "@/components/reset/ResetHero";
import ResetFiltersBar from "@/components/reset/ResetFiltersBar";
import ResetSectionSlider, {
  type ResetSectionConfig,
} from "@/components/reset/ResetSlider";
import Footer from "@/components/layout/footer";

import heroImg from "@/assets/images/training1.webp"; // adjust path
import cardImg1 from "@/assets/images/retreat1.webp";
import cardImg2 from "@/assets/images/retreat1.webp";
import cardImg3 from "@/assets/images/retreat1.webp";
import cardImg4 from "@/assets/images/retreat1.webp";
import cardImg5 from "@/assets/images/retreat1.webp";
import cardImg6 from "@/assets/images/retreat1.webp";
import cardImg7 from "@/assets/images/retreat1.webp";
import cardImg8 from "@/assets/images/retreat1.webp";
import cardImg9 from "@/assets/images/retreat1.webp";
import cardImg10 from "@/assets/images/retreat1.webp";

const RESET_SECTIONS: ResetSectionConfig[] = [
  {
    id: "nature-immersion-and-eco-healing-retreats",
    title: "Nature Immersion & Eco-Healing Retreats",
    activities: [
      { id: "ne-1", title: "Forest Bathing Retreat (Shinrin-yoku Weekend)", image: cardImg1 },
      { id: "ne-2", title: "Nature-Based Mindfulness Immersion (Mountain or Forest)", image: cardImg2 },
      { id: "ne-3", title: "Eco-Cleanup + Nature Connection Retreat", image: cardImg3 },
      { id: "ne-4", title: "Gardening for Mindfulness Weekend", image: cardImg4 },
      { id: "ne-5", title: "Camping or Hiking Wellness Getaway", image: cardImg5 },
      { id: "ne-6", title: "Beach Breathing & Grounding Mini-Retreat", image: cardImg6 },
      { id: "ne-7", title: "Retreat in Nature with Breathwork and Journaling", image: cardImg7 },
      { id: "ne-8", title: "Stargazing + Stillness Overnight Journey", image: cardImg8 },
      { id: "ne-9", title: "Silent Retreat in Nature (1–3 Days)", image: cardImg9 },
    ],
  },
  {
    id: "yoga-meditation-and-mindfulness-retreats",
    title: "Yoga, Meditation & Mindfulness Retreats",
    activities: [
      { id: "ym-1", title: "3-Day Restorative Yoga & Meditation Retreat", image: cardImg1 },
      { id: "ym-2", title: "Sunrise Meditation & Yoga Beach Retreat", image: cardImg2 },
      { id: "ym-3", title: "Sound Healing + Yin Yoga Weekend Retreat", image: cardImg3 },
      { id: "ym-4", title: "Mindfulness-Based Stress Reduction (MBSR) Intensive Weekend", image: cardImg4 },
      { id: "ym-5", title: "Compassion Meditation & Loving-Kindness Practice Retreat", image: cardImg5 },
      { id: "ym-6", title: "Gratitude & Intention Weekend (Meditation, Reflection, Journaling)", image: cardImg6 },
    ],
  },
  {
    id: "mental-resilience-and-recovery-retreats",
    title: "Mental Resilience & Recovery Retreats",
    activities: [
      { id: "mr-1", title: "Burnout Recovery & Reset Retreat", image: cardImg1 },
      { id: "mr-2", title: "Emotional Awareness & Self-Compassion Weekend", image: cardImg2 },
      { id: "mr-3", title: "Stress Reset Mini-Retreat (Meditation, Nature, Cold/Heat Exposure)", image: cardImg3 },
      { id: "mr-4", title: "Digital Detox & Nervous System Reset Retreat", image: cardImg4 },
      { id: "mr-5", title: "Values Alignment & Micro-ACT Practice Retreat", image: cardImg5 },
    ],
  },
  {
    id: "purpose-connection-and-growth-journeys",
    title: "Purpose, Connection & Growth Journeys",
    activities: [
      { id: "pc-1", title: "Purpose Discovery & Journaling Retreat", image: cardImg1 },
      { id: "pc-2", title: "Mentorship & Visioning Circle Retreat", image: cardImg2 },
      { id: "pc-3", title: "Life Alignment Retreat (Career, Wellbeing, Relationships)", image: cardImg3 },
      { id: "pc-4", title: "Community Circle & Volunteer-Based Retreat", image: cardImg4 },
      { id: "pc-5", title: "Mindful Leadership & Work-Life Integration Retreat", image: cardImg5 },
    ],
  },
  {
    id: "elemental-and-sensory-healing-experiences",
    title: "Elemental & Sensory Healing Experiences",
    activities: [
      { id: "es-1", title: "Fire & Breath Weekend (Evening Circles, Cold Exposure, Visualization)", image: cardImg1 },
      { id: "es-2", title: "Water Healing Retreat (Riverside or Ocean-Based Sound & Movement)", image: cardImg2 },
      { id: "es-3", title: "Earth Grounding Retreat (Barefoot Practices, Mud, Forest Movement)", image: cardImg3 },
      { id: "es-4", title: "Multi-Sensory Nature Immersion (Sound, Sight, Scent, Movement)", image: cardImg4 },
    ],
  },
];


const ResetPageClient: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: (theme) => theme.palette.background.default,
        pb: { xs: 10, md: 0 },
        overflowX: "hidden",
      }}
    >
      {/* Background glow layer – absolutely positioned behind content */}
      <ResetBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          mx: "auto",
          gap: { xs: 4, md: 6 },
        }}
      >
        <ResetHero
          title="Seena Reset"
          image={heroImg}
        />

        <Stack sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 3 },
          gap: { xs: 4, md: 6 },
          boxSizing: "border-box",
        }}>
        <ResetFiltersBar />

{RESET_SECTIONS.map((section) => (
  <ResetSectionSlider
    key={section.id}
    config={section}
  />
))}
        </Stack>
      </Stack>
      <Footer transparentFooter={true} />
    </Box>
  );
};

export default ResetPageClient;
