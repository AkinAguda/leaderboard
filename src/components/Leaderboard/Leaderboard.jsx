import React from "react";

import Table from "./Table";
import { mergeClasses } from "../../helpers";
import classes from "./Leaderboard.module.css";

const Leaderboard = ({
  containerRef,
  transitionDiv1Ref,
  transitionDiv2Ref,
  transitionDiv3Ref,
  transitionDiv4Ref,
  close,
}) => (
  <div>
    <div className={classes.container} ref={containerRef}>
      <div className={classes.transitionScreen}>
        <div className={classes.transitionDiv1} ref={transitionDiv1Ref} />
        <div className={classes.transitionDiv2} ref={transitionDiv2Ref} />
        <div className={classes.transitionDiv3} ref={transitionDiv3Ref} />
        <div className={classes.transitionDiv4} ref={transitionDiv4Ref} />
      </div>

      <div className={mergeClasses(classes.row, classes.tableTop)}>
        <h1 className={classes.heading}>STANDINGS</h1>
        <div className={mergeClasses(classes.row, classes.tableRightTop)}>
          <div>
            <div className={classes.league}>PCS3 EUROPE</div>
            <div className={classes.day}>DAY 4</div>
          </div>
          <div className={classes.line} />
          <img src="/images/logo.png" alt="logo" className={classes.logo} />
        </div>
      </div>
      <Table />
    </div>
    <button className={classes.close} onClick={close} />
  </div>
);

export default Leaderboard;
