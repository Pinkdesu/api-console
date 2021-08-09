import React, { memo, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { deleteRequest, sendRequest } from "../consoleSlice";
import { IRequestItem } from "../interfaces";
import { ReactComponent as PointsSVG } from "../../../assets/points.svg";
import "../style.css";

const HistoryItem: React.VFC<IRequestItem> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, status, request } = props;

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const toggleMennu = () => {
    setMenuOpened((prevState) => !prevState);
  };

  const handleDelete = () => {
    toggleMennu();
    dispatch(deleteRequest(id));
  };

  const handleExecute = () => {
    toggleMennu();
    dispatch(sendRequest(request));
  };

  return (
    <li className="list__item">
      <div className="item__content">
        <span className={`content__status ${status}`}></span>
        <span className="content__request-name small-text">{title}</span>
        <button className="opacity-button" onClick={toggleMennu}>
          <span className="opacity-button__icon">
            <PointsSVG />
          </span>
        </button>
      </div>
      {menuOpened && (
        <ul className="item__menu">
          <li className="menu__point">
            <button
              className="point__button small-text"
              onClick={handleExecute}
            >
              Выполнить
            </button>
          </li>
          <li className="menu__point">
            <button className="point__button small-text">Скопировать</button>
          </li>
          <li className="menu__point">
            <button
              className="point__button point__button_red small-text"
              onClick={handleDelete}
            >
              Удалить
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default memo(HistoryItem);
