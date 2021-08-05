import React from "react";
import { Form } from "react-final-form";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import Error from "./components/Error";
import { auth } from "../AppBootstrap/authSlice";
import { IAuth } from "../AppBootstrap/interfaces";
import * as selectors from "../AppBootstrap/selectors";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fieldValidator } from "./constants";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import "./style.css";

const Login: React.VFC = () => {
  const dispatch = useAppDispatch();

  const error = useAppSelector(selectors.error);
  const loading = useAppSelector(selectors.loading);

  const onSubmit = (values: IAuth) => {
    dispatch(auth(values));
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
                {error && <Error error={error} />}
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
                />
                <TextField
                  name="password"
                  type="password"
                  label="Пароль"
                  placeholder="Пароль..."
                  validate={fieldValidator}
                />

                <Button
                  type="submit"
                  text="Войти"
                  loading={loading}
                  disabled={!valid || loading}
                />
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
