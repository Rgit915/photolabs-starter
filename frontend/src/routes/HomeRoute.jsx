import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoClick, toggleFavorite, favoritePhotos, favoritePhotosCount, fetchPhotosByTopic }) => {
  return (
    <div className="home-route">

      {/* Render the 'TopNavigationBar' component and pass relevant props. */}
      <TopNavigationBar topics={topics} favoritePhotosCount={favoritePhotosCount} fetchPhotosByTopic={fetchPhotosByTopic} />

      {/* Render the 'PhotoList' component and pass relevant props. */}
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
