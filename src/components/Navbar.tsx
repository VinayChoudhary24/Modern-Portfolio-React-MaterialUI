import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Instagram,
  Menu as MenuIcon,
  Close as CloseIcon,
  Mail,
} from "@mui/icons-material";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const socialLinks = [
    {
      icon: <GitHub />,
      url: "https://github.com/VinayChoudhary24",
      label: "GitHub",
    },
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/vinay-choudhary-9661121a1",
      label: "LinkedIn",
    },
    {
      icon: <Instagram />,
      url: "https://www.instagram.com/leave_some_mark/",
      label: "Instagram",
    },
  ];

  const SocialIcons = () => (
    <Box sx={{ display: "flex", gap: 1 }}>
      {socialLinks.map((social) => (
        <IconButton
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "text.secondary",
            transition: "all 0.3s ease",
            "&:hover": {
              color: "text.primary",
              transform: "translateY(-2px)",
            },
          }}
          aria-label={social.label}
        >
          {social.icon}
        </IconButton>
      ))}
    </Box>
  );

  const GetInTouchButton = () => {
    const scrollToContact = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <Button
        variant="outlined"
        startIcon={<Mail />}
        onClick={scrollToContact} // 👈 scroll to section
        sx={{
          color: "text.primary",
          borderColor: "rgba(156, 163, 175, 0.3)",
          px: 3,
          py: 1,
          borderRadius: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            borderColor: "text.primary",
            backgroundColor: "rgba(156, 163, 175, 0.1)",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(156, 163, 175, 0.2)",
          },
        }}
      >
        Get in Touch
      </Button>
    );
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        // color: "inherit",
        backgroundColor: "rgb(45 45 45 / 1)",
        pt: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, pb: 2 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: "text.secondary" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: "center", py: 2 }}>
            <GetInTouchButton />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: 2,
              pt: 2,
            }}
          >
            <SocialIcons />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background:
            "linear-gradient(180deg, rgba(18,18,18,1) 0%, rgba(24,24,24,1) 100%)",
          // backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(156, 163, 175, 0.1)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
          {isMobile ? (
            <>
              <Box sx={{ flex: 1 }} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: "text.secondary" }}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              <SocialIcons />
              <GetInTouchButton />
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer to prevent content from going under the navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;
