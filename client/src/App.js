import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateProperty from './CreateProperty';
import Login from './Login';
import Signup from './Signup';
import Image1 from './image1.jpeg'
import Image2 from './image2.jpeg'
import Image3 from './image3.jpeg'

const initialProperties = [
  {
    id: 1,
    title: "Riverside",
    location: "101 Riverbank Road, Tranquil V...",
    details: "Find peace by the river in this charming retreat. Surrounded by lush greenery...",
    imgSrc: Image1,
    beds: 1,
    baths: 1,
    price: 2000,
    likes:304,
    seller: {
      name: "John Doe",
      contact: "johndoe@example.com",
      phone: "123-456-7890",
    },
  },
  {
    id: 2,
    title: "Stradella",
    location: "Los Angeles, United States",
    details: "The design includes generous outdoor living areas capturing fantastic views...",
    imgSrc: Image2,
    beds: 1,
    baths: 1,
    price: 2600,
    likes:256,
    seller: {
      name: "Jane Smith",
      contact: "janesmith@example.com",
      phone: "987-654-3210",
    },
  },
  {
    id: 3,
    title: "St Tropez",
    location: "St Tropez, France",
    details: "A contemporary home situated in the Ramatuelle region of St Tropez. This...",
    imgSrc: Image3,
    beds: 2,
    baths: 3,
    price: 5000,
    likes:423,
    seller: {
      name: "Alice Johnson",
      contact: "alicejohnson@example.com",
      phone: "456-789-1230",
    },
  }
];

function App() {
  const [properties, setProperties] = useState(initialProperties);

  const addProperty = (property) => {
    setProperties((prevProperties) => [...prevProperties, property]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard properties={properties} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-property" element={<CreateProperty addProperty={addProperty} />} />
      </Routes>
    </Router>
  );
}

export default App;
