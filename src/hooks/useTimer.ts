import { useEffect, useState } from "react";
import { useAppDispathc, useAppSelector } from "./redux";
import { TaskSlice } from "../store/reducers/TaskSlice";

export const useTimer = () => {
  const dispatch = useAppDispathc();
  const { task, isStarted } = useAppSelector((state) => state.task);
  const { checkTaskStatus, changeTime, stopTimer } = TaskSlice.actions;
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx !== null) {
      if (isStarted) {
        dispatch(checkTaskStatus(idx));
      }
    }
  }, [isStarted]);
  useEffect(() => {
    if (idx !== null) {
      if (task[idx].status.isActive && task[idx].status.isStarted) {
        if (task[idx].timeLeft === 0) {
          dispatch(stopTimer());
        }
        if (isStarted) {
          setTimeout(() => {
            dispatch(changeTime(idx));
          }, 1000);
        }
      }
    }
  }, [task]);

  return { setIdx } as const;
};
