import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ initialSelected = false , photoId, toggleFavorite}) {

  // Toggle favorite when the icon is clicked
  const handleIconClick = () => {
    toggleFavorite(photoId);

  };

  return (
    <div className="photo-list__fav-icon">
      <div
        className={`photo-list__fav-icon-svg ${initialSelected ? 'active' : 'inactive'}`}
        onClick={handleIconClick}
      >
        <FavIcon selected={initialSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
