import { FC, Fragment } from "react";
import cls from "../../style/taskPage.module.scss";
import Button, { ButtonVariant } from "./../UI/Button";
import { useAppDispathc, useAppSelector } from "../../hooks/redux";
import { TaskSlice } from "../../store/reducers/TaskSlice";
import { ITask } from "../../models/ITask";
import { useTimer } from "../../hooks/useTimer";

const TaskPage: FC = () => {
  const { setActiveTask, setIsStart, disableAllTask } = TaskSlice.actions;
  const dispatch = useAppDispathc();
  const { setIsStarted, setIdx } = useTimer();
  const { task } = useAppSelector((state) => state.task);

  const checkStatusButton = (item: ITask) => {
    if (item.status.isFinish) {
      return ButtonVariant.finish;
    } else if (item.status.isStarted) {
      return ButtonVariant.check;
    } else {
      return ButtonVariant.start;
    }
  };

  const buttonOnClick = (item: ITask, idx: number) => {
    setIdx(idx);
    dispatch(setIsStart(idx));
  };

  return (
    <section className={cls.taskPage}>
      <ul
        className={cls.taskList}
        onClick={(e) => {
          dispatch(disableAllTask());
        }}
      >
        {task.map((item, idx) => {
          return (
            <li
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setActiveTask(item.id));
              }}
              className={[
                item.status.isActive ? cls.active : "",
                item.status.isStarted ? cls.start : "",
                item.status.isFinish ? cls.finish : "",
              ].join(" ")}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className={cls.description}>
        {task.map((item, idx) => {
          if (item.status.isActive) {
            return (
              <Fragment key={item.id}>
                <h2>Задание: "{item.title}"</h2>
                <p>Описание: "{item.description}"</p>
                <p>Количество шагов: {item.steps} </p>
                <p>Время на шаг: {item.timeForStep} мин</p>
                <Button
                  variant={checkStatusButton(item)}
                  onClick={(e) => {
                    buttonOnClick(item, idx);
                  }}
                >
                  Start
                </Button>
              </Fragment>
            );
          }
        })}
      </div>
    </section>
  );
};

export default TaskPage;
