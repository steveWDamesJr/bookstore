import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
