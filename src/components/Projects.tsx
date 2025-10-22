import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

import defiImage from "../assets/letter-d.png";
import microserviceImage from "../assets/blockchain.png";
import trainImage from "../assets/trainround.png";
import foodImage from "../assets/delivery-man.png";
import aiChatImage from "../assets/bot.png";
import chatAppImage from "../assets/meetme.png";

// 🧠 Sample Projects Data
const projects = [
  {
    id: 1,
    name: "DEFI – Learning Management System",
    image: defiImage,
    description:
      "The DEFI (LMS) is a modern, full-featured web application designed to simplify online education for students, instructors, and administrators. It provides an intuitive platform for course creation, enrollment, stripe payments, and certification — all in one place.",
    technologies: [
      "ExpressJS",
      "ESM",
      "Node.js",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "MaterialUI",
      "Sendgrid",
      "MongoDB",
      "Stripe Payments",
      "JWT",
      "Fast2SMS",
      "vercel",
      "Render",
      "Redis",
      "BullMQ",
      "CRON-JOB",
    ],
    github:
      "https://github.com/VinayChoudhary24/Learning-management-App-Node-Express-MongoDB-Backend-",
    liveDemo: "https://defi-lms.vercel.app/",
  },
  {
    id: 2,
    name: "Ground Booking Platform – Microservices Architecture",
    image: microserviceImage,
    description:
      "A scalable real-time ground booking system enabling facility owners to manage grounds and users to book slots seamlessly. Built with Node.js, Express, MongoDB, and Redis using a microservices architecture for high performance and modularity.",
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "JWT",
      "AWS S3",
      "Microservices",
    ],
    github:
      "https://github.com/VinayChoudhary24/Real-Time-Ground-Booing-App-Microservices-Architecture",
    liveDemo: "",
  },
  {
    id: 3,
    name: "Train Booking App – React + Firebase",
    image: trainImage,
    description:
      "A modern train booking platform built with React, TypeScript, and Firebase. Features secure authentication, real-time train search, multi-passenger bookings, and responsive design powered by Redux Toolkit and Firestore.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Firebase Firestore",
      "Firebase Auth",
      "CSS Modules",
    ],
    github:
      "https://github.com/VinayChoudhary24/Train-Booking-App--React-Redux-Toolkit-Firestore",
    liveDemo: "https://defibooking.vercel.app/",
  },
  {
    id: 4,
    name: "Online Food order Application",
    image: foodImage,
    description:
      "Application for selling food online. Frontend build with Angular and Backend and Database Build with NodeJS, Express and MongoDB User Authentication with Firebase Auth, Integrated PayPal Payments. Click Over Image to order.",
    technologies: [
      "Angular",
      "TypeScript",
      "NgRx Effects",
      "Firebase Firestore",
      "Firebase Auth",
    ],
    github:
      "https://github.com/VinayChoudhary24/Angular-Food-Order-App-Frontend--TS--Leaflet--Bootstrap",
    liveDemo: "https://madani-services.vercel.app/",
  },
  {
    id: 5,
    name: "AI Chat Messenger – Next.js + LangChain",
    image: aiChatImage,
    description:
      "An intelligent chat messenger built with Next.js, Firebase for database, and LangChain for context-aware model. It provides real-time messaging and AI-powered responses using OpenAI and Claude, with context-aware memory for seamless, continuous conversations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "LangChain",
      "OpenAI",
      "Claude",
      "TailwindCSS",
    ],
    github: "https://github.com/VinayChoudhary24/chatGPT-Messenger-Nextjs",
    liveDemo: "",
  },
  {
    id: 6,
    name: "ChatterUp – Real-time Chat Application",
    image: chatAppImage,
    description:
      "A real-time chat application built with Node.js, Express, Socket.io, MongoDB, and React. Features instant messaging, typing indicators, live user presence, and persistent chat history with a clean responsive UI.",
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose",
      "React",
      "ES6 Modules",
    ],
    github: "https://github.com/VinayChoudhary24/ChatterUp",
    liveDemo: "", // add if deployed
  },
];

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        background:
          "linear-gradient(180deg, rgba(18,18,18,1) 100%, rgba(24,24,24,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            color="primary"
            textAlign="center"
            gutterBottom
          >
            Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 2, maxWidth: 600, mx: "auto" }}
          >
            A selection of my featured works showcasing creativity, scalability,
            and performance.
          </Typography>
        </motion.div>

        {/* Scrollable Projects Section */}
        <Box sx={{ position: "relative" }}>
          {/* Left Arrow */}
          {projects.length > 1 && (
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                left: { xs: -13, md: -20 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "rgba(247,171,10,0.1)",
                border: "2px solid #F7AB0A",
                color: "#F7AB0A",
                "&:hover": {
                  bgcolor: "#F7AB0A",
                  color: "#000",
                },
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}

          {/* Project Cards */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              overflowX: projects.length > 1 ? "auto" : "visible",
              overflowY: "hidden",
              gap: 4,
              pb: 2,
              overflow: "hidden",
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  scrollSnapAlign: "start",
                }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(18, 18, 18, 1)",
                    border: "1px solid rgba(247,171,10,0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    minHeight: { xs: "650px", sm: "500px", md: "450px" },
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      borderColor: "#F7AB0A",
                      boxShadow: "0 4px 8px rgba(247,171,10,0.2)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      gap: { xs: 2, md: 3 },
                      p: { xs: 4, md: 8 },
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Project Header */}
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems={{ xs: "flex-start", sm: "center" }}
                      spacing={2}
                      mb={2}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar
                          src={project.image}
                          alt={project.name}
                          sx={{
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            border: "2px solid #F7AB0A",
                            boxShadow: "0 0 15px rgba(247,171,10,0.3)",
                          }}
                        />
                        <Typography
                          variant="h5"
                          fontWeight={600}
                          color="#F7AB0A"
                        >
                          {project.name}
                        </Typography>
                      </Box>

                      {/* Links */}
                      <Stack direction="row" spacing={1}>
                        {project.github && (
                          <Button
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<GitHubIcon />}
                            variant="outlined"
                            size="small"
                            sx={{
                              borderColor: "#F7AB0A",
                              color: "#F7AB0A",
                              "&:hover": {
                                bgcolor: "#F7AB0A",
                                color: "#000",
                              },
                            }}
                          >
                            Code
                          </Button>
                        )}
                        {project.liveDemo && (
                          <Button
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<LaunchIcon />}
                            variant="contained"
                            size="small"
                            sx={{
                              bgcolor: "#F7AB0A",
                              color: "#000",
                              "&:hover": {
                                bgcolor: "rgba(247,171,10,0.9)",
                              },
                            }}
                          >
                            Live
                          </Button>
                        )}
                      </Stack>
                    </Stack>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: "rgba(247,171,10,0.1)",
                            color: "#F7AB0A",
                            border: "1px solid rgba(247,171,10,0.3)",
                            fontWeight: 500,
                            "&:hover": { bgcolor: "rgba(247,171,10,0.2)" },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* Right Arrow */}
          {projects.length > 1 && (
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                right: { xs: -13, md: -20 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "rgba(247,171,10,0.1)",
                border: "2px solid #F7AB0A",
                color: "#F7AB0A",
                "&:hover": {
                  bgcolor: "#F7AB0A",
                  color: "#000",
                },
                width: { xs: 40, md: 50 },
                height: { xs: 40, md: 50 },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
