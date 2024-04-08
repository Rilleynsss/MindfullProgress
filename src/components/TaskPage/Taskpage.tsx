import { FC, Fragment, useState } from "react";
import cls from "../../style/taskPage.module.scss";
import Button, { ButtonVariant } from "./../UI/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { TaskSlice } from "../../store/reducers/TaskSlice";
import { ITask } from "../../models/ITask";
import { useTimer } from "../../hooks/useTimer";
import { RootSetting } from "../../store/reducers/RootSetting";

const TaskPage: FC = () => {
  const { setActiveTask, disableAllTask, startTimer } = TaskSlice.actions;
  const { swipeModalActivity } = RootSetting.actions;
  const dispatch = useAppDispatch();
  const { setIdx } = useTimer();
  const { task, isStarted } = useAppSelector((state) => state.task);

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
    if (!isStarted && item.steps !== item.currentStep) {
      setIdx(idx);
      dispatch(startTimer());
    }
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
                isStarted
                  ? dispatch(
                      swipeModalActivity([
                        true,
                        "Выбрано другое задание. Пожалуйста, завершите в начале его, прежде чем брать следующее",
                      ])
                    )
                  : dispatch(setActiveTask(item.id));
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
                <h2 className={item.status.isFinish ? cls.finish : ""}>
                  Задание: "{item.title}"
                </h2>
                <p className={item.status.isFinish ? cls.finish : ""}>
                  Описание: "{item.description}"
                </p>
                <p className={item.status.isFinish ? cls.finish : ""}>
                  Количество шагов: <span>{item.currentStep}</span>/{item.steps}{" "}
                </p>
                <p className={item.status.isFinish ? cls.finish : ""}>
                  Время на шаг: {item.timeForStep} мин
                </p>
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
