import React, { memo } from "react";
import { ReactComponent as LoaderSVG } from "../../assets/loader.svg";
import "./style.css";

interface IProps {
  text: string;
  type?: "submit" | "button";
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.VFC<IProps> = (props) => {
  const { text, disabled = false, loading = false, type = "button" } = props;

  return (
    <button className="button" type={type} disabled={disabled}>
      {loading ? (
        <span className="button__loader">
          <LoaderSVG />
        </span>
      ) : (
        <span className="button__text">{text}</span>
      )}
    </button>
  );
};

export default memo(Button);
