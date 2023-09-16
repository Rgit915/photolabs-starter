import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */

  return (
    <div className="photo-list__item">
      <img src={props.imageSource} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <span className="photo-list__user-info">{props.username}
        <p className="photo-list__user-location">
          {props.location.city}, {props.location.country}
          </p></span>

      </div>


    </div>

  );
};

export default PhotoListItem;
