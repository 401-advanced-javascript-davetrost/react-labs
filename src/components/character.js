import React from 'react';
import propTypes from 'prop-types';

const Character = ({ img, name, species }) => {
  species = species || 'unknown origin';
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={img}/>
            <span className="card-title">Name: {name}</span>
          </div>
          <div className="card-content">
            <p>Species: {species}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  species: propTypes.string
};

export default Character;
