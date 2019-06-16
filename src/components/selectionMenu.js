import * as React from 'react';
import { SelectionButton } from './selectionButton';

export const SelectionMenu = () => (
  <div className="container h-100 d-flex">
    <div className="cards align-self-center">
      <div className="player--menu">
        <p className="">Select number of players</p>
        <SelectionButton option="2" />
        <SelectionButton option="3" />
        <SelectionButton option="4" />
      </div>
    </div>
  </div>
)
