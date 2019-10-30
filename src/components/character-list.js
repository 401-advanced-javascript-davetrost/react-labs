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
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/155.jpeg',
    name: 'Harold',
    species: 'Cronenberg',
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/426.jpeg',
    name: 'Greasy Grandma',
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/487.jpeg',
    name: 'Visor Rick',
    species: 'Human',
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/265.jpeg',
    name: 'Pickle Rick',
    species: 'unknown, Pickle',
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/424.jpeg',
    name: 'Pizza-person',
    species: 'Humanoid, Pizza',
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
