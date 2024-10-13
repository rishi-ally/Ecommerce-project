import React, { useEffect, useState } from 'react';

// StarRating Component to display stars based on rating
const StarRating = ({ ratings }) => {
  const fullStars = Math.floor(ratings);
  const halfStar = ratings% 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(fullStars).fill().map((_, i) => (
        <span key={i} className="star filled">⭐</span>
      ))}
      {halfStar && <span className="star half-filled">⭐</span>}
      {Array(emptyStars).fill().map((_, i) => (
        <span key={i} className="star empty">☆</span>
      ))}
    </div>
  );
};
export default StarRating