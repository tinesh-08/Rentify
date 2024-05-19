import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import SellerModal from './SellerModal';
import styles from './Dashboard.module.css';

const Dashboard = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (property) => {
    // setSelectedProperty(property);
    // setIsModalOpen(true);
  };

  const handleInterestClick = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>RENTIFY</h1>
        <nav>
          <a href="#">Buy</a>
          <a href="#">Rent</a>
          <Link to="/login">Sell</Link>
        </nav>
      </header>
      <div className={styles.filterBar}>
        <button>All Categories</button>
        <button>Modern</button>
        <button>Classic</button>
        <button>Minimalist</button>
      </div>
      <div className={styles.properties}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onCardClick={handleCardClick}
            onInterestClick={handleInterestClick}
          />
        ))}
      </div>
      {selectedProperty && (
        <SellerModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          property={selectedProperty}
        />
      )}
    </div>
  );
};

export default Dashboard;
