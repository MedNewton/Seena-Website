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
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

import logo from "@/assets/images/Seena Logo-6.webp";
import NewButton from "@/components/ui/newButton";
import { useRouter } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "PULSE", href: "/reset" },
  { label: "CIRCLES", href: "/circles" },
  { label: "SUMMITS", href: "/experiences" },
  { label: "LIVE", href: "/seena-live" },
  { label: "ABOUT", href: "/about" },
];

const HEADER_OFFSET = 96;
const MotionBox = motion.create(Box);
const GOLD = "#D8A24B";

const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleNavClick =
    (href: string) =>
    (event: React.MouseEvent<HTMLAnchorElement>): void => {
      if (!href.startsWith("#")) {
        // normal navigation
        return;
      }

      event.preventDefault();

      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const targetScrollTop = elementTop - HEADER_OFFSET;

      window.scrollTo({
        top: targetScrollTop,
        behavior: "smooth",
      });
    };

  const handleMobileNavClick =
    (href: string) =>
    (
      event: React.MouseEvent<HTMLDivElement | HTMLSpanElement>
    ): void => {
      event.preventDefault();
      setMobileMenuOpen(false);

      if (href.startsWith("#")) {
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
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
            md: "min(1300px, 90% - 32px)",
          },
          px: { xs: 0, md: 0 }
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: { xs: 0, md: 999 },
            pl: 2,
            pr: 1,
            py: 1,
            overflow: "visible", // allow dropdown to render outside
            // iOS-style liquid glass: translucent, heavily blurred + saturated,
            // with a specular highlight along the top edge
            background: {
              xs: "linear-gradient(120deg, rgba(30,32,38,0.45), rgba(20,22,28,0.35))",
              md: "linear-gradient(120deg, rgba(30,32,38,0.4), rgba(20,22,28,0.28))",
            },
            backdropFilter: "blur(28px) saturate(180%)",
            WebkitBackdropFilter: "blur(28px) saturate(180%)",
            border: { xs: "none", md: "1px solid rgba(255,255,255,0.16)" },
            boxShadow: {
              xs: "0 22px 55px rgba(0,0,0,0.45)",
              md: "inset 0 1px 0 0 rgba(255,255,255,0.22), inset 0 -1px 0 0 rgba(255,255,255,0.05), 0 22px 55px rgba(0,0,0,0.45)",
            },
            transition:
              "background 180ms ease-out, box-shadow 180ms ease-out, border-color 180ms ease-out, transform 180ms ease-out",
            "&:hover": {
              boxShadow: {
                md: "inset 0 1px 0 0 rgba(255,255,255,0.28), inset 0 -1px 0 0 rgba(255,255,255,0.06), 0 24px 65px rgba(0,0,0,0.55)",
              },
              transform: { md: "translateY(-1px)" },
            },
          }}
        >
          {/* Left: Logo / Brand */}
          <Box sx={{ position: "relative", width: 80, height: 40 }}>
            <MuiLink component={Link} href="/" underline="none">
              <Typography
                sx={{
                  fontFamily: "var(--font-raleway)",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontStyle: "italic",
                  letterSpacing: 1.75,
                  textTransform: "uppercase",
                }}
              >
                Seena
              </Typography>
            </MuiLink>
          </Box>

          {/* Center: Nav links (desktop only) */}
          <Stack
            direction="row"
            spacing={5}
            sx={{
              alignItems: "center",
              flex: 1,
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {navItems.map((item) => {
              const isAbout = item.label === "ABOUT";

              if (!isAbout) {
                return (
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
                );
              }

              // ABOUT with hover-open dropdown
              return (
                  <Box
                    key={item.href}
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                    sx={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="span"
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
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
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
                      <KeyboardArrowDownRoundedIcon
                        sx={{
                          fontSize: 18,
                          color: "#FFFFFF",
                          transform: aboutOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 200ms ease-out",
                        }}
                      />
                    </Typography>

                    {/* Invisible hover bridge spanning the gap below the header,
                        so the menu stays open while the cursor travels to it */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        pt: "28px",
                        zIndex: 10,
                        pointerEvents: aboutOpen ? "auto" : "none",
                      }}
                    >
                    <AnimatePresence>
                      {aboutOpen && (
                        <MotionBox
                          key="about-dropdown"
                          initial={{ opacity: 0, y: -6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.96 }}
                          transition={{
                            duration: 0.18,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          sx={{
                            position: "relative",
                            transformOrigin: "top center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 0.75,
                            px: 1.5,
                            py: 1.5,
                            borderRadius: 4,
                            minWidth: 180,
                            // same liquid glass treatment as the header bar
                            background:
                              "linear-gradient(120deg, rgba(30,32,38,0.5), rgba(20,22,28,0.38))",
                            backdropFilter: "blur(28px) saturate(180%)",
                            WebkitBackdropFilter: "blur(28px) saturate(180%)",
                            border: "1px solid rgba(255,255,255,0.16)",
                            boxShadow:
                              "inset 0 1px 0 0 rgba(255,255,255,0.22), inset 0 -1px 0 0 rgba(255,255,255,0.05), 0 18px 45px rgba(0,0,0,0.5)",
                          }}
                        >
                          {/* Glass caret pointing at the About link */}
                          <Box
                            aria-hidden
                            sx={{
                              position: "absolute",
                              top: -6.5,
                              left: "50%",
                              transform: "translateX(-50%) rotate(45deg)",
                              width: 12,
                              height: 12,
                              background: "rgba(30,32,38,0.6)",
                              backdropFilter: "blur(28px) saturate(180%)",
                              WebkitBackdropFilter:
                                "blur(28px) saturate(180%)",
                              borderLeft:
                                "1px solid rgba(255,255,255,0.16)",
                              borderTop:
                                "1px solid rgba(255,255,255,0.16)",
                            }}
                          />

                          <MuiLink
                            component={Link}
                            href="/about"
                            underline="none"
                            onClick={() => setAboutOpen(false)}
                            sx={{
                              fontFamily: "var(--font-montserrat)",
                              fontSize: 12,
                              textTransform: "uppercase",
                              letterSpacing: 1.4,
                              color: "rgba(248,250,252,0.95)",
                              width: "100%",
                              px: 1.25,
                              py: 1,
                              borderRadius: 2,
                              transition:
                                "background-color 180ms ease-out, transform 180ms ease-out",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.08)",
                                transform: "translateX(2px)",
                              },
                            }}
                          >
                            About Seena
                          </MuiLink>

                          <Divider
                            sx={{
                              alignSelf: "stretch",
                              borderColor: "rgba(255,255,255,0.16)",
                            }}
                          />

                          <MuiLink
                            component={Link}
                            href="/blog"
                            underline="none"
                            onClick={() => setAboutOpen(false)}
                            sx={{
                              fontFamily: "var(--font-montserrat)",
                              fontSize: 12,
                              textTransform: "uppercase",
                              letterSpacing: 1.4,
                              color: "rgba(248,250,252,0.95)",
                              width: "100%",
                              px: 1.25,
                              py: 1,
                              borderRadius: 2,
                              transition:
                                "background-color 180ms ease-out, transform 180ms ease-out",
                              "&:hover": {
                                backgroundColor: "rgba(255,255,255,0.08)",
                                transform: "translateX(2px)",
                              },
                            }}
                          >
                            Blog
                          </MuiLink>
                        </MotionBox>
                      )}
                    </AnimatePresence>
                    </Box>
                  </Box>
              );
            })}
          </Stack>

          {/* Right: CTAs (desktop only) */}
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              component="button"
              type="button"
              onClick={() => router.push("/login")}
              sx={{
                borderRadius: 9999,
                px: 4,
                height: 46,
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                fontFamily: "var(--font-montserrat)",
                color: "rgba(249,250,251,0.96)",
                backgroundColor: "transparent",
                border: `1px solid ${GOLD}`,
                cursor: "pointer",
                transition: "background-color 250ms ease-out",
                "&:hover": {
                  backgroundColor: "rgba(216,162,75,0.08)",
                },
              }}
            >
              Login
            </Box>

            <NewButton
              label="Get Access"
              onClick={() => router.push("/#early-access")}
            />
          </Stack>

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
            {/* Background */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.75))",
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

              {/* Extra Blog link for mobile */}
              <Typography
                component="span"
                onClick={handleMobileNavClick("/blog")}
                sx={{
                  mt: 1,
                  fontFamily: "var(--font-montserrat)",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 18,
                  fontWeight: 500,
                  color: "rgba(248,250,252,0.92)",
                  cursor: "pointer",
                }}
              >
                Blog
              </Typography>
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
