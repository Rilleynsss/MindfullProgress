import { FC, useState } from "react";
import cls from "../../style/create.module.scss";
import { ITask } from "./../../models/ITask";
import { useAppDispatch } from "../../hooks/redux";
import { TaskSlice } from "../../store/reducers/TaskSlice";

const CreateTaskPage: FC = () => {
  const [newTask, setNewTask] = useState<ITask>({
    id: Date.now(),
    title: "",
    description: "",
    currentStep: 0,
    steps: 0,
    timeForStep: 0,
    timeLeft: 0,
    freeTime: 0,
    status: { isActive: false, isFinish: false, isStarted: false },
  });
  const dispatch = useAppDispatch();
  const { addNewTask } = TaskSlice.actions;
  const add = () => {
    if (
      newTask.title.length !== 0 &&
      newTask.description.length !== 0 &&
      newTask.steps !== 0 &&
      newTask.timeForStep !== 0 &&
      newTask.freeTime !== 0
    ) {
      dispatch(addNewTask(newTask));

      setNewTask({
        id: Date.now(),
        title: "",
        description: "",
        currentStep: 0,
        steps: 0,
        timeForStep: 0,
        timeLeft: 0,
        freeTime: 0,
        status: { isActive: false, isFinish: false, isStarted: false },
      });
    } else {
      console.log("какие то поля не заполнены");
    }
  };
  return (
    <div className={cls.create}>
      <ul className={cls.whereIs}>
        <li>today</li>
        <li>tommorow</li>
      </ul>
      <div className={cls.form}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Название"
            value={newTask.title}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Описание"
            value={newTask.description}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          <div>
            <input type="text" readOnly value={newTask.steps} />{" "}
            <button
              onClick={() => {
                setNewTask((prev) => ({ ...prev, steps: prev.steps + 1 }));
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setNewTask((prev) => ({ ...prev, steps: prev.steps - 1 }));
              }}
            >
              -
            </button>
          </div>
          <div>
            <input type="text" readOnly value={newTask.timeForStep} />
            <button
              onClick={() => {
                setNewTask((prev) => ({
                  ...prev,
                  timeForStep: prev.timeForStep + 5,
                  timeLeft: prev.timeForStep + 5,
                }));
              }}
            >
              +
            </button>
            <button
              onClick={() =>
                setNewTask((prev) => ({
                  ...prev,
                  timeForStep: prev.timeForStep - 5,
                  timeLeft: prev.timeForStep + 5,
                }))
              }
            >
              -
            </button>
          </div>
          <div>
            <input type="text" readOnly value={newTask.freeTime} />
            <button
              onClick={() => {
                setNewTask((prev) => ({
                  ...prev,
                  freeTime: prev.freeTime + 5,
                }));
              }}
            >
              +
            </button>
            <button
              onClick={() =>
                setNewTask((prev) => ({
                  ...prev,
                  freeTime: prev.freeTime - 5,
                }))
              }
            >
              -
            </button>
          </div>
          <button onClick={add}>add</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;
