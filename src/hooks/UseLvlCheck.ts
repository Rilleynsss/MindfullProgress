import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { TaskSlice } from "../store/reducers/TaskSlice";

export const useLvlCheck = () => {
  const { isFinish } = useAppSelector((state) => state.task);

  const [counter, setCounter] = useState<number>(0);
  const [prevValue, setPrevValue] = useState<number>(0);
  const [status, setStatus] = useState(false);
  const dispatch = useAppDispatch();
  const { updateCompleteCounter } = TaskSlice.actions;

  console.log(counter, "now");
  console.log(isFinish, "prev");
  if (counter > isFinish) {
    console.log("up");
    dispatch(updateCompleteCounter(counter));
  }
  // if (counter > prevValue) {
  //   console.log("ss");
  //   // dispatch(updateCompleteCounter(counter));
  //   setStatus(true);
  // }
  return [setCounter, setPrevValue, status] as const;
};
