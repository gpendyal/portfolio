import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './components/TopBar';
import TopNavBar from './components/TopNavBar';
import OSMComponent from './components/OSMcomponent';


function App() {
  return (
    <div className="App">
      <TopNavBar />
       <TopBar />
       <OSMComponent />

    </div>
  );
}

export default App;
