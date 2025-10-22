import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    company: "eatOS POS Inc.",
    companyLogo: "../../src/assets/eatOS Emblem - Pink - Png.png",
    position: "Full-Stack Developer",
    duration: "Mar 2023 - Present",
    location: "Remote",
    description:
      "At eatOS, we are redefining restaurant management with technology designed for the future. Our innovative software features are crafted with tomorrow in mind because we believe that yesterday's and today's technology falls short of meeting the needs of restaurants striving to delight their customers, deliver exceptional service, and remain profitable.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Redux",
      "Angular",
      "Payments",
      "Stripe",
      "CardConnect",
      "Adyen",
      "TotalPay",
      "BootStrap",
      "MaterialUI",
    ],
  },
  {
    id: 2,
    company: "IndiaNIC Infotech Ltd.",
    companyLogo: "../../src/assets/indiaNIC.jpeg",
    position: "Jr. Software Engineer",
    duration: "Mar 2022 - Mar 2023",
    location: "Ahmedabad, India",
    description:
      "Our enthusiasm has led us to become a top IT company in India & USA for delivering various industry-led mobility solutions in web and mobile application development domains leveraging futuristic technologies like Internet of Things (IoT), AI-ML, AR-VR, Voice assistants and Voice Skills, DevOps & Cloud computing, etc.",
    technologies: [
      "React",
      "Express",
      "Node",
      "Firebase",
      "Automation",
      "Testing",
      "TailwindCSS",
    ],
  },
  //   {
  //     id: 3,
  //     company: "StartUp Hub",
  //     companyLogo: "https://via.placeholder.com/80/F7AB0A/FFFFFF?text=SH",
  //     position: "Frontend Developer",
  //     duration: "Jan 2020 - May 2021",
  //     location: "San Francisco, CA",
  //     description:
  //       "Built dynamic user interfaces for SaaS products. Collaborated with design team to implement pixel-perfect designs and ensure cross-browser compatibility.",
  //     technologies: ["React", "JavaScript", "CSS3", "REST API", "Git"],
  //   },
];

const Experience = () => {
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
      id="experience"
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
          //   viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            color="primary"
            textAlign="center"
            gutterBottom
            sx={{ mb: 1 }}
          >
            Experience
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 2, maxWidth: 600, mx: "auto" }}
          >
            My professional journey building innovative solutions
          </Typography>
        </motion.div>

        {/* Container with Navigation Arrows */}
        <Box sx={{ position: "relative" }}>
          {/* Left Arrow */}
          {experiences.length > 1 && (
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

          {/* Horizontal Scrollable Experience Cards */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              overflowX: experiences.length > 1 ? "auto" : "visible",
              overflowY: "hidden",
              gap: 4,
              pb: 2,
              scrollSnapType: "x mandatory",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                // viewport={{ once: true }}
                style={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  scrollSnapAlign: "start",
                }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(18, 18, 18, 1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(247,171,10,0.2)",
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
                    {/* Company and Position */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        mb: 2,
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        {/* Company Logo */}
                        <Avatar
                          src={exp.companyLogo}
                          alt={exp.company}
                          sx={{
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            border: "2px solid #F7AB0A",
                            boxShadow: "0 0 15px rgba(247,171,10,0.3)",
                          }}
                        />

                        <Box>
                          <Typography
                            variant="h5"
                            fontWeight={600}
                            color="#F7AB0A"
                            gutterBottom
                          >
                            {exp.position}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <WorkOutlineIcon
                              sx={{ fontSize: 18, color: "#F7AB0A" }}
                            />
                            <Typography variant="body1" color="text.primary">
                              {exp.company}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: { xs: "flex-start", sm: "flex-end" },
                          gap: 0.5,
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <CalendarTodayIcon
                            sx={{ fontSize: 16, color: "text.secondary" }}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {exp.duration}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <LocationOnIcon
                            sx={{ fontSize: 16, color: "text.secondary" }}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontStyle: "italic" }}
                          >
                            {exp.location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {exp.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {exp.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: "rgba(247,171,10,0.1)",
                            color: "#F7AB0A",
                            border: "1px solid rgba(247,171,10,0.3)",
                            fontWeight: 500,
                            "&:hover": {
                              bgcolor: "rgba(247,171,10,0.2)",
                            },
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
          {experiences.length > 1 && (
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

export default Experience;
