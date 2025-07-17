import React from "react"
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import aboutImg from "../assets/team.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/About.css";

const About = () => {
    return (
        <section className="about-section py-5">
            <Container>
                {/* Header with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >

                    <h1 className="text-center fw-bold mb-3 text-success heading-gradient">
                        <i className="fas fa-shipping-fast me-2"></i>
                        Your Premier <span className="highlight heading-gradient"> Eco-Friendly</span> Logistics Partner in the GTA
                    </h1>

                    <p className="lead text-center mb-5">
                        FRG Logistics is a trusted and efficient delivery service provider operating
                        exclusively in the Greater Toronto Area (GTA). With a strong focus on speed,
                        reliability, and professionalism, we offer customized logistics and last-mile
                        delivery solutions designed to meet the specific needs of our clients.
                    </p>
                </motion.div>

                {/* Side-by-side Image and About Text */}
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <motion.img
                            src={aboutImg}
                            alt="FRG Logistics"
                            className="img-fluid rounded shadow-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        />
                    </Col>
                    <Col md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="fw-bold heading-green">Who We Are</h2>

                            <p className="mb-3">
                                Our experienced drivers, state-of-the-art electric vehicle fleet, and advanced
                                tracking systems ensure cost-effective and eco-friendly services across the entire
                                GTA. We are committed to a greener future, making every delivery with minimal
                                environmental impact.
                            </p>

                            {/* <ul className="list-unstyled">
                                {[
                                    ["Business Name:", "FRG Logistics"],
                                    ["Location:", "Mississauga, Ontario"],
                                    ["Service Area:", "Greater Toronto Area (GTA)"],
                                    ["Slogan:", "“Efficient. Reliable. Green.”"]
                                ].map(([label, value], index) => (
                                    <li key={index} style={{ "--i": index }}>
                                        <strong>{label}</strong> {value}
                                    </li>
                                ))}
                            </ul> */}

                            <ul className="list-unstyled">
                                <li style={{ "--i": 0 }}><strong>Business Name:</strong> FRG Logistics</li>
                                <li style={{ "--i": 1 }}><strong>Location:</strong> Mississauga, Ontario</li>
                                <li style={{ "--i": 2 }}><strong>Service Area:</strong> Greater Toronto Area (GTA)</li>
                                <li className="slogan-line">
                                    <strong>Slogan:</strong>{" "}
                                    <span className="slogan">
                                        {["Efficient.", "Reliable.", "Green."].map((word, index) => (
                                            <span key={index} className="slogan-word" style={{ "--i": index }}>
                                                {word}
                                            </span>
                                        ))}
                                    </span>
                                </li>
                            </ul>

                        </motion.div>
                    </Col>
                </Row>

                {/*Our Values Section */}
                {/* <section className="mb-5">
                    <h2 className="fw-bold text-center mb-4">Our Core Values</h2>
                    <Row className="g-4">
                        <Col md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Eco-Conscious</Card.Title>
                                    <Card.Text>
                                        We are committed to sustainability through the exclusive use of electric vehicles.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Customer Fist</Card.Title>
                                    <Card.Text>
                                        Our delivery solutions are tailored to meet your evolving business needs.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>Innovation</Card.Title>
                                    <Card.Text>
                                        From GPS tracking to digital proof of delivery, we lead with tech.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section> */}

                {/*Our Values Section */}
                <section className="mb-5">
                    <motion.h2
                        className="fw-bold text-center mb-4 heading-green"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3  }}
                    >
                        Our Core Values
                    </motion.h2>

                    <Row className="text-center g-4">
                        <Col md={4}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="p-4 shadow rounded bg-white h-100"
                            >
                                <i className="fas fa-leaf fa-3x text-success mb-3"></i>
                                <h5 className="fw-bold">Eco-Conscious</h5>
                                <p>
                                    We are committed to sustainability through the exclusive use of electric vehicles.
                                </p>
                            </motion.div>
                        </Col>

                        <Col md={4}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="p-4 shadow rounded bg-white h-100"
                            >
                                <i className="fas fa-handshake fa-3x text-success mb-3"></i>
                                <h5 className="fw-bold">Customer First</h5>
                                <p>
                                    Our delivery solutions are tailored to meet your evolving business needs.
                                </p>
                            </motion.div>
                        </Col>

                        <Col md={4}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="p-4 shadow rounded bg-white h-100"
                            >
                                <i className="fas fa-lightbulb fa-3x text-success mb-3"></i>
                                <h5 className="fw-bold">Innovation</h5>
                                <p>
                                    From GPS tracking to digital proof of delivery, we lead with tech.
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                </section>


                {/*Mission Statement */}
                <section>
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mission-container"
                    >
                        <h2 className="fw-bold text-center mb-3 heading-green">Our Mission</h2>
                        <p className="mission-quote text-center mx-auto">
                            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon-left" />
                            To deliver exceptional, eco-friendly logistics services that help businesses thrive while building a more sustainable future for our communities.
                            <FontAwesomeIcon icon={faQuoteRight} className="quote-icon-right" />
                        </p>
                    </motion.section>
                </section>
            </Container>
        </section>
    );
};

export default About;
