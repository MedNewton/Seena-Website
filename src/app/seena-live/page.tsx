"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import SeenaLiveBackgroundLayer from "@/components/seena-live/SeenaLiveBackgroundLayer";
import SeenaLiveHero from "@/components/seena-live/SeenaLiveHero";
import SeenaLiveFiltersBar from "@/components/seena-live/SeenaLiveFiltersBar";
import SeenaLiveSectionSlider, {
  type ExperiencesSectionConfig,
} from "@/components/experiences/ExperiencesSectionSlider";
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

const EXPERIENCES_SECTIONS: ExperiencesSectionConfig[] = [
  {
    id: "guided-body-based-therapies-and-classes",
    title: "Guided Body-Based Therapies & Classes",
    activities: [
      { id: "gb-1", title: "Wellness Massage at Partner Wellness Center", image: cardImg1 },
      { id: "gb-2", title: "Sauna / Heat Recovery Practice at Wellness Facility", image: cardImg2 },
      { id: "gb-3", title: "Physiotherapy Sessions", image: cardImg3 },
      { id: "gb-4", title: "Pilates at Studio", image: cardImg4 },
      { id: "gb-5", title: "Yoga Class at Partner Studio (e.g. Restorative, Yin, Sunrise Yoga)", image: cardImg5 },
      { id: "gb-6", title: "Dance or Zumba Classes (Studio-Based)", image: cardImg6 },
      { id: "gb-7", title: "Strength / Cardio / Resistance Training at Gym or Studio", image: cardImg7 },
      { id: "gb-8", title: "Tai Chi / Qigong Flow Classes", image: cardImg8 },
      { id: "gb-9", title: "Cold Exposure Practice (e.g. guided cold plunge, cryotherapy at center)", image: cardImg9 },
    ],
  },
  {
    id: "evidence-based-mental-wellness-services",
    title: "Evidence-Based Mental Wellness Services",
    activities: [
      { id: "mw-1", title: "CBT / CBT-I Sessions with Partner Therapist", image: cardImg1 },
      { id: "mw-2", title: "Acceptance and Commitment Therapy (ACT)", image: cardImg2 },
      { id: "mw-3", title: "Mindfulness-Based Stress Reduction (MBSR) Programs (8 weeks)", image: cardImg3 },
      { id: "mw-4", title: "Mindfulness-Based Cognitive Therapy (MBCT)", image: cardImg4 },
      { id: "mw-5", title: "Compassion-Focused Therapy or MSC (Mindful Self-Compassion)", image: cardImg5 },
      { id: "mw-6", title: "Group Therapy Sessions (Partner Therapist-Led)", image: cardImg6 },
      { id: "mw-7", title: "VR Relaxation / Immersive Environments (at SEENA-equipped centers)", image: cardImg7 },
    ],
  },
  {
    id: "integrative-and-emerging-therapies",
    title: "Integrative & Emerging Therapies",
    activities: [
      { id: "ie-1", title: "HRV Biofeedback Session (Guided by Practitioner)", image: cardImg1 },
      { id: "ie-2", title: "Whole-Body Hyperthermia (Partner Clinic)", image: cardImg2 },
      { id: "ie-3", title: "Hyperbaric Oxygen Therapy (HBOT)", image: cardImg3 },
      { id: "ie-4", title: "VR-Based Stress Reset Sessions in Wellness Clinic", image: cardImg4 },
      { id: "ie-5", title: "Partner-Led Breathwork Circles (In-Studio)", image: cardImg5 },
    ],
  },
  {
    id: "creative-sound-and-sensory-healing",
    title: "Creative, Sound & Sensory Healing",
    activities: [
      { id: "cs-1", title: "Sound Bath or Music Healing at Wellness Center", image: cardImg1 },
      { id: "cs-2", title: "Art Therapy Sessions (Partner-Led in Studio)", image: cardImg2 },
      { id: "cs-3", title: "Aromatherapy Session (Guided or Massage-Integrated)", image: cardImg3 },
      { id: "cs-4", title: "Candlelight Visualization or Meditation Class", image: cardImg4 },
    ],
  },
  {
    id: "social-and-community-partner-events",
    title: "Social & Community Partner Events",
    activities: [
      { id: "sc-1", title: "Group Sharing Circle (Facilitated at Partner Location)", image: cardImg1 },
      { id: "sc-2", title: "Outdoor Group Fitness (e.g., HIIT, Bootcamp with Partner Coaches)", image: cardImg2 },
      { id: "sc-3", title: "Volunteering in Community Events (with Nonprofit or NGO Partners)", image: cardImg3 },
      { id: "sc-4", title: "Organized Tree Planting / Eco-Cleanup Days", image: cardImg4 },
      { id: "sc-5", title: "Cultural or Spiritual Events (Facilitated by Partner Organizations)", image: cardImg5 },
    ],
  },
  {
    id: "professional-and-purpose-based-partnering",
    title: "Professional & Purpose-Based Partnering",
    activities: [
      { id: "pp-1", title: "Mentorship Programs through SEENA Partners", image: cardImg1 },
      { id: "pp-2", title: "Skill-Up Programs / Workshops Hosted by Coaches or Career Experts", image: cardImg2 },
      { id: "pp-3", title: "Networking with Inspiring Professionals (Partner-led Events)", image: cardImg3 },
    ],
  },
];


const SeenaLivePage: FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        bgcolor: (theme) => theme.palette.background.default,
        pb: { xs: 10, md: 0 },
      }}
    >
      {/* Background glow layer – absolutely positioned behind content */}
      <SeenaLiveBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          mx: "auto",
          gap: { xs: 4, md: 6 },
        }}
      >
        <SeenaLiveHero
          title="Seena Live"
          image={heroImg}
        />

        <Stack sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 3 },
          gap: { xs: 4, md: 6 },
        }}>
          <SeenaLiveFiltersBar />

          {EXPERIENCES_SECTIONS.map((section) => (
            <SeenaLiveSectionSlider
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

export default SeenaLivePage;
