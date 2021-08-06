import React from "react";
import { Form } from "react-final-form";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import Error from "./components/Error";
import GitLink from "../Common/GitLink";
import { auth } from "../AppBootstrap/authSlice";
import { IAuth } from "../AppBootstrap/interfaces";
import { errorSelector, loadingSelector } from "../AppBootstrap/selectors";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fieldValidator } from "./constants";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import "./style.css";

const Login: React.VFC = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector<boolean>(loadingSelector);
  const error = useAppSelector<string | null>(errorSelector);

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
                  disabled={!valid}
                />
              </form>
            )}
          />
        </div>
        <GitLink />
      </div>
    </div>
  );
};

export default Login;
