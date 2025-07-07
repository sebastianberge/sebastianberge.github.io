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
        backgroundColor: "#000",
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
          {/* <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "#fff",
                color: "#333",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Experience & Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Software Developer – Tech Solutions Inc."
                    secondary="2020 – Present | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#333" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="B.Sc. in Computer Science – University of Tech"
                    secondary="2014 – 2018"
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#333" } }}
                  />
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "#fff",
                color: "#333",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Experience & Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Software Developer – Tech Solutions Inc."
                    secondary="2020 – Present | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#333" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="B.Sc. in Computer Science – University of Tech"
                    secondary="2014 – 2018"
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#333" } }}
                  />
                </ListItem>
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "#fff",
                color: "#333",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Experience & Education
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Software Developer – Tech Solutions Inc."
                    secondary="2020 – Present | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#333" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="B.Sc. in Computer Science – University of Tech"
                    secondary="2014 – 2018"
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#333" } }}
                  />
                </ListItem>
              </List>
            </Card>
          </Grid> */}
          <Typography variant="h5" gutterBottom>
            Maintenance ongoing - please check back later!
          </Typography>
        </Grid>
      </Box>
      <Button
        variant="outlined"
        href="#social-section"
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          mt: 5,
          px: 2,
          py: 1,
          borderRadius: 999,
          fontWeight: 500,
          fontSize: "1rem",
          borderColor: "#0271e3",
          backgroundColor: "#000",
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
    </Box>
  );
};

export default Projects;
