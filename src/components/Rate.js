import React from 'react';

const Rate = ({ starIndex = () => {}, rating }) => {
  const stars = (x) => {
    let star = [];
    for (let i = 0; i < 5; i++) {
      if (i < x) {
        star.push(
          <span
            className='rating'
            key={i}
            onClick={() => starIndex(i + 1)}
            style={{ cursor: 'pointer' }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            className='rating'
            key={i}
            style={{ cursor: 'pointer' }}
            onClick={() => starIndex(i + 1)}
          >
            ☆
          </span>
        );
      }
    }
    return star;
  };
  return <div>{stars(rating)}</div>;
};

export default Rate;
