import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import TaskPage from "./components/TaskPage/Taskpage";
import CreateTaskPage from "./components/CreateTaskPage/CreateTaskPage";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const store = setupStore();
const routes = createBrowserRouter([
  {
    path: "/task",
    element: <App />,
    children: [
      {
        path: "/task",
        element: <TaskPage />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <CreateTaskPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/task"} />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
