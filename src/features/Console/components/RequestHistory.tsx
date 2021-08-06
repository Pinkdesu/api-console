import React from "react";
import HistoryList from "./HistoryList";
import { ReactComponent as CloseSVG } from "../../../assets/close.svg";
import "../style.css";

const RequestHistory: React.VFC = () => {
  return (
    <div className="console__request-history">
      <HistoryList />
      <div className="request-history__close">
        <button className="opacity-button">
          <span className="opacity-button__icon">
            <CloseSVG />
          </span>
        </button>
      </div>
    </div>
  );
};

export default RequestHistory;
