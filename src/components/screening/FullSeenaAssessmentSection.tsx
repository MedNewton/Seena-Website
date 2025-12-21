// src/components/screening/FullSeenaAssessmentSection.tsx
"use client";

import type { FC } from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

import assessmentImg from "@/assets/images/assessement.webp"; // <- put your mental-health image here

const FullSeenaAssessmentSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        mt: { xs: 1, md: 2 },
        mb: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1.1fr) minmax(0, 1.1fr)",
          },
          columnGap: { xs: 0, md: 6 },
          rowGap: { xs: 4, md: 0 },
          alignItems: "center",
        }}
      >
        {/* Left column – text and bullets */}
        <Stack
          spacing={isMobile ? 3 : 4}
          sx={{
            pr: { xs: 0, md: 4 },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-bricolage, system-ui)",
              fontSize: { xs: 32, md: 46 },
              fontWeight: 500,
              lineHeight: 1.1,
            }}
          >
            Full Seena Assessment
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--font-inter, system-ui)",
              fontSize: { xs: 14, md: 15 },
              lineHeight: 1.8,
              color: theme.palette.text.secondary,
              maxWidth: 560,
            }}
          >
            Get a comprehensive understanding of your wellness across all
            dimensions. Our scientifically-backed assessment evaluates your
            psychological, physical, cognitive, social, and lifestyle factors to
            create a personalized wellness roadmap.
          </Typography>

          {/* Bullet rows */}
          <Stack spacing={2.75}>
            {/* Row 1 */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "#F4F4F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <AssignmentOutlinedIcon
                  sx={{ fontSize: 22, color: "#111827" }}
                />
              </Box>
              <Stack spacing={0.3}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Comprehensive Coverage
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                  }}
                >
                  8 wellness dimensions with 120+ evidence-based questions
                </Typography>
              </Stack>
            </Stack>

            {/* Row 2 */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "#F4F4F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: 22, color: "#111827" }}
                />
              </Box>
              <Stack spacing={0.3}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  30–45 Minutes
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Take at your own pace with the ability to save and resume
                </Typography>
              </Stack>
            </Stack>

            {/* Row 3 */}
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "#F4F4F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <BarChartOutlinedIcon
                  sx={{ fontSize: 22, color: "#111827" }}
                />
              </Box>
              <Stack spacing={0.3}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                  }}
                >
                  Personalized Insights
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Receive detailed results with tailored recommendations
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          {/* CTA Button */}
          <Box sx={{ mt: { xs: 1, md: 2 } }}>
            <Button
              sx={{
                borderRadius: 9999,
                px: { xs: 4, md: 5 },
                py: 1.6,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 1.4,
                textTransform: "uppercase",
                backgroundColor: "#000000",
                color: "#FFFFFF",
                boxShadow: "0 10px 30px rgba(15,23,42,0.35)",
                "&:hover": {
                  backgroundColor: "#000000",
                  opacity: 0.9,
                  boxShadow: "0 12px 34px rgba(15,23,42,0.45)",
                },
              }}
            >
              Start full assessment
            </Button>
          </Box>
        </Stack>

        {/* Right column – image card */}
        <Box
          sx={{
            mt: { xs: 4, md: 0 },
            borderRadius: 5,
            overflow: "hidden",
            minHeight: { xs: 220, md: 320 },
          }}
        >
          <Image
            src={assessmentImg}
            alt="Mental health tiles"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            priority={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FullSeenaAssessmentSection;
