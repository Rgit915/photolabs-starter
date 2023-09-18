import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ initialSelected = false }) {
  const [selected, setSelected] = useState(initialSelected);

  // Toggle the selected state when the icon is clicked
  const handleIconClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="photo-list__fav-icon">
      <div
        className={`photo-list__fav-icon-svg ${selected ? 'active' : 'inactive'}`}
        onClick={handleIconClick}
      >
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
