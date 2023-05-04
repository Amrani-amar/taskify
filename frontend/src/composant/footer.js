
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ darkMode }) => {
  return (
    <footer className={darkMode ? "mt-5 footer-darkmode" : "mt-5 footer-lightmode"}>
      <Container fluid className="bg-light" >
        <Row className="py-3">
          <Col md="4">
            <h5 className="mb-3">TASKIFY</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi labore doloremque adipisci voluptatibus tenetur?</p>
          </Col>
          <Col md="4">
            <h5 className="mb-3">Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5 className="mb-3">Contact</h5>
            <p>123 AZAZGA</p>
            <p>15300 TIZI OUZOU</p>
            <p>info@company.com</p>
            <p>026 34 00 00</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-dark text-light text-center py-2">
        <small>© 2023 TASKIFY.</small>
      </Container>
    </footer>
  );
}

export default Footer;