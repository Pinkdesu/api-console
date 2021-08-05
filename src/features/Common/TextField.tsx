import React, { memo } from "react";
import { Field } from "react-final-form";
import "./style.css";

interface IProps {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "password";
  sublabel?: string;
  validate?: (value: string) => string | undefined;
}

const TextField: React.VFC<IProps> = (props) => {
  const {
    name,
    label,
    placeholder,
    type = "text",
    sublabel = "",
    validate = () => undefined,
  } = props;

  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      validate={validate}
    >
      {({ input, meta }) => (
        <div
          className={`text-field ${meta.error && meta.touched ? "error" : ""}`}
        >
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
