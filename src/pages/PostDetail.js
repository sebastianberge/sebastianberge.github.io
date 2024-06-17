import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { marked } from "marked";
import hljs from "highlight.js";

const renderer = new marked.Renderer();
renderer.code = function (code, language) {
  const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
  return `<pre><code class="hljs ${validLanguage}">${
    hljs.highlight(code, { language: validLanguage }).value
  }</code></pre>`;
};

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
  pedantic: false,
  breaks: true,
  gfm: true,
  smartLists: true,
  smartypants: false,
});

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    const fetchPost = async () => {
      const url = `https://api.github.com/repos/sebastianberge/blog-posts/contents/posts/${postId}.md`;
      const response = await axios.get(url);
      const decodedContent = atob(response.data.content);
      const htmlContent = marked(decodedContent);
      setPost({ title: postId, content: htmlContent });
    };

    fetchPost();
  }, [postId]);

  if (!post.content) return <Typography>Loading...</Typography>;

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Box>
  );
};

export default PostDetail;
