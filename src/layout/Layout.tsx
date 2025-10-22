import React, { type ReactNode, useEffect, useRef, useState } from "react";
import { Box, Zoom } from "@mui/material";
import Navbar from "../components/Navbar";
import scrollTopIcon from "../assets/profilepic.jpeg";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      setShowScroll(scrollContainer.scrollTop > 200);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Scrollable content with smooth snap */}
      <Box
        ref={scrollRef}
        flexGrow={1}
        p={0}
        sx={{
          overflowY: "scroll",
          overflowX: "hidden",
          // Changed from "mandatory" to "proximity" for less aggressive snapping
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          // Prevent snap on scroll start
          scrollSnapStop: "normal",
        }}
      >
        {children}
      </Box>

      {/* Floating Scroll-to-Top Button */}
      <Zoom in={showScroll}>
        <Box
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: { xs: 24, md: 32 },
            right: { xs: 24, md: 32 },
            cursor: "pointer",
            zIndex: 1500,
            borderRadius: "50%",
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0 0 25px rgba(247,171,10,0.7)",
            },
          }}
        >
          <img
            src={scrollTopIcon}
            alt="Scroll to Top"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              border: "1px solid #F7AB0A",
              backgroundColor: "rgba(18,18,18,0.8)",
            }}
          />
        </Box>
      </Zoom>
    </Box>
  );
};

export default Layout;
