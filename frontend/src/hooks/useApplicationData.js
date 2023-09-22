// CUSTOM REACT HOOK - manage the state for this application

import {  useReducer } from "react";

// Define action types as constants for use in the reducer
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
};

//Reducer function to handle state changes based on actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // Logic for adding a favorited photo
      return {
        ...state,
        favoritedPhotos: [...state.favoritedPhotos,
           action.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      // Logic for removing a favorited photo
      return {
        ...state,
        favoritedPhotos: state.favoritedPhotos.filter((id) => id !== action.photoId),
      };

    case ACTIONS.SELECT_PHOTO:
      // Logic  for selecting a photo
      return {
        ...state,
        showModal: true,
        clickedPhoto: action.photo,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // Logic  for displaying photo details
      return {
        ...state,
         showModal: false,
        clickedPhoto: null
      };


    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

// Custom hook to manage application data state
const useApplicationData = () => {

  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    showModal: false,
    clickedPhoto: null,
    favoritedPhotos: [], // Holds the IDs of favorited photos
    // photos:
    // topics:
  });

  // Functions for dispatching actions
  /* Function to set a photo as selected*/
  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  /*Function to close the photo details modal*/
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  /*Function to update the list of favorited photos*/
  const updateToFavPhotoIds = (photoId) => {
    dispatch({
      type: state.favoritedPhotos.includes(photoId)
        ? ACTIONS.FAV_PHOTO_REMOVED
        : ACTIONS.FAV_PHOTO_ADDED,
      photoId,
    });
  };

  // // Function to set photo data
  // const setPhotoFunction = () => {

  // };

  //  // Function to set photo data
  //  const setTopicFunction = () => {

  //  };

  // Hook returns an object containing current state and the three functions to interact with
  return {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    // Add  functions for setting photo and topic data
    // setPhotoFunction,
    // setTopicFunction,
  };
};

export default useApplicationData;