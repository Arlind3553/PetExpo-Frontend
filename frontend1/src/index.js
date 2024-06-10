import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import PrivateRoutes from './components/privateRoutes';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import BirdGallery from './pages/BirdGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/styles.css';
import DogGallery from './pages/DogGallery';
import CatGallery from './pages/CatGallery';
import Login from './pages/Login';
import Admin from './pages/Admin/Admin';
import CatEdit from './pages/Admin/CatEdit'
import DogEdit from './pages/Admin/DogEdit'
import DogEditPage from './pages/Admin/OneDogEdit'
import BirdEdit from './pages/Admin/BirdEdit'
import BirdEditPage from './pages/Admin/OneBirdEdit';
import CatEditPage from './pages/Admin/OneCatEdit'
import AddCatPage from './pages/Admin/AddCat';
import AddBirdPage from './pages/Admin/AddBird'
import AddDogPage from './pages/Admin/AddDog';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/birds" element={<BirdGallery />} />
      <Route path="/dogs" element={<DogGallery />} />
      <Route path="/cats" element={<CatGallery />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<PrivateRoutes />} >
        <Route path="/admin" element={<Admin />} />
        <Route path="/dogs/dashboard" element={<DogEdit />} />
        <Route path="/dogs/dashboard/:id/edit" element={<DogEditPage />} />
        <Route path="/dogs/dashboard/add" element={<AddDogPage />} />
        <Route path="/cats/dashboard" element={<CatEdit />} />
        <Route path="/cats/dashboard/:id/edit" element={<CatEditPage />} />
        <Route path="/cats/dashboard/add" element={<AddCatPage />} />
        <Route path="/birds/dashboard" element={<BirdEdit />} />
        <Route path="/birds/dashboard/:id/edit" element={<BirdEditPage />} />
        <Route path="/birds/dashboard/add" element={<AddBirdPage />} />

      </Route>
    </Route>
  ),
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);


reportWebVitals();