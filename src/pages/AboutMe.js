import React, { useState, useEffect } from "react";
import { Box, Typography, Avatar, Button, Link, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from 'axios';
import { marked } from "marked";
import dayjs from "dayjs";

  const AboutMe = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          // Update the API URL to point to the 'posts' folder
          const { data } = await axios.get(
            "https://api.github.com/repos/sebastianberge/blog-posts/contents/posts"
          );
          console.log("API Data:", data); // This helps to check what the API returns
          const markdownFiles = data.filter((file) => file.name.endsWith(".md"));
          const postsData = await Promise.all(
            markdownFiles.map(async (file) => {
              const fileData = await axios.get(file.download_url);
              const htmlContent = marked(fileData.data);
              return {
                html: htmlContent,
                title: file.name.replace(".md", ""),
                date: dayjs(file.updated_at).format("MMMM D, YYYY"),
              };
            })
          );
          setPosts(postsData);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };

        fetchPosts();
    }, []);

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
          href="https://www.linkedin.com/in/sebastian-berge-05b53548/"
          target="_blank"
          rel="noopener"
        >
          <Button variant="contained" startIcon={<LinkedInIcon />}>
            LinkedIn
          </Button>
        </Link>
        <Link
          href="https://github.com/sebastianberge"
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
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>Recent Blog Posts</Typography>
      <Grid container spacing={2}>
        {posts.length > 0 ? posts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.title}>
            <Card>
              <CardActionArea href={`/blog/${post.title}`}>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {post.title}
                  </Typography>
                  <Typography color="text.secondary">
                    Last updated: {post.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )) : (
          <Typography>No recent posts to display.</Typography>
        )}
      </Grid>
    </Box> 
  );
}

export default AboutMe;
