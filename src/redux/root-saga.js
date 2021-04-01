import { all, fork } from "redux-saga/effects";

import leaderboard from "./leaderboard/saga";

function* rootSaga() {
  yield all([fork(leaderboard)]);
}

export default rootSaga;
