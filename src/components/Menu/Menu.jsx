import { Link } from "react-router-dom";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <ul className={s.menu}>
      <li className={s.menu__item}>
        <Link underline="none" className={s.menu__link} to={"/posts/all"}>
          <a href="#">Всё</a>
        </Link>
      </li>
      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Спорт
        </a>
      </li>
      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Путешествия
        </a>
      </li>

      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Лайфхаки
        </a>
      </li>
      <li className={s.menu__item}>
        <a className={s.menu__link} href="#">
          Книги
        </a>
      </li>
    </ul>
  );
};
