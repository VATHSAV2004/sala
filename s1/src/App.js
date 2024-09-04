import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TouristPlacesList from './components/TouristPlacesList';
import TouristPlaceDetail from './components/TouristPlaceDetail';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TouristPlacesList />} />
          <Route path="/place/:id" element={<TouristPlaceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
