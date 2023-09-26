import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, fetchPhotosByTopic }) => {

  // Check if the "topics" prop is falsy, and return null if it is.
  if (!topics) {
    return null;
  }
  return (
    <div className="top-nav-bar__topic-list">

      {/* Map through the "topics" array and create a "TopicListItem" component for each item. */}

      {topics.map((topicData) => (
        <TopicListItem key={topicData.id} data={topicData} fetchPhotosByTopic={fetchPhotosByTopic} />
      ))}
    </div>
  );
};

export default TopicList;
