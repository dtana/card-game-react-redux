import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Game } from './game';
import { PlayerHand } from '../components/playerHand';

configure({adapter: new Adapter()});

describe('<game container>', () => {
  it('should render 3 players as set in match params', async () => {
    const wrapper = shallow(<Game match={{params: {players: 3}}} />);
    await expect(wrapper.find(PlayerHand)).toHaveLength(3);
  });

  it('should render 2 player if url manualy set below minimum', async () => {
    const wrapper = shallow(<Game match={{params: {players: 1}}} />);
    await expect(wrapper.find(PlayerHand)).toHaveLength(2);
  });

  it('should render 4 player if url manualy set above maximum', async () => {
    const wrapper = shallow(<Game match={{params: {players: 5}}} />);
    await expect(wrapper.find(PlayerHand)).toHaveLength(4);
  });
})
