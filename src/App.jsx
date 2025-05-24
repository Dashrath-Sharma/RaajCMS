// import image from './assets/image.png'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carrer from "./pages/Carrer";
import Service from "./pages/Service";
import Payout from "./pages/Payout";
import About from "./pages/About";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrer" element={<Carrer />} />
      <Route path="/service" element={<Service />} />
      <Route path="/payout" element={<Payout />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;

