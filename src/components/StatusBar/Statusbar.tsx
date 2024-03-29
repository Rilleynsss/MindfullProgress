import { FC } from "react";
import cls from "../../style/layout.module.scss";
import Radian, { RadianVariant } from "./Radian";
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
  const percent2 = 80;
  const percent3 = 400;
  return (
    <div className={cls.layoutStatusbar}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Radian variant={RadianVariant.green} percent={percent} />
        <Radian variant={RadianVariant.orange} percent={percent2} />
        <Radian
          variant={RadianVariant.blue}
          maxState={500}
          percent={percent3}
        />
      </div>
    </div>
  );
};

export default Statusbar;
