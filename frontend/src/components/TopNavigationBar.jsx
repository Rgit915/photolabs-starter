import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({ topics, favoritePhotosCount, fetchPhotosByTopic }) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* Render the 'TopicList' component and pass 'topics' and 'fetchPhotosByTopic' as props. */}
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />

      {/* Render the 'FavBadge' component and pass 'favoritePhotosCount > 0' as the 'isFavPhotoExist' prop. */}
      <FavBadge isFavPhotoExist={favoritePhotosCount > 0} />

    </div>
  );
};

export default TopNavigation;