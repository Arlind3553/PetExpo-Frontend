import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Modal } from 'react-bootstrap';

const BirdEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [family, setFamily] = useState('');
  const [habitat, setHabitat] = useState('');
  const [placeOfFound, setPlaceOfFound] = useState('');
  const [diet, setDiet] = useState('');
  const [description, setDescription] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/api/birds/${id}`, { withCredentials: true });
        setName(response.data.name);
        setSpecies(response.data.species);
        setFamily(response.data.family);
        setHabitat(response.data.habitat);
        setPlaceOfFound(response.data.place_of_found);
        setDiet(response.data.diet);
        setDescription(response.data.description);
        setWeightKg(response.data.weight_kg);
        setHeightCm(response.data.height_cm);
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
      await axios.put(`http://localhost:5555/api/birds/${id}`, {
        name,
        species,
        family,
        habitat,
        place_of_found: placeOfFound,
        diet,
        description,
        weight_kg: weightKg,
        height_cm: heightCm,
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
    navigate(`/birds/dashboard/`);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: "800px" }}>
        <h1 className="text-center mb-4">Edit Bird</h1>
        <Form onSubmit={submitHandler} className="p-4 border rounded shadow bg-white">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Species</Form.Label>
            <Form.Control type="text" placeholder="Enter species" value={species} onChange={(e) => setSpecies(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Family</Form.Label>
            <Form.Control type="text" placeholder="Enter family" value={family} onChange={(e) => setFamily(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Habitat</Form.Label>
            <Form.Control type="text" placeholder="Enter habitat" value={habitat} onChange={(e) => setHabitat(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Place of Found</Form.Label>
            <Form.Control type="text" placeholder="Enter place of found" value={placeOfFound} onChange={(e) => setPlaceOfFound(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Diet</Form.Label>
            <Form.Control type="text" placeholder="Enter diet" value={diet} onChange={(e) => setDiet(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control type="number" placeholder="Enter weight in kg" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control type="number" placeholder="Enter height in cm" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={createUploadHandler} />
            <Form.Control type="text" value={image} disabled className="mt-2" />
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" type="submit" className="me-2">Update</Button>
            <Link to="/birds/dashboard" className="btn btn-secondary">Cancel</Link>
          </div>
        </Form>
      </div>
  
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Bird updated successfully</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>OK</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}  

export default BirdEditPage;
