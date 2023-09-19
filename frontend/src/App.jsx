import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

// Import the mock data
import topics from "mocks/topics";
import photos from "mocks/photos";



const App = () => {

  return (
    <div className="App">
      {/* Pass mock data to HomeRoute */}
      <HomeRoute  topics={topics} photos={photos} />

    </div>
  );
};

export default App;
