import React from "react";
import HistoryItem from "./HistoryItem";
import "../style.css";

const HistoryList: React.VFC = () => {
  return (
    <ul className="request-history__list">
      <HistoryItem />
      <HistoryItem />
    </ul>
  );
};

export default HistoryList;
