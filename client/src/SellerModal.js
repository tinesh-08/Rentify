import React from 'react';
import Modal from 'react-modal';
import styles from './SellerModal.module.css';

Modal.setAppElement('#root'); // Ensure this is set for accessibility

const SellerModal = ({ isOpen, onRequestClose, property }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <h2>{property.title}</h2>
      <p><strong>Seller Name:</strong> {property.seller.name}</p>
      <p><strong>Contact Email:</strong> {property.seller.contact}</p>
      <p><strong>Phone Number:</strong> {property.seller.phone}</p>
      <button onClick={onRequestClose} className={styles.closeButton}>Close</button>
    </Modal>
  );
};

export default SellerModal;
