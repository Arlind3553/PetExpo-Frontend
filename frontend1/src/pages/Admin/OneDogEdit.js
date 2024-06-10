import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Modal } from 'react-bootstrap';


const DogEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [breed_group, setBreedGroup] = useState('');
  const [size, setSize] = useState('');
  const [lifespan, setLifeSpan] = useState('');
  const [origin, setOrigin] = useState('');
  const [temperament, setTemperament] = useState('');
  const [colors, setColors] = useState([]);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/api/dogs/${id}`, { withCredentials: true });
        setName(response.data.name);
        setBreedGroup(response.data.breed_group);
        setSize(response.data.size);
        setLifeSpan(response.data.lifespan);
        setOrigin(response.data.origin);
        setTemperament(response.data.temperament);
        setColors(response.data.colors);
        setDescription(response.data.description);
        setImage(response.data.image);
      } catch (error) {
        alert(error?.response?.data?.message || error.message);
      }
    };

    fetchData();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5555/api/dogs/${id}`, {
        name,
        breed_group,
        size,
        lifespan,
        origin,
        temperament,
        colors,
        description,
        image
      }, { withCredentials: true });
      setShowModal(true);
    } catch (error) {
      alert(error?.response?.data?.message || error.message);
    }
  }

  const createUploadHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5555/api/uploads', formData, { withCredentials: true });
      setImage(response.data.image);
      alert('Image uploaded successfully');
    } catch (error) {
      alert(error?.response?.data?.message || error.message);
    }
  }

  const closeModal = () => {
    setShowModal(false);
    navigate(`/dogs/dashboard/`);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: "800px" }}>
        <h1 className="text-center mb-4">Edit Dog</h1>
        <Form onSubmit={submitHandler} className="p-4 border rounded shadow bg-white">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Breed group</Form.Label>
            <Form.Control type="text" placeholder="Enter breed group" value={breed_group} onChange={(e) => setBreedGroup(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Size</Form.Label>
            <Form.Control type="text" placeholder="Enter size" value={size} onChange={(e) => setSize(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lifespan</Form.Label>
            <Form.Control type="text" placeholder="Enter lifespan" value={lifespan} onChange={(e) => setLifeSpan(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Origin</Form.Label>
            <Form.Control type="text" placeholder="Enter origin" value={origin} onChange={(e) => setOrigin(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Temperament</Form.Label>
            <Form.Control type="text" placeholder="Enter temperament" value={temperament} onChange={(e) => setTemperament(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Colors</Form.Label>
            <Form.Control type="text" placeholder="Enter colors" value={colors} onChange={(e) => setColors(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={createUploadHandler} />
            <Form.Control type="text" value={image} disabled className="mt-2" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="me-2">Update</Button>
            <Link to="/dogs/dashboard" className="btn btn-secondary">Cancel</Link>
          </div>
        </Form>
      </div>
  
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dog updated successfully</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>OK</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DogEditPage
