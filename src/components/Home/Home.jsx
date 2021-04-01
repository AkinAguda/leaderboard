import React from "react";
import Button from "../Button";
import Leaderboard from "../Leaderboard";
import classes from "./Home.module.css";

const Home = ({ showLeaderboard }) => (
  <div className={classes.container}>
    {showLeaderboard ? <Leaderboard /> : <Button>Leaderboard</Button>}
  </div>
);

export default Home;
