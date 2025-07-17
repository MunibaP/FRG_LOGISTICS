import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faBolt,
  faCalendarAlt,
  faShoppingCart,
  faStore,
  faBriefcaseMedical,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/ServicesPreview.css";

const services = [
  {
    icon: faBolt,
    title: "Same-Day Delivery",
    description: "Fast and reliable same-day deliveries across the GTA.",
  },
  {
    icon: faCalendarAlt,
    title: "Scheduled & Recurring",
    description: "Flexible scheduling for daily, weekly, or monthly deliveries.",
  },
  {
    icon: faShoppingCart,
    title: "E-Commerce Parcel Delivery",
    description: "Seamless delivery for your online store orders.",
  },
  {
    icon: faStore,
    title: "Retail & B2B Distribution",
    description: "Direct-to-store and business distribution across the GTA.",
  },
  {
    icon: faBriefcaseMedical,
    title: "Medical & Pharmacy Delivery",
    description: "Secure delivery for medical goods and prescriptions.",
  },
  {
    icon: faWarehouse,
    title: "Warehousing & Sorting",
    description: "Short-term storage and smart package sorting services.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="services-preview-section">
      <motion.h2 
        className="section-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Comprehensive & Sustainable Delivery Solutions
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="section-subtext"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Explore how our customized delivery solutions ensure speed, safety, and sustainability for businesses across the GTA.
      </motion.p>
      
      <div className="services-steps">
        {services.map((service, index) => (
          <div 
            className={`step-card-wrapper ${index % 2 === 0 ? "up" : "down"}`} 
            key={index}
          >

            <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="step-card">
              <FontAwesomeIcon icon={service.icon} className="step-icon" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
            {index < services.length - 1 && <div className="connector-line" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;