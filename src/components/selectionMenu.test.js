import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SelectionMenu } from './selectionMenu';
import { SelectionButton } from './selectionButton';

configure({adapter: new Adapter()});

describe('<SelectionMenu />', () => {
  it('should render 3 <SelectionButton /> elements', () => {
    const wrapper = shallow(<SelectionMenu />);
    expect(wrapper.find(SelectionButton)).toHaveLength(3);
  });
})
