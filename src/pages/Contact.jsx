import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0px 0px 12px rgb(72 199 116 / 0.8)",
};

const Contact = () => {
  return (
    <motion.div
      className="contact-page py-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="mb-5">
          <Col>
            <motion.h2
              className="text-center fw-bold text-success mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Partner with FRG Logistics Today!
            </motion.h2>
            <motion.p
              className="text-center text-muted fs-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              We would be happy to meet and discuss how FRG Logistics can seamlessly support your delivery operations.
              Reach out for a demo, rate card, or to schedule a pilot delivery.
            </motion.p>
          </Col>
        </Row>

        <Row>
          {/* Contact Info */}
          <Col md={5} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="contact-info p-4 border rounded shadow-sm"
            >
              <h4 className="mb-4 text-success fw-semibold">Contact Information</h4>

              <p className="fs-5 mb-3 contact-info-item">
                <FontAwesomeIcon icon={faUser} className="me-3 text-success" />
                <strong>Name:</strong> [Your Full Name]
              </p>
              <p className="fs-5 mb-3 contact-info-item">
                <FontAwesomeIcon icon={faPhone} className="me-3 text-success" />
                <strong>Phone:</strong> [Your Number]
              </p>
              <p className="fs-5 mb-3 contact-info-item">
                <FontAwesomeIcon icon={faEnvelope} className="me-3 text-success" />
                <strong>Email:</strong> [Your Email]
              </p>
              <p className="fs-5 mb-3 contact-info-item">
                <FontAwesomeIcon icon={faGlobe} className="me-3 text-success" />
                <strong>Website:</strong> [Optional]
              </p>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form p-4 border rounded shadow-sm"
            >
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message here"
                    required
                  />
                </Form.Group>

                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <Button variant="success" type="submit" className="w-100 fw-semibold">
                    Send Message
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
