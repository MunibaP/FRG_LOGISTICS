import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import evVan from "../assets/evVan.jpg";
import cargoBike from "../assets/cargoTruck.jpg";
import electricTruck from "../assets/electricTruck.jpg";
import fleetBg from "../assets/GTAMAP.jpg";

import "../styles/Fleet.css";

const fleetData = [
  {
    img: evVan,
    name: "Small EV Van",
    specs: ["Range: 200 km", "Payload: 800 kg", "Eco-friendly"],
  },
  {
    img: cargoBike,
    name: "Cargo Bike",
    specs: ["Urban delivery", "Zero emissions", "Compact & agile"],
  },
  {
    img: electricTruck,
    name: "Electric Truck",
    specs: ["Range: 300 km", "Payload: 2,500 kg", "Fast charging"],
  },
];

const OurFleet = () => {
  return (
    <section className="our-fleet-page">
      {/* Hero */}
      <div
        className="fleet-hero d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${fleetBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="overlay" />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-4 fw-bold heading"
        >
          Meet Our Advanced Electric Vehicle Fleet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lead mb-4 subheading"
        >
          Efficient, green, and built to serve the GTA.
        </motion.p>
        <div>
          <Button variant="success" className="me-3 glow-button">
            Explore Fleet Types
          </Button>
          <Button variant="outline-light" className="glow-button">
            Request a Demo
          </Button>
        </div>
      </div>

      {/* Fleet Cards */}
      <Container className="py-5">
        <Row className="g-4 justify-content-center">
          {fleetData.map(({ img, name, specs }, i) => (
            <Col key={i} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="fleet-card-wrapper"
              >
                <Card className="shadow-sm h-100 text-center">
                  <Card.Img variant="top" src={img} alt={name} />
                  <Card.Body>
                    <Card.Title className="text-success">{name}</Card.Title>
                    <ul className="list-unstyled fs-6">
                      {specs.map((spec, idx) => (
                        <li key={idx}>{spec}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sustainability & Impact */}
      <Container fluid className="sustainability-section py-5 bg-light text-center">
        <h2 className="mb-4">Sustainability & Impact</h2>
        <Row>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3>
                <CountUp end={25000} duration={3} separator="," />+ kg CO₂ Saved
              </h3>
              <p>Through our electric fleet operations</p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3>
                <CountUp end={120000} duration={3} separator="," />+ km Driven
              </h3>
              <p>Zero emissions across GTA routes</p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>
                <CountUp end={50} duration={3} />+ Vehicles
              </h3>
              <p>Fully electric and growing</p>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* CTA */}
      <Container className="py-5 text-center">
        <h4 className="mb-4 fw-bold">Want to see our fleet in action?</h4>
        <Button variant="success" size="lg">
          Schedule a Demo
        </Button>
      </Container>
    </section>
  );
};

export default OurFleet;
