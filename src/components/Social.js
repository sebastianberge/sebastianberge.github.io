import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
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
} from "@mui/material";
import axios from "axios";

const Social = () => {
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
      id="social-section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff", // white background
        color: "#444", // dark gray text
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Connect with Me
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          href="https://github.com/sebastianberge"
          target="_blank"
          sx={{
            backgroundColor: "#333",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#333",
            },
          }}
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/sebastian-berge-05b53548/"
          target="_blank"
          sx={{
            backgroundColor: "#333",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#333",
            },
          }}
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
};

export default Social;
