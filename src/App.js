import React, { useState } from 'react';
import Navbar from './layout/Navbar';
import Content from './components/Content';
import './App.css';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="App">
      <div className="center">
        <Navbar onSelectPlanet={setSelectedPlanet} />
        <Content selectedPlanet={selectedPlanet} />
      </div>
    </div>
  );
}

export default App;
