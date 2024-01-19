import { Link } from "react-router-dom";
import s from "./Menu.module.scss";

export const Menu = () => {
  return (
    <ul className={s.menu}>
      <li className={s.menu__item}>
        <a href="#">Всё</a>
      </li>
      <li className={s.menu__item}>
        <a href="#">Авто</a>
      </li>
      <li className={s.menu__item}>
        <a href="#">Животные</a>
      </li>

      <li className={s.menu__item}>
        <a href="#">Спорт</a>
      </li>
      <li className={s.menu__item}>
        <a href="#">Техника</a>
      </li>
    </ul>
  );
};
