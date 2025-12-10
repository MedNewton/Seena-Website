// src/components/home/Branches.tsx
"use client";

import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import liveImg from "@/assets/images/training1.webp";
import resetImg from "@/assets/images/retreat1.webp";
import dinnerImg from "@/assets/images/dinner.webp";

const GOLD = "#D8A24B";

type BranchCardProps = {
  title: string;
  description: string;
  href: string;
  image: StaticImageData;
  isTall?: boolean;
};

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);
const BranchCard: React.FC<BranchCardProps> = ({
  title,
  description,
  href,
  image,
  isTall = false,
  
}) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        minHeight: isTall
          ? { xs: 320, md: 380 }
          : { xs: 320, md: 340 },
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        height: "100% !important",
        cursor: "pointer",
        boxShadow: "0px 24px 60px rgba(15, 23, 42, 0.40)",
        "&:hover .branch-image": {
          transform: "scale(1.05)",
        },
        "&:hover .branch-overlay": {
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)",
        },
      }}
    >
      {/* Background image */}
      <Box
        className="branch-image"
        sx={{
          position: "absolute",
          inset: 0,
          transform: "scale(1.02)",
          transformOrigin: "center",
          transition: "transform 500ms ease-out",
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </Box>

      {/* Dark gradient overlay */}
      <Box
        className="branch-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.70) 100%)",
          transition: "background 350ms ease-out",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,

          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "end",
          height: "100%",
          px: { xs: 3, md: 4 },
          py: { xs: 3, md: 4 },
        }}
      >
        {/* Everything below is pushed to the bottom by mt:"auto" */}
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2, // spacing between text block and button
            height: "fit-content",
          }}
        >
          <Box>
            <Typography
              component="h3"
              sx={{
                fontFamily: "var(--font-bricolage)",
                fontSize: { xs: 22, md: 26 },
                fontWeight: 500,
                mb: 1.5,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                maxWidth: 400,
                fontFamily: "var(--font-inter)",
                fontSize: { xs: 13, md: 15 },
                lineHeight: 1.6,
                fontWeight: 300,
                color: "rgba(249,250,251,0.95)",
              }}
            >
              {description}
            </Typography>
          </Box>

          <MotionButton
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.01 }}
            onClick={() => {
              router.push(href);
            }}
            sx={{
              position: "relative",
              overflow: "hidden",
              alignSelf: "flex-start",
              borderRadius: 2,
              minWidth: { xs: 140, md: 170 },
              px: 0,
              py: 1.2,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 1.4,
              fontWeight: 600,
              fontFamily: "var(--font-montserrat)",
              color: "rgba(249,250,251,0.96)",
              borderWidth: 1.5,
              borderStyle: "solid",
              borderColor: GOLD,
              backgroundColor: "transparent",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              zIndex: 0,
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: "#996B41",
                backgroundImage:
                  "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%235A3520%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23E1C074%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23895333%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%2370432A%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23A06637%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                color: "#111827",
                borderRadius: "inherit", // keep same radius on hover
                transform: "translateY(100%)",
                transformOrigin: "bottom center",
                transition:
                  "transform 260ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease-out",
                opacity: 0.95,
                zIndex: -1,
              },
              "&:hover::before": {
                transform: "translateY(0%)",
                opacity: 1,
              },
              "&:hover": {
                borderColor: "transparent",
                color: "#0B101B",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              },
            }}
          >
            Explore
          </MotionButton>
        </Box>
      </Box>
    </Box>
  );
};

const Branches: React.FC = () => {
  return (
    <Box
      component="section"
      id="experiences"
      sx={{
        width: "100%",
        py: { xs: 8, md: 10 },
        scrollMarginTop: "120px",
        maxWidth: 1440,
        mx: "auto",
      }}
    >
      {/* Heading */}
      <MotionTypography
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.08,
        }}
        sx={{
          textAlign: "center",
          color: (theme) => theme.palette.text.primary,
          fontFamily: "var(--font-bricolage)",
          fontSize: { xs: 24, md: 32 },
          fontWeight: 300,
          maxWidth: 820,
          mx: "auto",
          mb: { xs: 4, md: 6 },
        }}
      >
        Helping you create an environment you don&apos;t have to
        <br />
        fight against.
      </MotionTypography>

      {/* Cards grid */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          mx: "auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: { xs: 3, md: 4 },
        }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.22,
          }}
        >
          <BranchCard
            title="Seena Live"
            description="Community fitness & wellness events in your city."
            image={liveImg}
            isTall
            href="/seena-live"
          />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.34,
          }}
        >
          <BranchCard
            title="Seena Reset"
            description="Local & international wellness retreats designed to rejuvenate you."
            image={resetImg}
            isTall
            href="/reset"
          />
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.46,
          }}
          sx={{
            gridColumn: { xs: "auto", md: "1 / -1" },
          }}
        >
          <BranchCard
            title="Seena Dinner Club"
            description="Exclusive invite-only events that bring together dynamic business leaders, innovators, and influencers in the wellness space."
            image={dinnerImg}
            href="/seena-dinner-club"
          />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Branches;
