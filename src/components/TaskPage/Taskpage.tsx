import { FC, useState } from "react";
import cls from "../../style/taskPage.module.scss";
const TaskPage: FC = () => {
  const [list, setList] = useState([
    {
      id: 0,
      title: "Накидать макет",
      description:
        "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
      steps: 3,
      timeStart: 0,
      timeForStep: 90,
      freeTime: 30,
      isStarted: false,
      isActive: false,
      isFinish: false,
    },
    {
      id: 1,
      title: "Придумать стилизацию",
      description:
        "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
      steps: 1,
      timeStart: 0,
      timeForStep: 90,
      freeTime: 30,
      isStarted: false,
      isActive: false,
      isFinish: false,
    },
    {
      id: 2,
      title: "Закомитить все",
      description:
        "Придумать отображение описание задания и реализовать переключение между заданиями. Так же добавить переключение активного класса и добавить класс для выполненных заданий",
      steps: 1,
      timeStart: 0,
      timeForStep: 90,
      freeTime: 30,
      isStarted: false,
      isActive: false,
      isFinish: false,
    },
  ]);
  const setActiveList = (idx: number) => {
    let newState = [...list];
    list.forEach((item, id) => {
      if (id === idx) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });

    setList(newState);
  };
  return (
    <section className={cls.taskPage}>
      <ul className={cls.taskList}>
        {list.map((item, idx) => {
          return (
            <li
              onClick={() => setActiveList(idx)}
              className={item.isActive ? cls.active : ""}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
      <div className={cls.description}>
        {list.map((item) => {
          if (item.isActive) {
            return (
              <>
                <h2>Задание: "{item.title}"</h2>
                <p>Описание: "{item.description}"</p>
                <p>Количество шагов: {item.steps} </p>
                <p>Время на шаг: {item.timeForStep} мин</p>
              </>
            );
          }
        })}
      </div>
    </section>
  );
};

export default TaskPage;
