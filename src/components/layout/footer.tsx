// src/components/layout/Footer.tsx
"use client";

import React, { type ReactElement } from "react";
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import NextLink from "next/link";
import { motion } from "framer-motion";
import {
  MeshGradient,
} from "@mesh-gradient/react";
import { type MeshGradientOptions } from "@mesh-gradient/core"
import MoveHealGrow from "@/components/home/moveHealGrow";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

type SimpleLink = {
  label: string;
  href: string;
  icon?: ReactElement;
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
  { label: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
  { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
  { label: "TikTok", href: "https://www.tiktok.com", icon: <FaTiktok /> },
];

const MotionCard = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionColumn = motion.create(Box);
const MotionBox = motion.create(Box);

// Mesh gradient config with your palette
const meshOptions: MeshGradientOptions = {
  colors: ["#dbc081", "#D77A1E", "#D77A1E", "#2b1a07"],
  seed: 5,
  animationSpeed: 0.9,
  frequency: 0.00013
  // let the library handle motion; defaults are fine for a subtle animated mesh
};

const Footer: React.FC<FooterProps> = ({ transparentFooter = false }) => {
  return (
    <Box
    id="#early-access"
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
          pb: { xs: 6, md: 8 },
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
              backgroundColor: "#1F1306",
            }),
        }}
      >
        {/* Mesh gradient background via @mesh-gradient/react */}
        {!transparentFooter && (
          <MeshGradient
            options={meshOptions}
            style={{
              position: "absolute",
              inset: "-20%",
              width: "140%",
              height: "140%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}

        {/* Content wrapper (above the big word) */}
        <Box

          sx={{
            px: { xs: 0, md: 4 },
            mb: { xs: 16, md: 20 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <MoveHealGrow />

          <Box
            sx={{
              position: "relative",
              mt: { xs: 6, md: 8 },
              px: { xs: 3, md: 0 },
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
                sx={{ maxWidth: 600 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 28, md: 44 },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    fontFamily: "var(--font-bricolage)",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Where mental clarity
                  <br />
                  meets physical strength
                  <br />
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { xs: 14, md: 16 },
                    fontWeight: 300,
                    fontFamily: "var(--font-inter)",
                    maxWidth: { xs: "100%", md: 360 },
                    textAlign: { xs: "center", md: "left" },
                    px: { xs: 4, md: 0 },
                  }}
                >
                  Find your momentum, regain control, and move from surviving to thriving.
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
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            {link.icon} {link.label}
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

        {/* Big word – absolute, edge to edge, single line, always centered */}
        <MotionTypography
          aria-hidden="true"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.45,
          }}
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            fontSize: {
              xs: "10.5vw",
              sm: "11.5vw",
              md: "11.5vw",
              lg: "11.5vw",
              xl: "11.5vw",
            },
            fontWeight: 900,
            letterSpacing: { xs: 4, md: 6 },
            lineHeight: 0.9,
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
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
