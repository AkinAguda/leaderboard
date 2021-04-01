import React from "react";

import { mergeClasses } from "../../../helpers";

import Row from "./Row";
import classes from "./Table.module.css";

const Table = ({ splitArray }) => (
  <div className={classes.container}>
    <table
      className={mergeClasses(
        classes.table,
        classes.desktop,
        classes.tab,
        classes.table1
      )}
      cellSpacing="0"
      cellPadding="0"
    >
      <thead>
        <tr className={classes.heading}>
          <th className={classes.rank}>Rank</th>
          <th className={classes.team}>Team</th>
          <th className={classes.day}>Day change</th>
          <th className={classes.total}>
            total
            <br />
            pts
          </th>
        </tr>
      </thead>
      <tbody>
        {splitArray[0].map((rowData) => (
          <tr className={classes.row} key={rowData.name}>
            <Row {...rowData} />
          </tr>
        ))}
      </tbody>
    </table>

    <table
      className={mergeClasses(
        classes.table,
        classes.desktop,
        classes.tab,
        classes.table2
      )}
      cellSpacing="0"
      cellPadding="0"
    >
      <thead>
        <tr className={classes.heading}>
          <th className={classes.rank}>Rank</th>
          <th className={classes.team}>Team</th>
          <th className={classes.day}>Day change</th>
          <th className={classes.total}>
            total
            <br />
            pts
          </th>
        </tr>
      </thead>
      <tbody>
        {splitArray[1].map((rowData) => (
          <tr className={classes.row} key={rowData.name}>
            <Row {...rowData} />
          </tr>
        ))}
      </tbody>
    </table>

    <table
      className={mergeClasses(classes.table, classes.mobile)}
      cellSpacing="0"
      cellPadding="0"
    >
      <thead>
        <tr className={classes.heading}>
          <th className={classes.rank}>Rank</th>
          <th className={classes.team}>Team</th>
          <th className={classes.day}>Day change</th>
          <th className={classes.total}>
            total
            <br />
            pts
          </th>
        </tr>
      </thead>
      <tbody>
        {[...splitArray[0], ...splitArray[1]].map((rowData) => (
          <tr className={classes.row} key={rowData.name}>
            <Row {...rowData} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
