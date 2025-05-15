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
  const [posts, setPosts] = useState([]);
  const skills = ["React", "Node.js", "JavaScript", "HTML/CSS", "Git", "SQL"];
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuedBy: "Amazon Web Services",
      date: "July 2021",
      url: "https://example.com/aws-cert",
    },
    {
      title: "Kubernetes Administrator",
      issuedBy: "The Linux Foundation",
      date: "March 2022",
      url: "https://example.com/k8s-cert",
    },
  ];

  return (
    <Box
      id="aboutme-section"
      sx={{
        height: "100vh",
        backgroundImage: "url('/images/bergen.jpeg')",
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
          backgroundColor: "rgba(51, 51, 51, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <Card
          sx={{
            p: 4,
            maxWidth: 600,
            backgroundColor: "#fff",
            color: "#333",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          <Avatar
            sx={{ width: 100, height: 100, mb: 2, mx: "auto" }}
            src="/images/profile-image.jpeg"
            alt="Image of Sebastian Berge"
          />
          <Typography variant="h4">Hi, I'm Sebastian</Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mt: 2 }}>
            A passionate Senior Cloud & DevOps Engineer with a keen interest in
            cloud computing and basically anything techonlogy related. With over
            4 years of experience in the tech industry, I've developed a strong
            skill set within the DevOps and Cloud fields. I'm always looking to
            take on new challenges and grow my skills, whether that's learning
            new frameworks or diving deeper into backend technologies.
          </Typography>
        </Card>
        <Button
          variant="contained"
          color="inherit"
          href="#cv-section"
          sx={{
            position: "absolute",
            bottom: 40,
            backgroundColor: "#fff",
            color: "#333",
            "&:hover": {
              backgroundColor: "#333",
              color: "#fff",
            },
          }}
        >
          CV ↓
        </Button>
      </Box>
    </Box>
  );
};

export default AboutMe;
