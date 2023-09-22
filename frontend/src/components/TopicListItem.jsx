import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data}) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="topic-list__item span">
      {data.title}
      </span>

    </div>
  );
};

export default TopicListItem;
