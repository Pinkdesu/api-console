import React, { memo } from "react";
import cn from "classnames";
import { Field } from "react-final-form";
import "./style.css";

interface IProps {
  name: string;
  label: string;
  initialValue?: string;
  validate?: (value: string) => string | undefined;
  readOnly?: boolean;
}

const TextArea: React.VFC<IProps> = (props) => {
  const {
    name,
    label,
    readOnly = false,
    initialValue = "",
    validate = () => undefined,
  } = props;

  return (
    <Field name={name} validate={validate} initialValue={initialValue}>
      {({ input, meta }) => (
        <div
          className={cn("textarea-field", {
            "field-error": meta.error && meta.touched,
          })}
        >
          <label className="textarea-field__label">{label}</label>
          <textarea
            readOnly={readOnly}
            className="textarea-field__textarea"
            {...input}
          />
        </div>
      )}
    </Field>
  );
};

export default memo(TextArea);
