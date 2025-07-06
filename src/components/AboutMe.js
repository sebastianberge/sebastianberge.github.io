import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  Stack,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
} from "@mui/material";
import axios from "axios";

const AboutMe = () => {
  return (
    <Box
      id="aboutme-section"
      sx={{
        height: "100vh",
        background: "linear-gradient(to bottom, #daecf6 0%, #ffffff 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        px: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#000",
          zIndex: 1,
          px: 2,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <Avatar
          sx={{ width: 120, height: 120, mb: 3 }}
          src="/images/profile-image.jpeg"
          alt="Image of Sebastian Berge"
        />
        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "2rem" }}>
          Hi, I'm Sebastian
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: 700,
            mt: 3,
            px: 2,
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          A passionate Senior Cloud & DevOps Engineer with a keen interest in
          cloud computing and basically anything techonlogy related. With over 4
          years of experience in the tech industry, I've developed a strong
          skill set within the DevOps and Cloud fields. I'm always looking to
          take on new challenges and grow my skills, whether that's learning new
          frameworks or diving deeper into backend technologies.
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          mt={4}
          sx={{ position: "absolute", bottom: 40 }}
        >
          <Button
            variant="outlined"
            href="#cv-section"
            sx={{
              mt: 5,
              px: 2,
              py: 1,
              borderRadius: 999,
              fontWeight: 500,
              fontSize: "0.8rem",
              borderColor: "#0271e3",
              backgroundColor: "#0271e3",
              textTransform: "none",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(002, 113, 227, 0.8)",
              },
            }}
          >
            More
          </Button>
          <Button
            variant="outlined"
            href="#social-section"
            sx={{
              mt: 5,
              px: 2,
              py: 1,
              borderRadius: 999,
              fontWeight: 500,
              fontSize: "0.8rem",
              borderColor: "#0271e3",
              backgroundColor: "transparent",
              textTransform: "none",
              color: "#0271e3",
              "&:hover": {
                backgroundColor: "#0271e3",
                color: "#fff",
              },
            }}
          >
            Connect
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutMe;
