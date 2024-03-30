import { FC, Fragment } from "react";
import cls from "../../style/taskPage.module.scss";
import Button from "./../UI/Button";
import { useAppDispathc, useAppSelector } from "../../hooks/redux";
import { TaskSlice } from "../../store/reducers/TaskSlice";
const TaskPage: FC = () => {
  const { setActiveTask, setIsFinished, disableAllTask } = TaskSlice.actions;
  const dispatch = useAppDispathc();

  const { task } = useAppSelector((state) => state.task);

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
              className={item.status.isActive ? cls.active : ""}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className={cls.description}>
        {task.map((item) => {
          if (item.status.isActive) {
            return (
              <Fragment key={item.id}>
                <h2>Задание: "{item.title}"</h2>
                <p>Описание: "{item.description}"</p>
                <p>Количество шагов: {item.steps} </p>
                <p>Время на шаг: {item.timeForStep} мин</p>
                <Button
                  onClick={(e) => {
                    dispatch(setIsFinished(item.id));
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
