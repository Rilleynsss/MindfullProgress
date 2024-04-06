import { FC } from "react";
import Layout from "./components/Layout/Layout";
import Modal from "./components/UI/Modal";
import { useAppSelector } from "./hooks/redux";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  const { isActive, text } = useAppSelector((state) => state.root.modal);
  return (
    <div style={{ display: "flex" }}>
      {isActive ? <Modal autoClose={false}> {text}</Modal> : null}
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
