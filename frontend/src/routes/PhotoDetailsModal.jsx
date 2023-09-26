import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, photoDetails, toggleFavorite, favoritePhotos }) => {

  const { urls, user, location, similar_photos } = photoDetails;
  // Check if the current photo is a favorite
  const isFavorite = favoritePhotos.includes(photoDetails.id);


  // Convert similar_photos object into an array of photo objects
  const similarPhotosArray = Object.values(similar_photos);

  // Function to toggle the favorite status
  const handleToggleFavorite = () => {
    // Call the parent component's toggleFavorite function to handle favorites globally
    toggleFavorite(photoDetails.id);
  };
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">

        {/* Display image within modal in large version  */}
        <img
          src={urls.regular}
          alt={`Photo by ${user.name}`}
          className="photo-details-modal__image"
        />

      </div>

      {/* Display user-profile */}
      <div className="photo-list__user-details">
        <div className="photo-details-modal__photographer-details">


          <img
            className="photo-list__user-profile"
            src={user.profile}
            alt={user.username}
          />

          <span className="photo-list__user-info">
            {user.username}
            <p className="photo-list__user-location">
              {location.city}, {location.country}
            </p>
          </span>
        </div>
        {/* Render the favorite button/icon within the modal */}
        <div className='photo-large__fav-icon'>
          <PhotoFavButton
            initialSelected={isFavorite}
            photoId={photoDetails.id}
            toggleFavorite={handleToggleFavorite}
          />
        </div>


      </div>

      <h2 className="photo-details-modal__header">Similar Photos</h2>

      {/* Display similar photos */}
      <ul className="photo-list">
        {similarPhotosArray.map((photoData) => (
          <PhotoListItem
            key={photoData.id}
            data={photoData}
            toggleFavorite={toggleFavorite}
            favoritePhotos={favoritePhotos}
          />
        ))}
      </ul>
    </div>

  );
};

export default PhotoDetailsModal;
