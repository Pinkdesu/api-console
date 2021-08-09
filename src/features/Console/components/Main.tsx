import React from "react";
import { jsonFieldValidator } from "../constants";
import { currentRequestSelector } from "../selectors";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Form } from "react-final-form";
import { IFormValues } from "../interfaces";
import { sendRequest } from "../consoleSlice";
import Button from "../../Common/Button";
import TextArea from "../../Common/TextArea";
import GitLink from "../../Common/GitLink";
import { ReactComponent as PointsSVG } from "../../../assets/points.svg";
import { ReactComponent as FormatSVG } from "../../../assets/format.svg";
import "../style.css";

const Main: React.VFC = () => {
  const dispatch = useAppDispatch();
  const { request, response } = useAppSelector(currentRequestSelector);

  const onSubmit = (values: IFormValues) => {
    const { request } = values;
    dispatch(sendRequest(request));
  };

  return (
    <div className="console__form">
      <Form
        onSubmit={onSubmit}
        validateOnBlur={true}
        render={({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            <div className="form__main">
              <TextArea
                name="request"
                label="Запрос:"
                validate={jsonFieldValidator}
                initialValue={request}
              />
              <span className="main__separator">
                <PointsSVG />
              </span>
              <TextArea
                name="response"
                label="Ответ:"
                initialValue={response}
                readOnly
              />
            </div>
            <div className="form__footer">
              <Button type="submit" text="Отправить" disabled={!valid} />
              <GitLink />
              <button className="opacity-button">
                <span className="opacity-button__icon">
                  <FormatSVG />
                </span>
                <span className="opacity-button__text">Форматировать</span>
              </button>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Main;
