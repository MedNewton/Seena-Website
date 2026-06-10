// src/components/home/FaqSection.tsx
"use client";

import React, { useState } from "react";
import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const GOLD = "#D8A24B";

type AnswerBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type FaqItem = {
  question: string;
  answer: AnswerBlock[];
};

type FaqTab = {
  label: string;
  items: FaqItem[];
};

const FAQ_TABS: FaqTab[] = [
  {
    label: "What is Seena?",
    items: [
      {
        question:
          "What is Seena — an app, a platform, a membership, or all three?",
        answer: [
          {
            type: "paragraph",
            text: "Seena is a wellness operating system. It combines personalized digital guidance, real-world experiences, and community into one connected ecosystem - built so you can perform at your pace without burning out. Not another app to manage, but a foundation to operate from.",
          },
        ],
      },
      {
        question:
          "What does my day-to-day experience actually look like inside Seena?",
        answer: [
          {
            type: "paragraph",
            text: "You start with a quick daily check in - a minute, maybe two. Your wearable data, if you own one, syncs into the system. Seena reads your current state and shapes what you see: guidance, recommended activities, experiences, and people worth connecting with. Some days that means pulling back while other days, it means pushing harder. The goal is always the same - better decisions for the life you're actually living.",
          },
        ],
      },
      {
        question: "How is Seena different from other solutions?",
        answer: [
          {
            type: "paragraph",
            text: "Most wellness tools solve one problem. A meditation app. A fitness tracker. A community platform. Seena connects all of it. Your guidance adapts to your current state, your community is curated and identity-verified, and your experiences are surfaced based on what's relevant to you right now. The difference is not the feature list. It's that the pieces actually work together.",
          },
        ],
      },
      {
        question: "Who is Seena built for?",
        answer: [
          {
            type: "paragraph",
            text: "Seena is built for people running hard — founders, operators, executives, and creatives who want to sustain their pace without burning out. If chronic stress is the cost of your ambition, Seena is built around that specific problem.",
          },
        ],
      },
    ],
  },
  {
    label: "How it works",
    items: [
      {
        question:
          "How does Seena know my current state and shape my experience based on that?",
        answer: [
          {
            type: "paragraph",
            text: "Seena builds your picture over time using what you actively share:",
          },
          {
            type: "list",
            items: [
              "Daily check-ins and self-assessments",
              "Goals and behavioral patterns you log",
              "Wearable data, if you connect a device",
            ],
          },
          {
            type: "paragraph",
            text: "The more you use it, the sharper it gets. The goal is not to score your performance. It's to give you a clearer read on how you're actually operating so you can act on it.",
          },
        ],
      },
      {
        question: "Do I need a wearable or specific device to use it?",
        answer: [
          {
            type: "paragraph",
            text: "No. Seena works through manual check-ins and behavioral inputs without any device. Connecting a wearable (Apple Watch, Oura, Garmin) gives Seena more to work with and sharpens the guidance over time. Start without one and add it later if you want.",
          },
        ],
      },
      {
        question: "How are Pulse, Circles, Live and Summit connected?",
        answer: [
          {
            type: "paragraph",
            text: "Four layers of the same ecosystem, each doing a distinct job:",
          },
          {
            type: "list",
            items: [
              "Pulse: reads your current state and builds personalized guidance around it",
              "Circles: connects you with a curated, identity-verified community based on shared interests and goals",
              "Live: surfaces real-world experiences and events relevant to where you are and what you need",
              "Summit: curated gatherings where the broader Seena community convenes around performance and wellbeing",
            ],
          },
        ],
      },
      {
        question: "How much time does using Seena require each day?",
        answer: [
          {
            type: "paragraph",
            text: "The daily check-in is one to two minutes. Everything beyond that fits around your schedule. Circles, Live, and Summit are there when you want them. Seena is built for consistency, not constant engagement.",
          },
        ],
      },
    ],
  },
  {
    label: "What you get",
    items: [
      {
        question: "What do I actually get when I join?",
        answer: [
          {
            type: "paragraph",
            text: "Access to the full Seena ecosystem. Depending on your membership tier:",
          },
          {
            type: "list",
            items: [
              "Personalized guidance and daily check-ins through Pulse",
              "Placement in a curated Circle based on your interests and goals",
              "Access to local experiences and events through Live",
              "Invitations to Summit events as they open",
            ],
          },
          {
            type: "paragraph",
            text: "The more layers you use, the more they reinforce each other.",
          },
        ],
      },
      {
        question: "Is there a free plan or trial?",
        answer: [
          {
            type: "paragraph",
            text: "Early access is free. You are joining as part of the founding cohort, before pricing is set. Seena will offer multiple tiers long-term, and early members hear about them before any public announcement.",
          },
        ],
      },
      {
        question:
          "Do I have to use all of Seena, or can I start with just one part?",
        answer: [
          {
            type: "paragraph",
            text: "No requirement. Most people start with one layer, either Pulse for guidance or Circles for community, and expand from there. Live and Summit come in when they are relevant. The layers reinforce each other over time, not all at once.",
          },
        ],
      },
      {
        question: "How long before I notice a real difference?",
        answer: [
          {
            type: "paragraph",
            text: "Awareness shifts within the first few weeks. You start recognizing patterns that were invisible before: how stress affects your decisions, where your energy actually goes, how recovery changes your output. The deeper changes come over months as habits, relationships, and experiences compound. Seena is not a quick fix.",
          },
        ],
      },
    ],
  },
  {
    label: "Early access",
    items: [
      {
        question: "What does early access include?",
        answer: [
          {
            type: "paragraph",
            text: "Early access gives you access to Seena before the public launch, including Pulse, personalized guidance, your daily feed, and Circle placement. Early members also help shape the product through feedback, receive priority access to new features and experiences, and get direct communication from the Seena team as the platform evolves.",
          },
        ],
      },
      {
        question: "When is Seena fully launching?",
        answer: [
          {
            type: "paragraph",
            text: "Seena is launching in phases throughout 2026. Early access opens first, followed by expanded Circle availability, Live experiences, and Summit events. Exact dates will be shared with waitlist members before each public announcement.",
          },
        ],
      },
      {
        question: "What happens after I join the waitlist?",
        answer: [
          {
            type: "paragraph",
            text: "You'll receive a confirmation immediately. As access opens in stages, you'll be notified by email with your access link and onboarding steps. There's nothing you need to do in the meantime, though referring others may improve your position in the queue because the founding cohort is intentionally limited.",
          },
        ],
      },
      {
        question: "Is early access free?",
        answer: [
          {
            type: "paragraph",
            text: "Yes. Joining the waitlist and receiving early access costs nothing. Early members join before pricing is finalized and will receive information about future membership plans before they're announced publicly.",
          },
        ],
      },
    ],
  },
  {
    label: "Privacy & trust",
    items: [
      {
        question: "What data does Seena collect about me?",
        answer: [
          {
            type: "paragraph",
            text: "Only what you actively provide: check-ins, assessments, goals, preferences, and in-app activity. If you connect a wearable, Seena accesses only the health data you authorize, like sleep, HRV, or activity levels. You control what you share and can modify or remove it at any time.",
          },
        ],
      },
      {
        question: "Who can see my data — my Circle, Seena staff, partners?",
        answer: [
          {
            type: "paragraph",
            text: "Your health data and state information are private by default. Other members see only what you choose to share. Seena staff work with aggregated, anonymized data for product improvement. Individual data is never shared with partners or third parties without your explicit consent.",
          },
        ],
      },
      {
        question: "Is my data shared with advertisers or third parties?",
        answer: [
          {
            type: "paragraph",
            text: "No. Seena does not sell personal data, run ad networks, or share member information with third-party advertisers. The business model is built on the value of the product, not on monetizing user data.",
          },
        ],
      },
      {
        question: "What research is Seena built on?",
        answer: [
          {
            type: "paragraph",
            text: "Seena is informed by research across behavioral psychology, neuroscience, stress management, recovery science, habit formation, community health, and human performance. The platform draws from established frameworks used to understand wellbeing, burnout, resilience, and sustainable growth. While Seena is not a medical product, its approach is grounded in evidence-based principles and designed to help people build healthier, more sustainable ways of living and performing.",
          },
        ],
      },
    ],
  },
];

const MotionTypography = motion.create(Typography);
const MotionBox = motion.create(Box);

type FaqAccordionProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "16px",
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
      }}
    >
      <ButtonBase
        onClick={onToggle}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 2.25, md: 2.75 },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: { xs: 16, md: 19 },
            color: (theme) => theme.palette.text.primary,
          }}
        >
          {item.question}
        </Typography>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ display: "flex", color: GOLD, flexShrink: 0 }}
        >
          <KeyboardArrowDownRoundedIcon />
        </motion.span>
      </ButtonBase>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <Stack
              spacing={1.5}
              sx={{
                px: { xs: 2.5, md: 3.5 },
                pb: { xs: 2.5, md: 3 },
              }}
            >
              {item.answer.map((block, blockIndex) =>
                block.type === "paragraph" ? (
                  <Typography
                    key={blockIndex}
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 300,
                      fontSize: { xs: 14, md: 16 },
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    {block.text}
                  </Typography>
                ) : (
                  <Stack
                    key={blockIndex}
                    component="ul"
                    spacing={0.75}
                    sx={{ m: 0, pl: 3 }}
                  >
                    {block.items.map((listItem, listIndex) => (
                      <Typography
                        key={listIndex}
                        component="li"
                        sx={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 300,
                          fontSize: { xs: 14, md: 16 },
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.78)",
                          "&::marker": { color: GOLD },
                        }}
                      >
                        {listItem}
                      </Typography>
                    ))}
                  </Stack>
                )
              )}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleTabChange = (index: number): void => {
    setActiveTab(index);
    setOpenQuestion(null);
  };

  const currentTab = FAQ_TABS[activeTab]!;

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        width: "100%",
        pt: { xs: 8, md: 14 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Stack
        spacing={{ xs: 3, md: 4 }}
        alignItems="center"
        sx={{
          maxWidth: 1160,
          mx: "auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {/* Title */}
        <Stack spacing={1.5} alignItems="center" textAlign="center">
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              fontFamily: "var(--font-bricolage)",
              fontWeight: 500,
              fontSize: { xs: 34, md: 56 },
              lineHeight: 1.15,
              color: (theme) => theme.palette.text.primary,
            }}
          >
            Frequently Asked Questions
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: { xs: 15, md: 19 },
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Everything you need to know about Seena
          </MotionTypography>
        </Stack>

        {/* Category tabs */}
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15,
          }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          {FAQ_TABS.map((tab, index) => {
            const isActive = index === activeTab;

            return (
              <ButtonBase
                key={tab.label}
                onClick={() => handleTabChange(index)}
                sx={{
                  borderRadius: 9999,
                  px: { xs: 2.5, md: 3.25 },
                  py: { xs: 1.25, md: 1.5 },
                  fontFamily: "var(--font-inter)",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: { xs: 14, md: 16 },
                  color: isActive ? "#1A1208" : "rgba(255,255,255,0.85)",
                  backgroundColor: isActive
                    ? GOLD
                    : "rgba(255,255,255,0.06)",
                  border: "1px solid",
                  borderColor: isActive
                    ? "transparent"
                    : "rgba(255,255,255,0.08)",
                  transition:
                    "background-color 250ms ease-out, color 250ms ease-out",
                  "&:hover": {
                    backgroundColor: isActive
                      ? GOLD
                      : "rgba(255,255,255,0.12)",
                  },
                }}
              >
                {tab.label}
              </ButtonBase>
            );
          })}
        </MotionBox>

        {/* Questions */}
        <Box sx={{ width: "100%", pt: { xs: 1, md: 2 } }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Stack spacing={2}>
                {currentTab.items.map((item, index) => (
                  <FaqAccordion
                    key={item.question}
                    item={item}
                    isOpen={openQuestion === index}
                    onToggle={() =>
                      setOpenQuestion(openQuestion === index ? null : index)
                    }
                  />
                ))}
              </Stack>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Still have questions */}
        <MotionBox
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.5,
            pt: { xs: 1, md: 2 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: { xs: 15, md: 18 },
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Still have questions?
          </Typography>

          <ButtonBase
            component="a"
            href="mailto:hello@seena.com"
            sx={{
              borderRadius: 9999,
              px: 4.5,
              py: 1.75,
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: { xs: 15, md: 17 },
              color: GOLD,
              border: `1px solid ${GOLD}`,
              backgroundColor: "transparent",
              transition:
                "background-color 250ms ease-out, color 250ms ease-out",
              "&:hover": {
                backgroundColor: "rgba(216,162,75,0.1)",
              },
            }}
          >
            Contact Us
          </ButtonBase>
        </MotionBox>
      </Stack>
    </Box>
  );
};

export default FaqSection;
