// import image from './assets/image.png'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Carrer from "./pages/Carrer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrer" element={<Carrer />} />
    </Routes>
  );
};

export default App;

