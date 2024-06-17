import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import PostDetail from "./pages/PostDetail";
import CV from "./pages/CV";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<PostDetail />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
