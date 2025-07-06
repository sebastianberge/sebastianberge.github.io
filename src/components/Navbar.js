import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.1)",
        top: 0,
        zIndex: 1100,
        height: "45px",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: "45px !important",
          height: "45px !important",
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 4,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 900,
              fontSize: "0.875rem",
              color: "#000",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, sans-serif",
            }}
          >
            Sebastian Berge
          </Typography>
          <Box>
            <Button
              href="#aboutme-section"
              sx={{
                color: "#000",
                fontWeight: 500,
                fontSize: "0.8rem",
                mx: 1.2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              About Me
            </Button>
            <Button
              href="#cv-section"
              sx={{
                color: "#000",
                fontWeight: 500,
                fontSize: "0.8rem",
                mx: 1.2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              CV
            </Button>
            <Button
              href="#projects-section"
              sx={{
                color: "#000",
                fontWeight: 500,
                fontSize: "0.8rem",
                mx: 1.2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Projects
            </Button>
            <Button
              href="#social-section"
              sx={{
                color: "#000",
                fontWeight: 500,
                fontSize: "0.8rem",
                mx: 1.2,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Connect
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
