import React, { memo } from "react";
import "./style.css";

interface IProps {
  text: string;
  type?: "submit" | "button";
  disabled?: boolean;
}

const Button: React.VFC<IProps> = (props) => {
  const { text, disabled = false, type = "button" } = props;

  return (
    <button className="button" type={type} disabled={disabled}>
      <span className="button__text">{text}</span>
    </button>
  );
};

export default memo(Button);
