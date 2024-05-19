import React, { useState } from 'react';
import styles from './PropertyCard.module.css';
import bedIcon from './bed.png';
import bathIcon from './bathtub.png';

const PropertyCard = ({ property, onCardClick, onInterestClick }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(property.likes || 0); // Initial likes from property data

  const handleLike = (e) => {
    e.stopPropagation(); // Prevent triggering the onClick for the card
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  const handleInterest = (e) => {
    e.stopPropagation(); // Prevent triggering the onClick for the card
    onInterestClick(property);
  };

  return (
    <div className={styles.card} onClick={() => onCardClick(property)}>
      <img src={property.imgSrc} alt={property.title} className={styles.image} />
      <div className={styles.header}>
        <h3>{property.title}</h3>
        <button className={styles.interestButton} onClick={handleInterest}>I'm Interested</button>
      </div>
      <p>{property.location}</p>
      <p>{property.details}</p>
      <div className={styles.info}>
        <span className={styles.likeContainer}>
          <button className={styles.likeButton} onClick={handleLike}>
            {liked ? '❤️' : '🤍'} {likeCount}
          </button>
        </span>
        <span>{property.beds} <img src={bedIcon} style={{width:"30px",height:"30px"}} alt="Beds" /></span>
        <span>{property.baths} <img src={bathIcon} style={{width:"30px",height:"30px"}} alt="Baths" /></span>
        <span>₹{property.price}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
