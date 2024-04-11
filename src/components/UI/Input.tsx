import { ChangeEvent, ChangeEventHandler, FC, HTMLAttributes } from "react";
import cls from "../../style/UI.module.scss";

interface IInput
  extends ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> {
  labelText?: string;
}

const Input: FC<IInput> = (props) => {
  return (
    <>
      {props.labelText ? (
        <label htmlFor={props.labelText}>{props.labelText}</label>
      ) : null}
      <input id={props.labelText} {...props} className={cls.input} />
    </>
  );
};

export default Input;
