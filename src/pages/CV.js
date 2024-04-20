import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const CV = () => {
  const experience = [
    {
      role: "Senior Cloud & DevOps Engineer",
      company: "Devoteam M Cloud",
      years: "2024 - Present",
      description: "N/A",
    },
    {
      role: "Cloud Engineer",
      company: "Tietoevry Tech Services",
      years: "2022 - 2024",
      description: "N/A",
    },
    {
      role: "DevOps Engineer",
      company: "Tietoevry Fintech",
      years: "2020 - 2022",
      description: "N/A",
    },
  ];

  const education = [
    {
      degree: "B.Sc. Computer Engineer",
      institution: "Western University of Applied Sciences",
      years: "2017 - 2020",
    },
  ];

  const skills = [
    { name: "Azure", icon: <GitHubIcon /> },
    { name: "Azure DevOps", icon: null },
  ];

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Curriculum Vitae
      </Typography>
      <Typography variant="h6">Experience</Typography>
      <List>
        {experience.map((job, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={job.role + " - " + job.company}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {job.years}
                    </Typography>
                    {" — " + job.description}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h6">Education</Typography>
      <List>
        {education.map((edu, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={edu.degree}
              secondary={edu.institution + " - " + edu.years}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Skills</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill.name}
            color="primary"
            variant="outlined"
            icon={skill.icon}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CV;
