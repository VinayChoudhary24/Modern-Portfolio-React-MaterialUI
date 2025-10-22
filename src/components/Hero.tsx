import { Box, Typography, Button, Stack, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import profileImage from "../assets/IMG_20200127_122337.jpg";

const BackgroundCircles = () => {
  return (
    <>
      {/* Initial Water Drop Effect */}
      <Box
        component={motion.div}
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {[200, 300, 500, 650, 800].map((size, idx) => (
          <Box
            key={idx}
            sx={{
              borderRadius: "50%",
              border:
                idx === 3
                  ? "1px solid rgba(247,171,10,0.5)"
                  : "1px solid rgba(51,51,51,0.7)",
              height: { xs: size * 0.5, sm: size * 0.7, md: size },
              width: { xs: size * 0.5, sm: size * 0.7, md: size },
              position: "absolute",
            }}
          />
        ))}
      </Box>

      {/* Continuous Wave/Blink Effect */}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      >
        {[200, 300, 500, 650, 800].map((size, idx) => (
          <Box
            key={idx}
            sx={{
              borderRadius: "50%",
              border:
                idx === 3
                  ? "1px solid rgba(247,171,10,0.4)"
                  : "1px solid rgba(51,51,51,0.5)",
              height: { xs: size * 0.5, sm: size * 0.7, md: size },
              width: { xs: size * 0.5, sm: size * 0.7, md: size },
              position: "absolute",
              animation:
                idx === 3
                  ? "wave 6s ease-in-out infinite"
                  : idx === 2
                  ? "blink 5s ease-in-out infinite"
                  : "none",
              animationDelay: `${idx * 0.5}s`,
            }}
          />
        ))}

        {/* CSS Keyframes */}
        <style>{`
          @keyframes wave {
            0% { transform: scale(0.5); opacity: 0.4; }
            50% { transform: scale(1.15); opacity: 0.6; }
            100% { transform: scale(1.3); opacity: 0.2; }
          }

          @keyframes blink {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
        `}</style>
      </Box>
    </>
  );
};

// 💫 Hero Component
const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Hi, My name’s Vinay Choudhary",
      "SportsEnthusiast.tsx",
      "<PassionateCoder />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        textAlign: "center",
        px: 2,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        background:
          "linear-gradient(180deg, rgba(18,18,18,1) 100%, rgba(24,24,24,1) 100%)",
      }}
    >
      {/* Circles + Avatar are grouped together */}
      <Box sx={{ position: "relative" }}>
        <BackgroundCircles />
        <Avatar
          src={profileImage}
          alt="Vinay Choudhary"
          sx={{
            position: "relative",
            width: { xs: 100, sm: 120, md: 150 },
            height: { xs: 100, sm: 120, md: 150 },
            border: "3px solid #F7AB0A",
            zIndex: 10,
          }}
        />
      </Box>

      {/* Text Section */}
      <Box sx={{ position: "absolute", bottom: "15%", zIndex: 20 }}>
        <Typography
          variant="subtitle2"
          sx={{
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "text.secondary",
            pb: 1,
          }}
        >
          Full-Stack Developer
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            px: { xs: 2, md: 0 },
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </Typography>

        {/* Navigation Buttons */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ pt: 3, flexWrap: "wrap" }}
        >
          {["About", "Experience", "Skills", "Projects"].map((item) => (
            <Button
              key={item}
              variant="outlined"
              sx={{
                color: "text.secondary",
                borderColor: "text.secondary",
                "&:hover": {
                  borderColor: "#F7AB0A",
                  color: "#F7AB0A",
                  backgroundColor: "rgba(247, 171, 10, 0.08)",
                },
              }}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
