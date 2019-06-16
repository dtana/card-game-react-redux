import * as actionTypes from './actions';

const initialState = {
  isFinished: false,
  plHands: [[], [], [], []],
  played: [],
  unclickable: [],
  plCount: null,
  scores: [0, 0, 0, 0]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_GAME:
      return initialState;

    case actionTypes.DRAW_CARDS:
      const compCardsIndexes = [];

      // make list of computer hand cards
      for (let i=1; i<action.playersNumber; i++) {
        for (let j=0; j<10; j++) {
          compCardsIndexes.push(action.cardsDrawn[i][j].key*1);
        }
      }

      return {
        ...initialState,
        plHands: action.cardsDrawn,
        plCount: action.playersNumber,
        unclickable: compCardsIndexes
      }

    case actionTypes.PLAY_CARD:
      // check if clicked card is playable
      if (state.unclickable.includes(action.cardPlayed.index)) return state;

      const getRandomCard = () => Math.floor(Math.random() * state.plHands[0].length);
      const getScore = (value) => {
        switch(value) {
          case "ACE":
            value = 1;
            break;
          case "JACK":
            value = 12;
            break;
          case "QUEEN":
            value = 13;
            break;
          case "KING":
            value = 14;
            break;
          default:
            value = Number(value);
        }
        return value;
      }

      const playedCards = [],
          newHands = [],
          playedCardsValues = [],
          newScore = state.scores.map(e => e);

      // draw human player card and get score value
      playedCards.push(state.plHands[0].filter(e => e.key === String(action.cardPlayed.index)));
      newHands.push(state.plHands[0].filter(e => e.key !== String(action.cardPlayed.index)));
      playedCardsValues.push(getScore(playedCards[0][0].props.card.value));

      // draw computer players cards and get score values
      for (let i=1; i<state.plCount; i++) {
        const currentCardIndex = state.plHands[i][getRandomCard()].props.index;
        const currentCard = state.plHands[i].filter(e => e.props.index === currentCardIndex);

        playedCards.push(currentCard);
        newHands.push(state.plHands[i].filter(e => e.props.index !== currentCardIndex));
        playedCardsValues.push(getScore(currentCard[0].props.card.value));
      }

      // scoring
      const winningCard = Math.max(...playedCardsValues);
      const winningCardPlayer = playedCardsValues.lastIndexOf(winningCard);
      newScore[winningCardPlayer] += playedCardsValues.reduce((a, b) => a + b);

      return {
        ...state,
        played: playedCards,
        unclickable: state.unclickable.concat(action.cardPlayed.index),
        plHands: newHands,
        scores: newScore,
        leader: newScore.lastIndexOf(Math.max(...newScore)),
        isFinished: state.plHands[0].length < 2
      }

    default:
      return state;
  }
};

export default reducer;
