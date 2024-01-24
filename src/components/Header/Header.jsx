import s from "./Header.module.scss";
import { Menu } from ".././Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useGetUserDataQuery, setUser, setLogout } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export const Header = () => {
  const { data } = useGetUserDataQuery();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  function btnHandler() {
    dispatch(setLogout());
  }

  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <Container maxWidth="lg" className={s.header__container}>
          <Link className={s.holder} to={"/"}>
            <div className={s.logo}></div>
            <h1 className={s.header__title}>SaintBlog</h1>
          </Link>

          <Menu />

          {isAuth ? (
            <button className={s.header__btn} onClick={btnHandler}>
              Выход
            </button>
          ) : (
            <Link to={"/authtorize"}>
              <button className={s.header__btn}>вход и регистрация</button>
            </Link>
          )}
        </Container>
      </div>
    </header>
  );
};
