import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data, toggleFavorite, favoritePhotos, onPhotoClick }) => {

  //check whether the current photo is in the list of favorite photos
  const isFavorite = favoritePhotos && favoritePhotos.includes(data.id);

  return (
    <div className="photo-list__item">
      <img
        src={data.urls.regular}
        className="photo-list__image"
        alt={`Photo by ${data.user.name}`}
        onClick={() => onPhotoClick(data)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={data.user.profile}
          alt={data.username}
        />
        <span className="photo-list__user-info">
          {data.user.username}
          <p className="photo-list__user-location">
            {data.location.city}, {data.location.country}
          </p>
        </span>

        {/* Render the "PhotoFavButton" component and pass it some props. */}
        <PhotoFavButton
          initialSelected={isFavorite}
          photoId={data.id}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoListItem;
