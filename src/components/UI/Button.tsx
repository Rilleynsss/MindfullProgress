import { FC, HTMLAttributes } from "react";
import cls from "../../style/UI.module.scss";

export enum ButtonVariant {
  start = "start",
  check = "check",
  finish = "finish",
  small = "small",
}

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant: ButtonVariant;
}

const Button: FC<IButtonProps> = (props) => {
  const customClassName = (variant: string) => {
    switch (variant) {
      case ButtonVariant.start:
        return [cls.button, cls.start].join(" ");
      case ButtonVariant.check:
        return [cls.button, cls.check].join(" ");
      case ButtonVariant.finish:
        return [cls.button, cls.finish].join(" ");
      case ButtonVariant.small:
        return [cls.button, cls.small].join(" ");
    }
  };
  return (
    <button className={customClassName(props.variant)} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
