import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { TaskSlice } from "../../store/reducers/TaskSlice";

const Timer: FC = () => {
  const { task, active } = useAppSelector((state) => state.task);
  const [time, setTime] = useState({ hour: 0, minute: 0 });
  const dispatch = useAppDispatch();
  const { setActiveTask } = TaskSlice.actions;

  useEffect(() => {
    task.forEach((item, idx) => {
      if (item.status.isActive) {
        dispatch(setActiveTask(item.id));
        const hour = 0 + Math.floor(item.timeLeft / 60);
        const minute = item.timeLeft % 60;
        setTime({ hour, minute });
        if (item.status.isStarted) {
        }
      }
    });
  }, [task]);

  return (
    <section className={cls.layoutTimer}>
      <p>
        {active
          ? `${time.hour < 10 ? `0${time.hour}` : `${time.hour}`}:${
              time.minute < 10 ? `0${time.minute}` : `${time.minute}`
            }`
          : "Select any task"}
      </p>
    </section>
  );
};

export default Timer;
