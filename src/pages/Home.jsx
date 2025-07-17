import React from "react";
import Hero from "../components/Home/Hero";
import HomeAbout from "../components/Home/HomeAbout";
import ServicesPreview from "../components/Home/ServicesPreview";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Testimonials from "../components/Home/Testimonials";
import HomeCTA from "../components/Home/HomeCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <HomeCTA />
    </>
  );
};

export default Home;
