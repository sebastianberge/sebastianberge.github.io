import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={8} py={3} textAlign="center">
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 300, fontSize: "1rem" }}
      >
        © {new Date().getFullYear()} Sebastian Berge
      </Typography>
    </Box>
  );
};

export default Footer;
