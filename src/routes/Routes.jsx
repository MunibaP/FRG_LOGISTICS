import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services/Services';
import SameDay from "../pages/Services/SameDay";
// import Scheduled from "../pages/Services/Scheduled";
// import Ecommerce from "../pages/Services/Ecommerce";
// import Retail from "../pages/Services/Retail";
// import MedicalDelivery from "../pages/Services/MedicalDelivery";
// import Warehousing from "../pages/Services/Warehousing";

// import Contact from '../pages/Contact';
// import GetQuote from '../pages/GetQuote';
// import Track from '../pages/Track';


const AppRoutes = ()  => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services/*" element={<Services />} />
      <Route path="/services/same-day" element={<SameDay />} />
      {/* <Route path="scheduled" element={<Scheduled />} />
      <Route path="ecommerce" element={<Ecommerce />} />
      <Route path="retail" element={<Retail />} />
      <Route path="medical-delivery" element={<MedicalDelivery />} />
      <Route path="warehousing" element={<Warehousing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<GetQuote />} />
      <Route path="/track" element={<Track />} /> */}
    </Routes>
  );
};

export default AppRoutes;
