import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFavorite, favoritePhotos, onPhotoClick }) => {
  return (
    <ul className="photo-list">

      {/* Map through the "photos" array and create a "PhotoListItem" component for each item. */}
      {photos.map((photoData) => (
        <PhotoListItem
          key={photoData.id}
          data={photoData}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
