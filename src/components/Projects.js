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

const Projects = () => {
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
      id="projects-section"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Skills
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {skills.map((skill, i) => (
                  <Chip
                    key={i}
                    label={skill}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Certifications
              </Typography>
              <List>
                {certifications.map((cert, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={cert.title}
                      secondary={
                        <>
                          Issued by {cert.issuedBy}, {cert.date}
                          <br />
                          <Link href={cert.url} target="_blank" rel="noopener">
                            View Certificate
                          </Link>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: "100%" }}>
              <Typography variant="h5" gutterBottom>
                Experience & Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Software Developer – Tech Solutions Inc."
                    secondary="2020 – Present | Frontend development using React and Node.js."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="B.Sc. in Computer Science – University of Tech"
                    secondary="2014 – 2018"
                  />
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        color="inherit"
        href="#projects-section"
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#fff",
          color: "#333",
          "&:hover": {
            backgroundColor: "#333",
            color: "#fff",
          },
        }}
      >
        Button ↓
      </Button>
    </Box>
  );
};

export default Projects;
