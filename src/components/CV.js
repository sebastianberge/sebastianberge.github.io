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

const CV = () => {
  const [posts, setPosts] = useState([]);
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "HTML/CSS",
    "Git",
    "SQL",
    "React",
    "Node.js",
    "JavaScript",
    "HTML/CSS",
    "Git",
    "SQL",
  ];
  const certifications = [
    {
      title: "DevOps Engineer Expert",
      issuedBy: "Microsoft",
      date: "October 2022",
    },
    {
      title: "Azure Administrator Associate",
      issuedBy: "Microsoft",
      date: "September 2022",
    },
    {
      title: "NSM grunnprinsipper for IKT-sikkerhet",
      issuedBy: "Nasjonal sikkerhetsmyndighet",
      date: "October 2022",
    },
    {
      title: "Azure Fundamentals",
      issuedBy: "Microsoft",
      date: "July 2022",
    },
  ];

  return (
    <Box
      id="cv-section"
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        backgroundColor: "#f5f5f7",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, fontSize: "2rem" }}
              >
                Experience
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Senior Cloud & DevOps Engineer – Devoteam M Cloud"
                    secondary="2024 – Present | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#666" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Cloud Engineer – Tietoevry Tech Services"
                    secondary="2022 – 2024 | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#666" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Solution Consultant – Tietoevry Banking"
                    secondary="2020 – 2022 | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#333", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#666" } }}
                  />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={4}>
              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "#fff",
                  color: "#333",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: 600, fontSize: "2rem" }}
                >
                  Skills
                </Typography>
                <Stack direction="row" flexWrap="wrap" rowGap={1} columnGap={1}>
                  {skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      sx={{
                        color: "#333",
                        borderColor: "#e0e0e0",
                        backgroundColor: "#fafafa",
                        mr: 1,
                        mb: 1,
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Card>

              <Card
                sx={{
                  p: 4,
                  height: "100%",
                  backgroundColor: "#fff",
                  color: "#333",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: 600, fontSize: "2rem" }}
                >
                  Education
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="B.Sc. in Computer Engineering – Western Norway University of Applied Sciences"
                      secondary="2017 – 2020"
                      primaryTypographyProps={{
                        sx: { color: "#333", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ sx: { color: "#666" } }}
                    />
                  </ListItem>
                </List>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 4,
                height: "100%",
                backgroundColor: "#fff",
                color: "#333",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 600, fontSize: "2rem" }}
              >
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
                        </>
                      }
                      primaryTypographyProps={{
                        sx: { color: "#333", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ sx: { color: "#666" } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        href="#projects-section"
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
    </Box>
  );
};

export default CV;
