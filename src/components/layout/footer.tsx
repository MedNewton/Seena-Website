// src/components/layout/Footer.tsx
"use client";

import React from "react";
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import NextLink from "next/link";
import { motion } from "framer-motion";
import MoveHealGrow from "@/components/home/moveHealGrow";

type SimpleLink = {
  label: string;
  href: string;
};

type FooterProps = {
  transparentFooter?: boolean;
};

const navigationLinks: SimpleLink[] = [
  { label: "Home", href: "/" },
  { label: "Digital Guidance", href: "/app" },
  { label: "Real Experiences", href: "/experiences" },
  { label: "Seena Circles", href: "/circles" },
  { label: "Screening Tools", href: "/screening" },
];

const morePagesLinks: SimpleLink[] = [
  { label: "Seena Live", href: "/live" },
  { label: "Seena Reset", href: "/reset" },
  { label: "Seena Dinner Club", href: "/dinner-club" },
  { label: "About Seena", href: "/about" },
  { label: "Blog", href: "/blog" },
];

const socialLinks: SimpleLink[] = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://www.tiktok.com" },
];

const MotionCard = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionColumn = motion.create(Box);
const MotionBox = motion.create(Box);

const Footer: React.FC<FooterProps> = ({ transparentFooter = false }) => {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        px: { xs: 2, md: 3 },
        color: "#FFFFFF",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <MotionCard
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        sx={{
          position: "relative",
          maxWidth: 1440,
          mx: "auto",
          borderRadius: { xs: 4, md: 6 },
          overflow: "hidden",
          pt: { xs: 6, md: 10 },
          pb: 0, // so the big word can touch the bottom
          boxShadow: {
            xs: "0px 18px 45px rgba(15,23,42,0.35)",
            md: "0px 30px 80px rgba(15,23,42,0.55)",
          },
          ...(transparentFooter
            ? {
                border: "0.8px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.05)",
                backgroundImage: "none",
              }
            : {
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "repeat",
                backgroundImage:
                  'url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%221000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23D77A1E%22 d=%22M-500-500h2000v2000H-500z%22%2F%3E%3Cpath d=%22m67.896-418.794-727 330 67 474 785-119%22 fill=%22%23FFE8B2%22%2F%3E%3Cpath d=%22M480-183 206 105l520 527 291-693%22 fill=%22%23D77A1E%22%2F%3E%3Cpath d=%22m329.94 1003.18-785 28 427 989 543-236%22 fill=%22%23FFE8B2%22%2F%3E%3Cpath d=%22m1158.299-460.12-435 760 143 129 699-791%22 fill=%22%231f1306%22%2F%3E%3Cpath d=%22m1009.836 770.776-518 107 69 767 851-678%22 fill=%22%231F1306%22%2F%3E%3Cpath d=%22m1473.463 695.254-811 819 589 60 301-132%22 fill=%22%231F1306%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-91%22 y=%22-91%22 width=%221182%22 height=%221182%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%2291%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")',
              }),
        }}
      >
        {/* Content wrapper with horizontal padding */}
        <Box sx={{ px: { xs: 3, md: 4 } }}>
          {/* Top “Move / Heal / Grow” row */}
          <MoveHealGrow />

          {/* Main content grid */}
          <Box
            sx={{
              position: "relative",
              mt: { xs: 6, md: 8 },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "minmax(0, 2.2fr) minmax(0, 3fr)",
                },
                gap: { xs: 6, md: 10 },
                alignItems: "flex-start",
              }}
            >
              {/* Left: main text */}
              <MotionBox
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                sx={{ maxWidth: 420 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 44 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    fontFamily: "var(--font-bricolage)",
                  }}
                >
                  Master Your
                  <br />
                  Inner World
                  <br />
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: 300,
                    fontFamily: "var(--font-inter)",
                    maxWidth: 256,
                  }}
                >
                  Find your momentum, regain control, and move from surviving to
                  thriving.
                </Typography>
              </MotionBox>

              {/* Right: link columns */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                  },
                  gap: { xs: 4, md: 6 },
                }}
              >
                {/* Navigation */}
                <MotionColumn
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.18,
                  }}
                >
                  <Stack spacing={1.5}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        mb: 1,
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      Navigation
                    </Typography>
                    {navigationLinks.map((link) => (
                      <MuiLink
                        key={link.label}
                        component={NextLink}
                        href={link.href}
                        underline="none"
                        sx={{
                          fontSize: 14,
                          color: "rgba(255,255,255,0.9)",
                          "&:hover": { color: "#FFFFFF" },
                        }}
                      >
                        {link.label}
                      </MuiLink>
                    ))}
                  </Stack>
                </MotionColumn>

                {/* More Pages */}
                <MotionColumn
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.26,
                  }}
                >
                  <Stack spacing={1.5}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        mb: 1,
                        fontFamily: "var(--font-montserrat)",
                      }}
                    >
                      More Pages
                    </Typography>
                    {morePagesLinks.map((link) => (
                      <MuiLink
                        key={link.label}
                        component={NextLink}
                        href={link.href}
                        underline="none"
                        sx={{
                          fontSize: 14,
                          color: "rgba(255,255,255,0.9)",
                          "&:hover": { color: "#FFFFFF" },
                        }}
                      >
                        {link.label}
                      </MuiLink>
                    ))}
                  </Stack>
                </MotionColumn>

                {/* Contact + Social */}
                <MotionColumn
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.34,
                  }}
                >
                  <Stack spacing={2}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          mb: 1,
                          fontFamily: "var(--font-montserrat)",
                        }}
                      >
                        Contact
                      </Typography>
                      <MuiLink
                        href="mailto:hello@seena.com"
                        underline="none"
                        sx={{
                          fontSize: 14,
                          color: "rgba(255,255,255,0.9)",
                          "&:hover": { color: "#FFFFFF" },
                        }}
                      >
                        hello@seena.com
                      </MuiLink>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          mb: 1,
                          fontFamily: "var(--font-montserrat)",
                        }}
                      >
                        Social Media
                      </Typography>
                      <Stack spacing={0.5}>
                        {socialLinks.map((link) => (
                          <MuiLink
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            underline="none"
                            sx={{
                              fontSize: 14,
                              color: "rgba(255,255,255,0.9)",
                              "&:hover": { color: "#FFFFFF" },
                            }}
                          >
                            {link.label}
                          </MuiLink>
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </MotionColumn>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Big low-contrast word spanning across the full card */}
        <MotionTypography
          aria-hidden="true"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.45,
          }}
          sx={{
            mt: { xs: 6, md: 18 },
            ml: 1,
            fontSize: { xs: 56, md: 174 },
            fontWeight: 500,
            letterSpacing: { xs: 6, md: 12 },
            lineHeight: 0.7,
            textTransform: "uppercase",
            width: "100%",
            textAlign: "center",
            background: "linear-gradient(90deg, #5B9EC9 0%, #FFFFFF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ACTIVE SPIRITS
        </MotionTypography>
      </MotionCard>
    </Box>
  );
};

export default Footer;
