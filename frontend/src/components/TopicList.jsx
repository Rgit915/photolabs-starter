import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics }) => {
  if (!topics) {
    return null; // or display a loading message
  }
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}

      {topics.map((topicData) => (
        <TopicListItem key={topicData.id} data={topicData} />
      ))}
   </div>
  );
};

export default TopicList;
