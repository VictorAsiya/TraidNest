import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Home from "./home";
import About from "./about";
import "./App.css";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<h1>Products</h1>} />
      </Routes>
  );
}

export default App;
