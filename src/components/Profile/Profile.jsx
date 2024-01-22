import s from "./Profile.module.scss";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link as LinkRRD } from "react-router-dom";

export const Profile = () => {
  return (
    <div className={s.profile}>
      <h2 className={s.profile__title}>@UserName</h2>
      <img
        className={s.profile__img}
        src="https://img.freepik.com/premium-vector/user-profile-icon-in-flat-style-member-avatar-vector-illustration-on-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
        alt=""
      />
      <Button
        className={s.profile__feed}
        variant="contained"
        color="success"
        size="large"
      >
        Моя лента
      </Button>
      <Button
        className={s.profile__favorites}
        variant="contained"
        color="success"
        size="large"
      >
        Избранное
      </Button>
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
      <Stack spacing={2} direction="row">
        <Button
          className={s.profile__link}
          href="https://www.tinkoff.ru/cardtocard/"
        >
          Поддержать разработчика
        </Button>
      </Stack>
    </div>
  );
};
