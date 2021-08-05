import React from "react";
import { Form } from "react-final-form";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import Error from "./components/Error";
import { fieldValidator } from "./constants";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import "./style.css";

const Login: React.VFC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login__content">
        <div className="content__icon">
          <LogoSVG />
        </div>
        <div className="content__form-wrapper">
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, valid }) => (
              <form onSubmit={handleSubmit}>
                <h2 className="form__header">API-консолька</h2>
                <Error error="sdasd" />
                <TextField
                  name="login"
                  label="Логин"
                  placeholder="Логин..."
                  validate={fieldValidator}
                />
                <TextField
                  name="sublogin"
                  label="Сублогин"
                  sublabel="Опционально"
                  placeholder="Сублогин..."
                  validate={fieldValidator}
                />
                <TextField
                  name="password"
                  type="password"
                  label="Пароль"
                  placeholder="Пароль..."
                  validate={fieldValidator}
                />

                <Button type="submit" text="Войти" disabled={!valid} />
              </form>
            )}
          />
        </div>
        <div className="content__git">
          <a href="https://github.com/Pinkdesu">@pinkdesu</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
