import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character character={{  img: 'https://rickandmortyapi.com/api/character/avatar/327.jpeg', name: 'Slow Mobius', species: 'Humanoid' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
