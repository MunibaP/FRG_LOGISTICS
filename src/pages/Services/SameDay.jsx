import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
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

const bulletVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
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
        <p className="lead paragraph-box text-center mb-5">
          <span className="highlight">Fast and reliable same-day delivery</span> service across the GTA — ensuring your packages arrive right when they are needed.
        </p>

        {/* Main Content */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <motion.img
              src={SameDayImg}
              alt="Same Day Delivery"
              className="img-fluid same-day-img mt-3"
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
            <motion.h3
              className="why-heading text-center text-success fw-bold mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our Process
            </motion.h3>

            <Row className="g-4">
              {processSteps.map((step, index) => (
                <Col key={index} md={6} lg={3}>
                  <motion.div
                    className="process-card p-4 rounded text-center position-relative"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Large Number Background */}
                    <span className="process-number">{index + 1}</span>

                    {/* Icon */}
                    <i className={`${step.icon} fa-2x text-success mb-3 z-1 position-relative`}></i>

                    {/* Heading */}
                    <h5 className="fw-bold position-relative z-1">{step.title}</h5>

                    {/* Description */}
                    <p className="position-relative z-1">{step.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* Animated Paragraphs */}
            {/* <motion.p
              className="enhanced-paragraph"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Once your order is placed, our <strong>drivers are dispatched immediately</strong>. Packages are carefully handled and <em>tracked through every step</em>, ensuring prompt and safe delivery to your customer or business partner.
            </motion.p>

            <motion.p
              className="enhanced-paragraph"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We cover the entire Greater Toronto Area with <strong>fast response times</strong> and <strong>optimized routes</strong> powered by advanced technology.
            </motion.p> */}

            {/* Accordion / Toggle Panel */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>How fast is your delivery service?</Accordion.Header>
                  <Accordion.Body>
                    We provide guaranteed same-day delivery within hours, depending on location and time of order placement.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What areas do you cover?</Accordion.Header>
                  <Accordion.Body>
                    We service the entire Greater Toronto Area with optimized routing for speed and efficiency.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Can I track my package in real time?</Accordion.Header>
                  <Accordion.Body>
                    Yes! You get live tracking updates via our GPS-enabled system from pickup to drop-off.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </motion.div> */}
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
