import { FC } from "react";
import cls from "../../style/create.module.scss";

const CreateTaskPage: FC = () => {
  return (
    <div className={cls.create}>
      <ul className={cls.whereIs}>
        <li>today</li>
        <li>tommorow</li>
      </ul>
    </div>
  );
};

export default CreateTaskPage;
