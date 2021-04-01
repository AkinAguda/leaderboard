import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import * as types from "../../redux/leaderboard/types";

import Leaderboard from "./Leaderboard";

const LeaderboardContainer = () => {
  const containerRef = useRef(null);
  const transitionDiv1Ref = useRef(null);
  const transitionDiv2Ref = useRef(null);
  const transitionDiv3Ref = useRef(null);
  const transitionDiv4Ref = useRef(null);

  const dispatch = useDispatch();

  const triggerOpenTransition = () => {
    const total = containerRef.current.clientWidth;

    setTimeout(() => {
      transitionDiv1Ref.current.style.width = `${total}px`;
      transitionDiv2Ref.current.style.width = "0px";
      transitionDiv3Ref.current.style.width = "0px";
      transitionDiv4Ref.current.style.width = "0px";
    }, 0);
  };

  const triggerCloseTransition = () => {
    const total = containerRef.current.clientWidth;

    setTimeout(() => {
      transitionDiv1Ref.current.style.width = "0px";
      transitionDiv2Ref.current.style.width = `${(50 / 100) * total}px`;
      transitionDiv3Ref.current.style.width = `${(30 / 100) * total}px`;
      transitionDiv4Ref.current.style.width = `${(20 / 100) * total}px`;
    }, 0);

    setTimeout(() => {
      containerRef.current.style.transition = "0.3s";
      containerRef.current.style.transitionDelay = "1s";
      containerRef.current.style.opacity = "0";
    }, 10);

    setTimeout(() => {
      dispatch({ type: types.TOGGLE_LEADERBOARD });
    }, 1200);
  };

  useEffect(() => {
    triggerOpenTransition();
  }, []);

  return (
    <Leaderboard
      containerRef={containerRef}
      transitionDiv1Ref={transitionDiv1Ref}
      transitionDiv2Ref={transitionDiv2Ref}
      transitionDiv3Ref={transitionDiv3Ref}
      transitionDiv4Ref={transitionDiv4Ref}
      close={triggerCloseTransition}
    />
  );
};

export default LeaderboardContainer;
