import React, { useState } from "react";
import { useDispatch } from "react-redux";

import * as types from "../../redux/leaderboard/types";

import Button from "./Button";

const ButtonContainer = ({ children }) => {
  const dispatch = useDispatch();

  const [fade, setFade] = useState(false);

  const onClick = () => {
    setFade(true);
    setTimeout(() => {
      dispatch({ type: types.TOGGLE_LEADERBOARD });
    }, 300);
  };

  return (
    <Button onClick={onClick} fade={fade}>
      {children}
    </Button>
  );
};

export default ButtonContainer;
