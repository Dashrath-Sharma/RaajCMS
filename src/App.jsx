// import image from './assets/image.png'
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Carrer from "./pages/Carrer";
import Service from "./pages/Service";
import Payout from "./pages/Payout";
import About from "./pages/About";
import Resource from "./pages/Resource";
const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/service" element={<Service />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/about" element={<About />} />
        <Route path="/resource" element={<Resource />} />
      </Route>
    </Routes>
  );
};

export default App;

