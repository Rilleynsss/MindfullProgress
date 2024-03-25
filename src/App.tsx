import { FC } from "react";
import Layout from "./components/Layout/Layout";
import TaskPage from "./components/TaskPage/Taskpage";

const App: FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Layout>
        <TaskPage />
      </Layout>
    </div>
  );
};

export default App;
