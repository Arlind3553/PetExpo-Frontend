import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button, Carousel } from 'react-bootstrap';
import CatImage from '../assets/images/cat.jpg';
import CatImage2 from '../assets/images/cat2.jpg'
import CatImage3 from '../assets/images/cat3.jpeg'
import DogImage from '../assets/images/dog.jpg';
import DogImage2 from '../assets/images/dog2.jpeg'
import DogImage3 from '../assets/images/dog3.jpeg'
import BirdImage from '../assets/images/bird.jpg'; 
import BirdImage2 from '../assets/images/bird2.jpeg'
import BirdImage3 from '../assets/images/bird3.jpeg'

const HomePage = () => {
  return (
    <Container className="my-5" style={{ minHeight: '100vh' }}>
      <h1 className="text-center mb-4" style={{ color: '#008000', fontWeight: 'bold' }}>PET EXPO</h1>
      <p className="text-center mb-4" style={{ fontSize: '1.2rem', color: '#666' }}>
        Welcome to the Pet Expo! Your one-stop destination to explore a diverse world of pets. 
        Discover our galleries to find adorable cats, loyal dogs, and beautiful birds. 
        Learn interesting facts, find adoption information, and celebrate the joy pets bring into our lives.
      </p>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Link to="/cats">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={CatImage} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={CatImage2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={CatImage3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Cats</Card.Title>
              <Card.Text>
                Discover our furry feline friends and their playful antics. Find your purr-fect companion today!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Link to="/dogs">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={DogImage} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={DogImage2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={DogImage3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Dogs</Card.Title>
              <Card.Text>
                Meet our loyal canine companions and learn about the bonds they forge with us. Embrace the love of a dog!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Link to="/birds">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={BirdImage} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={BirdImage2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={BirdImage3} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </Link>
            <Card.Body>
              <Card.Title className="text-center">Birds</Card.Title>
              <Card.Text>
                Explore the world of our feathered friends and their vibrant colors. Discover the beauty of birds!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr></hr>
      <Row className="my-5">
          <Col>
            <h2 style={{ color: '#008000' }}>About Pet Expo</h2>
            <p>Welcome to Pet Expo, the ultimate destination for pet lovers and enthusiasts! Our mission is to bring together a community that celebrates the joy and companionship of our feathered, feline, and canine friends.</p>
            <p>Explore our curated galleries of birds, cats, and dogs, each filled with stunning photographs and fascinating facts about various breeds. Whether you're looking to adopt a new companion or simply admire the beauty of these creatures, Pet Expo has something for everyone.</p>
            <p>Join us on a journey through the animal kingdom and discover the unique characteristics that make each pet special. From the majestic flight of birds to the playful antics of cats and the loyal companionship of dogs, our galleries showcase the best of the pet world.</p>
            <p>At Pet Expo, we believe that every animal deserves love and a forever home. That's why we're dedicated to raising awareness about animal welfare and promoting responsible pet ownership. Come and be a part of our vibrant community, and share in the love for all things pets!</p>
          </Col>
        </Row>

        {/* Contact Us Section */}
        <hr></hr>
        <Row className="my-5">
          <Col>
            <h2 style={{ color: '#008000' }}>Contact Us</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
  );
};

export default HomePage;
