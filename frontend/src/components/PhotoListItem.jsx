import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */

  return (
    <div>
      <img src={props.imageSource} />
      <div>
        <img className="avatar" src={props.profile}  />
        <br/>
        {props.username} <br/>
        {props.location.city}, {props.location.country}
      </div>


    </div>

  );
};

export default PhotoListItem;
