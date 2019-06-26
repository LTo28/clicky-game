import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Game from './components/Game/Game'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Game />
      </div>
    </div>
  );

}

export default App;
