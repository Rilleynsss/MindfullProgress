import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import Radian, { RadianVariant } from "./Radian";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootSetting } from "../../store/reducers/RootSetting";
import { TaskSlice } from "../../store/reducers/TaskSlice";
import { useLvlCheck } from "../../hooks/UseLvlCheck";

const Statusbar: FC = () => {
  const { task, active } = useAppSelector((state) => state.task);
  const { exp, lvl, maxExp } = useAppSelector((state) => state.root.profile);
  const [setCounter, status] = useLvlCheck();
  const [count, setCount] = useState(0);
  const [percentCurrentTask, setPercentCurrentTask] = useState<number>(0);
  let complete = 0;
  task.forEach((item) => {
    if (item.status.isFinish) {
      complete += 1;
    }
  });
  useEffect(() => {
    setCount(0);
    task.forEach((item, idx) => {
      if (item.status.isFinish) {
        setCount((prev) => prev + 1);
      }
    });
  }, [task]);

  useEffect(() => {
    if (count !== 0) {
      setCounter(count);
    }
  }, [count]);

  useEffect(() => {
    task.forEach((item) => {
      if (item.status.isActive) {
        setPercentCurrentTask((item.currentStep / item.steps) * 100);
      }
    });
  }, [task]);

  const percent = task.length !== 0 ? (complete / task.length) * 100 : 0;
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
        {localStorage.getItem("profile") ? (
          <Radian
            variant={RadianVariant.blue}
            maxState={maxExp}
            percent={exp}
            text={lvl}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Statusbar;
