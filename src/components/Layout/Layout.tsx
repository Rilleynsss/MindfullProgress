import { FC, ReactNode } from "react";
import NavBar from "../NavBar/NavBar";
import Statusbar from "../StatusBar/Statusbar";
import cls from "../../style/layout.module.scss";
import Timer from "../Timer/Timer";
import Profile from "../Profile/Profile";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <section className={cls.layout}>
      <NavBar />
      <Statusbar />
      <Timer />
      <Profile />
      <section className={cls.layoutContent}>{children}</section>
    </section>
  );
};

export default Layout;
