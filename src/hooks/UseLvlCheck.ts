import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { TaskSlice } from "../store/reducers/TaskSlice";
import { RootSetting } from "../store/reducers/RootSetting";

export const useLvlCheck = () => {
  const { isFinish } = useAppSelector((state) => state.task);

  const [counter, setCounter] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);
  const [status, setStatus] = useState(false);
  const dispatch = useAppDispatch();
  const { updateCompleteCounter } = TaskSlice.actions;
  const { addExp, updateLocalStorage } = RootSetting.actions;

  useEffect(() => {
    console.log("counter", counter);
    console.log("isFinish", isFinish);
    if (counter > isFinish) {
      console.log("add exp");
      dispatch(addExp(100));
      dispatch(updateCompleteCounter(counter));
      dispatch(updateLocalStorage());
    }
  }, [counter]);
  return [setCounter, setPrevValue, status] as const;
};
