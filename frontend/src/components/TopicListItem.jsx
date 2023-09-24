import React from "react";

import "../styles/TopicListItem.scss";
const TopicListItem = ({ data, fetchPhotosByTopic }) => {

  const handleClick = () => {
    fetchPhotosByTopic(data.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>

      <span className="topic-list__item span">
        {data.title}
      </span>

    </div>
  );
};

export default TopicListItem;
