import React from "react";
import { Form } from "react-final-form";
import Button from "../../Common/Button";
import TextArea from "../../Common/TextArea";
import GitLink from "../../Common/GitLink";
import { ReactComponent as PointsSVG } from "../../../assets/points.svg";
import "../style.css";

const Main: React.VFC = () => {
  return (
    <div className="console__form">
      <Form
        onSubmit={() => {}}
        render={({ handleSubmit, valid }) => (
          <form onSubmit={handleSubmit}>
            <div className="form__main">
              <TextArea name="request" label="Запрос:" />
              <span className="main__separator">
                <PointsSVG />
              </span>
              <TextArea name="response" label="Ответ:" />
            </div>
            <div className="form__footer">
              <Button type="submit" text="Отправить" disabled={!valid} />
              <GitLink />
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default Main;
