import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import { marked } from "marked";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const Blog = () => {
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
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  <Link
                    to={`/blog/${post.title}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {post.title}
                  </Link>
                </Typography>
                <Typography color="text.secondary">
                  Last updated: {post.date}
                </Typography>
                <Typography
                  component="div"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
