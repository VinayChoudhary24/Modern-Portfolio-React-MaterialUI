import { Box, Container, Typography, Tooltip, Grid } from "@mui/material";
import { motion } from "framer-motion";

interface Skill {
  id: number;
  name: string;
  image: string;
  color: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    image: "../../src/assets/java-script.png",
    color: "#F7DF1E",
  },
  {
    id: 2,
    name: "TypeScript",
    image: "../../src/assets/ts-logo-128.png",
    color: "#3178C6",
  },
  {
    id: 3,
    name: "React",
    image: "../../src/assets/react.svg",
    color: "#61DAFB",
  },
  {
    id: 4,
    name: "Node.js",
    image: "../../src/assets/nodejsIconGreen.svg",
    color: "#339933",
  },
  {
    id: 5,
    name: "Express",
    image: "../../src/assets/express.jpeg",
    color: "#FFFFFF",
  },
  {
    id: 6,
    name: "MongoDB",
    image: "../../src/assets/MongoDB_Logomark_ForestGreen.svg",
    color: "#47A248",
  },
  {
    id: 7,
    name: "Redux",
    image: "../../src/assets/icons8-redux-96.png",
    color: "#764ABC",
  },
  {
    id: 8,
    name: "Angular",
    image: "../../src/assets/angular.svg",
    color: "#DD0031",
  },
  {
    id: 9,
    name: "HTML",
    image: "../../src/assets/HTML5_logo_and_wordmark.svg.png",
    color: "#E34F26",
  },
  {
    id: 10,
    name: "MaterialUI",
    image: "../../src/assets/MUIlogo.png",
    color: "#007FFF",
  },
  {
    id: 11,
    name: "Bootstrap",
    image: "../../src/assets/bootstrap-logo.svg",
    color: "#7952B3",
  },
  {
    id: 12,
    name: "REST API",
    image: "../../src/assets/api.png",
    color: "#FF6C37",
  },
  {
    id: 13,
    name: "Git",
    image: "../../src/assets/Git-Icon-1788C.png",
    color: "#F05032",
  },
  {
    id: 14,
    name: "Firebase",
    image: "../../src/assets/Logomark_Full Color.png",
    color: "#FFCA28",
  },
  {
    id: 15,
    name: "jQuery",
    image: "../../src/assets/jquery-icon.svg",
    color: "#0769AD",
  },
  {
    id: 16,
    name: "NextJS",
    image: "../../src/assets/Symbol Alternative.svg",
    color: "#F05032",
  },
  {
    id: 17,
    name: "TailwindCSS",
    image: "../../src/assets/tailwindcss-mark.d52e9897.svg",
    color: "#0769AD",
  },
  {
    id: 18,
    name: "Vercel",
    image: "../../src/assets/vercel-icon-dark.svg",
    color: "#FF6C37",
  },
];

const Skills = () => {
  return (
    <Box
      id="skills"
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
            Skills
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 8, maxWidth: 600, mx: "auto" }}
          >
            Technologies I work with to build amazing digital experiences
          </Typography>
        </motion.div>

        {/* Central Particle with Explosion Effect */}
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "auto", md: "auto" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Central Core Particle */}
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: [1, 1.2, 0.8, 0],
              opacity: [1, 0.8, 0.5, 0],
            }}
            transition={{
              duration: 1.5,
              times: [0, 0.4, 0.7, 1],
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: { xs: 60, md: 80 },
                height: { xs: 60, md: 80 },
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, #F7AB0A 0%, rgba(247,171,10,0.3) 100%)",
                boxShadow: "0 0 40px rgba(247,171,10,0.6)",
              }}
            />
          </motion.div>

          {/* Skills Icons - Grid Layout */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {skills.map((skill, index) => (
              <Grid size={{ xs: 4, sm: 4, md: 3 }} key={skill.id}>
                {/* === MODIFIED SECTION START === */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100, // Even from left, Odd from right
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Animate to final grid position
                  }}
                  //   viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 80,
                    delay: 0.5 + index * 0.08, // Staggered delay
                  }}
                >
                  {/* === MODIFIED SECTION END === */}
                  <Tooltip title={skill.name} arrow placement="top">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                      }}
                      transition={{ duration: 0.5 }}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 60, md: 80 },
                          height: { xs: 60, md: 80 },
                          borderRadius: "50%",
                          bgcolor: "rgba(18,18,18,0.9)",
                          border: "2px solid",
                          borderColor: skill.color,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: `0 0 20px ${skill.color}40`,
                          transition: "all 0.3s ease",
                          mx: "auto",
                          "&:hover": {
                            boxShadow: `0 0 30px ${skill.color}80`,
                            borderColor: "#F7AB0A",
                            bgcolor: "rgba(247,171,10,0.1)",
                          },
                        }}
                      >
                        <img
                          src={skill.image}
                          alt={skill.name}
                          style={{
                            width: window.innerWidth < 768 ? "32px" : "44px",
                            height: window.innerWidth < 768 ? "32px" : "44px",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </motion.div>
                  </Tooltip>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
