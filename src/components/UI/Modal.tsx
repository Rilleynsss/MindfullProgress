import { FC, ReactNode, useEffect } from "react";
import cls from "../../style/UI.module.scss";
import { useAppDispathc, useAppSelector } from "../../hooks/redux";
import { RootSetting } from "../../store/reducers/RootSetting";

interface IModal {
  children: string | ReactNode;
  autoClose?: boolean;
}

const Modal: FC<IModal> = ({ children, autoClose }) => {
  const { isActive } = useAppSelector((state) => state.root.modal);
  const { swipeModalActivity } = RootSetting.actions;
  const dispatch = useAppDispathc();
  useEffect(() => {
    if (isActive && autoClose) {
      setTimeout(() => {
        dispatch(swipeModalActivity([false, ""]));
      }, 3000);
    }
  }, [isActive]);
  return (
    <div
      className={cls.modal}
      onClick={(e) => {
        dispatch(swipeModalActivity([false, ""]));
      }}
    >
      <div
        className={cls.content}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
