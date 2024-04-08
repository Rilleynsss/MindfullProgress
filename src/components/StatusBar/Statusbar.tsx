import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import Radian, { RadianVariant } from "./Radian";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootSetting } from "../../store/reducers/RootSetting";

const Statusbar: FC = () => {
  const { task, active } = useAppSelector((state) => state.task);
  const { exp, lvl, maxExp } = useAppSelector((state) => state.root.profile);
  const dispatch = useAppDispatch();
  const [percentCurrentTask, setPercentCurrentTask] = useState<number>(0);
  const { addExp, updateLocalStorage } = RootSetting.actions;

  let complete = 0;
  task.forEach((item) => {
    if (item.status.isFinish) {
      complete += 1;
    }
  });

  const checkLvlStatus = () => {};
  useEffect(() => {
    task.forEach((item) => {
      if (item.status.isFinish) {
        dispatch(addExp(300));
        dispatch(updateLocalStorage());
      }
    });
  }, [task]);
  useEffect(() => {
    task.forEach((item) => {
      if (item.status.isActive) {
        setPercentCurrentTask((item.currentStep / item.steps) * 100);
      }
    });
  }, [task]);

  const percent = task.length !== 0 ? (complete / task.length) * 100 : 0;
  const percent3 = localStorage.getItem("profile")
    ? JSON.parse(localStorage["profile"]).lvl
    : null;

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
        {percent3 ? (
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
