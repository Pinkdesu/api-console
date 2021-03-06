import React, { memo } from "react";
import { ReactComponent as MehSVG } from "../../../assets/meh.svg";
import "../style.css";

interface IProps {
  error: string;
}

const Error: React.VFC<IProps> = (props) => {
  const { error } = props;

  return (
    <div className="error-message">
      <div className="error-message__icon">
        <MehSVG />
      </div>
      <div className="error-message__description">
        <h3 className="description__header">Вход не вышел</h3>
        <span className="description__text">{error}</span>
      </div>
    </div>
  );
};

export default memo(Error);
