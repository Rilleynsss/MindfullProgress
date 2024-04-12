import { ChangeEvent, FC, HTMLAttributes, useState } from "react";
import cls from "../../style/create.module.scss";
import { ITask } from "./../../models/ITask";
import { useAppDispatch } from "../../hooks/redux";
import { TaskSlice } from "../../store/reducers/TaskSlice";
import Input from "../UI/Input";
import Button, { ButtonVariant } from "../UI/Button";

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
          <Input
            type="text"
            placeholder="Название"
            labelText="Title"
            value={newTask.title}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setNewTask((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <Input
            type="text"
            placeholder="Описание"
            labelText="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          <div className={cls.inputWithBtn}>
            <Input
              type="text"
              readOnly
              value={newTask.steps}
              labelText="Steps"
            />
            <div>
              <Button
                variant={ButtonVariant.small}
                onClick={() => {
                  setNewTask((prev) => ({ ...prev, steps: prev.steps + 1 }));
                }}
              >
                +
              </Button>
              <Button
                variant={ButtonVariant.small}
                onClick={() => {
                  newTask.steps !== 0
                    ? setNewTask((prev) => ({ ...prev, steps: prev.steps - 1 }))
                    : console.log("min");
                }}
              >
                -
              </Button>
            </div>
          </div>
          <div className={cls.inputWithBtn}>
            <Input
              type="text"
              readOnly
              labelText="Time For Step"
              value={newTask.timeForStep}
            />
            <div>
              <Button
                variant={ButtonVariant.small}
                onClick={() => {
                  setNewTask((prev) => ({
                    ...prev,
                    timeForStep: prev.timeForStep + 5,
                    timeLeft: prev.timeForStep + 5,
                  }));
                }}
              >
                +
              </Button>
              <Button
                variant={ButtonVariant.small}
                onClick={() =>
                  newTask.timeForStep !== 0
                    ? setNewTask((prev) => ({
                        ...prev,
                        timeForStep: prev.timeForStep - 5,
                        timeLeft: prev.timeForStep + 5,
                      }))
                    : console.log("min")
                }
              >
                -
              </Button>
            </div>
          </div>
          <div className={cls.inputWithBtn}>
            <Input type="text" readOnly value={newTask.freeTime} />
            <div>
              <Button
                variant={ButtonVariant.small}
                onClick={() => {
                  setNewTask((prev) => ({
                    ...prev,
                    freeTime: prev.freeTime + 5,
                  }));
                }}
              >
                +
              </Button>
              <Button
                variant={ButtonVariant.small}
                onClick={() =>
                  newTask.freeTime !== 0
                    ? setNewTask((prev) => ({
                        ...prev,
                        freeTime: prev.freeTime - 5,
                      }))
                    : console.log("min")
                }
              >
                -
              </Button>
            </div>
          </div>
          <Button variant={ButtonVariant.finish} onClick={add}>
            add
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;
