import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from './components/PhotoFavButton';

import './App.scss';

// Define an array of photo data objects
const sampleDataForPhotoListItems = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "2",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
  {
    id: "3",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  },
];

// Note: Rendering a single component to build components in isolation
const App = () => {

  const photoItems = sampleDataForPhotoListItems.map((photo) => (
    <div key={photo.id} className="photo-list-item">
      <PhotoListItem
        location={`${photo.location.city}, ${photo.location.country}`}
        imageSource={photo.imageSource}
        username={photo.username}
        profile={photo.profile}
      />
      <PhotoFavButton />
    </div>
  ));``

  return (
    <div className="App">

      {photoItems}

    </div>
  );
};

export default App;
