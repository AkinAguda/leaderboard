import React from "react";
import { useSelector } from "react-redux";

import { splitArray } from "./functions";
import Table from "./Table";

const TableContainer = () => {
  const {
    leaderboard: { leaderboard },
  } = useSelector((state) => state);

  return <Table splitArray={splitArray(leaderboard)} />;
};

export default TableContainer;
