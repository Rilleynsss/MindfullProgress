import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";
// import { ITask } from './../../models/ITask';

interface TaskState {
  active: boolean;
  isStarted: boolean;
  isFinish: number;
  task: ITask[];
}
const initialState: TaskState = {
  active: false,
  isStarted: false,
  isFinish: localStorage["isFinish"] ? JSON.parse(localStorage["isFinish"]) : 0,
  task: localStorage["task"] ? JSON.parse(localStorage["task"]) : [],
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setActiveTask(state, payload: PayloadAction<number>) {
      state.task.forEach((item) => {
        if (item.status.isActive) {
          state.active = true;
        }

        if (item.id === payload.payload) {
          item.status.isActive = true;
        } else {
          item.status.isActive = false;
        }
      });
    },
    startTimer(state) {
      state.isStarted = true;
    },
    stopTimer(state) {
      state.isStarted = false;
    },
    checkTaskStatus(state, payload: PayloadAction<number>) {
      const currentTask = state.task[payload.payload];
      if (currentTask.currentStep < currentTask.steps) {
        currentTask.status.isStarted = true;
      }
      if (currentTask.timeLeft === 0) {
        state.task[payload.payload].timeLeft =
          state.task[payload.payload].timeForStep;
      }
    },
    changeTime(state, payload: PayloadAction<number>) {
      const currentTask = state.task[payload.payload];

      if (currentTask.timeLeft === 0) {
        currentTask.currentStep = currentTask.currentStep + 1;
      } else {
        currentTask.timeLeft = currentTask.timeLeft - 1;
      }
      if (currentTask.currentStep === currentTask.steps) {
        currentTask.status.isStarted = false;
        currentTask.status.isFinish = true;
      }
    },
    disableAllTask(state) {
      state.active = false;
      state.task.forEach((item) => {
        if (item.status.isActive) {
          item.status.isActive = false;
        }
      });
    },
    addNewTask(state, payload: PayloadAction<ITask>) {
      state.task.push(payload.payload);
    },
    updateLocalStorageTask(state) {
      localStorage.setItem("task", JSON.stringify(state.task));
    },
    updateCompleteCounter(state, payload: PayloadAction<number>) {
      console.log("update");
      state.isFinish = payload.payload;
      localStorage["isFinish"] = state.isFinish;
    },
  },
});

export default TaskSlice.reducer;
