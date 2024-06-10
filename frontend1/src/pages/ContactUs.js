import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="my-5" style={{ minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-center mb-4" style={{color: '#008000'}}>Get in Touch</h1>
          <p className="text-center mb-4">
            Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Your Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject of your message" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type your message here" />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">Send Message</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
