import * as types from "./types";

const initialState = {
  requestState: {
    requesting: false,
    successful: false,
    error: null,
  },
  showLeaderboard: false,
  leaderboard: [],
};

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LEADERBOARD_REQUESTED:
      return {
        ...state,
        requestState: { ...initialState.requestState, requesting: true },
      };
    case types.FETCH_LEADERBOARD_SUCCEEDED:
      return {
        ...state,
        leaderboard: action.leaderboard,
        requestState: { ...initialState.requestState, successful: true },
      };
    case types.FETCH_LEADERBOARD_FAILED:
      console.log(action);
      return {
        ...state,
        requestState: { ...initialState.requestState, error: action.message },
      };
    case types.TOGGLE_LEADERBOARD:
      return {
        ...state,
        showLeaderboard: !state.showLeaderboard,
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
