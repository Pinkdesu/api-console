import React, { memo, useState } from "react";
import { ReactComponent as PointsSVG } from "../../../assets/points.svg";
import "../style.css";

interface IProps {
  requestName?: string;
}

const HistoryItem: React.VFC<IProps> = (props) => {
  const { requestName = "text.ss" } = props;

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const toggleMennu = () => {
    setMenuOpened((prevState) => !prevState);
  };

  return (
    <li className="list__item">
      <div className="item__content">
        <span className="content__status success"></span>
        <span className="content__request-name small-text">{requestName}</span>
        <button className="opacity-button" onClick={toggleMennu}>
          <span className="opacity-button__icon">
            <PointsSVG />
          </span>
        </button>
      </div>
      {menuOpened && (
        <ul className="item__menu">
          <li className="menu__point">
            <button className="point__button small-text">Выполнить</button>
          </li>
          <li className="menu__point">
            <button className="point__button small-text">Скопировать</button>
          </li>
          <li className="menu__point">
            <button className="point__button point__button_red small-text">
              Удалить
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default memo(HistoryItem);
