import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button, FormControl, Form, Spinner } from 'react-bootstrap';

const DogGallery = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDog, setSelectedDog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/dogs');
        setDogs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  const handleCardClick = (dog) => {
    setSelectedDog(dog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedDog(null);
    setShowModal(false);
  };

  const filteredDogs = dogs.filter(dog =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Container className="text-center"><Spinner animation="border" /></Container>;
  if (error) return <Container><p>Error: {error}</p></Container>;

  return (
    <Container style={{ minHeight: '100vh' }}>
      <h1 className="text-center my-4">Dogs Gallery</h1>
      <Form className="mb-4">
        <FormControl
          type="text"
          placeholder="Search dogs"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <Row>
        {filteredDogs.map(dog => (
          <Col key={dog._id} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={() => handleCardClick(dog)}>
              <Card.Img variant="top" src={dog.image} />
              <Card.Body>
                <Card.Title>{dog.name}</Card.Title>
                <Card.Text>{dog.breed_group}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDog && selectedDog.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDog && (
            <>
              <Row>
                <Col md={6}>
                  <img src={selectedDog.image} alt={selectedDog.name} className="img-fluid" />
                </Col>
                <Col md={6}>
                  <p><strong>Breed Group:</strong> {selectedDog.breed_group}</p>
                  <p><strong>Size:</strong> {selectedDog.size}</p>
                  <p><strong>Lifespan:</strong> {selectedDog.lifespan}</p>
                  <p><strong>Origin:</strong> {selectedDog.origin}</p>
                  <p><strong>Temperament:</strong> {selectedDog.temperament}</p>
                  <p><strong>Colors:</strong> {selectedDog.colors.join(', ')}</p>
                  <p><strong>Description:</strong> {selectedDog.description}</p>
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

export default DogGallery;
