import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {/* Insert React */}

      {photos.map((photoData) => (
        <PhotoListItem key={photoData.id} data={photoData} />
      ))}
    </ul>
  );
};

export default PhotoList;
