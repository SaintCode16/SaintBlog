import { Avatar, Button, Checkbox, TextField, Typography } from "@mui/material";
import css from "./Main.module.css";
import { useState } from "react";

export const Main = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nickNameError, setNickNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [accept, setAccept] = useState(false);

  return (
    <>
      <Typography variant="h6">Регистрация</Typography>
      <div className={css.avatarWrapper}>
        <Avatar sx={{ width: 40, height: 40 }}>N</Avatar>
        <Button href="#text-buttons">Загрузить фото</Button>
      </div>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setModal(true);
          if (name && nickName && email && password) {
            console.log("авторизация прошла");
          }
        }}
      >
        <div className={css.inputWrapper}>
          <TextField
            onChange={(ev) => setName(ev.target.value)}
            sx={{ width: 528, height: 49 }}
            label="Имя"
            id="outlined-size-normal"
            required
            error={nameError}
          />

          <TextField
            sx={{ width: 528 }}
            label="О себе"
            id="outlined-size-normal"
            multiline
            rows={4}
          />
          <TextField
            onChange={(ev) => setNickName(ev.target.value)}
            sx={{ width: 528, height: 49 }}
            label="Никнейм"
            id="outlined-size-normal"
            required
            error={nickNameError}
          />
          <TextField
            onChange={(ev) => setEmail(ev.target.value)}
            sx={{ width: 528, height: 49 }}
            label="Почта"
            id="outlined-size-normal"
            required
            error={emailError}
          />
          <TextField
            onChange={(ev) => setPassword(ev.target.value)}
            sx={{ width: 528, height: 49 }}
            label="Пароль"
            id="outlined-size-normal"
            required
            error={passwordError}
          />
        </div>
        <div
          onClick={() => console.log("checkbox checked")}
          className={css.acceptWrapper}
        >
          <Checkbox />
          <Typography variant="h9">Я принимаю правила и условия</Typography>
        </div>
        <Button
          className={css.btn}
          sx={{ width: 528 }}
          variant="contained"
          color="primary"
          disableElevation
        >
          АВТОРИЗОВАТЬСЯ
        </Button>
      </form>
    </>
  );
};
