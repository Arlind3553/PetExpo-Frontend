import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBirdPage = () => {
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

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('species', species);
      formData.append('family', family);
      formData.append('habitat', habitat);
      formData.append('placeOfFound', placeOfFound);
      formData.append('diet', diet);
      formData.append('description', description);
      formData.append('weightKg', parseFloat(weightKg));
      formData.append('heightCm', parseFloat(heightCm));
      formData.append('image', image);

      // Replace 'http://localhost:5555' with your actual API endpoint
      const uploadResponse = await axios.post('http://localhost:5555/api/uploads', formData, { withCredentials: true });
      setImage(uploadResponse.data.image);
      alert('Image uploaded successfully');

      // Then, submit the rest of the form data
      const response = await axios.post('http://localhost:5555/api/birds', {
        name,
        species,
        family,
        habitat,
        placeOfFound,
        diet,
        description,
        weightKg: parseFloat(weightKg),
        heightCm: parseFloat(heightCm),
        image: uploadResponse.data.image
      }, {
        withCredentials: true
      });

      navigate('/birds/dashboard');
    } catch (error) {
      alert(error?.response?.data?.message || error.message);
    }
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
  }

  return (
    <div className="container mt-5" style={{ minHeight: '100vh' }}>
      <h1>Add New Bird</h1>
      <form onSubmit={submitHandler}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Name:</th>
              <td><input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Species:</th>
              <td><input type="text" className="form-control" value={species} onChange={(e) => setSpecies(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Family:</th>
              <td><input type="text" className="form-control" value={family} onChange={(e) => setFamily(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Habitat:</th>
              <td><input type="text" className="form-control" value={habitat} onChange={(e) => setHabitat(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Place of Found:</th>
              <td><input type="text" className="form-control" value={placeOfFound} onChange={(e) => setPlaceOfFound(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Diet:</th>
              <td><input type="text" className="form-control" value={diet} onChange={(e) => setDiet(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Weight (kg):</th>
              <td><input type="number" className="form-control" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Height (cm):</th>
              <td><input type="number" className="form-control" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Image:</th>
              <td><input type="file" className="form-control" onChange={handleImageChange} required /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Add Bird</button>
      </form>
    </div>
  );
}

export default AddBirdPage;
