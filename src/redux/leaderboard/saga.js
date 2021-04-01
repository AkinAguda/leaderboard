import { call, put, takeLatest, all } from "redux-saga/effects";

import * as types from "./types";
import { getLeaderboard } from "./functions";

function* fetchLeaderboard(action) {
  try {
    const leaderboard = yield call(getLeaderboard);
    yield put({ type: types.FETCH_LEADERBOARD_SUCCEEDED, leaderboard });
  } catch (e) {
    yield put({ type: types.FETCH_LEADERBOARD_FAILED, message: e });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.FETCH_LEADERBOARD_REQUESTED, fetchLeaderboard)]);
}
