import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = ({topics, favoritePhotosCount}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      <FavBadge isFavPhotoExist={favoritePhotosCount > 0}/>

    </div>
  );
};

export default TopNavigation;