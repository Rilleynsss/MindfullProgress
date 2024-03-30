import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";

interface TaskState {
  task: ITask[];
}
const initialState: TaskState = {
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
      steps: 1,
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
      state.task.forEach((item) => {
        if (item.id === payload.payload) {
          item.status.isActive = true;
        } else {
          item.status.isActive = false;
        }
      });
    },
    disableAllTask(state) {
      state.task.forEach((item) => {
        if (item.status.isActive) {
          item.status.isActive = false;
        }
      });
    },
    setIsFinished(state, payload: PayloadAction<number>) {
      state.task.forEach((item) => {
        if (item.id === payload.payload) {
          item.status.isFinish = true;
        }
      });
    },
  },
});

export default TaskSlice.reducer;
