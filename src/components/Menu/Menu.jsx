import { Link } from "react-router-dom";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <ul className={s.menu}>
      <li className={s.menu__item}>
        <Link to={"/posts/all"}>
          <a href="#">Всё</a>
        </Link>
      </li>
      <li className={s.menu__item}>
        <a href="#">Спорт</a>
      </li>
      <li className={s.menu__item}>
        <a href="#">Путешествие</a>
      </li>

      <li className={s.menu__item}>
        <a href="#">Лайфхак</a>
      </li>
      <li className={s.menu__item}>
        <a href="#">Книги</a>
      </li>
    </ul>
  );
};
