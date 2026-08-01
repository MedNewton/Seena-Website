// src/components/home/SeenaDifferentSection.tsx
"use client";

import React, { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";

const GOLD = "#D69134";

const features = [
  {
    key: "state",
    eyebrow: "State",
    title: "Knows where you are",
    description:
      "Not where you were last week. Guidance that shifts with your energy, pressure, and capacity - right now, not on your best day.",
  },
  {
    key: "circles",
    eyebrow: "Circles",
    title: "People who get it",
    description:
      "The room makes the habit easier. A community built around people living the same tension - not just talking about fixing it.",
  },
  {
    key: "environment",
    eyebrow: "Environment",
    title: "Things you'll actually do",
    description:
      "Fits the week you have, not an ideal version of it. Actions that stay in place when life gets loud again.",
  },
] as const;

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const SeenaDifferentSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Border draws itself in as the card scrolls into view
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 0.95", "start 0.3"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <Box
      component="section"
      id="seena-different"
      sx={{
        width: "100%",
        px: { xs: 2, md: 4 },
        pt: { xs: 3, md: 6 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Box
        ref={cardRef}
        sx={{
          position: "relative",
          maxWidth: 1440,
          mx: "auto",
          borderRadius: "28px",
          border: "1px solid rgba(214,145,52,0.22)",
          background:
            "linear-gradient(135deg, #c98a3e 0%, #834314 48%, #130b03 100%)",
          overflow: "hidden",
          px: { xs: 3, md: 10 },
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Scroll-animated border */}
        <Box
          component="svg"
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <motion.rect
            x="1"
            y="1"
            rx="27"
            ry="27"
            fill="none"
            stroke={GOLD}
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              pathLength,
              filter: "drop-shadow(0 0 6px rgba(214,145,52,0.45))",
            }}
          />
        </Box>

        <Stack
          spacing={{ xs: 2.5, md: 3 }}
          alignItems="center"
          textAlign="center"
          sx={{ position: "relative", zIndex: 1 }}
        >
          {/* Eyebrow */}
          <MotionTypography
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              fontFamily: "var(--font-raleway)",
              fontWeight: 800,
              fontSize: { xs: 14, md: 18 },
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Seena is different
          </MotionTypography>

          {/* Title */}
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            sx={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: { xs: 34, md: 64 },
              lineHeight: 1.15,
              textTransform: "uppercase",
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Built to adapt to<br /> life&apos;s ups and downs.
          </MotionTypography>

          {/* Subtitle */}
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: { xs: 18, md: 24 },
              lineHeight: 1.55,
            }}
          >
            Seena brings together state-aware guidance, the right people
            around you, and actions you can actually take —
            <br />
            so performance, recovery, and well-being stop pulling in different
            directions.
          </MotionTypography>

          {/* Feature columns */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 5, md: 6 },
              width: "100%",
              pt: { xs: 3, md: 6 },
            }}
          >
            {features.map((feature, index) => (
              <MotionBox
                key={feature.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + index * 0.15,
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: { xs: 0, md: 2 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 700,
                    fontSize: { xs: 18, md: 22 },
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  {feature.eyebrow}
                </Typography>

                {/* Glowing gold dot */}
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      backgroundColor: "#FFF3DA",
                      boxShadow: "0 0 18px rgba(255,243,218,0.75)",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    mt: 2.5,
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 700,
                    fontSize: { xs: 22, md: 26 },
                    color: (theme) => theme.palette.text.primary,
                    mb: 1.25,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                    fontSize: { xs: 14, md: 16 },
                    lineHeight: 1.7,
                    color: "rgba(255,255,255,0.72)",
                    maxWidth: 360,
                  }}
                >
                  {feature.description}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default SeenaDifferentSection;
