// src/old/layout/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Box, Stack, Typography } from "@mui/material";
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

const MotionBox = motion(Box);

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
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 999,
          pl: 2,
          pr: 1,
          py: 1,
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transition:
            "background 180ms ease-out, box-shadow 180ms ease-out, backdrop-filter 180ms ease-out, border-color 180ms ease-out",
        }}
      >
        {/* Left: Logo / Brand */}
        <Box sx={{ position: "relative", width: 80, height: 40 }}>
          <Image src={logo} alt="Seena Logo" fill style={{ objectFit: "contain" }} />
        </Box>

        {/* Center: Nav links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            pt: 1,
          }}
        >
          {navItems.map((item) => (
            <Typography
              key={item.href}
              component={Link}
              href={item.href}
              onClick={handleNavClick(item.href)}
              sx={{
                position: "relative",
                textDecoration: "none",
                fontSize: 14,
                letterSpacing: 1.2,
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#111827",
                pb: 0.5,
                transition: "color 150ms ease-out",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: 2,
                  borderRadius: 999,
                  backgroundColor: "#F9733C",
                  transform: "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 180ms ease-out",
                },
                "&:hover": {
                  color: "#4B5563",
                },
                "&:hover::after": {
                  transform: "scaleX(1)",
                },
              }}
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
