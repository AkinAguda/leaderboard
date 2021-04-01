import leaderboardJson from "./leaderboard.json";

export const getLeaderboard = () =>
  new Promise((resolve, reject) => {
    resolve(leaderboardJson);
    reject({ error: { message: "failed to fetch json" } });
  });
