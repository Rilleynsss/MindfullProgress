import { FC } from "react";
import Layout from "./components/Layout/Layout";
import TaskPage from "./components/TaskPage/Taskpage";
import Modal from "./components/UI/Modal";
import { useAppSelector } from "./hooks/redux";

const App: FC = () => {
  const { isActive, text } = useAppSelector((state) => state.root.modal);
  return (
    <div style={{ display: "flex" }}>
      {isActive ? <Modal autoClose={true}> {text}</Modal> : null}
      <Layout>
        <TaskPage />
      </Layout>
    </div>
  );
};

export default App;
