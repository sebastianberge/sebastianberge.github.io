import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(51, 51, 51, 0.5)",
        top: 0,
        zIndex: 1100,
        backdropFilter: "blur(5px)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sebastian Berge
        </Typography>
        <Box>
          <Button color="inherit">About Me</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">CV</Button>
          <Button color="inherit">Projects</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
