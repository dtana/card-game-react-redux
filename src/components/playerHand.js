import React from 'react';

export function PlayerHand(props) {
  return (
    <div className={"player col-" + props.cols}>
      <div className={"cards " + (props.index === 0 ? "human" : "")}>
        <div className="player--content">
          <p className="player--name">
            {props.player}
            <span>score: {props.score[props.index]}</span>
          </p>
          {props.hands[props.index]}
        </div>
      </div>
    </div>
  )
}
