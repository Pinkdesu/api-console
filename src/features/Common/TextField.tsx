import React, { memo } from "react";
import { Field } from "react-final-form";
import "./style.css";

interface IProps {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "password";
  sublabel?: string;
}

const TextField: React.VFC<IProps> = (props) => {
  const { type = "text", name, label, sublabel = "", placeholder } = props;

  return (
    <Field name={name} type={type} placeholder={placeholder}>
      {({ input }) => (
        <div className="text-field">
          <label className="text-field__label">
            <span className="label__text">{label}</span>
            {Boolean(sublabel) && (
              <span className="label__subtext">{sublabel}</span>
            )}
          </label>
          <input className="text-field__input" {...input} />
        </div>
      )}
    </Field>
  );
};

export default memo(TextField);
