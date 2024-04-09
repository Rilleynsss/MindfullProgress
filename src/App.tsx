import { FC, useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import Modal from "./components/UI/Modal";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { Outlet } from "react-router-dom";
import { RootSetting } from "./store/reducers/RootSetting";
import { TaskSlice } from "./store/reducers/TaskSlice";

const App: FC = () => {
  const { isActive, text } = useAppSelector((state) => state.root.modal);
  const { task } = useAppSelector((state) => state.task);
  const [isAuth, setIsAuth] = useState(false);
  const { addUserName, updateLocalStorage } = RootSetting.actions;
  const { updateLocalStorageTask } = TaskSlice.actions;
  const { profile } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();
  const setUser = (name: string) => {
    dispatch(addUserName(name));
    dispatch(updateLocalStorage());
  };
  useEffect(() => {
    dispatch(updateLocalStorageTask());
  }, [task]);
  useEffect(() => {
    if (!profile.username || !localStorage.getItem("profile")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth, profile]);
  return (
    <div style={{ display: "flex" }}>
      {isActive ? <Modal autoClose={false}> {text}</Modal> : null}
      {isAuth ? (
        <Modal autoClose={false} setIsSignIn={setUser}>
          {text}
        </Modal>
      ) : null}
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
