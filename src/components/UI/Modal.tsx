import { FC, ReactNode, useEffect, useState } from "react";
import cls from "../../style/UI.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootSetting } from "../../store/reducers/RootSetting";

interface IModal {
  children: string | ReactNode;
  autoClose?: boolean;
  signIn?: boolean;
  setIsSignIn?: (name: string) => void;
}

const Modal: FC<IModal> = ({ children, autoClose, signIn, setIsSignIn }) => {
  const { isActive } = useAppSelector((state) => state.root.modal);
  const { swipeModalActivity } = RootSetting.actions;
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
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
        {setIsSignIn ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name=""
              id=""
            />{" "}
            <button onClick={() => setIsSignIn(name)}>add</button>
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Modal;
