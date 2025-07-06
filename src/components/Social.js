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
        backgroundColor: "#fff",
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
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 300 }}>
        Connect with Me
      </Typography>
      <Stack direction="row" spacing={3} mt={4}>
        <Button
          variant="outlined"
          href="https://github.com/sebastianberge"
          target="_blank"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 999,
            borderColor: "#000",
            color: "#000",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
            },
          }}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          href="https://www.linkedin.com/in/sebastian-berge-05b53548/"
          target="_blank"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 999,
            borderColor: "#000",
            color: "#000",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "#000",
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
