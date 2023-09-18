import React from 'react';

import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';

// Note: Rendering a single component to build components in isolation
const App = () => {

  {/*const photoItems = sampleDataForPhotoListItems.map((photo) => (
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
  */}
  return (
    <div className="App">
      <TopicList />
       <PhotoList />
    </div>
  );
};

export default App;
