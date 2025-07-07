import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      py={3}
      textAlign="center"
      sx={{ backgroundColor: "#000", color: "#fff" }}
    >
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 500, fontSize: "1rem" }}
      >
        © {new Date().getFullYear()} Sebastian Berge
      </Typography>
    </Box>
  );
};

export default Footer;
