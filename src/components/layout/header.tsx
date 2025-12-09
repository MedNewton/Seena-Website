// src/components/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

import logo from "@/assets/images/Seena Logo-6.webp";
import JoinUsButton from "@/components/ui/joinUsButton";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "APP", href: "#app" },
  { label: "EXPERIENCES", href: "#experiences" },
  { label: "CIRCLES", href: "#circles" },
  { label: "SCREENING", href: "/screening" },
  { label: "ABOUT", href: "/about" },
];

const HEADER_OFFSET = 96; // px offset so section isn't hidden under header

// Framer Motion v11+
const MotionBox = motion.create(Box);

const GOLD = "#D8A24B";

const Header: React.FC = () => {
  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>): void => {
      if (!href.startsWith("#")) {
        // normal navigation for real routes
        return;
      }

      event.preventDefault();

      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (!element) {
        return;
      }

      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + window.scrollY;
      const targetScrollTop = elementTop - HEADER_OFFSET;

      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    };

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: (theme) => theme.zIndex.appBar + 1,
        width: "min(900px, 80% - 32px)",
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.2, // delay after page load
        }}
        sx={(theme) => ({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 999,
          pl: 2,
          pr: 1,
          py: 1,
          overflow: "hidden",
          // darker, more consistent glass so links stay readable on dark hero
          background:
            "linear-gradient(120deg, rgba(15,23,42,0.85), rgba(15,23,42,0.65))",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(148,163,184,0.35)", // subtle slate border
          boxShadow: "0 22px 55px rgba(0,0,0,0.55)",
          transition:
            "background 180ms ease-out, box-shadow 180ms ease-out, border-color 180ms ease-out, transform 180ms ease-out",
          "&:hover": {
            boxShadow: "0 24px 65px rgba(0,0,0,0.65)",
            transform: "translateY(-1px)",
          },
        })}
      >
        {/* Left: Logo / Brand */}
        <Box sx={{ position: "relative", width: 80, height: 40 }}>
          <MuiLink component={Link} href="/">
            <Image
              src={logo}
              alt="Seena Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </MuiLink>
        </Box>

        {/* Center: Nav links */}
        <Stack
          direction="row"
          spacing={3.5}
          sx={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            pt: 0.5,
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.href}
              component={Link}
              href={item.href}
              onClick={handleNavClick(item.href)}
              sx={(theme) => ({
                position: "relative",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: 1.8,
                fontWeight: 500,
                textTransform: "uppercase",
                fontFamily: "var(--font-montserrat)",
                color: "rgba(248,250,252,0.85)", // light slate/white
                pb: 0.5,
                transition: "color 160ms ease-out",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: 2,
                  borderRadius: 999,
                  backgroundColor: GOLD,
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 190ms ease-out",
                },
                "&:hover": {
                  color: theme.palette.common.white,
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              })}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        {/* Right: CTA */}
        <JoinUsButton />
      </MotionBox>
    </Box>
  );
};

export default Header;
