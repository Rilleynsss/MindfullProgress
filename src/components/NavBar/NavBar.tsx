import { FC } from "react";
import cls from "../../style/layout.module.scss";
import { ReactComponent as List } from "../../img/list-ul-alt-svgrepo-com.svg";
import { ReactComponent as AddList } from "../../img/add-task-list-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <div className={cls.layoutNavbar}>
      <ul>
        <li>
          <NavLink to={"/task"}>
            <List />
          </NavLink>
        </li>
        <li>
          <NavLink to={"/create"}>
            <AddList />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
