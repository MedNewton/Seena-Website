"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import CirclesBackgroundLayer from "@/components/circles/CirclesBackgroundLayer";
import CirclesHero from "@/components/circles/CirclesHero";
import CirclesFiltersBar from "@/components/circles/CirclesFiltersBar";
import CirclesSectionSlider, {
  type CirclesSectionConfig,
} from "@/components/circles/CirclesSlider";
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

const CIRCLES_SECTIONS: CirclesSectionConfig[] = [
  {
    id: "movement-and-sports",
    title: "Movement & Sports",
    activities: [
      { id: "ms-1", title: "Run Club", image: cardImg1 },
      { id: "ms-2", title: "Cycling Club", image: cardImg2 },
      { id: "ms-3", title: "Tennis Club", image: cardImg3 },
      { id: "ms-4", title: "Padel Club", image: cardImg4 },
      { id: "ms-5", title: "Basketball Club", image: cardImg5 },
      { id: "ms-6", title: "Soccer Club", image: cardImg6 },
      { id: "ms-7", title: "Climbing & Adventure Club", image: cardImg7 },
      { id: "ms-8", title: "Swimming Club", image: cardImg8 },
      { id: "ms-9", title: "CrossFit & Bootcamp Club", image: cardImg9 },
    ],
  },
  {
    id: "fitness-and-performance",
    title: "Fitness & Performance",
    activities: [
      { id: "fp-1", title: "Group Fitness Circles", image: cardImg1 },
      { id: "fp-2", title: "Strength & Conditioning Club", image: cardImg2 },
      { id: "fp-3", title: "Functional Training Group", image: cardImg3 },
      { id: "fp-4", title: "Mobility & Flexibility Circle", image: cardImg4 },
      { id: "fp-5", title: "Martial Arts & Self-Defense Circle", image: cardImg5 },
      { id: "fp-6", title: "Bodyweight Fitness", image: cardImg6 },
    ],
  },
  {
    id: "outdoor-travel-and-retreats",
    title: "Outdoor, Travel & Retreats",
    activities: [
      { id: "ot-1", title: "Hiking Club", image: cardImg1 },
      { id: "ot-2", title: "Surf Club", image: cardImg2 },
      { id: "ot-3", title: "Camping & Wilderness Circle", image: cardImg3 },
      { id: "ot-4", title: "Yoga Retreat Circle", image: cardImg4 },
      { id: "ot-5", title: "Mind-Body Getaways", image: cardImg5 },
      { id: "ot-6", title: "Wellness Travel Group", image: cardImg6 },
      { id: "ot-7", title: "Beach Workouts", image: cardImg7 },
    ],
  },
  {
    id: "art-culture-and-expression",
    title: "Art, Culture & Expression",
    activities: [
      { id: "ac-1", title: "Art Therapy Circle", image: cardImg1 },
      { id: "ac-2", title: "Creative Expression Workshops", image: cardImg2 },
      { id: "ac-3", title: "Music & Sound Circles", image: cardImg3 },
      { id: "ac-4", title: "Photography & Visual Art Club", image: cardImg4 },
      { id: "ac-5", title: "Cultural Exchange Meetups", image: cardImg5 },
      { id: "ac-6", title: "Dance Circles", image: cardImg6 },
    ],
  },
  {
    id: "parents-and-family",
    title: "Parents & Family",
    activities: [
      { id: "pf-1", title: "Mindful Parenting Circle", image: cardImg1 },
      { id: "pf-2", title: "Family Wellness Activities", image: cardImg2 },
      { id: "pf-3", title: "Moms’ Group · Dads’ Circle", image: cardImg3 },
      { id: "pf-4", title: "Parent & Child Yoga", image: cardImg4 },
      { id: "pf-5", title: "Family Outdoor Adventures", image: cardImg5 },
    ],
  },
  {
    id: "work-and-business",
    title: "Work & Business",
    activities: [
      { id: "wb-1", title: "Workplace Wellness Circle", image: cardImg1 },
      { id: "wb-2", title: "Entrepreneurs’ Mastermind", image: cardImg2 },
      { id: "wb-3", title: "Mindful Leadership Group", image: cardImg3 },
      { id: "wb-4", title: "Remote Workers’ Community", image: cardImg4 },
      { id: "wb-5", title: "Creative Freelancers Circle", image: cardImg5 },
    ],
  },
  {
    id: "religion-and-spirituality",
    title: "Religion & Spirituality",
    activities: [
      { id: "rs-1", title: "Spiritual Growth Circle", image: cardImg1 },
      { id: "rs-2", title: "Meditation & Prayer Group", image: cardImg2 },
      { id: "rs-3", title: "Quran & Reflection Circle", image: cardImg3 },
      { id: "rs-4", title: "Faith & Mindfulness Gatherings", image: cardImg4 },
      { id: "rs-5", title: "Interfaith Dialogue Circles", image: cardImg5 },
    ],
  },
  {
    id: "mental-health-and-wellbeing",
    title: "Mental Health & Wellbeing",
    activities: [
      { id: "mh-1", title: "Mental Wellness Support Circle", image: cardImg1 },
      { id: "mh-2", title: "Stress Relief & Mindfulness Group", image: cardImg2 },
      { id: "mh-3", title: "Emotional Healing Circle", image: cardImg3 },
      { id: "mh-4", title: "Journaling & Reflection Circle", image: cardImg4 },
      { id: "mh-5", title: "Group Therapy Sessions", image: cardImg5 },
    ],
  },
  {
    id: "social-and-community",
    title: "Social & Community",
    activities: [
      { id: "sc-1", title: "After-Work Socials", image: cardImg1 },
      { id: "sc-2", title: "Book & Tea Club", image: cardImg2 },
      { id: "sc-3", title: "Language Exchange Circle", image: cardImg3 },
      { id: "sc-4", title: "Volunteer & Impact Group", image: cardImg4 },
      { id: "sc-5", title: "Movie Nights & Game Circles", image: cardImg5 },
      { id: "sc-6", title: "Community Picnics", image: cardImg6 },
    ],
  },
  {
    id: "nature-and-adventure",
    title: "Nature & Adventure",
    activities: [
      { id: "na-1", title: "Hiking & Trekking Groups", image: cardImg1 },
      { id: "na-2", title: "Trail Running Club", image: cardImg2 },
      { id: "na-3", title: "Eco-Camping Circle", image: cardImg3 },
      { id: "na-4", title: "Kayak & Paddle Circle", image: cardImg4 },
      { id: "na-5", title: "Mountain Exploration Circle", image: cardImg5 },
      { id: "na-6", title: "Outdoor Yoga & Meditation", image: cardImg6 },
    ],
  },
  {
    id: "growth-and-learning",
    title: "Growth & Learning",
    activities: [
      { id: "gl-1", title: "Self-Development & Habits Circle", image: cardImg1 },
      { id: "gl-2", title: "Nutrition & Healthy Cooking Group", image: cardImg2 },
      { id: "gl-3", title: "Conscious Productivity Circle", image: cardImg3 },
      { id: "gl-4", title: "Life Skills & Learning Hub", image: cardImg4 },
      { id: "gl-5", title: "Book Discussions", image: cardImg5 },
    ],
  },
  {
    id: "environment-and-sustainability",
    title: "Environment & Sustainability",
    activities: [
      { id: "es-1", title: "Sustainability Projects Circle", image: cardImg1 },
      { id: "es-2", title: "Zero-Waste Lifestyle Club", image: cardImg2 },
      { id: "es-3", title: "Community Gardening", image: cardImg3 },
      { id: "es-4", title: "Environmental Volunteering", image: cardImg4 },
      { id: "es-5", title: "Ocean & Beach Cleanup Group", image: cardImg5 },
    ],
  },
];


const CirclesPageClient: FC = () => {
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
      <CirclesBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          mx: "auto",
          gap: { xs: 4, md: 6 },
        }}
      >
        <CirclesHero
          title="Circles"
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
          <CirclesFiltersBar />

          {CIRCLES_SECTIONS.map((section) => (
            <CirclesSectionSlider
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

export default CirclesPageClient;
