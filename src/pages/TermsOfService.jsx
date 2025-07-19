import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import "../styles/TermsOfService.css";

const TermsOfService = () => {
  return (
    <Container className="terms-service">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FontAwesomeIcon icon={faFileContract} className="terms-icon" />
        <h1 className="terms-title">Terms of Service</h1>
        <p className="terms-description">
          This page is under development. Please check back later for our full terms.
        </p>
      </motion.div>
    </Container>
  );
};

export default TermsOfService;
