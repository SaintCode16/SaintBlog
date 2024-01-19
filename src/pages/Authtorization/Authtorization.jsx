import { Outlet } from "react-router";
import { Login } from "../../components/Registration/Login/Login";
import { Signup } from "../../components/Registration/Signup/Signup";
import s from "./Authtorization.module.scss";
import { useState } from "react";

export const Authtorization = () => {
  return <Login />;
};
