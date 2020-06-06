import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

import Rate from './Rate';

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div className='col-4 mt-2'>
      <Card style={{ height: `500px` }}>
        <CardTitle>
          <div className='row justify-content-center mt-2'>
            <h6>{title}</h6>
          </div>
        </CardTitle>
        <CardImg
          top
          width='100%'
          style={{ height: `300px` }}
          src={posterUrl}
          alt='Card image cap'
        />
        <CardBody>
          <div className='row'>
            <CardText>{description}</CardText>
          </div>
          <div className='row'>
            <Rate rating={rate} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
