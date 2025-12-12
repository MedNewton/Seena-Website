// src/components/home/Explore.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

import digitalGuidanceImg from "@/assets/images/digital.webp";
import realExperiencesImg from "@/assets/images/physical.webp";
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
        maxWidth: 1440,
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
                    backgroundColor: "#996B41",
                backgroundImage:
                  "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%235A3520%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23895333%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23A06637%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                color: "#111827",
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
