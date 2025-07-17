import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import SameDayImg from "../../assets/SameDay.jpg";
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

// Animation variants for bullets
const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3, // stagger each bullet by 0.3s
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SameDay = () => {
  const bullets = [
    "Real-time delivery tracking with live updates",
    "Guaranteed delivery within hours",
    "Ideal for urgent, time-sensitive shipments",
    "Experienced and professional EV couriers",
    "Environmentally-friendly electric fleet",
  ];

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
        <p className="lead paragraph-box text-center">
          <span className="highlight">Fast and reliable same-day delivery</span> service across the GTA — ensuring your packages arrive right when they are needed.
        </p>

        {/* Main Content */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.img
              src={SameDayImg}
              alt="Same Day Delivery"
              className="img-fluid same-day-img"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </Col>

          <Col md={6}>
            <div className="why-choose-wrapper text-center">
              <h3 className="why-heading fw-bold">Why Choose Our Same-Day Delivery?</h3>
              <ul className="why-bullets list-unstyled mx-auto text-start" style={{ maxWidth: "400px" }}>
                {bullets.map((text, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={bulletVariants}
                    style={{ marginBottom: "0.75rem" }}
                  >
                    ✅ {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        {/* Our Process Section */}
        <Row>
          <Col>
            <h3>Our Process</h3>

            {/* Animated process steps */}
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
