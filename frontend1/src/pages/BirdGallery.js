import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button, FormControl, Form, Spinner } from 'react-bootstrap';

const BirdGallery = () => {
  const [birds, setBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBird, setSelectedBird] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/birds');
        setBirds(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBirds();
  }, []);

  const handleCardClick = (bird) => {
    setSelectedBird(bird);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedBird(null);
    setShowModal(false);
  };

  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Container className="text-center"><Spinner animation="border" /></Container>;
  if (error) return <Container><p>Error: {error}</p></Container>;

  return (
    <Container style={{ minHeight: '100vh' }}>
      <h1 className="text-center my-4">Birds Gallery</h1>
      <Form className="mb-4">
        <FormControl
          type="text"
          placeholder="Search birds"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <Row>
        {filteredBirds.map(bird => (
          <Col key={bird._id} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={() => handleCardClick(bird)}>
              <Card.Img variant="top" src={bird.image} />
              <Card.Body>
                <Card.Title>{bird.name}</Card.Title>
                <Card.Text>{bird.place_of_found}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedBird && selectedBird.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBird && (
            <>
              <Row>
                <Col md={6}>
                  <img src={selectedBird.image} alt={selectedBird.name} className="img-fluid" />
                </Col>
                <Col md={6}>
                  <p><strong>Species:</strong> {selectedBird.species}</p>
                  <p><strong>Family:</strong> {selectedBird.family}</p>
                  <p><strong>Habitat:</strong> {selectedBird.habitat}</p>
                  <p><strong>Place of Found:</strong> {selectedBird.place_of_found}</p>
                  <p><strong>Diet:</strong> {selectedBird.diet}</p>
                  <p><strong>Description:</strong> {selectedBird.description}</p>
                  <p><strong>Weight (kg):</strong> {selectedBird.weight_kg}</p>
                  {selectedBird.height_cm && <p><strong>Height (cm):</strong> {selectedBird.height_cm}</p>}
                  {selectedBird.wingspan_cm && <p><strong>Wingspan (cm):</strong> {selectedBird.wingspan_cm}</p>}
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BirdGallery;
