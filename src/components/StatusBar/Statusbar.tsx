import { FC } from "react";
import cls from "../../style/layout.module.scss";
import Radian from "./Radian";

const Statusbar: FC = () => {
  const percent = 75;
  return (
    <div className={cls.layoutStatusbar}>
      <div>
        <Radian percent={percent} />
      </div>
    </div>
  );
};

export default Statusbar;
