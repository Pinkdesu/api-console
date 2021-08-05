import React, { memo } from "react";
import cn from "classnames";
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
    <button
      className={cn("button", { inactive: !loading && disabled })}
      type={type}
      disabled={disabled || loading}
    >
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
