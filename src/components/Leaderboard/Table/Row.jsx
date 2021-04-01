import classes from "./Table.module.css";

const Row = ({ rank, name, prevRank, points, crestUrl }) => (
  <>
    <td className={classes.rankCol}>{rank}</td>
    <td>
      <img src={crestUrl} alt="team-logo" className={classes.teamLogo} />
      {name}
    </td>
    <td className={classes.dayChangeCol}>
      {rank - prevRank < 0 ? (
        <>
          {Math.abs(rank - prevRank)}
          <div className={classes.arrowUp} />
        </>
      ) : prevRank - rank < 0 ? (
        <>
          {Math.abs(rank - prevRank)}
          <div className={classes.arrowDown} />
        </>
      ) : null}
    </td>
    <td className={classes.totalCol}>{points}</td>
  </>
);

export default Row;
