import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
