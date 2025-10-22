import {
  Box,
  Container,
  Grid,
  Typography,
  Avatar,
  Paper,
  Button,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [downloading, setDownloading] = useState(false);

  // Function to handle resume download
  const handleDownloadResume = () => {
    setDownloading(true);
    // Create a temporary anchor element
    const link = document.createElement("a");
    // Set the href to your PDF file path in the assets folder
    link.href = "../../src/assets/resume/Vinay_Choudhary___CV___Resume.pdf"; // Adjust the path based on your assets folder structure
    // Set the download attribute with the desired filename
    link.download = "Vinay_Choudhary_Resume.pdf";
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Add a small delay to simulate download completion
    setTimeout(() => {
      setDownloading(false);
    }, 1200);
  };

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        py: { xs: 6, md: 10 },
        background:
          "linear-gradient(180deg, rgba(18,18,18,1) 100%, rgba(24,24,24,1) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* LEFT: Image Section */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              //   viewport={{ once: true }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 2,
                  borderRadius: "50%",
                  bgcolor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src="../../src/assets/IMG_20200127_122337.jpg"
                  alt="Vinay Choudhary"
                  sx={{
                    width: { xs: 200, md: 260 },
                    height: { xs: 200, md: 260 },
                    border: "3px solid #F7AB0A",
                    boxShadow: "0 0 25px rgba(247,171,10,0.4)",
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>

          {/* RIGHT: Text Section */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                fontWeight={700}
                color="primary"
                gutterBottom
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                About Me
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  maxWidth: 600,
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I’m <b>Vinay Choudhary</b>, a passionate Full-Stack Developer
                with a deep love for crafting seamless digital experiences. From
                architecting backend APIs to designing elegant frontends, I
                thrive on turning complex ideas into efficient, beautiful, and
                user-friendly solutions.
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                  maxWidth: 600,
                  textAlign: { xs: "center", md: "left" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I specialize in modern web technologies and love experimenting
                with <b>performance optimization and scalable architectures.</b>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  mt: 3,
                }}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    variant="outlined"
                    onClick={handleDownloadResume}
                    disabled={downloading}
                    sx={{
                      borderColor: "#F7AB0A",
                      color: "#F7AB0A",
                      "&:hover": {
                        bgcolor: "#F7AB0A",
                        color: "#000",
                        borderColor: "#F7AB0A",
                      },
                    }}
                  >
                    {downloading ? (
                      <>
                        <CircularProgress
                          size={16}
                          color="inherit"
                          sx={{ mr: 1 }}
                        />
                        Downloading...
                      </>
                    ) : (
                      "Download Resume"
                    )}
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
