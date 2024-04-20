import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sebastian Berge
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            About Me
          </Button>
          <Button color="inherit" component={RouterLink} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={RouterLink} to="/cv">
            CV
          </Button>
          <Button color="inherit" component={RouterLink} to="/projects">
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
