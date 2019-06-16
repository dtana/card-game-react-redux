import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import '../css/game.scss';
import { Card } from '../components/card';
import * as actionTypes from '../store/actions';
import { PlayerHand } from '../components/playerHand';
import { CenterPot } from '../components/centerPot';

class Game extends Component {
  plc = this.props.match.params.players * 1;
  playersCount = this.plc > 4 ? 4 : this.plc < 2 ? 2 : this.plc;
  compPlayers = ["player 1", "player 2", "player 3"].slice(0, this.playersCount - 1);

  componentDidMount() {
    const API_HOST = "https://deckofcardsapi.com";

    this.props.onGameStart();

    Axios.get(`${API_HOST}/api/deck/new/draw/?count=${this.playersCount * 10}`)
      .then(response => {
        let deck = response.data.cards,
          draw = [[], [], [], []];

        deck.forEach((card, index) => {
          const mod = (index + 1) % this.playersCount;
          const playingCard = <Card card={card} key={index} index={index} handleClick={this.props.onCardPlayed.bind(this)} />;
          draw[mod].push(playingCard);
        })

        this.props.onCardDraw(draw, this.playersCount);
      })
      .catch(error => {
        console.log("Something went wrong! " + error);
      })
  }

  render() {
    let colWidth = 12 / (this.playersCount - 1);

    return (
      <div className="Game">
        <div className="container-fluid">
          <div className="row">
            {this.compPlayers.map((player, i) => (
              <PlayerHand
                key={i} 
                cols={colWidth} 
                score={this.props.score} 
                hands={this.props.hands} 
                player={player} 
                index={i + 1} />
            ))}
          </div>
          <CenterPot 
            hands={this.props.hands} 
            playedCards={this.props.playedCards} 
            compPlayers={this.compPlayers} 
            finished={this.props.finished} 
            winner={this.props.winner} />
          <div className="row">
            <PlayerHand
              cols={12} 
              score={this.props.score} 
              hands={this.props.hands} 
              player={"me"} 
              index={0} />
          </div>
          <Link to="/" className="btn btn-outline-success mt-5 mb-5">New Game</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    finished: state.isFinished,
    hands: state.plHands,
    playedCards: state.played,
    playersNo: state.plCount,
    score: state.scores,
    winner: state.leader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGameStart: () => dispatch({ type: actionTypes.INIT_GAME }),
    onCardDraw: (hands, count) => dispatch({ type: actionTypes.DRAW_CARDS, cardsDrawn: hands, playersNumber: count }),
    onCardPlayed: (card) => dispatch({ type: actionTypes.PLAY_CARD, cardPlayed: card })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
