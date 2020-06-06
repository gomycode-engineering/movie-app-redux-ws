import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';

import ModalComp from './ModalComp';

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className='row justify-content-center mt-3'>
      <Card onClick={() => setShow(true)}>
        <CardImg
          top
          width='100%'
          style={{ height: `300px` }}
          src={require('../assets/icon/add.png')}
          alt='Card image cap'
        />
      </Card>
      {show && (
        <ModalComp isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;
