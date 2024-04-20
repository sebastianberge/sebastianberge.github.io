import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog/:postId" element={<PostDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
