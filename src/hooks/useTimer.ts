import { useEffect, useState } from "react";
import { useAppDispathc, useAppSelector } from "./redux";
import { TaskSlice } from "../store/reducers/TaskSlice";
import { ITask } from "../models/ITask";

export const useTimer = () => {
  const dispatch = useAppDispathc();
  const { task } = useAppSelector((state) => state.task);
  const [idx, setIdx] = useState<number>(-1);
  const [currentTask, setCurrentTask] = useState<ITask>();
  // if (idx) {
  //   setCurrentTask(task[idx]);
  // }
  const { setIsFinished } = TaskSlice.actions;
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    setCurrentTask(task[idx]);
    console.log(currentTask);
    setTimeout(() => {
      // dispatch(setIsFinished(idx));
    }, 1000);
  }, [task]);

  // const [timer, setTimer] = useState({
  //   hour: Math.floor(time / 60),
  //   minute: time % 60,
  // });
  // console.log(currentTask);
  if (isStarted) {
  }

  return { setIsStarted, setIdx } as const;
};
