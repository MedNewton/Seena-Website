// src/components/home/ModernOverdriveSection.tsx
"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { LuUnlink, LuArrowDown } from "react-icons/lu";

const GOLD = "#D8A24B";
const GOLD_GRADIENT =
  "linear-gradient(135deg, #F5E0A3 0%, #D8A24B 40%, #F8E6B8 100%)";

const problems = [
  {
    key: "disconnected",
    title: "Disconnected",
    description: "Different tools never move as one",
  },
  {
    key: "non-adaptive",
    title: "Non-adaptive",
    description: "Solutions ignore your state & capacity",
  },
  {
    key: "hard-to-sustain",
    title: "Hard to sustain",
    description: "When life gets heavy, it falls apart",
  },
  {
    key: "too-reactive",
    title: "Too reactive",
    description: "We respond after the damage",
  },
  {
    key: "done-alone",
    title: "Done alone",
    description: "Progress depends on willpower",
  },
] as const;

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const subtitleVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
} as const;

const goldWordVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
} as const;

// --- Marquee config ---

const MARQUEE_ROW_1_WORDS: string[] = [
  "Migraines",
  "Tension headaches",
  "TMJ/jaw pain",
  "Back pain",
  "Neck pain",
  "Fibromyalgia",
  "Joint pain",
  "Muscle tension",
];

const MARQUEE_ROW_2_WORDS: string[] = [
  "Chronic Fatigue Syndrome",
  "IBS",
  "Bloating",
  "Tinnitus",
  "Insomnia",
  "Brain fog",
  "Anxiety",
  "Depression",
];

// repeat the word lists so the looping track is long enough to fill the row
const MARQUEE_ROW_1_ITEMS: string[] = Array.from(
  { length: 5 },
  () => MARQUEE_ROW_1_WORDS
).flat();

const MARQUEE_ROW_2_ITEMS: string[] = Array.from(
  { length: 5 },
  () => MARQUEE_ROW_2_WORDS
).flat();


type MarqueeDirection = "left" | "right";

type MarqueeRowProps = {
  items: string[];
  direction: MarqueeDirection;
};

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction }) => {
  const content = items.join("   •   ");

  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: 999,
        backgroundColor: "transparent",
        border: "none",
        px: { xs: 0, md: 0 },
        py: { xs: 0.75, md: 1 },

        // Left fade / shadow
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: 32, md: 64 },
          pointerEvents: "none",
          background: `linear-gradient(to right, ${theme.palette.background.default}, rgba(15,23,42,0))`,
        },

        // Right fade / shadow
        "&::after": {
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { xs: 32, md: 64 },
          pointerEvents: "none",
          background: `linear-gradient(to left, ${theme.palette.background.default}, rgba(15,23,42,0))`,
        },
      })}
    >
      <motion.div
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
        }}
        animate={{
          x:
            direction === "left"
              ? ["0%", "-50%"] // right → left
              : ["-50%", "0%"], // left → right
        }}
        transition={{
          duration: 160,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontSize: { xs: 12, md: 14 },
            letterSpacing: 1.6,
            fontWeight: 500,
            textTransform: "uppercase",
            color: "rgba(248,250,252,0.85)",
          }}
        >
          {content}
        </Typography>
      </motion.div>
    </Box>
  );
};

// --- Problem cards ---

type Problem = (typeof problems)[number];

const DisconnectedIcon: React.FC = () => (
  <motion.div
    animate={{ rotate: [0, -8, 8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    style={{
      width: 48,
      height: 48,
      borderRadius: 12,
      backgroundImage: GOLD_GRADIENT,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#1A1208",
      fontSize: 20,
    }}
  >
    <LuUnlink />
  </motion.div>
);

const NonAdaptiveIcon: React.FC = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "6px", height: 48 }}>
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        animate={{ scaleY: [1, 0.55, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.25,
        }}
        style={{
          width: 9,
          height: 34,
          borderRadius: 999,
          backgroundColor: GOLD,
        }}
      />
    ))}
  </Box>
);

const HardToSustainIcon: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 48,
    }}
  >
    <Box
      sx={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        backgroundColor: GOLD,
        opacity: 0.55,
      }}
    />
    <Box
      sx={{
        width: 30,
        height: 30,
        borderRadius: "50%",
        border: `1.5px dashed ${GOLD}`,
        ml: "-10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: GOLD,
        fontSize: 16,
        overflow: "hidden",
      }}
    >
      <motion.div
        animate={{ y: [-2, 4, -2] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{ display: "flex" }}
      >
        <LuArrowDown />
      </motion.div>
    </Box>
  </Box>
);

const TooReactiveIcon: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      width: 48,
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      style={{
        position: "absolute",
        inset: 6,
        borderRadius: "50%",
        border: "1.5px solid transparent",
        borderTopColor: GOLD,
        borderRightColor: GOLD,
      }}
    />
    <Box
      sx={{
        width: 5,
        height: 5,
        borderRadius: "50%",
        backgroundColor: GOLD,
      }}
    />
  </Box>
);

const DoneAloneIcon: React.FC = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "7px", height: 48 }}>
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          backgroundColor: GOLD,
        }}
      />
    ))}
  </Box>
);

const problemIcons: Record<Problem["key"], React.ReactElement> = {
  disconnected: <DisconnectedIcon />,
  "non-adaptive": <NonAdaptiveIcon />,
  "hard-to-sustain": <HardToSustainIcon />,
  "too-reactive": <TooReactiveIcon />,
  "done-alone": <DoneAloneIcon />,
};

type ProblemCardProps = {
  problem: Problem;
  delay: number;
};

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        px: 2.5,
        py: 3.5,
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {problemIcons[problem.key]}

      <Typography
        sx={{
          mt: 2.5,
          fontFamily: "var(--font-montserrat)",
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: 0.2,
          color: (theme) => theme.palette.text.primary,
          mb: 1,
        }}
      >
        {problem.title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "var(--font-inter)",
          fontWeight: 300,
          fontSize: 13,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        {problem.description}
      </Typography>
    </MotionBox>
  );
};

const ModernOverdriveSection: React.FC = () => {
  const baseDelay = 0.9;
  const step = 0.16;

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: (theme) => theme.palette.background.default,
        pt: { xs: 10, md: 10 },
        pb: { xs: 10, md: 10 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: { xs: "auto", md: "80vh" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1440,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        <Stack
          spacing={{ xs: 4, md: 7 }}
          alignItems="center"
          textAlign="center"
        >
          {/* 1. Main title */}
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 600,
              fontSize: { xs: 32, md: 64 },
              lineHeight: 1.25,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Modern Life Rewards Overdrive
          </MotionTypography>

          {/* 2. Marquees */}
          <Stack
            spacing={1.5}
            sx={{
              width: "100%",
              px: { xs: 0, md: 2 },
            }}
          >
            <MarqueeRow
              items={MARQUEE_ROW_1_ITEMS}
              direction="left"
            />
            <MarqueeRow
              items={MARQUEE_ROW_2_ITEMS}
              direction="right"
            />
          </Stack>

          {/* 3. Subtitle with animated gold words */}
          <MotionTypography
            variant="h6"
            variants={subtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 18, md: 30 },
              lineHeight: 1.1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            <Box component="span" sx={{ display: "block" }}>
              Our body calls it{" "}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  variants={goldWordVariants}
                  style={{
                    display: "inline-block",
                    color: GOLD,
                  }}
                >
                  inflammation
                </motion.span>
              </Box>
            </Box>

            <Box component="span" sx={{ display: "block", mt: 0.5 }}>
              Our mind calls it{" "}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  overflow: "hidden",
                }}
              >
                <motion.span
                  variants={goldWordVariants}
                  style={{
                    display: "inline-block",
                    color: GOLD,
                  }}
                >
                  burnout
                </motion.span>
              </Box>
            </Box>
          </MotionTypography>

          {/* 4. Connecting vertical line */}
          <MotionBox
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
            sx={{
              width: 3,
              height: { xs: 90, md: 120 },
              borderRadius: 999,
              backgroundImage: GOLD_GRADIENT,
              mt: { xs: 1, md: 1.5 },
              mb: { xs: 1, md: 1.75 },
              transformOrigin: "top",
            }}
          />

          {/* 5. High performers lines */}
          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 18, md: 30 },
              lineHeight: 1.4,
              color: (theme) => theme.palette.text.primary,
              maxWidth: 900,
            }}
          >
            <Box component="span" sx={{ display: "block" }}>
              And for high performers, it becomes normal.
            </Box>
            <Box
              component="span"
              sx={{
                display: "block",
                mt: 1,
                fontSize: { xs: 15, md: 22 },
                fontWeight: 300,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              We learn to push through, to function while depleted, and to
              live in reaction instead of action.
            </Box>
          </MotionTypography>

          {/* 6. Solution title */}
          <MotionTypography
            variant="h4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.9,
            }}
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 600,
              fontSize: { xs: 32, md: 64 },
              lineHeight: 1.1,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            So we tried everything.
            <br />
            It still didn&apos;t{" "}
            <Box component="span" sx={{ color: GOLD }}>
              hold!
            </Box>
          </MotionTypography>

          {/* 7. Problem cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(5, 1fr)",
              },
              gap: 2.5,
              width: "100%",
              mt: { xs: 0, md: 4 },
            }}
          >
            {problems.map((problem, index) => (
              <ProblemCard
                key={problem.key}
                problem={problem}
                delay={baseDelay + index * step}
              />
            ))}
          </Box>

          {/* 8. Closing line */}
          <MotionTypography
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: baseDelay + problems.length * step,
            }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: { xs: 18, md: 30 },
              lineHeight: 1.4,
              color: (theme) => theme.palette.text.primary,
              maxWidth: 900,
            }}
          >
            Every solution we try works until it eventually breaks. None of
            them are built for the long game - real life.
          </MotionTypography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ModernOverdriveSection;
