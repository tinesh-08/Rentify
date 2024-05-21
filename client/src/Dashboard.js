import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import SellerModal from './SellerModal';
import styles from './Dashboard.module.css';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 4;

const Dashboard = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const propertiesPerPage = 4;
  const totalProperties = properties.length;
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const userRole = userInfo?.role;

  const handleCardClick = (property) => {
    if (userRole === 'seller') {
      navigate(`/edit-property/${property.id}`);
    }
    else{
      setIsModalOpen(true);
    }
  };

  const handleInterestClick = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentItems = properties.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>RENTIFY</h1>
        <nav>
          <Link to="/">Home</Link>
          {userRole === 'seller' && <Link to="/create-property">Create Property</Link>}
          <Link to="/login">Logout</Link>
        </nav>
      </header>
      <div className={styles.properties}>
        {currentItems.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onCardClick={handleCardClick}
            onInterestClick={handleInterestClick}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(properties.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
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
