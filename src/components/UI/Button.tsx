import { FC, HTMLAttributes } from "react";
import cls from "../../style/UI.module.scss";

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: string;
}

const Button: FC<IButtonProps> = (props) => {
  return (
    <button className={cls.button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
