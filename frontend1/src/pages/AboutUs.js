import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CatImage from '../assets/images/Cat1.jpg';
import DogImage from '../assets/images/dog1.jpeg'; 
import BirdImage from '../assets/images/bird1.jpeg'; 
const AboutUs = () => {
  return (
    <Container style={{ minHeight: '100vh' }}>
      <h1 className="text-center my-4">About Pet Expo</h1>
      <Row className="mb-4">
        <Col md={6} className="d-flex justify-content-center mb-3">
          <Image src={DogImage} roundedCircle fluid />
        </Col>
        <Col md={6} className="d-flex justify-content-center mb-3">
          <Image src={CatImage} roundedCircle fluid />
        </Col>
        <Col md={12} className="d-flex justify-content-center mb-3">
          <Image src={BirdImage} roundedCircle fluid />
        </Col>
      </Row>
      <p>Welcome to Pet Expo, the ultimate destination for pet lovers and enthusiasts! Our mission is to bring together a community that celebrates the joy and companionship of our feathered, feline, and canine friends.</p>
      <p>Explore our curated galleries of birds, cats, and dogs, each filled with stunning photographs and fascinating facts about various breeds. Whether you're looking to adopt a new companion or simply admire the beauty of these creatures, Pet Expo has something for everyone.</p>
      <p>Join us on a journey through the animal kingdom and discover the unique characteristics that make each pet special. From the majestic flight of birds to the playful antics of cats and the loyal companionship of dogs, our galleries showcase the best of the pet world.</p>
      <p>At Pet Expo, we believe that every animal deserves love and a forever home. That's why we're dedicated to raising awareness about animal welfare and promoting responsible pet ownership. Come and be a part of our vibrant community, and share in the love for all things pets!</p>
    </Container>
  );
};

export default AboutUs;
