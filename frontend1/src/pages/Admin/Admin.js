import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CatImage from '../../assets/images/Cat1.jpg';
import DogImage from '../../assets/images/dog1.jpeg'; 
import BirdImage from '../../assets/images/bird1.jpeg'; 

const HomePage = () => {
  return (
    <>
      <Container className="mt-5" style={{ minHeight: '100vh' }}>
        <h1 className="text-center mb-4" style={{ color: '#008000', fontWeight: 'bold' }}>Admin Dashboard</h1>
        <p className="text-center text-muted mb-5">
          Welcome to Admin Dashboard. Here You can Edit, Add or Delete Any Animal of Your Choice!
        </p>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Link to="/cats/dashboard">
                <Card.Img variant="top" src={CatImage} alt="Cats" />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="text-center mt-auto">
                  View All Cats!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Link to="/dogs/dashboard/">
                <Card.Img variant="top" src={DogImage} alt="Dogs" />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="text-center mt-auto">
                  View All Dogs!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Link to="/birds/dashboard">
                <Card.Img variant="top" src={BirdImage} alt="Birds" />
              </Link>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="text-center mt-auto">
                  View All Birds!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
