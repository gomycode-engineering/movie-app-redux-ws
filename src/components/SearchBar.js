import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import Rate from '../components/Rate';

const SearchBar = ({ handleSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div className='row m-2'>
      <div className='col-md-8'>
        <Input
          type='text'
          placeholder='enter the title you search...'
          onChange={handleSearch}
        />
      </div>
      <div className='col-md-4'>
        <Rate
          className='star-rating'
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
