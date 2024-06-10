import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Modal, Button, FormControl, Form, Spinner } from 'react-bootstrap';

const CatGallery = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('http://localhost:5555/api/cats');
        setCats(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const handleCardClick = (cat) => {
    setSelectedCat(cat);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCat(null);
    setShowModal(false);
  };

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Container className="text-center"><Spinner animation="border" /></Container>;
  if (error) return <Container><p>Error: {error}</p></Container>;

  return (
    <Container style={{ minHeight: '100vh' }}>
      <h1 className="text-center my-4">Cats Gallery</h1>
      <Form className="mb-4">
        <FormControl
          type="text"
          placeholder="Search cats"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
      <Row>
        {filteredCats.map(cat => (
          <Col key={cat._id} sm={6} md={4} lg={3} className="mb-4">
            <Card onClick={() => handleCardClick(cat)}>
              <Card.Img variant="top" src={cat.image} />
              <Card.Body>
                <Card.Title>{cat.name}</Card.Title>
                <Card.Text>{cat.origin}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCat && selectedCat.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCat && (
            <>
              <Row>
                <Col md={6}>
                  <img src={selectedCat.image} alt={selectedCat.name} className="img-fluid" />
                </Col>
                <Col md={6}>
                  <p><strong>Origin:</strong> {selectedCat.origin}</p>
                  <p><strong>Temperament:</strong> {selectedCat.temperament}</p>
                  <p><strong>Colors:</strong> {selectedCat.colors.join(', ')}</p>
                  <p><strong>Description:</strong> {selectedCat.description}</p>
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

export default CatGallery;
