import React, { useEffect } from "react";
import s from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../redux";
import { setUser } from "../../redux";

export const Layout = () => {
  const { data } = useGetUserDataQuery();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  console.log(data);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
