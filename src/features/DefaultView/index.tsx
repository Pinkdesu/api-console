import React from "react";
import "./style.css";

interface IProps {
  children: React.ReactNode;
}

const DefaultView: React.VFC<IProps> = (props) => {
  const { children } = props;

  return <div className="wrapper">{children}</div>;
};

export default DefaultView;
