// src/components/layout/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

import logo from "@/assets/images/Seena Logo-6.webp";
import NewButton from "@/components/ui/newButton";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick =
    (href: string) =>
      (event: React.MouseEvent<HTMLAnchorElement>): void => {
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

  const handleMobileNavClick =
    (href: string) =>
      (event: React.MouseEvent<HTMLDivElement | HTMLSpanElement>) => {
        event.preventDefault();
        setMobileMenuOpen(false);

        if (href.startsWith("#")) {
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
        } else {
          router.push(href);
        }
      };

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: { xs: 0, md: 16 },
          left: { xs: 0, md: "50%" },
          transform: { xs: "none", md: "translateX(-50%)" },
          zIndex: (theme) => theme.zIndex.appBar + 1,
          width: {
            xs: "100%",
            md: "min(900px, 80% - 32px)",
          },
          px: { xs: 0, md: 0 },
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
            borderRadius: { xs: 0, md: 999 },
            pl: 2,
            pr: 1,
            py: 1,
            overflow: "hidden",
            background: {
              xs: "unset",
              md: "linear-gradient(120deg, rgba(15,23,42,0.88), rgba(15,23,42,0.7))",
            },
            backdropFilter: "blur(22px)",
            WebkitBackdropFilter: "blur(22px)",
            border: { xs: "none", md: "1px solid rgba(148,163,184,0.35)" },
            boxShadow: "0 22px 55px rgba(0,0,0,0.55)",
            transition:
              "background 180ms ease-out, box-shadow 180ms ease-out, border-color 180ms ease-out, transform 180ms ease-out",
            "&:hover": {
              boxShadow: "0 24px 65px rgba(0,0,0,0.65)",
              transform: { md: "translateY(-1px)" },
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

          {/* Center: Nav links (desktop only) */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
              pt: 0.5,
              display: { xs: "none", md: "flex" },
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
                  fontSize: 14,
                  letterSpacing: 1.8,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontFamily: "var(--font-montserrat)",
                  color: "rgba(248,250,252,0.85)",
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

          {/* Right: CTA (desktop only) */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NewButton label="Join Us" onClick={() => router.push("/#join")} />
          </Box>

          {/* Mobile: Burger button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="Open navigation"
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                color: "#F9FAFB",
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Box>
        </MotionBox>
      </Box>

      {/* MOBILE FULL-SCREEN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MotionBox
            key="mobile-menu"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              duration: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            sx={{
              position: "fixed",
              inset: 0,
              zIndex: (theme) => theme.zIndex.modal + 1,
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
            }}
          >
            {/* Gradient + blur background */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.94))",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            />

            {/* Top bar inside menu (logo + close) */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2.5,
                pt: 1.5,
              }}
            >
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

              <IconButton
                aria-label="Close navigation"
                onClick={() => setMobileMenuOpen(false)}
                sx={{ color: "#F9FAFB" }}
              >
                <CloseRoundedIcon />
              </IconButton>
            </Box>

            {/* Center nav items */}
            <Stack
              spacing={2.5}
              sx={{
                position: "relative",
                zIndex: 1,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                px: 4,
              }}
            >
              {navItems.map((item, index) => (
                <React.Fragment key={item.href}>
                  <Typography
                    component="span"
                    onClick={handleMobileNavClick(item.href)}
                    sx={{
                      fontFamily: "var(--font-montserrat)",
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      fontSize: 20,
                      fontWeight: 500,
                      color: "rgba(248,250,252,0.92)",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </Typography>

                  {index < navItems.length - 1 && (
                    <Divider
                      sx={{
                        width: 80,
                        borderColor: GOLD,
                        opacity: 0.75,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Stack>

            {/* Bottom social icons */}
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "relative",
                zIndex: 1,
                pb: 4,
              }}
            >
              <MuiLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(248,250,252,0.9)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                <FaXTwitter />
              </MuiLink>
              <MuiLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(248,250,252,0.9)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                <FaInstagram />
              </MuiLink>
              <MuiLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "rgba(248,250,252,0.9)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                }}
              >
                <FaTiktok />
              </MuiLink>
            </Stack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
