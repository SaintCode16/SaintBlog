import {
  Avatar,
  Button,
  Checkbox,
  FormHelperText,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import css from "./Main.module.scss";
import { useState } from "react";

export const Main = () => {
  const [modal, setModal] = useState(false);

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
        }}
      >
        <div className={css.inputWrapper}>
          <TextField
            sx={{ width: 528, height: 49 }}
            label="Имя"
            id="outlined-size-normal"
            required
          />

          <TextField
            sx={{ width: 528 }}
            label="О себе"
            id="outlined-size-normal"
            multiline
            rows={4}
          />
          <TextField
            sx={{ width: 528, height: 49 }}
            label="Никнейм"
            id="outlined-size-normal"
            required
          />
          <TextField
            sx={{ width: 528, height: 49 }}
            label="Почта"
            id="outlined-size-normal"
            required
          />
          <TextField
            sx={{ width: 528, height: 49 }}
            label="Пароль"
            id="outlined-size-normal"
            required
          />
        </div>

        <Typography variant="h6">
          Для чего вы хотите использовать приложение
        </Typography>

        <div>
          <Radio />
          <Typography variant="subtitle1">Для себя</Typography>
          <FormHelperText />
        </div>

        <Radio />
        <Typography variant="subtitle1">Для бизнеса</Typography>

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
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      </form>
    </>
  );
};
