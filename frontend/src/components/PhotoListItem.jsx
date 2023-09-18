import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = ({data}) => {
  /* Insert React */

  return (
    <div className="photo-list__item">
      <img src={data.urls.regular} className="photo-list__image" alt={`Photo by ${data.user.name}`}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={data.user.profile} />
        <span className="photo-list__user-info">{data.user.username}
        <p className="photo-list__user-location">
          {data.location.city}, {data.location.country}
          </p></span>

      </div>
      

    </div>

  );
};

export default PhotoListItem;
