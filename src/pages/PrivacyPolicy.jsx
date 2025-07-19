import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-policy">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FontAwesomeIcon icon={faLock} className="privacy-icon" />
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-description">
          This page is under development. A detailed privacy policy will be available soon.
        </p>
      </motion.div>
    </Container>
  );
};

export default PrivacyPolicy;
