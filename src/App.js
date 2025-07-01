import React from "react";
import "./App.css";
import { Routes, Route,  } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
  );
}

export default App;
