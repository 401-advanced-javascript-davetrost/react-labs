import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './Character-list';

describe('Character List component', () => {
  it('renders Character List', () => {
    const wrapper = shallow(<CharacterList />);
    expect(wrapper).toMatchSnapshot();
  });
});
