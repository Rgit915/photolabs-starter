import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data}) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      {data.title}
    </div>
  );
};

export default TopicListItem;
