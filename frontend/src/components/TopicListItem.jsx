import React from "react";

import "../styles/TopicListItem.scss";
const TopicListItem = ({ data, fetchPhotosByTopic }) => {

  // Define a function  that triggers "fetchPhotosByTopic" with the topic's ID.
  const handleClick = () => {
    fetchPhotosByTopic(data.id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span className="topic-list__item span">

        {/* Display the title from the "data" prop. */}
        {data.title}
      </span>
    </div>
  );
};

export default TopicListItem;
