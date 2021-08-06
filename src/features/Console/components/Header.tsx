import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { userSelector } from "../../AppBootstrap/selectors";
import { IUser } from "../../AppBootstrap/interfaces";
import { ReactComponent as LogoSVG } from "../../../assets/logo.svg";
import { ReactComponent as LogOutSVG } from "../../../assets/log-out.svg";
import { ReactComponent as ExpandSVG } from "../../../assets/expand.svg";
import { ReactComponent as MinimizeSVG } from "../../../assets/minimize.svg";
import "../style.css";

interface IProps {
  fullScreen: boolean;
  toggleScreen: () => void;
}

const Header: React.VFC<IProps> = (props) => {
  const { fullScreen, toggleScreen } = props;

  const { login, sublogin } = useAppSelector<IUser>(userSelector);

  return (
    <header className="console__header">
      <div className="header__right-side">
        <span className="right-side__logo">
          <LogoSVG />
        </span>
        <span className="right-side__title">API консолька</span>
      </div>
      <div className="header__left-side">
        <div className="left-side__user">
          <span className="user__login">{login}</span>
          {sublogin && (
            <>
              <span className="user__separator">:</span>
              <span className="user__sublogin">{sublogin}</span>
            </>
          )}
        </div>
        {/* TODO: common component */}
        <div>
          <button className="opacity-button">
            <span className="opacity-button__text">Выйти</span>
            <span className="opacity-button__icon">
              <LogOutSVG />
            </span>
          </button>
        </div>
        <div className="left-side__expand">
          <button className="opacity-button" onClick={toggleScreen}>
            <span className="opacity-button__icon">
              {fullScreen ? <MinimizeSVG /> : <ExpandSVG />}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;