// src/components/home/Explore.tsx
"use client";

import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import pulseImg from "@/assets/newImages/pulse_card.webp";
import circlesImg from "@/assets/newImages/circles_card.webp";
import summitImg from "@/assets/newImages/summit_card.webp";
import liveImg from "@/assets/newImages/live_card.webp";

type ExploreCardConfig = {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  note?: string;
  imageSrc: string;
  href: string;
};

const GOLD = "#D8A24B";

const CARD_ROWS: ExploreCardConfig[][] = [
  [
    {
      id: "pulse",
      title: "Pulse",
      subtitle:
        "Current state | Actionable steps | Your personalized feed | Guidance through the day",
      cta: "Learn more",
      note: "Launching fall 2026",
      imageSrc: pulseImg.src,
      href: "/reset",
    },
    {
      id: "circles",
      title: "Circles",
      subtitle:
        "Find your people | Stay connected | Real conversations | Shared experiences, in person",
      cta: "Connect now",
      imageSrc: circlesImg.src,
      href: "/circles",
    },
  ],
  [
    {
      id: "summits",
      title: "Summit",
      subtitle:
        "High-level discussions | Health leaders | Innovators | Leave better informed",
      cta: "Register now",
      note: "First event August 2026",
      imageSrc: summitImg.src,
      href: "/experiences",
    },
    {
      id: "live",
      title: "Live",
      subtitle:
        "Book wellness experiences | move together | In your city | Mindfulness and fitness",
      cta: "Learn more",
      imageSrc: liveImg.src,
      href: "/seena-live",
    },
  ],
];

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

type ExploreCardProps = {
  card: ExploreCardConfig;
  delay: number;
};

const ExploreCard: React.FC<ExploreCardProps> = ({ card, delay }) => {
  const router = useRouter();

  return (
    <MotionBox
      className="explore-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      onClick={() => router.push(card.href)}
      sx={{
        position: "relative",
        color: "#FFFFFF",
        backgroundImage: `url(${card.imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        minHeight: { xs: 300, md: 320 },
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        // grow/shrink on hover is driven by the parent row
        flexGrow: 1,
        flexBasis: 0,
        transition: "flex-grow 600ms cubic-bezier(0.22, 1, 0.36, 1)",
        boxShadow: "0px 18px 45px rgba(15, 23, 42, 0.40)",
      }}
    >
      {/* Dark overlay for readability */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.5) 100%)",
          transition: "background 300ms ease-out",
        }}
      />

      <Stack
        spacing={1.5}
        sx={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          p: { xs: 3, md: 4 },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontSize: { xs: 30, md: 42 },
              lineHeight: 1.2,
              fontWeight: 800,
            }}
          >
            {card.title}
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontFamily: "var(--font-inter)",
              fontSize: { xs: 14, md: 17 },
              fontWeight: 400,
              lineHeight: 1.55,
              color: "rgba(249, 250, 251, 0.92)",
              maxWidth: 460,
            }}
          >
            {card.subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 1,
          }}
        >
          <Button
            onClick={(event) => {
              event.stopPropagation();
              router.push(card.href);
            }}
            sx={{
              borderRadius: 9999,
              px: 3.5,
              py: 1.25,
              fontSize: { xs: 13, md: 15 },
              fontWeight: 700,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              fontFamily: "var(--font-raleway)",
              color: "rgba(249,250,251,0.96)",
              border: "1px solid rgba(249,250,251,0.85)",
              backgroundColor: "rgba(0,0,0,0.18)",
              whiteSpace: "nowrap",
              transition:
                "background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out",
              "&:hover": {
                backgroundColor: "rgba(249,250,251,0.95)",
                borderColor: "transparent",
                color: "#0B101B",
              },
            }}
          >
            {card.cta}
          </Button>

          {card.note && (
            <Typography
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 12, md: 13 },
                fontWeight: 400,
                color: "rgba(249,250,251,0.8)",
              }}
            >
              {card.note}
            </Typography>
          )}
        </Box>
      </Stack>
    </MotionBox>
  );
};

const Explore: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        pt: { xs: 8, md: 14 },
      }}
    >
      {/* Heading */}
      <MotionTypography
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.08,
        }}
        sx={{
          textAlign: "center",
          fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: { xs: 34, md: 68 },
              lineHeight: 1.05,
              textTransform: "uppercase",
              color: (theme) => theme.palette.text.primary,
          maxWidth: "100%",
          mx: "auto",
          mb: { xs: 4, md: 6 },
          px: { xs: 2, md: 0 },
        }}
      >
        Shaping an{" "}
        <span
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffe8b2 0%, #d77a1e 60%, #1f1306 115%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          environment
        </span>
        <br />
        You don&apos;t have to <span style={{ color: GOLD }}>fight</span>{" "}
        against.
      </MotionTypography>

      {/* Card rows – hovering a card expands it while its neighbor shrinks */}
      <Stack
        spacing={3}
        sx={{
          width: "100%",
          maxWidth: 1440,
          px: { xs: 2, md: 0 },
          mx: "auto",
        }}
      >
        {CARD_ROWS.map((row, rowIndex) => (
          <Stack
            key={rowIndex}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              width: "100%",
              "&:hover .explore-card": {
                flexGrow: { md: 0.9 },
              },
              "& .explore-card:hover": {
                flexGrow: { md: 1.35 },
              },
            }}
          >
            {row.map((card, cardIndex) => (
              <ExploreCard
                key={card.id}
                card={card}
                delay={0.15 + (rowIndex * 2 + cardIndex) * 0.12}
              />
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Explore;
