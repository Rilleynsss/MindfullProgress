import { FC } from "react";
import cls from "../../style/layout.module.scss";
import Radian from "./Radian";

const Statusbar: FC = () => {
  const percent = 75;
  const percent2 = 100;
  const percent3 = 25;
  return (
    <div className={cls.layoutStatusbar}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Radian percent={percent} />
        <Radian percent={percent2} />
        <Radian percent={percent3} />
      </div>
    </div>
  );
};

export default Statusbar;
