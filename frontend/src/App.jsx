import React, { useState } from "react";

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Import the mock data
import topics from "mocks/topics";
import photos from "mocks/photos";



const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const openModal = (photoDetails) => {
    setSelectedPhoto(photoDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

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
    <div className="App">
      {/* Pass mock data to HomeRoute */}
      <HomeRoute topics={topics}
       photos={photos}
       onPhotoClick={openModal}
       toggleFavorite={toggleFavorite}
       favoritePhotos={favoritePhotos}
        favoritePhotosCount={favoritePhotosCount}
        />
      {isModalOpen &&
        (<PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photoDetails={selectedPhoto}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        />)}
    </div>
  );
};

export default App;
