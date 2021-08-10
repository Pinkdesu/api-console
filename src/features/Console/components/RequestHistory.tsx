import React from "react";
import { deleteRequest } from "../consoleSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { lastRequestIdSelector, requestHistorySelector } from "../selectors";
import HistoryItem from "./HistoryItem";
import { ReactComponent as CloseSVG } from "../../../assets/close.svg";
import "../style.css";

const RequestHistory: React.VFC = () => {
  const dispatch = useAppDispatch();

  const lastId = useAppSelector(lastRequestIdSelector);
  const requestHistory = useAppSelector(requestHistorySelector);

  const handleClick = () => {
    dispatch(deleteRequest(lastId));
  };

  return (
    <div className="console__request-history">
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
      <div className="request-history__close">
        <button className="opacity-button" onClick={handleClick}>
          <span className="opacity-button__icon">
            <CloseSVG />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RequestHistory;
