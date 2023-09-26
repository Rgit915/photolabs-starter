import React from "react";

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";


const App = () => {

  //Initialize the custom hook
  //Destructure the returned values from custom hook'useApplicationData'
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  } = useApplicationData();

  const { showModal, clickedPhoto, favoritedPhotos } = state;

  // Calculate the count of liked photos
  const favoritePhotosCount = favoritedPhotos.length;

  return (

    <div className="App">
{/* Render the 'HomeRoute' component and pass relevant props. */}
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        onPhotoClick={setPhotoSelected}
        toggleFavorite={updateToFavPhotoIds}
        favoritePhotos={favoritedPhotos}
        favoritePhotosCount={favoritePhotosCount}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {/* If showModal is true, render the modal */}
      {showModal &&
        (<PhotoDetailsModal
          isOpen={showModal}
          onClose={onClosePhotoDetailsModal}
          photoDetails={clickedPhoto}
          toggleFavorite={updateToFavPhotoIds}
          favoritePhotos={favoritedPhotos}

        />)}
    </div>
  );
};

export default App;
