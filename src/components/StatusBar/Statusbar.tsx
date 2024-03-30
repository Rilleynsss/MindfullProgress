import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import Radian, { RadianVariant } from "./Radian";
import { useAppSelector } from "../../hooks/redux";
import { ITask } from "../../models/ITask";

const Statusbar: FC = () => {
  const { task } = useAppSelector((state) => state.task);
  const [currentItem, setCurrentItem] = useState<ITask | null>();
  let complete = 0;
  task.forEach((item) => {
    if (item.status.isFinish) {
      complete += 1;
    }
  });

  useEffect(() => {
    task.forEach((item, idx) => {
      if (item.status.isActive) {
        setCurrentItem(item);
      }
    });
  }, [task]);

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

        {currentItem ? (
          <Radian variant={RadianVariant.orange} percent={percent2} />
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
