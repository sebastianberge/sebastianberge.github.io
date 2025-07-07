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
        backgroundColor: "#f5f5f7",
        color: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 600, fontSize: "2rem" }}
      >
        Connect with Me
      </Typography>
      <Stack direction="row" spacing={3} mt={4}>
        <Button
          variant="outlined"
          href="https://github.com/sebastianberge"
          sx={{
            mt: 5,
            px: 2,
            py: 1,
            borderRadius: 999,
            fontWeight: 500,
            fontSize: "1rem",
            borderColor: "#0271e3",
            backgroundColor: "#0271e3",
            textTransform: "none",
            color: "#fff",
            "&:hover": {
              backgroundColor: "rgba(002, 113, 227, 0.8)",
            },
          }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          href="https://www.linkedin.com/in/sebastian-berge-05b53548/"
          sx={{
            mt: 5,
            px: 2,
            py: 1,
            borderRadius: 999,
            fontWeight: 500,
            fontSize: "1rem",
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
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
};

export default Social;
