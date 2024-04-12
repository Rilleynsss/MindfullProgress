import { ChangeEvent, FC } from "react";
import cls from "../../style/UI.module.scss";

interface IInput {
  labelText?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => void;
  readOnly?: boolean;
}

const Input: FC<IInput> = ({
  labelText,
  type,
  placeholder,
  value,
  onChange,
  readOnly,
}) => {
  return (
    <>
      {labelText ? (
        <label className={cls.label} htmlFor={labelText}>
          {labelText}
        </label>
      ) : null}
      <input
        id={labelText}
        type={type}
        placeholder={placeholder}
        className={cls.input}
        onChange={onChange}
        value={value}
        readOnly={readOnly}
      />
    </>
  );
};

export default Input;
