import './css/global.css';
// import image from './assets/image.png'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import Carrer from './pages/Carrer';
import Service from './pages/Service';
import Payout from './pages/Payout';
import About from './pages/About';
import Resource from './pages/Resource';
import ContactUs from './pages/ContactUs';
import AmountPayable from './pages/AmountPayable';
import Administrative from './pages/Administrative';
import FAQ from '@pages/FAQ';
import BusinessFormation from '@pages/BusinessFormation';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/serviceS" element={<Service />} />
        <Route path="/business-formation" element={<BusinessFormation />} />
        <Route path="/payout" element={<Payout />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/accountPayable" element={<AmountPayable />} />
        <Route path="/administrative" element={<Administrative />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
