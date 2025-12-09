// src/components/home/Branches.tsx
"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import liveImg from "@/assets/images/training1.webp";
import resetImg from "@/assets/images/retreat1.webp";
import dinnerImg from "@/assets/images/dinner.webp";

const GOLD = "#D8A24B";

type BranchCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isTall?: boolean;
};

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionButton = motion.create(Button);

const BranchCard: React.FC<BranchCardProps> = ({
  title,
  description,
  image,
  isTall = false,
}) => {
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
                backgroundColor: GOLD,
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
          maxWidth: 1280,
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
          />
        </MotionBox>
      </Box>
    </Box>
  );
};

export default Branches;
