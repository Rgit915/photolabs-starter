import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, fetchPhotosByTopic }) => {
  if (!topics) {
    return null;
  }
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}

      {topics.map((topicData) => (
        <TopicListItem key={topicData.id} data={topicData} fetchPhotosByTopic={fetchPhotosByTopic} />
      ))}
    </div>
  );
};

export default TopicList;
