import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LeftSidePart from "./components/LeftSidePart/LeftSidePart";
import SingleHomeCard from "./components/HomeCard/SingleHomeCard";
import HomeCard from "./components/HomeCard/HomeCard";
import Blogs from "./components/Blogs/Blogs";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blogId" element={<Blogs />} />
        </Routes>
      </Router>

      {/* */}
    </>
  );
}

export default App;
