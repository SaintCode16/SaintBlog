import { Outlet } from "react-router-dom";
import s from "./Posts.module.scss";
import { Main } from "../../components/Main";

export const Posts = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
