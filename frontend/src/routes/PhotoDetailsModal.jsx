import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = ({ onClose, photoDetails, }) => {

  const { urls, user, location, similar_photos } = photoDetails; // Destructure relevant data


  // const {  } = photoDetails; // Get similar photo references
  console.log("phodetailsimilar_photos-------->", similar_photos);
  //  console.log("Similar Photos:", similar_photos);
  // Convert similar_photos object into an array of photo objects
  const similarPhotosArray = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        {/* Display image in full size  */}
        <img src={urls.regular} alt={`Photo by ${user.name}`} className="photo-details-modal__image" />

      </div>

      <div className="photo-list__user-details">
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

      <h2 className="photo-details-modal__header">Similar Photos</h2>

      {/* Reuse PhotoList for similar photos */}

      {/* Now you can pass similarPhotosArray to the PhotoList component */}
      {/* <PhotoList photos={similarPhotosArray} /> */}
    </div>

  );
};

export default PhotoDetailsModal;
