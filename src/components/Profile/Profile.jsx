import s from "./Profile.module.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import { Link, Link as LinkRRD } from "react-router-dom";
import { useGetUserDataQuery, setUser } from "../../redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Profile = () => {
  const { data } = useGetUserDataQuery();

  return (
    <div className={s.profile}>
      <h2 className={s.profile__title}>{data?.nickname ?? "Unauthorized"}</h2>
      {/* <img
        className={s.profile__img}
        src={data.avatar}
        alt=""
      /> */}
      <Avatar
        className={s.profile__img}
        src={data.avatar ?? null}
        sx={{ width: 150, height: 150 }}
      />

      <Link to="/myposts">
        <Button
          className={s.profile__feed}
          variant="contained"
          color="success"
          size="large"
        >
          Мои посты
        </Button>
      </Link>

      <Link to="/favorites">
        <Button
          className={s.profile__favorites}
          variant="contained"
          color="success"
          size="large"
        >
          Избранное
        </Button>
      </Link>

      <LinkRRD to={"/add"}>
        <Button
          className={s.profile__post}
          variant="outlined"
          color="inherit"
          size="large"
        >
          Написать пост
        </Button>
      </LinkRRD>
      <Button
        target="_blank"
        className={s.profile__link}
        href="https://www.tinkoff.ru/cardtocard/"
      >
        Поддержать разработчика
      </Button>
    </div>
  );
};
