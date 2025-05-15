import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<div>Movie Details (placeholder)</div>} />
      </Routes>
    </Router>
  );
};

export default App;
