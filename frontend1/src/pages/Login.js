import React, { useState } from 'react';
import { Container, Form, Button, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5555/api/user/login', { username, password }, { withCredentials: true });
      if (response.status === 200) {
        localStorage.setItem('isAuth', true);
        navigate('/admin');
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Server error');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center align-items-center" style={{ minHeight: '100vh' }}>
        <Col md={6}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Admin Login</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formBasicUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && <p className="text-danger">{error}</p>}

              <Button variant="primary" type="submit" block>
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
