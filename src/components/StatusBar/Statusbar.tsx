import { FC } from "react";
import cls from "../../style/layout.module.scss";
import Radian from "./Radian";
import { useAppSelector } from "../../hooks/redux";

const Statusbar: FC = () => {
  const { task } = useAppSelector((state) => state.task);
  let complete = 0;
  task.forEach((item) => {
    if (item.status.isFinish) {
      complete += 1;
    }
  });
  const percent = (complete / task.length) * 100;
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
