import { FC } from "react";
import cls from "../../style/layout.module.scss";
import { useAppSelector } from "../../hooks/redux";

const Profile: FC = () => {
  const { username } = useAppSelector((state) => state.root.profile);
  return <section className={cls.layoutProfile}>{username}</section>;
};

export default Profile;
