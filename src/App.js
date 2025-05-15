import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
