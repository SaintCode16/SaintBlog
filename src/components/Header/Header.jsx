import s from "./Header.module.scss";
import { Menu } from ".././Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <Container maxWidth="lg" className={s.header__container}>
          <Link to={"/"}>
            <h1 className={s.header__title}>SaintBlog</h1>
          </Link>

          <Link to={"/authtorize"}>
            <button>ВОЙТИ/ ЗАРЕГИСТРИРОВАТЬСЯ</button>
          </Link>
        </Container>
      </div>

      <nav className={s.nav}>
        <Container maxWidth="lg">
          <Menu className={s.menu} />
        </Container>
      </nav>
    </header>
  );
};
