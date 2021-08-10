import React, { memo, useEffect } from "react";
import cn from "classnames";
import { Field, useForm } from "react-final-form";
import "./style.css";

interface IProps {
  name: string;
  label: string;
  validate?: (value: string) => string | undefined;
  readOnly?: boolean;
  value: string;
}

const TextArea: React.VFC<IProps> = (props) => {
  const {
    name,
    label,
    value,
    readOnly = false,
    validate = () => undefined,
  } = props;

  const form = useForm();

  useEffect(() => {
    form.mutators.updateValue(name, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Field name={name} validate={validate}>
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
