// src/components/summit/SummitEventSection.tsx
"use client";

import type { FC, FormEvent } from "react";
import {
  Box,
  Stack,
  Typography,
  ButtonBase,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

import { useWaitlist } from "@/hooks/useWaitlist";

const SUMMIT_GRADIENT =
  "linear-gradient(135deg, #0f52ba 0%, #6a8ff0 55%, #b388eb 100%)";
// Gradient with a soft dark wash layered on top to keep white text legible.
const CARD_BG = `linear-gradient(180deg, rgba(2,6,23,0.30) 0%, rgba(2,6,23,0.50) 100%), ${SUMMIT_GRADIENT}`;
const HAIRLINE = "rgba(255,255,255,0.28)";

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const SummitEventSection: FC = () => {
  const { submitting, submitted, error, handleSubmit } = useWaitlist();

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    void handleSubmit(event);
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        px: { xs: 2, md: 4 },
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Single merged card with the summit gradient background */}
      <MotionBox
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1440,
          mx: "auto",
          overflow: "hidden",
          borderRadius: "28px",
          background: CARD_BG,
          color: "#ffffff",
          px: { xs: 3, md: 9 },
          py: { xs: 5, md: 8 },
          boxShadow: "0 40px 100px rgba(15,82,186,0.30)",
        }}
      >
        {/* Decorative glow */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)",
            pointerEvents: "none",
          }}
        />

        <Stack
          spacing={{ xs: 4, md: 6 }}
          sx={{ position: "relative", zIndex: 1 }}
        >
          {/* 1. Event details */}
          <Stack
            spacing={{ xs: 2.5, md: 3 }}
            alignItems="center"
            textAlign="center"
          >
            <MotionTypography
              variants={item}
              sx={{
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 13, md: 15 },
                fontWeight: 600,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              Event details
            </MotionTypography>

            <MotionTypography
              variants={item}
              sx={{
                fontFamily: "var(--font-montserrat)",
                fontSize: { xs: 32, md: 50 },
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              The Roundtable
            </MotionTypography>

            <Stack spacing={{ xs: 2.5, md: 3 }} sx={{ maxWidth: 900 }}>
              <MotionTypography
                variants={item}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                The world is producing more stress than people have
                infrastructure to handle. Medication gets prescribed.
                Productivity advice gets recycled. And the people who need
                support the most keep falling through the gaps.
              </MotionTypography>

              <MotionTypography
                variants={item}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Seena is bringing together doctors, neuroscientists, wellness
                practitioners, and community leaders for an honest conversation
                about what&apos;s really happening — and what real solutions
                look like.
                <br />
                No keynotes. No panels. A room of 20 people who work closest to
                this problem, talking openly about what they&apos;re seeing,
                what&apos;s failing, and where things need to go.
              </MotionTypography>

              <MotionTypography
                variants={item}
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                This is Session One. We&apos;re keeping it small on purpose.
              </MotionTypography>
            </Stack>
          </Stack>

          {/* Divider */}
          <MotionBox
            variants={item}
            sx={{ height: "1px", backgroundColor: HAIRLINE }}
          />

          {/* 2. Register */}
          <MotionBox
            variants={item}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              "&:hover .register-arrow": { transform: "translateX(4px)" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-montserrat)",
                fontSize: { xs: 34, md: 52 },
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              Register
            </Typography>

            <ButtonBase
              aria-label="Register"
              sx={{
                flexShrink: 0,
                width: { xs: 52, md: 64 },
                height: { xs: 52, md: 64 },
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                color: "#0f52ba",
                fontSize: { xs: 22, md: 26 },
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                transition: "transform 200ms ease-out",
                "&:hover": { transform: "scale(1.06)" },
              }}
            >
              <Box
                component="span"
                className="register-arrow"
                sx={{
                  display: "inline-flex",
                  transition: "transform 250ms ease-out",
                }}
              >
                <LuArrowRight />
              </Box>
            </ButtonBase>
          </MotionBox>

          {/* Divider */}
          <MotionBox
            variants={item}
            sx={{ height: "1px", backgroundColor: HAIRLINE }}
          />

          {/* 3. Subscribe */}
          <MotionBox
            variants={item}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: { xs: 3, md: 6 },
            }}
          >
            <Stack spacing={1} sx={{ maxWidth: 520, flexShrink: 0 }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: { xs: 24, md: 34 },
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Interested in more events like this?
              </Typography>
              <Typography
                sx={{
                  fontFamily: "var(--font-inter)",
                  fontSize: { xs: 15, md: 18 },
                  color: "rgba(255,255,255,0.78)",
                }}
              >
                Stay tuned with our latest events.
              </Typography>
            </Stack>

            <Box
              sx={{
                width: { xs: "100%", md: "auto" },
                flexGrow: { md: 1 },
                maxWidth: { md: 560 },
              }}
            >
              <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "stretch", sm: "center" },
                  gap: 1.5,
                }}
              >
                <TextField
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  disabled={submitting || submitted}
                  fullWidth
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "#ffffff",
                      "& fieldset": { borderColor: "rgba(255,255,255,0.5)" },
                      "&:hover fieldset": {
                        borderColor: "rgba(255,255,255,0.85)",
                      },
                      "&.Mui-focused fieldset": { borderColor: "#ffffff" },
                      "& input": {
                        paddingY: 1.6,
                        paddingX: 2.4,
                        fontFamily: "var(--font-inter)",
                        fontSize: 15,
                      },
                      "& input::placeholder": {
                        color: "rgba(255,255,255,0.6)",
                        opacity: 1,
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  disabled={submitting || submitted}
                  sx={{
                    flexShrink: 0,
                    borderRadius: "14px",
                    px: { xs: 4, sm: 5 },
                    py: 1.6,
                    fontFamily: "var(--font-montserrat)",
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    textTransform: "none",
                    color: "#0f1d3a",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                    whiteSpace: "nowrap",
                    transition:
                      "transform 200ms ease-out, box-shadow 200ms ease-out",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      transform: "translateY(-1px)",
                      boxShadow: "0 16px 40px rgba(0,0,0,0.32)",
                    },
                    "&.Mui-disabled": {
                      color: "rgba(15,29,58,0.7)",
                      backgroundColor: "rgba(255,255,255,0.85)",
                    },
                  }}
                >
                  {submitting
                    ? "Subscribing…"
                    : submitted
                    ? "Subscribed ✓"
                    : "Subscribe"}
                </Button>
              </Box>

              {error && (
                <Typography
                  sx={{
                    mt: 1.5,
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#FECACA",
                  }}
                >
                  {error}
                </Typography>
              )}
            </Box>
          </MotionBox>
        </Stack>
      </MotionBox>
    </Box>
  );
};

export default SummitEventSection;
