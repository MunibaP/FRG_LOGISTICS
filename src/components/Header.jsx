// import React from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "../styles/Header.css";

// const Header = () => {
//   return (
//     <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="fw-bold text-success fs-4">
//           FRG Logistics
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="main-navbar" />
//         <Navbar.Collapse id="main-navbar">
//           <Nav className="ms-auto gap-2">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About Us</Nav.Link>

//             <NavDropdown title="Services" id="services-dropdown">
//               <NavDropdown.Item as={Link} to="/services/same-day">Same-Day Delivery</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/services/scheduled">Scheduled & Recurring</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/services/ecommerce">E-Commerce Parcel Delivery</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/services/retail">Retail & B2B Distribution</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/services/medical">Medical & Pharmacy Delivery</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/services/warehousing">Warehousing & Sorting</NavDropdown.Item>
//             </NavDropdown>

//             <Nav.Link as={Link} to="/fleet">Our Fleet</Nav.Link>
//             <Nav.Link as={Link} to="/medical">Medical Delivery</Nav.Link>
//             <Nav.Link as={Link} to="/get-quote">Get a Quote</Nav.Link>
//             <Nav.Link as={Link} to="/track">Track</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/FRG.png";
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

            <Nav.Link as={NavLink} to="/" 
              end className={({isActive}) => 
                isActive ? "nav-link active-link" : "nav-link" 
              }
            >
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about"
              className={({isActive}) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About Us
            </Nav.Link>
              {/*text-success makes the Services text Green*/}
             <NavDropdown
              title={
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "dropdown-title-link text-success active-link"
                      : "dropdown-title-link text-success"
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

            <Nav.Link 
              as={NavLink} 
              to="/fleet"
              className={({ isActive }) =>
                isActive ? "dropdown-item active-link" : "dropdown-item"
              }
            >
              Our Fleet
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/MedicalDelivery"
              className={({ isActive }) =>
                isActive ? "dropdown-item active-link" : "dropdown-item"
              }
            >
              Medical Delivery
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/quote"
              className={({ isActive }) =>
                isActive ? "dropdown-item active-link" : "dropdown-item"
              }
            >
              Get a Quote
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/track"
              className={({ isActive }) =>
                isActive ? "dropdown-item active-link" : "dropdown-item"
              }
            >
              Track
            </Nav.Link>

            <Nav.Link 
              as={NavLink} 
              to="/contact"
              className={({ isActive }) =>
                isActive ? "dropdown-item active-link" : "dropdown-item"
              }
            >
              Contact Us
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
