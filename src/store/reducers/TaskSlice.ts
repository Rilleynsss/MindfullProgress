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
  task: localStorage["task"]
    ? JSON.parse(localStorage["task"])
    : [
        {
          id: 0,
          title: "Накидать макет",
          description:
            "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
          steps: 3,
          currentStep: 0,
          timeForStep: 5,
          timeLeft: 5,
          freeTime: 30,
          status: { isStarted: false, isActive: false, isFinish: false },
        },
        {
          id: 1,
          title: "Придумать стилизацию",
          description:
            "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
          steps: 1,
          currentStep: 0,
          timeForStep: 3,
          timeLeft: 3,
          freeTime: 30,
          status: { isStarted: false, isActive: false, isFinish: false },
        },
        {
          id: 2,
          title: "Закомитить все",
          description:
            "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
          steps: 4,
          currentStep: 0,
          timeForStep: 60,
          timeLeft: 60,
          freeTime: 30,
          status: { isStarted: false, isActive: false, isFinish: false },
        },
      ],
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setActiveTask(state, payload: PayloadAction<number>) {
      state.active = true;
      state.task.forEach((item) => {
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
        state.isFinish += 1;
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
      localStorage["isFinish"] = state.isFinish;
      state.isFinish = payload.payload;
      if (localStorage["isFinish"]) {
        if (JSON.parse(localStorage["isFinish"]) < state.isFinish) {
          localStorage["isFinish"] = state.isFinish;
        }
      }
    },
  },
});

export default TaskSlice.reducer;
