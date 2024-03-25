import { FC } from "react";
import cls from "../../style/taskPage.module.scss";
const TaskPage: FC = () => {
  return (
    <section className={cls.taskPage}>
      <ul className={cls.taskList}>
        <li className={cls.active}>Накидать макет сайта</li>
        <li>Придумать стилизацию</li>
        <li>Закомитить все </li>
      </ul>
      <div className={cls.description}>descr</div>
    </section>
  );
};

export default TaskPage;
