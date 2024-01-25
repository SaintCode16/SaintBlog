import { Link } from "react-router-dom";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <ul className={s.menu}>
      <li className={s.menu__item}>
        <Link underline="none" className={s.menu__link} to={"/posts/all"}>
          <a href="#">All</a>
        </Link>
      </li>
      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Sport
        </a>
      </li>
      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Travelling
        </a>
      </li>

      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Lifehacks
        </a>
      </li>
      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Books
        </a>
      </li>
    </ul>
  );
};
