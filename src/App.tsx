import { FC } from "react";
import Layout from "./components/Layout/Layout";
import TaskPage from "./components/TaskPage/Taskpage";
import Modal from "./components/UI/Modal";
import { useAppSelector } from "./hooks/redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateTaskPage from "./components/CreateTaskPage/CreateTaskPage";

const router = createBrowserRouter([
  {
    path: "/task",
    element: <TaskPage />,
  },
  {
    path: "/create",
    element: <CreateTaskPage />,
  },
]);

const App: FC = () => {
  const { isActive, text } = useAppSelector((state) => state.root.modal);

  return (
    <div style={{ display: "flex" }}>
      {isActive ? <Modal autoClose={false}> {text}</Modal> : null}
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
};

export default App;
