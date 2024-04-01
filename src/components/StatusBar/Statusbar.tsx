import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import Radian, { RadianVariant } from "./Radian";
import { useAppSelector } from "../../hooks/redux";

const Statusbar: FC = () => {
  const { task, active } = useAppSelector((state) => state.task);
  const [percentCurrentTask, setPercentCurrentTask] = useState<number>(0);
  let complete = 0;
  task.forEach((item) => {
    if (item.status.isFinish) {
      complete += 1;
    }
  });

  useEffect(() => {
    task.forEach((item, idx) => {
      if (item.status.isActive) {
        setPercentCurrentTask((item.currentStep / item.steps) * 100);
      }
    });
  }, [task]);

  const percent = task.length !== 0 ? (complete / task.length) * 100 : 0;
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

        {active ? (
          <Radian variant={RadianVariant.orange} percent={percentCurrentTask} />
        ) : null}
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
