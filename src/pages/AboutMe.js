import React from "react";
import { Box, Typography, Avatar, Button, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const AboutMe = () => {
  return (
    <Box p={3} display="flex" flexDirection="column" alignItems="center">
      <Avatar
        sx={{ width: 150, height: 150, mb: 2 }}
        src="/images/profile-image.jpeg"
      />
      <Typography variant="h5">Sebastian Berge</Typography>
      <Typography paragraph align="center" sx={{ maxWidth: 600 }}>
        Hello! I'm Sebastian Berge, a passionate Senior Cloud & DevOps Engineer
        with a keen interest in cloud computing and basically anything
        techonlogy related. With over 4 years of experience in the tech
        industry, I've developed a strong skill set within the DevOps and Cloud
        fields.
      </Typography>
      <Typography paragraph align="center" sx={{ maxWidth: 600 }}>
        I'm always looking to take on new challenges and grow my skills, whether
        that's learning new frameworks or diving deeper into backend
        technologies.
      </Typography>
      <Box mt={2}>
        <Link
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener"
        >
          <Button variant="contained" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Link>
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener"
          sx={{ ml: 1 }}
        >
          <Button variant="contained" startIcon={<GitHubIcon />}>
            GitHub
          </Button>
        </Link>
        {/* Add more social links as needed */}
      </Box>
    </Box>
  );
};

export default AboutMe;
