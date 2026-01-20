"use client";

import type { FC } from "react";
import { Box, Stack } from "@mui/material";

import ExperiencesBackgroundLayer from "@/components/experiences/ExperiencesBackgroundLayer";
import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import ExperiencesFiltersBar from "@/components/experiences/ExperiencesFiltersBar";
import ExperiencesSectionSlider, {
  type ExperiencesSectionConfig,
} from "@/components/experiences/ExperiencesSectionSlider";
import Footer from "@/components/layout/footer";

import heroImg from "@/assets/images/circles.webp"; // adjust path
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
    id: "wellness-experiences",
    title: "Wellness Experiences",
    activities: [
      { id: "we-1", title: "Wellness Massage at Partner Wellness Center", image: cardImg1 },
      { id: "we-2", title: "Sauna / Heat Recovery Practice at Wellness Facility", image: cardImg2 },
      { id: "we-3", title: "Physiotherapy Sessions", image: cardImg3 },
      { id: "we-4", title: "Pilates at Studio", image: cardImg4 },
      { id: "we-5", title: "Yoga Class at Partner Studio (e.g. Restorative, Yin, Sunrise Yoga)", image: cardImg5 },
      { id: "we-6", title: "Dance or Zumba Classes (Studio-Based)", image: cardImg6 },
      { id: "we-7", title: "Strength / Cardio / Resistance Training at Gym or Studio", image: cardImg7 },
      { id: "we-8", title: "Tai Chi / Qigong Flow Classes", image: cardImg8 },
      { id: "we-9", title: "Cold Exposure Practice (e.g. guided cold plunge, cryotherapy at center)", image: cardImg9 },
      { id: "we-10", title: "CBT / CBT-I Sessions with Partner Therapist", image: cardImg10 },
      { id: "we-11", title: "Acceptance and Commitment Therapy (ACT)", image: cardImg1 },
      { id: "we-12", title: "Mindfulness-Based Stress Reduction (MBSR) Programs (8 weeks)", image: cardImg2 },
      { id: "we-13", title: "Mindfulness-Based Cognitive Therapy (MBCT)", image: cardImg3 },
      { id: "we-14", title: "Compassion-Focused Therapy or MSC (Mindful Self-Compassion)", image: cardImg4 },
      { id: "we-15", title: "Group Therapy Sessions (Partner Therapist-Led)", image: cardImg5 },
      { id: "we-16", title: "VR Relaxation / Immersive Environments (at SEENA-equipped centers)", image: cardImg6 },
      { id: "we-17", title: "HRV Biofeedback Session (Guided by Practitioner)", image: cardImg7 },
      { id: "we-18", title: "Whole-Body Hyperthermia (Partner Clinic)", image: cardImg8 },
      { id: "we-19", title: "Hyperbaric Oxygen Therapy (HBOT)", image: cardImg9 },
      { id: "we-20", title: "VR-Based Stress Reset Sessions in Wellness Clinic", image: cardImg10 },
      { id: "we-21", title: "Partner-Led Breathwork Circles (In-Studio)", image: cardImg1 },
      { id: "we-22", title: "Sound Bath or Music Healing at Wellness Center", image: cardImg2 },
      { id: "we-23", title: "Art Therapy Sessions (Partner-Led in Studio)", image: cardImg3 },
      { id: "we-24", title: "Aromatherapy Session (Guided or Massage-Integrated)", image: cardImg4 },
      { id: "we-25", title: "Candlelight Visualization or Meditation Class", image: cardImg5 },
      { id: "we-26", title: "Group Sharing Circle (Facilitated at Partner Location)", image: cardImg6 },
      { id: "we-27", title: "Outdoor Group Fitness (e.g., HIIT, Bootcamp with Partner Coaches)", image: cardImg7 },
      { id: "we-28", title: "Volunteering in Community Events (with Nonprofit or NGO Partners)", image: cardImg8 },
      { id: "we-29", title: "Organized Tree Planting / Eco-Cleanup Days", image: cardImg9 },
      { id: "we-30", title: "Cultural or Spiritual Events (Facilitated by Partner Organizations)", image: cardImg10 },
      { id: "we-31", title: "Mentorship Programs through SEENA Partners", image: cardImg1 },
      { id: "we-32", title: "Skill-Up Programs / Workshops Hosted by Coaches or Career Experts", image: cardImg2 },
      { id: "we-33", title: "Networking with Inspiring Professionals (Partner-led Events)", image: cardImg3 },
    ],
  },
  {
    id: "wellness-retreats",
    title: "Wellness Retreats",
    activities: [
      { id: "wr-1", title: "Forest Bathing Retreat (Shinrin-yoku Weekend)", image: cardImg1 },
      { id: "wr-2", title: "Nature-Based Mindfulness Immersion (Mountain or Forest)", image: cardImg2 },
      { id: "wr-3", title: "Eco-Cleanup + Nature Connection Retreat", image: cardImg3 },
      { id: "wr-4", title: "Gardening for Mindfulness Weekend", image: cardImg4 },
      { id: "wr-5", title: "Camping or Hiking Wellness Getaway", image: cardImg5 },
      { id: "wr-6", title: "Beach Breathing & Grounding Mini-Retreat", image: cardImg6 },
      { id: "wr-7", title: "Retreat in Nature with Breathwork and Journaling", image: cardImg7 },
      { id: "wr-8", title: "Stargazing + Stillness Overnight Journey", image: cardImg8 },
      { id: "wr-9", title: "Silent Retreat in Nature (1–3 Days)", image: cardImg9 },
      { id: "wr-10", title: "3-Day Restorative Yoga & Meditation Retreat", image: cardImg10 },
      { id: "wr-11", title: "Sunrise Meditation & Yoga Beach Retreat", image: cardImg1 },
      { id: "wr-12", title: "Sound Healing + Yin Yoga Weekend Retreat", image: cardImg2 },
      { id: "wr-13", title: "Mindfulness-Based Stress Reduction (MBSR) Intensive Weekend", image: cardImg3 },
      { id: "wr-14", title: "Compassion Meditation & Loving-Kindness Practice Retreat", image: cardImg4 },
      { id: "wr-15", title: "Gratitude & Intention Weekend (Meditation, Reflection, Journaling)", image: cardImg5 },
      { id: "wr-16", title: "Burnout Recovery & Reset Retreat", image: cardImg6 },
      { id: "wr-17", title: "Emotional Awareness & Self-Compassion Weekend", image: cardImg7 },
      { id: "wr-18", title: "Stress Reset Mini-Retreat (Meditation, Nature, Cold/Heat Exposure)", image: cardImg8 },
      { id: "wr-19", title: "Digital Detox & Nervous System Reset Retreat", image: cardImg9 },
      { id: "wr-20", title: "Values Alignment & Micro-ACT Practice Retreat", image: cardImg10 },
      { id: "wr-21", title: "Purpose Discovery & Journaling Retreat", image: cardImg1 },
      { id: "wr-22", title: "Mentorship & Visioning Circle Retreat", image: cardImg2 },
      { id: "wr-23", title: "Life Alignment Retreat (Career, Wellbeing, Relationships)", image: cardImg3 },
      { id: "wr-24", title: "Community Circle & Volunteer-Based Retreat", image: cardImg4 },
      { id: "wr-25", title: "Mindful Leadership & Work-Life Integration Retreat", image: cardImg5 },
      { id: "wr-26", title: "Fire & Breath Weekend (Evening Circles, Cold Exposure, Visualization)", image: cardImg6 },
      { id: "wr-27", title: "Water Healing Retreat (Riverside or Ocean-Based Sound & Movement)", image: cardImg7 },
      { id: "wr-28", title: "Earth Grounding Retreat (Barefoot Practices, Mud, Forest Movement)", image: cardImg8 },
      { id: "wr-29", title: "Multi-Sensory Nature Immersion (Sound, Sight, Scent, Movement)", image: cardImg9 },
    ],
  },
  {
    id: "circles",
    title: "Circles",
    activities: [
      { id: "ci-1", title: "Run Club", image: cardImg1 },
      { id: "ci-2", title: "Cycling Club", image: cardImg2 },
      { id: "ci-3", title: "Tennis Club", image: cardImg3 },
      { id: "ci-4", title: "Padel Club", image: cardImg4 },
      { id: "ci-5", title: "Basketball Club", image: cardImg5 },
      { id: "ci-6", title: "Soccer Club", image: cardImg6 },
      { id: "ci-7", title: "Climbing & Adventure Club", image: cardImg7 },
      { id: "ci-8", title: "Swimming Club", image: cardImg8 },
      { id: "ci-9", title: "CrossFit & Bootcamp Club", image: cardImg9 },
      { id: "ci-10", title: "Group Fitness Circles", image: cardImg10 },
      { id: "ci-11", title: "Strength & Conditioning Club", image: cardImg1 },
      { id: "ci-12", title: "Functional Training Group", image: cardImg2 },
      { id: "ci-13", title: "Mobility & Flexibility Circle", image: cardImg3 },
      { id: "ci-14", title: "Martial Arts & Self-Defense Circle", image: cardImg4 },
      { id: "ci-15", title: "Bodyweight Fitness", image: cardImg5 },
      { id: "ci-16", title: "Hiking Club", image: cardImg6 },
      { id: "ci-17", title: "Surf Club", image: cardImg7 },
      { id: "ci-18", title: "Camping & Wilderness Circle", image: cardImg8 },
      { id: "ci-19", title: "Yoga Retreat Circle", image: cardImg9 },
      { id: "ci-20", title: "Mind-Body Getaways", image: cardImg10 },
      { id: "ci-21", title: "Wellness Travel Group", image: cardImg1 },
      { id: "ci-22", title: "Beach Workouts", image: cardImg2 },
      { id: "ci-23", title: "Art Therapy Circle", image: cardImg3 },
      { id: "ci-24", title: "Creative Expression Workshops", image: cardImg4 },
      { id: "ci-25", title: "Music & Sound Circles", image: cardImg5 },
      { id: "ci-26", title: "Photography & Visual Art Club", image: cardImg6 },
      { id: "ci-27", title: "Cultural Exchange Meetups", image: cardImg7 },
      { id: "ci-28", title: "Dance Circles", image: cardImg8 },
      { id: "ci-29", title: "Mindful Parenting Circle", image: cardImg9 },
      { id: "ci-30", title: "Family Wellness Activities", image: cardImg10 },
      { id: "ci-31", title: "Moms’ Group · Dads’ Circle", image: cardImg1 },
      { id: "ci-32", title: "Parent & Child Yoga", image: cardImg2 },
      { id: "ci-33", title: "Family Outdoor Adventures", image: cardImg3 },
      { id: "ci-34", title: "Workplace Wellness Circle", image: cardImg4 },
      { id: "ci-35", title: "Entrepreneurs’ Mastermind", image: cardImg5 },
      { id: "ci-36", title: "Mindful Leadership Group", image: cardImg6 },
      { id: "ci-37", title: "Remote Workers’ Community", image: cardImg7 },
      { id: "ci-38", title: "Creative Freelancers Circle", image: cardImg8 },
      { id: "ci-39", title: "Spiritual Growth Circle", image: cardImg9 },
      { id: "ci-40", title: "Meditation & Prayer Group", image: cardImg10 },
      { id: "ci-41", title: "Quran & Reflection Circle", image: cardImg1 },
      { id: "ci-42", title: "Faith & Mindfulness Gatherings", image: cardImg2 },
      { id: "ci-43", title: "Interfaith Dialogue Circles", image: cardImg3 },
      { id: "ci-44", title: "Mental Wellness Support Circle", image: cardImg4 },
      { id: "ci-45", title: "Stress Relief & Mindfulness Group", image: cardImg5 },
      { id: "ci-46", title: "Emotional Healing Circle", image: cardImg6 },
      { id: "ci-47", title: "Journaling & Reflection Circle", image: cardImg7 },
      { id: "ci-48", title: "Group Therapy Sessions", image: cardImg8 },
      { id: "ci-49", title: "After-Work Socials", image: cardImg9 },
      { id: "ci-50", title: "Book & Tea Club", image: cardImg10 },
      { id: "ci-51", title: "Language Exchange Circle", image: cardImg1 },
      { id: "ci-52", title: "Volunteer & Impact Group", image: cardImg2 },
      { id: "ci-53", title: "Movie Nights & Game Circles", image: cardImg3 },
      { id: "ci-54", title: "Community Picnics", image: cardImg4 },
      { id: "ci-55", title: "Hiking & Trekking Groups", image: cardImg5 },
      { id: "ci-56", title: "Trail Running Club", image: cardImg6 },
      { id: "ci-57", title: "Eco-Camping Circle", image: cardImg7 },
      { id: "ci-58", title: "Kayak & Paddle Circle", image: cardImg8 },
      { id: "ci-59", title: "Mountain Exploration Circle", image: cardImg9 },
      { id: "ci-60", title: "Outdoor Yoga & Meditation", image: cardImg10 },
      { id: "ci-61", title: "Self-Development & Habits Circle", image: cardImg1 },
      { id: "ci-62", title: "Nutrition & Healthy Cooking Group", image: cardImg2 },
      { id: "ci-63", title: "Conscious Productivity Circle", image: cardImg3 },
      { id: "ci-64", title: "Life Skills & Learning Hub", image: cardImg4 },
      { id: "ci-65", title: "Book Discussions", image: cardImg5 },
      { id: "ci-66", title: "Sustainability Projects Circle", image: cardImg6 },
      { id: "ci-67", title: "Zero-Waste Lifestyle Club", image: cardImg7 },
      { id: "ci-68", title: "Community Gardening", image: cardImg8 },
      { id: "ci-69", title: "Environmental Volunteering", image: cardImg9 },
      { id: "ci-70", title: "Ocean & Beach Cleanup Group", image: cardImg10 },
    ],
  },
] as const;

const ExperiencesPage: FC = () => {
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
      <ExperiencesBackgroundLayer />

      {/* Main content */}
      <Stack
        sx={{
          position: "relative",
          zIndex: 1,
          mx: "auto",
          gap: { xs: 4, md: 6 },
        }}
      >
        <ExperiencesHero
          title="Real Experiences"
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
          <ExperiencesFiltersBar />

          {EXPERIENCES_SECTIONS.map((section) => (
            <ExperiencesSectionSlider
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

export default ExperiencesPage;
