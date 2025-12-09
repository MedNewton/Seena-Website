// src/components/home/Explore.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

import digitalGuidanceImg from "@/assets/images/meditation1.webp";
import realExperiencesImg from "@/assets/images/group-yoga1.webp";
import { useRouter } from "next/navigation";

type ExploreCardConfig = {
  id: "digital" | "real";
  title: string;
  subtitle: string;
  imageSrc: string;
  href: string;
};

const GOLD = "#D8A24B";

const CARDS: ExploreCardConfig[] = [
  {
    id: "digital",
    title: "Digital Guidance",
    subtitle: "AI coach | breathwork & fitness | Inner balance",
    imageSrc: digitalGuidanceImg.src,
    href: "/app",
  },
  {
    id: "real",
    title: "Real Experiences",
    subtitle: "Live events | Retreats | Community",
    imageSrc: realExperiencesImg.src,
    href: "/experiences",
  },
];

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

const Explore: React.FC = () => {
  const router = useRouter();
  return (
    <MotionBox
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      }}
      sx={{
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: {
          xs: "0px 18px 45px rgba(15, 23, 42, 0.32)",
          md: "0px 30px 80px rgba(15, 23, 42, 0.45)",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          minHeight: { xs: 420, md: 520 },
        }}
      >
        {CARDS.map((card, index) => (
          <MotionBox
            key={card.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2 + index * 0.15,
            }}
            sx={{
              position: "relative",
              color: "#FFFFFF",
              backgroundImage: `url(${card.imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            {/* Dark bottom gradient for readability */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.65) 80%)",
              }}
            />

            <Stack
              spacing={2}
              sx={{
                position: "relative",
                zIndex: 1,
                p: { xs: 3, md: 5 },
                maxWidth: { xs: "90%", md: "80%" },
              }}
            >
              <MotionTypography
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.15,
                }}
                sx={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: { xs: 26, md: 34 },
                  lineHeight: { xs: 1.2, md: 1.15 },
                  fontWeight: 300,
                }}
              >
                {card.title}
              </MotionTypography>

              <MotionTypography
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: 0.32 + index * 0.15,
                }}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 13, md: 16 },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: "rgba(249, 250, 251, 0.9)",
                }}
              >
                {card.subtitle}
              </MotionTypography>

              <MotionButton
                whileTap={{ scale: 0.97 }}
                onClick={async () => {
                  router.push(card.href);
                }}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  alignSelf: "flex-start",
                  mt: 1,
                  borderRadius: 2,
                  minWidth: { xs: 140, md: 170 },
                  px: 0,
                  py: 1.2,
                  fontSize: { xs: 13, md: 14 },
                  fontWeight: 600,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-montserrat)",
                  color: "rgba(249,250,251,0.96)",
                  borderWidth: 1.5,
                  borderStyle: "solid",
                  borderColor: GOLD,
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  zIndex: 0,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    backgroundColor: GOLD,
                    borderRadius: 2,
                    transform: "translateY(100%)",
                    transformOrigin: "bottom center",
                    transition:
                      "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
                    opacity: 0.95,
                    zIndex: -1,
                  },
                  "&:hover::before": {
                    transform: "translateY(0%)",
                    opacity: 1,
                  },
                  "&:hover": {
                    borderColor: "transparent",
                    color: "#0B101B", // dark text on gold
                  },
                }}
              >
                Explore
              </MotionButton>
            </Stack>
          </MotionBox>
        ))}
      </Box>
    </MotionBox>
  );
};

export default Explore;
