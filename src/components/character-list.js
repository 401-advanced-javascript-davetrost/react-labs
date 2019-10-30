import React from 'react';
import Character from './character';

const characters = [
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/327.jpeg',
    name: 'Slow Mobius',
    species: 'Humanoid',
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/370.jpeg',
    name: 'Two Guys with Handlebar Mustaches',
    species: 'Human',
  },
];

const CharacterList = () => {
  return (
    <div className="row">
      <Character characters={characters}/>
    </div>
  );
};

export default CharacterList;
