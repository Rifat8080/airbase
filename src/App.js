import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeroSection from './Components/hero/HeroSection.js';
import Header from './Components/Header/Header.js';
import SearchField from './Components/searchSection/SearchField.js';
import PollutionData from './Components/pollutionDataPage/PollutionData.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Routes>
        <Route exact path="/" element={<SearchField />} />
        <Route exact path="/country/:id" element={<SearchField />} />
        <Route path="/pollution/:id" element={<PollutionData />} />
      </Routes>
    </div>
  );
}

export default App;
