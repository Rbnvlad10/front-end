import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Catalog from './Catalog';
import Main from './Main';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
