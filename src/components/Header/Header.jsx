import s from "./Header.module.scss";
import { Menu } from ".././Menu";
import Container from "@mui/material/Container";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <Container maxWidth="lg" className={s.header__container}>
          <h1 className={s.header__title}>SaintBlog</h1>
          <button>Регистрация</button>
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
