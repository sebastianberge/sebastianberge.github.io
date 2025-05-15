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
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Senior Cloud & DevOps Engineer – Devoteam M Cloud"
                    secondary="2024 – Present | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#fff", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#fff" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Cloud Engineer – Tietoevry Tech Services"
                    secondary="2022 – 2024 | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#fff", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#fff" } }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Solution Consultant – Tietoevry Banking"
                    secondary="2020 – 2022 | Frontend development using React and Node.js."
                    primaryTypographyProps={{
                      sx: { color: "#fff", fontWeight: "bold" },
                    }}
                    secondaryTypographyProps={{ sx: { color: "#fff" } }}
                  />
                </ListItem>
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "#333",
                  color: "#fff",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <Stack direction="row" flexWrap="wrap" rowGap={1}>
                  {skills.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      variant="outlined"
                      sx={{ color: "#fff", borderColor: "#fff", mr: 1 }}
                    />
                  ))}
                </Stack>
              </Card>

              <Card
                sx={{
                  p: 3,
                  height: "100%",
                  backgroundColor: "#333",
                  color: "#fff",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Education
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="B.Sc. in Computer Engineering – Western Norway University of Applied Sciences"
                      secondary="2017 – 2020"
                      primaryTypographyProps={{
                        sx: { color: "#fff", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ sx: { color: "#fff" } }}
                    />
                  </ListItem>
                </List>
              </Card>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                p: 3,
                height: "100%",
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
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
                        </>
                      }
                      primaryTypographyProps={{
                        sx: { color: "#fff", fontWeight: "bold" },
                      }}
                      secondaryTypographyProps={{ sx: { color: "#fff" } }}
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
        color="inherit"
        href="#projects-section"
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#333",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#333",
          },
        }}
      >
        Projects ↓
      </Button>
    </Box>
  );
};

export default CV;
