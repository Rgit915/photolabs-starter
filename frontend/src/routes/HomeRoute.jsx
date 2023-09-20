import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ photos, topics, onPhotoClick }) => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  // Calculate the count of liked photos
  const favoritePhotosCount = favoritePhotos.length;

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      // If the photo is already a favorite, remove it from the list
      const updatedFavorites = favoritePhotos.filter(id => id !== photoId);
      setFavoritePhotos(updatedFavorites);
    } else {
      // If the photo is not a favorite, add it to the list
      setFavoritePhotos([...favoritePhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigationBar topics={topics} favoritePhotosCount={favoritePhotosCount}/>
       <PhotoList photos={photos} toggleFavorite={toggleFavorite} favoritePhotos={favoritePhotos} onPhotoClick={onPhotoClick}/>
    </div>
  );
};

export default HomeRoute;
