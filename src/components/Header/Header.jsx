import s from "./Header.module.scss";
import { Menu } from ".././Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <Container maxWidth="lg" className={s.header__container}>
          <Link className={s.holder} to={"/"}>
            <div className={s.logo}></div>
            <h1 className={s.header__title}>SaintBlog</h1>
          </Link>

          <Menu />

          <Link to={"/authtorize"}>
            <button className={s.header__btn}>вход и регистрация</button>
          </Link>
        </Container>
      </div>
    </header>
  );
};
