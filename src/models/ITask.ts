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
  currentStep: number;
  timeForStep: number;
  timeLeft: number;
  freeTime: number;
  status: ITaskStatus;
}
