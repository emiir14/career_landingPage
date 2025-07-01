import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArchitecturePortfolio from './components/ArchitecturePortfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArchitecturePortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;