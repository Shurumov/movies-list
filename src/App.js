import React from 'react';
import {Header, MoviesList} from 'blocks'

function App() {
  return (
    <div className="app_wrapper">
      <div className="app">
        <Header/>
        <div className="container">
          <MoviesList/>
        </div>
      </div>
    </div>
  );
}

export default App;
