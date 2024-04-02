import { BrowserRouter as Route,Router,Routes } from 'react-router-dom';
import Explore from './Explore';
import Home from './home';
import Location from './Location';
import React from 'react'


function App() {
  return (
    <>
      <Home/>
      <Explore/>
      <Location/>
    </>
  );
}

export default App;
