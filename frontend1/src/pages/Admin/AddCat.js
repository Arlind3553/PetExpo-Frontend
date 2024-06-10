import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCatPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [temperament, setTemperament] = useState('');
  const [colors, setColors] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCat = {
      name,
      origin,
      temperament,
      colors,
      description,
      image
    }
    try {
      await axios.post('http://localhost:5555/api/cats', newCat, { withCredentials: true });
      alert('Cat added successfuly')
      navigate('/cats/dashboard')
    } catch (error) {
      console.error('Error ')
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

  return (
    <div className="container mt-5" style={{ minHeight: '100vh' }}>
      <h1>Add New Cat</h1>
      <form onSubmit={submitHandler}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Name:</th>
              <td><input type="text" className="form-control"  onChange={(e) => setName(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Origin:</th>
              <td><input type="text" className="form-control" onChange={(e) => setOrigin(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Temperament:</th>
              <td><input type="text" className="form-control"  onChange={(e) => setTemperament(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Colors:</th>
              <td><input type="text" className="form-control" onChange={(e) => setColors(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><textarea className="form-control" onChange={(e) => setDescription(e.target.value)} required /></td>
            </tr>
            <tr>
              <th>Image:</th>
              <td><input type="file" className="form-control" onChange={createUploadHandler} required /></td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatPage;

