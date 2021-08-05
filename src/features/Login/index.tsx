import React from "react";
import { Form } from "react-final-form";
import TextField from "../Common/TextField";
import Button from "../Common/Button";
import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import "./style.css";

const Login: React.VFC = () => {
  const onSubmit = (e: React.FormEvent<HTMLFontElement>) => {
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
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h2 className="form-header">API-консолька</h2>
                <TextField name="login" label="Логин" placeholder="Логин..." />
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
                />

                <Button type="submit" text="Войти" />
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
