import React from 'react';
import propTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ character }) => {
  const { img, name, species = 'unknown origin' } = character;
  console.log(img, name, species);

  return (
    <div className={styles.Character + ' col s6 m4'}>
      <div className="card">
        <div className="card-image">
          <img src={img}/>
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>Species: <strong>{species}</strong></p>
        </div>
      </div>
    </div>
  );
};

Character.propTypes = {
  character: propTypes.shape({
    img: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    species: propTypes.string
  }).isRequired
};

export default Character;
