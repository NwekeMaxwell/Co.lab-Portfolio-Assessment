import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/HomePage/Home";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import InspoPage from "./Components/InspoPage/InspoPage";
import Footer from "./Components/Footer/Footer";

function App() {
  // <NavBar />
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/inspo" element={<InspoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
