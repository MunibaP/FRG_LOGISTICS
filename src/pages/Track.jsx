import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faBox,
  faTruck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Track.css";

const steps = [
  { id: 1, label: "Package Received", icon: faBox },
  { id: 2, label: "In Transit", icon: faTruck },
  { id: 3, label: "Out for Delivery", icon: faMapMarkedAlt },
  { id: 4, label: "Delivered", icon: faCheckCircle },
];

export default function TrackSplit() {
  const [trackingId, setTrackingId] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, random active step
    setActiveStep(Math.floor(Math.random() * steps.length) + 1);
  };

  return (
    <Container fluid className="track-split-page p-0">
      <Row className="gx-0">
        {/* Left Side: Map / Illustration */}
        <Col md={6} className="map-side d-flex justify-content-center align-items-center">
          <motion.div
            className="map-placeholder"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* You can replace this div with an actual map or SVG */}
            <h2 className="text-white text-center">[Animated Map Here]</h2>
          </motion.div>
        </Col>

        {/* Right Side: Form + Status */}
        <Col md={6} className="form-side d-flex flex-column justify-content-center p-5">
          <h1 className="mb-4">Track Your Delivery</h1>
          <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Group controlId="trackingId" className="mb-3">
              <Form.Label>Tracking Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your tracking ID"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              Track Package
            </Button>
          </Form>

          {/* Status Steps Vertical */}
          <div className="status-steps">
            {steps.map(({ id, label, icon }) => {
              const isActive = id === activeStep;
              const isCompleted = id < activeStep;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: id * 0.2 }}
                  className={`status-step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                >
                  <FontAwesomeIcon icon={icon} className="step-icon" />
                  <span>{label}</span>
                  {isActive && <motion.div layoutId="highlight" className="highlight-bar" />}
                </motion.div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
