import leaderboardJson from "./leaderboard.json";

/* This retruns a promise that resolves the content of
the leaderboard.json file*/

export const getLeaderboard = () =>
  new Promise((resolve, reject) => {
    resolve(leaderboardJson);
    reject({ error: { message: "failed to fetch json" } });
  });
