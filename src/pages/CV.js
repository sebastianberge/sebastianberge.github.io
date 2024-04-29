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
import {
  ArgocdOriginalWordmark,
  GitOriginalWordmark,
  GithubOriginalWordmark,
  GithubactionsOriginal,
  AzureOriginal,
  AzuredevopsOriginal,
  AzureOriginalWordmark,
  TerraformOriginal,
  ReactOriginalWordmark,
  LinuxOriginal,
  KubernetesOriginal,
  RedhatOriginalWordmark,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
} from "devicons-react";

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
    { name: "Azure", icon: <AzureOriginalWordmark /> },
    { name: "Azure DevOps", icon: <AzuredevopsOriginal /> },
    { name: "GitHub", icon: <GithubOriginalWordmark /> },
    { name: "GitHub Actions", icon: <GithubactionsOriginal /> },
    { name: "Git", icon: <GitOriginalWordmark /> },
    { name: "Bicep", icon: <AzureOriginal /> },
    { name: "Terraform", icon: <TerraformOriginal /> },
    { name: "React", icon: <ReactOriginalWordmark /> },
    { name: "Linux", icon: <LinuxOriginal /> },
    { name: "Kubernetes", icon: <KubernetesOriginal /> },
    { name: "Red Hat OpenShift", icon: <RedhatOriginalWordmark /> },
    { name: "Argo CD", icon: <ArgocdOriginalWordmark /> },
    { name: "Javascript", icon: <JavascriptOriginal /> },
    { name: "HTML", icon: <Html5Original /> },
    { name: "CSS", icon: <Css3Original /> },
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
