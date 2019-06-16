import React from 'react';

export function CenterPot(props) {
  return (
    <div className="row">
      <div className="col-md-12 player">
        <div className="cards center-pot" style={{ opacity: props.finished ? "0" : "1" }}>
          {props.playedCards}
        </div>
        <div className="cards" style={{ opacity: props.finished ? "1" : "0" }}>
          <div className="player--menu winner">
            <p>
              {props.winner > 0 ? props.compPlayers[props.winner - 1] : "me"}
              <span>is the winner</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
