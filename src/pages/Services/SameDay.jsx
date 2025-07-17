import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "../../styles/SameDay.css";

const processSteps = [
  {
    icon: "fas fa-receipt",
    title: "Order Received",
    description: "We immediately receive and confirm your order.",
  },
  {
    icon: "fas fa-shipping-fast",
    title: "Courier Dispatched",
    description: "Our professional EV courier is dispatched to pick up your package.",
  },
  {
    icon: "fas fa-route",
    title: "Optimized Routing",
    description: "Routes are optimized to ensure fastest delivery.",
  },
  {
    icon: "fas fa-check-circle",
    title: "Package Delivered",
    description: "Your package is delivered on time, every time.",
  },
];

const SameDay = () => {
  return (
    <section className="same-day-section py-5">
      <Container>
        {/* Heading */}
        <motion.h1
          className="text-center fw-bold mb-4 text-success"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Same-Day Delivery
        </motion.h1>

        {/* Intro Paragraph */}
        <p className="lead paragraph-box">
          <span className="highlight">Fast and reliable same-day delivery</span> service across the GTA — ensuring your packages arrive right when they are needed.
        </p>

        {/* Main Content */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.img
              src="/images/same-day-delivery.jpg" // Replace with your actual image path
              alt="Same Day Delivery"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Col>

          <Col md={6}>
            <h3 className="why-heading">Why Choose Our Same-Day Delivery?</h3>
            <ul className="list-unstyled fs-5">
              <li>✅ Real-time delivery tracking with live updates</li>
              <li>✅ Guaranteed delivery within hours</li>
              <li>✅ Ideal for urgent, time-sensitive shipments</li>
              <li>✅ Experienced and professional EV couriers</li>
              <li>✅ Environmentally-friendly electric fleet</li>
            </ul>
          </Col>
        </Row>

        {/* Our Process Section */}
        <Row>
            <Col>
                <h3>Our Process</h3>

                {/* Add the animated icons process here */}
                <Row className="mb-4">
                    {processSteps.map((step, index) => (
                        <Col key={index} md={3} className="text-center mb-4">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <i className={`${step.icon} fa-3x text-success mb-3`}></i>
                                <h5>{step.title}</h5>
                                <p>{step.description}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Optional: keep your existing descriptive paragraphs if you want */}
                
                <p className="enhanced-paragraph">
                    Once your order is placed, our <strong>drivers are dispatched immediately</strong>. Packages are carefully handled and <em>tracked through every step</em>, ensuring prompt and safe delivery to your customer or business partner.
                </p>

                <p className="enhanced-paragraph">
                    We cover the entire Greater Toronto Area with <strong>fast response times</strong> and <strong>optimized routes</strong> powered by advanced technology.
                </p>
            </Col>
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <Button href="/get-quote" variant="success" size="lg" className="rounded-pill">
            Request a Same-Day Delivery Quote
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SameDay;
