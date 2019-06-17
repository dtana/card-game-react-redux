import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card } from './card';

configure({adapter: new Adapter()});

describe('<Card />', () => {
  it('should render 1 image element', () => {
    const wrapper = shallow(<Card card={{
      code: "JD",
      image: "https://deckofcardsapi.com/static/img/JD.png",
      suit: "DIAMONDS",
      value: "JACK"}} 
      index="1" 
      handleClick="" />);
    expect(wrapper).toHaveLength(1);
  });
})
