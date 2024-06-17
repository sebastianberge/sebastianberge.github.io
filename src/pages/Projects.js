import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const projects = [
  {
    title: "Project 1",
    description: "This is a description of the first project.",
    imageUrl: "/path_to_project1_image.jpg",
  },
  {
    title: "Project 2",
    description: "This is a description of the second project.",
    imageUrl: "/path_to_project2_image.jpg",
  },
  // Add more projects as needed
];

{/* <Box p={3}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.imageUrl}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box> */}

const Projects = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      To be updated
    </Box>
  );
};

export default Projects;
