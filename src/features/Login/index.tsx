import React from "react";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import "./style.css";

const Login: React.VFC = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="content__icon">
          <LogoSVG />
        </div>
        <div className="content__form-wrapper"></div>
      </div>
    </div>
  );
};

export default Login;
