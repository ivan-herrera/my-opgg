import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Summoner from './components/Summoner.jsx';
import SearchBar from './components/SearchBar.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Ranking from './pages/Ranking.jsx';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="navbar"/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summoner" element={<Summoner />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
