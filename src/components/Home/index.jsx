import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as types from "../../redux/leaderboard/types";

import Home from "./Home";

const HomeContainer = () => {
  const dispatch = useDispatch();

  const {
    leaderboard: { showLeaderboard },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: types.FETCH_LEADERBOARD_REQUESTED });
  }, [dispatch]);

  return <Home showLeaderboard={showLeaderboard} />;
};

export default HomeContainer;
