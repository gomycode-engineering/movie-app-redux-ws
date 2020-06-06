import React, { useState } from 'react';

import './App.css';
import { moviesList } from './assets/mookData';
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='container'>
      <SearchBar />
      <MoviesList />
      <AddMovie handleAdd={addMovie} />
    </div>
  );
}

export default App;
