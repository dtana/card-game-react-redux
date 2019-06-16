import reducers from './reducers';
import * as actionTypes from './actions';

describe('reducers', () => {
  it('should return initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      isFinished: false,
      plHands: [[], [], [], []],
      played: [],
      unclickable: [],
      plCount: null,
      scores: [0, 0, 0, 0]
    });
  });

  it('should return initial state after INIT action', () => {
    expect(reducers({
      isFinished: true,
      plHands: [[], [], [], []],
      played: [],
      unclickable: [1,2,3],
      plCount: 4,
      scores: [10, 20, 30, 40]
    }, {type: actionTypes.INIT_GAME}))
    .toEqual({
      isFinished: false,
      plHands: [[], [], [], []],
      played: [],
      unclickable: [],
      plCount: null,
      scores: [0, 0, 0, 0]
    });
  });

  it('should return expected unclickable card indexes after DRAW_CARDS action', () => {
    const expected = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
    expect(reducers(undefined, {
      type: actionTypes.DRAW_CARDS,
      cardsDrawn: [new Array(10).fill(0), new Array(10).fill(0), [], []], playersNumber: 2}))
      expect.objectContaining({
        isFinished: false,
        unclickable: expected,
        plCount: 2,
      })
  });
})
