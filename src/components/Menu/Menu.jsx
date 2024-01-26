import { Link } from "react-router-dom";
import s from "./Menu.module.scss";
import { category } from "../ComboBox/ComboBox";

export const Menu = () => {
  const categoryList = category;

  return (
    <ul className={s.menu}>
      <li className={s.menu__item} key="all">
        <Link
          underline="none"
          className={s.menu__link}
          to={"/posts/category/all"}
        >
          FRONTEND
        </Link>
      </li>

      {categoryList.map((category) => (
        <li className={s.menu__item} key={category.label}>
          <Link
            underline="none"
            className={s.menu__link}
            to={`/posts/category/${category.label.replace(/\s\|\s/g, "-").toLowerCase()}`}
          >
            <p className={s.menu__link}>{category.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
