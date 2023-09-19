import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos, toggleFavorite, favoritePhotos }) => {

  return (
    <ul className="photo-list">

      {photos.map((photoData) => (
        <PhotoListItem
         key={photoData.id}
         data={photoData}
         toggleFavorite={toggleFavorite}
         favoritePhotos={favoritePhotos}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
