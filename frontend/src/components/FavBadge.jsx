import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      {/* Render the 'FavIcon' component with the 'displayAlert' and 'selected' props. */}
      <FavIcon displayAlert={isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;