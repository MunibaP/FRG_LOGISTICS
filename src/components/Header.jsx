import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import "../styles/Header.css"

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand 
          as={NavLink} 
          to="/" 
          className="fw-bold text-success fs-4"
        >
          <img
            src={logo}
            alt= "FRG Logistics Logo"
            className="navbar-logo me-2"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-2">

            <NavLink as={NavLink} to="/" 
              end className={({isActive}) => 
                isActive ? "nav-link active-link" : "nav-link" 
              }
            >
              Home
            </NavLink>

            <NavLink as={NavLink} to="/about"
              className={({isActive}) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About Us
            </NavLink>
              {/*text-success makes the Services text Green*/}
             <NavDropdown
              title={
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-title-link active-link"
                      : "dropdown-title-link"
                  }
                >
                  Services
                </NavLink>
              }
              id="services-dropdown"
            >

              <NavDropdown.Item
                as={NavLink}
                to="/services/same-day"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Same-Day Delivery
              </NavDropdown.Item>

              <NavDropdown.Item
                as={NavLink}
                to="/services/Scheduled"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Scheduled & Recurring
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/Ecommerce"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                E-Commerce Parcel Delivery
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/Retail"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >

                Retail & B2B Distribution
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/medical-delivery"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Medical & Pharmacy Delivery
              </NavDropdown.Item>

              <NavDropdown.Item 
                as={NavLink} 
                to="/services/Warehousing"
                className={({ isActive }) =>
                  isActive ? "dropdown-item active-link" : "dropdown-item"
                }
              >
                Warehousing & Sorting
              </NavDropdown.Item>

            </NavDropdown>

            <NavLink 
              as={NavLink} 
              to="/fleet"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Our Fleet
            </NavLink>

            {/* <Nav.Link 
              as={NavLink} 
              to="/MedicalDelivery"
              className={({ isActive }) =>
                isActive ? "dropdown-item active-link" : "dropdown-item"
              }
            >
              Medical Delivery
            </Nav.Link> */}

            <NavLink 
              as={NavLink} 
              to="/quote"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Get a Quote
            </NavLink>

            <NavLink 
              as={NavLink} 
              to="/track"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Track
            </NavLink>

            <NavLink 
              as={NavLink} 
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Contact Us
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
