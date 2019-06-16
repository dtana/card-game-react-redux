import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SelectionButton } from './selectionButton';

configure({adapter: new Adapter()});

describe('<SelectionButton />', () => {
  it('should display correct link text', () => {
    const wrapper = mount(
      <MemoryRouter>
        <SelectionButton option="3" />
      </MemoryRouter>);
    expect(wrapper.text()).toEqual("3 players");
  });

  it('should have correct link to', () => {
    const wrapper = shallow(<SelectionButton option="2" />)
    expect(wrapper.find("Link").props().to).toBe("/game/2");
  });
})
