import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ photos, topics, onPhotoClick, toggleFavorite,favoritePhotos, favoritePhotosCount }) => {

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} favoritePhotosCount={favoritePhotosCount}/>
       <PhotoList
       photos={photos}
       toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        onPhotoClick={onPhotoClick}

        />
    </div>
  );
};

export default HomeRoute;
