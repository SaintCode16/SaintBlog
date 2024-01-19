import React from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Login } from "../../components/Registration/Login/Login";
import { Signup } from "../../components/Registration/Signup/Signup";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
