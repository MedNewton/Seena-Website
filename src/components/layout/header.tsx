// src/old/layout/Header.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";

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

const MAX_SCROLL_FOR_EFFECT = 160; // px until we're "fully frosted"
const HEADER_OFFSET = 96; // px offset so section isn't hidden under header

const Header: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const y = window.scrollY;
      const next = Math.min(Math.max(y / MAX_SCROLL_FOR_EFFECT, 0), 1);
      setScrollProgress(next);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Interpolate values based on scrollProgress (0 → 1)
  const blur = 4 + (24 - 4) * scrollProgress; // 4px → 24px
  const bgAlphaStart = 0.96 + (0.5 - 0.96) * scrollProgress; // 0.96 → 0.50
  const bgAlphaEnd = 0.92 + (0.55 - 0.92) * scrollProgress; // 0.92 → 0.55
  const borderAlpha = 0.3 + (0.5 - 0.3) * scrollProgress; // 0.3 → 0.5
  const shadowAlpha = 0.16 + (0.22 - 0.16) * scrollProgress; // 0.16 → 0.22

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
        width: "min(1280px, 100% - 32px)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 999,
          px: 3,
          py: 1.5,
          overflow: "hidden",
          boxShadow: `0px 18px 40px rgba(15, 23, 42, ${shadowAlpha})`,
          background: `linear-gradient(135deg, rgba(255,255,255,${bgAlphaStart}), rgba(255,255,255,${bgAlphaEnd}))`,
          border: `1px solid rgba(255, 255, 255, ${borderAlpha})`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          transition:
            "background 180ms ease-out, box-shadow 180ms ease-out, backdrop-filter 180ms ease-out, border-color 180ms ease-out",
        }}
      >
        {/* Left: Logo / Brand */}
        <Typography
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            fontWeight: 500,
            fontSize: 24,
            color: "#111827",
          }}
        >
          Seena
        </Typography>

        {/* Center: Nav links */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
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
                color: "#4B5563",
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
                  color: "#111827",
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
        <Button
          component={Link}
          href="/join"
          sx={{
            borderRadius: 999,
            px: 4,
            py: 1.2,
            fontWeight: 600,
            letterSpacing: 1,
            fontSize: 14,
            textTransform: "uppercase",
            color: "#FFFFFF",
            backgroundColor: "#F9733C",
            boxShadow: "0px 2px 10px 2px rgba(249, 115, 60, 0.4)",
            "&:hover": {
              backgroundColor: "#fb6b2d",
              boxShadow: "0px 2px 10px 2px rgba(249, 115, 60, 0.4)",
            },
          }}
        >
          Join us
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
