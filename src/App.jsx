import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import NavBar from "./components/NavBar";
import GoHome from "./components/GoHome";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <GoHome />
        </div>
      </Router>
    </div>
  );
};

export default App;
