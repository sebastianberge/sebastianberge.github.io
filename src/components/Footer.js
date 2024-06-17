import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={8} py={3} textAlign="center">
      <Typography variant="subtitle1">
        © {new Date().getFullYear()} Sebastian Berge
      </Typography>
    </Box>
  );
};

export default Footer;
