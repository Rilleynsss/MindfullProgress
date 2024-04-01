import { FC, useEffect, useState } from "react";
import cls from "../../style/layout.module.scss";
import { useAppSelector } from "../../hooks/redux";
import { useTimer } from "../../hooks/useTimer";

const Timer: FC = () => {
  const { task } = useAppSelector((state) => state.task);
  // const { timer, setTime } = useTimer();
  // useEffect(() => {
  //   task.forEach((item) => {
  //     if (item.status.isActive) {
  //       setTime(item.timeForStep);
  //     }
  // });
  // }, [task]);
  return (
    <section className={cls.layoutTimer}>
      <p>{/* {timer.hour}:{timer.minute} */}</p>
    </section>
  );
};

export default Timer;
