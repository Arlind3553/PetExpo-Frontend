import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import axios from 'axios';

const Header = () => {
  const isAuth = localStorage.getItem('isAuth');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5555/api/user/logout', {}, { withCredentials: true });
      localStorage.removeItem('isAuth');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="35" alt="Pet Expo Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link as={Link} to="/">HOMEPAGE</Nav.Link>
            {isAuth && <Nav.Link as={Link} to="/admin">DASHBOARD</Nav.Link>}
            <Nav.Link as={Link} to="/about-us">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">CONTACT US</Nav.Link>
            {isAuth ? (
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="outline-light" as={Link} to="/login">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
