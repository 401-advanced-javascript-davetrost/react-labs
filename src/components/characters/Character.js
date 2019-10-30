import React from 'react';
import propTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ characters }) => {
  return (
    <>
      {characters.map(character => {
        const species = character.species || 'unknown origin';
        return (
          <div className={styles.Character + ' col s6 m4'} key={character.img}>
            <div className="card">
              <div className="card-image">
                <img src={character.img}/>
                <span className="card-title">{character.name}</span>
              </div>
              <div className="card-content">
                <p>Species: <strong>{species}</strong></p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

Character.propTypes = {
  characters: propTypes.array.isRequired,
};

export default Character;
