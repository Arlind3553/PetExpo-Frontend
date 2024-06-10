import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DogEdit = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;

  useEffect(() => {
    axios.get('http://localhost:5555/api/dogs', { withCredentials: true })
      .then(response => setDogBreeds(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dogBreeds
    .filter(dog => dog.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstItem, indexOfLastItem);

  const deleteDog = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/api/dogs/${id}`, { withCredentials: true });
      setDogBreeds(prevBreeds => prevBreeds.filter(dog => dog._id !== id));
    } catch (error) {
      console.error('Error deleting the dog:', error);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5" style={{ minHeight: '100vh' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/dogs/dashboard/add"><button className="btn btn-success">Add Dog</button></Link>
        <h1 className="text-center">Dog Breeds</h1>
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          style={{ width: '20%' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">Name</th>
              <th className="text-center">Origin</th>
              <th className="text-center">Description</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(dog => (
              <tr key={dog._id}>
                <td className="text-center">{dog.name}</td>
                <td className="text-center">{dog.origin}</td>
                <td className="text-center">{dog.description}</td>
                <td className="text-center">
                  <Link to={`/dogs/dashboard/${dog._id}/edit`}>
                    <button className="btn btn-primary btn-block">Edit</button>
                  </Link>
                  <button onClick={() => deleteDog(dog._id)} className="btn btn-danger btn-block">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          {[...Array(Math.ceil(dogBreeds.length / itemsPerPage)).keys()].map(number => (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number + 1)}
                className="page-link"
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DogEdit;
