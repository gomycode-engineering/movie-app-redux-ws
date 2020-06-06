import React from 'react';

import { useSelector } from 'react-redux';

import MovieCard from './MovieCard';

const MoviesList = () => {
  const moviesArray = useSelector((state) => state.movieReducer.movieList);
  console.log('MoviesList -> moviesArray', moviesArray);
  return (
    <div className='row mt-2'>
      {moviesArray.map((movie, key) => (
        <MovieCard movie={movie} key={key} />
      ))}
    </div>
  );
};

export default MoviesList;
