interface ITaskStatus {
  isStarted: boolean;
  isActive: boolean;
  isFinish: boolean;
}
export interface ITask {
  id: number;
  title: string;
  description: string;
  steps: number;
  timeStart: number;
  timeForStep: number;
  freeTime: number;
  status: ITaskStatus;
}
