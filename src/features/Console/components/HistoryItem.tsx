import React, { memo, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { deleteRequest, sendRequest, changeCurrent } from "../consoleSlice";
import { IRequestItem } from "../interfaces";
import { ReactComponent as PointsSVG } from "../../../assets/points.svg";
import "../style.css";

const HistoryItem: React.VFC<IRequestItem> = (props) => {
  const dispatch = useAppDispatch();

  const { id, title, status, request } = props;

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const toggleMennu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpened((prevState) => !prevState);
  };

  const handleDelete = () => {
    dispatch(deleteRequest(id));
  };

  const handleExecute = () => {
    dispatch(sendRequest(request));
  };

  const handleCopy = () => {
    //TODO: add animation
    navigator.clipboard.writeText(request).then(() => {});
  };

  const changeCurrentRequest = () => {
    dispatch(changeCurrent(id));
  };

  return (
    <li className="list__item">
      <div className="item__content" onClick={changeCurrentRequest}>
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
            <button className="point__button small-text" onClick={handleCopy}>
              Скопировать
            </button>
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
