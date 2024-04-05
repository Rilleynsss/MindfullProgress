import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import { useAppSelector } from "../../hooks/redux";
import { useTimer } from "../../hooks/useTimer";

const Timer: FC = () => {
  const { task, active } = useAppSelector((state) => state.task);
  const [time, setTime] = useState({ hour: 0, minute: 0 });
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    task.forEach((item, idx) => {
      if (item.status.isActive) {
        setIsActive(true);
        const hour = 0 + Math.floor(item.timeLeft / 60);
        const minute = item.timeLeft % 60;
        setTime({ hour, minute });
        if (item.status.isStarted) {
        }
      }
    });
    if (!active) {
      setIsActive(false);
    }
  }, [task, active]);

  return (
    <section className={cls.layoutTimer}>
      <p>
        {isActive
          ? `${time.hour < 10 ? `0${time.hour}` : `${time.hour}`}:${
              time.minute < 10 ? `0${time.minute}` : `${time.minute}`
            }`
          : "Select any task"}
      </p>
    </section>
  );
};

export default Timer;
