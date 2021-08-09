import React from "react";
import HistoryItem from "./HistoryItem";
import { useAppSelector } from "../../../app/hooks";
import { requestHistorySelector } from "../selectors";
import "../style.css";

const HistoryList: React.VFC = () => {
  const requestHistory = useAppSelector(requestHistorySelector);

  return (
    <ul className="request-history__list">
      {requestHistory.map((item) => (
        <HistoryItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          request={item.request}
          response={item.response}
        />
      ))}
    </ul>
  );
};

export default HistoryList;
