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

  const openModal = (photoDetails) => {
    setSelectedPhoto(photoDetails);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {/* Pass mock data to HomeRoute */}
      <HomeRoute topics={topics} photos={photos} onPhotoClick={openModal} />
      {isModalOpen &&
        (<PhotoDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photoDetails={selectedPhoto}
        />)}
    </div>
  );
};

export default App;
