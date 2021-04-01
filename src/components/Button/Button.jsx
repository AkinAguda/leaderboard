import React from "react";

import { mergeClasses } from "../../helpers";
import classes from "./Button.module.css";

const Button = ({ children, fade, ...rest }) => (
  <button
    className={mergeClasses(classes.button, fade && classes.fade)}
    {...rest}
  >
    <div className={classes.backgroundTile} />
    <div className={classes.tile} />
    <div className={classes.strip} />
    <div className={classes.content}>{children}</div>
  </button>
);

export default Button;
