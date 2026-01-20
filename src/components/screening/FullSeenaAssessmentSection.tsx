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

import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";

const FullSeenaAssessmentSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const items = [
    {
      icon: <AssignmentOutlinedIcon sx={{ fontSize: 22, color: "#111827" }} />,
      title: "Comprehensive Coverage",
      desc: "8 wellness dimensions with 120+ evidence-based questions",
    },
    {
      icon: <AccessTimeOutlinedIcon sx={{ fontSize: 22, color: "#111827" }} />,
      title: "30–45 Minutes",
      desc: "Take at your own pace with the ability to save and resume",
    },
    {
      icon: <BarChartOutlinedIcon sx={{ fontSize: 22, color: "#111827" }} />,
      title: "Personalized Insights",
      desc: "Receive detailed results with tailored recommendations",
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: 1280,
        mx: "auto",
        mt: { xs: 2, md: 4 },
        mb: { xs: 6, md: 10 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Stack
        spacing={isMobile ? 3 : 4}
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        <Typography
          component="h2"
          sx={{
            fontFamily: "var(--font-bricolage, system-ui)",
            fontSize: { xs: 32, md: 46 },
            fontWeight: 500,
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Full Seena Assessment
        </Typography>

        <Typography
          sx={{
            fontFamily: "var(--font-inter, system-ui)",
            fontSize: { xs: 14, md: 15 },
            lineHeight: 1.8,
            color: "#ffffff",
            maxWidth: 640,
          }}
        >
          Get a comprehensive understanding of your wellness across all
          dimensions. Our scientifically-backed assessment evaluates your
          psychological, physical, cognitive, social, and lifestyle factors to
          create a personalized wellness roadmap.
        </Typography>

        {/* Bullet rows */}
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Stack
            spacing={2.5}
            sx={{
              width: "100%",
              maxWidth: 460, // controls the bullet block width
              alignItems: "stretch",
            }}
          >
            {/* Row 1 */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "44px 1fr",
                columnGap: 2, // ✅ close to the text
                alignItems: "center",
              }}
            >
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
                <AssignmentOutlinedIcon sx={{ fontSize: 22, color: "#111827" }} />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.25 }}>
                  Comprehensive Coverage
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#fff", lineHeight: 1.6, mt: 0.3 }}>
                  8 wellness dimensions with 120+ evidence-based questions
                </Typography>
              </Box>
            </Box>

            {/* Row 2 */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "44px 1fr",
                columnGap: 2,
                alignItems: "center",
              }}
            >
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
                <AccessTimeOutlinedIcon sx={{ fontSize: 22, color: "#111827" }} />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.25 }}>
                  30–45 Minutes
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#fff", lineHeight: 1.6, mt: 0.3 }}>
                  Take at your own pace with the ability to save and resume
                </Typography>
              </Box>
            </Box>

            {/* Row 3 */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "44px 1fr",
                columnGap: 2,
                alignItems: "center",
              }}
            >
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
                <BarChartOutlinedIcon sx={{ fontSize: 22, color: "#111827" }} />
              </Box>

              <Box sx={{ textAlign: "left" }}>
                <Typography sx={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.25 }}>
                  Personalized Insights
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#fff", lineHeight: 1.6, mt: 0.3 }}>
                  Receive detailed results with tailored recommendations
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>



        {/* CTA */}
        <Button
          sx={{
            mt: { xs: 2, md: 3 },
            borderRadius: 9999,
            px: { xs: 4, md: 5 },
            py: 1.6,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            backgroundColor: "#ffffff",
            color: "#000000",
            "&:hover": {
              backgroundColor: "#000000",
              color: "#ffffff",
              boxShadow: "0 12px 34px rgba(15,23,42,0.45)",
            },
          }}
        >
          Start full assessment
        </Button>
      </Stack>
    </Box>
  );
};

export default FullSeenaAssessmentSection;
