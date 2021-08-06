import React, { memo } from "react";
import cn from "classnames";
import { Field } from "react-final-form";
import "./style.css";

interface IProps {
  name: string;
  label: string;
  validate?: (value: string) => string | undefined;
}

const TextArea: React.VFC<IProps> = (props) => {
  const { name, label, validate = () => undefined } = props;

  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <div
          className={cn("text-field", {
            "field-error": meta.error && meta.touched,
          })}
        >
          <label className="text-field__label">{label}</label>
          <textarea className="text-field__textarea" {...input} />
        </div>
      )}
    </Field>
  );
};

export default memo(TextArea);
