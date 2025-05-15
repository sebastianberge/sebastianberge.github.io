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
} from "@mui/material";
import axios from "axios";

const CV = () => {
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
    <Box sx={{ p: 4, maxWidth: "900px", mx: "auto" }}>
      {/* Skills */}
      <Box mb={5}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {skills.map((skill, i) => (
            <Chip key={i} label={skill} color="primary" variant="outlined" />
          ))}
        </Stack>
      </Box>

      {/* Certifications */}
      <Box mb={5}>
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
      </Box>

      {/* CV Summary */}
      <Box mb={5}>
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
      </Box>
    </Box>
  );
};

export default CV;
