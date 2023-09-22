// CUSTOM REACT HOOK - manage the state for this application

import { useState } from "react";

const useApplicationData = () => {

  //Initialize a state object
  const [state, setState] = useState({
    showModal: false,
    clickedPhoto: null,
    favoritedPhotos: [], //holds the IDS of favorited photos
  });

  /* Update the state when a photo is selected,
  *  sets showModal to true and updates clickedPhoto  with selected photo*/
  const setPhotoSelected = (photo) => {
    setState(prev => ({ ...prev, showModal: true, clickedPhoto: photo }));
  };

  /*Close the photo details modal,
  * sets showModal to false and clears clickedPhoto property */
  const onClosePhotoDetailsModal = () => {
    setState(prev => ({ ...prev, showModal: false, clickedPhoto: null }));
  };

  /* Update the list of favorited photos
    * takes photoId and toggles its presence in favoritePhotos array
    * If aleardy in the array, removed otherwise it's added */

  const updateToFavPhotoIds = (photoId) => {
    setState(prev => {
      const isFavorited = prev.favoritedPhotos.includes(photoId);
      if (isFavorited) {
        // Remove from favorites
        return { ...prev, favoritedPhotos: prev.favoritedPhotos.filter((id) => id !== photoId) };
      } else {
        // Add to favorites
        return { ...prev, favoritedPhotos: [...prev.favoritedPhotos, photoId] };
      }
    });
  };

  /*  hook returns an object containing current state
    * and the three functions to interact with  */
  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;