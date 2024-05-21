import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateProperty.module.css';

const CreateProperty = ({ addProperty }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [beds, setBeds] = useState('');
  const [baths, setBaths] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerContact, setSellerContact] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      id: Date.now(), // Just a simple way to create a unique id
      title,
      location,
      details,
      imgSrc: imagePreview,
      beds: parseInt(beds),
      baths: parseInt(baths),
      area: 0,
      price: parseFloat(price),
      seller: {
        name: sellerName,
        contact: sellerContact,
        phone: sellerPhone,
      },
    };

    addProperty(newProperty);

    // Navigate back to the dashboard
    navigate('/');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.createProperty}>
      <h2>Create a New Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <label>
          Details:
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} required></textarea>
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          Beds:
          <input type="number" value={beds} onChange={(e) => setBeds(e.target.value)} required />
        </label>
        <label>
          Baths:
          <input type="number" value={baths} onChange={(e) => setBaths(e.target.value)} required />
        </label>
        <label>
          Seller Name:
          <input type="text" value={sellerName} onChange={(e) => setSellerName(e.target.value)} required />
        </label>
        <label>
          Seller Contact:
          <input type="email" value={sellerContact} onChange={(e) => setSellerContact(e.target.value)} required />
        </label>
        <label>
          Seller Phone:
          <input type="tel" value={sellerPhone} onChange={(e) => setSellerPhone(e.target.value)} required />
        </label>
        <label>
          Property Image:
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </label>
        {imagePreview && <img src={imagePreview} alt="Property Preview" className={styles.imagePreview} />}
        <button type="submit">Create Property</button>
      </form>
    </div>
  );
};

export default CreateProperty;
