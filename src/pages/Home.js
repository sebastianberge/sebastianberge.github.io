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
import AboutMe from "../components/AboutMe";
import CV from "../components/CV";
import Projects from "../components/Projects";
import axios from "axios";

const Home = () => {
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

  useEffect(() => {
    // Replace with your real API or GitHub fetch logic
    axios
      .get("https://api.yourdomain.com/posts?limit=3")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <React.Fragment>
      <AboutMe />
      <CV />
      <Projects />
    </React.Fragment>
  );
};

export default Home;
