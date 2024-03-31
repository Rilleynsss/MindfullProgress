import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";

interface TaskState {
  active: boolean;
  task: ITask[];
}
const initialState: TaskState = {
  active: false,
  task: [
    {
      id: 0,
      title: "Накидать макет",
      description:
        "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
      steps: 3,
      currentStep: 0,
      timeStart: 0,
      timeForStep: 90,
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
      timeStart: 0,
      timeForStep: 90,
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
      timeStart: 0,
      timeForStep: 90,
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
    disableAllTask(state) {
      state.active = false;

      state.task.forEach((item) => {
        if (item.status.isActive) {
          item.status.isActive = false;
        }
      });
    },
    setIsFinished(state, payload: PayloadAction<number>) {
      // state.task.forEach((item) => {
      //   if (item.id === payload.payload) {
      //     item.status.isFinish = true;
      //   }
      // });
      const currentTask = state.task[payload.payload];
      if (currentTask.currentStep < currentTask.steps) {
        currentTask.currentStep += 1;
        if (currentTask.currentStep === currentTask.steps) {
          currentTask.status.isFinish = true;
        }
      }
    },
  },
});

export default TaskSlice.reducer;
