import React from "react";
import { deleteRequest } from "../consoleSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { lastRequestIdSelector } from "../selectors";
import HistoryList from "./HistoryList";
import { ReactComponent as CloseSVG } from "../../../assets/close.svg";
import "../style.css";

const RequestHistory: React.VFC = () => {
  const dispatch = useAppDispatch();
  const lastId = useAppSelector(lastRequestIdSelector);

  const handleClick = () => {
    dispatch(deleteRequest(lastId));
  };

  return (
    <div className="console__request-history">
      <HistoryList />
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
