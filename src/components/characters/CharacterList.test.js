import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';


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
  }
];

describe('Character List component', () => {
  it('renders Character List', () => {
    const wrapper = shallow(<CharacterList characters={characters}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
