import {
  Avatar,
  Button,
  Container,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import css from "./Signup.module.scss";
import { Link as LinkRRD } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Signup = () => {
  const [checked, setChecked] = useState(false);

  const {
    register,
    formState: { errors },

    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    const info = JSON.stringify(data);
    console.log(info);
    reset();
  };

  const checkboxHandler = (ev) => {
    if (ev.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <div className={css.holder}>
          <Button>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
          <span>/</span>
          <LinkRRD to={"/authtorize"}>
            <Button>ВОЙТИ</Button>
          </LinkRRD>
          <div className={css.mainTitle}>
            <Typography variant="h5">Регистрация</Typography>
          </div>
          <div className={css.avatarWrapper}>
            <Avatar sx={{ width: 40, height: 40 }}>N</Avatar>
            <Button href="#text-buttons">Загрузить фото</Button>
          </div>
          <div className={css.survey}>
            <Typography variant="h7">
              Для чего вы хотите использовать приложение:
            </Typography>
            <div className={css.radioGroup}>
              <label className={css.radioHolder}>
                <input
                  {...register("for", {
                    required: true,
                  })}
                  className={css.radio}
                  type="radio"
                  value="Для себя"
                  name="for"
                  checked
                />
                <div className={css.radioDescr}>
                  <Typography variant="subtitle1">Для себя</Typography>
                  <FormHelperText>
                    личный блог, общение, развлечения
                  </FormHelperText>
                </div>
              </label>
              <label className={css.radioWrapper}>
                <input
                  {...register("for", {})}
                  className={css.radio}
                  type="radio"
                  value="Для бизнеса"
                  name="for"
                />
                <div className={css.radioDescr}>
                  <Typography variant="subtitle1">Для бизнеса</Typography>
                  <FormHelperText>
                    услуги, магазин, блогерство, реклама
                  </FormHelperText>
                </div>
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.inputWrapper}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={css.inputWrapper}>
                  <TextField
                    {...register("name", {
                      required: "введите имя",
                    })}
                    sx={{ width: 528, height: 49 }}
                    label="Имя"
                    id="outlined-size-normal"
                    required
                  />
                  {errors?.name && (
                    <p className={css.err}>{errors?.name?.message}</p>
                  )}
                  <TextField
                    {...register("bio", {
                      required: true,
                    })}
                    sx={{ width: 528 }}
                    label="О себе"
                    id="outlined-size-normal"
                    multiline
                    rows={4}
                  />
                  <TextField
                    {...register("nickname", {
                      required: "введите никнейм",
                      maxLength: 128,
                      minLength: 2,
                    })}
                    sx={{ width: 528, height: 49 }}
                    label="Никнейм"
                    id="outlined-size-normal"
                    required
                  />
                  {errors.nickname && errors.nickname.type === "required" && (
                    <p className={css.err}>введите никнейм</p>
                  )}
                  {errors.nickname && errors.nickname.type === "maxLength" && (
                    <p className={css.err}>
                      никнейм должен быть менее 128 символов
                    </p>
                  )}
                  {errors.nickname && errors.nickname.type === "minLength" && (
                    <p className={css.err}>
                      никнейм должен быть не менее 2 символов
                    </p>
                  )}
                  <TextField
                    {...register("email", {
                      required: "введите почту",
                      maxLength: 256,
                    })}
                    sx={{ width: 528, height: 49 }}
                    label="Почта"
                    id="outlined-size-normal"
                    required
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className={css.err}>введите почту</p>
                  )}
                  {errors.email && errors.email.type === "maxLength" && (
                    <p className={css.err}>
                      почта должна быть менее 256 символов
                    </p>
                  )}
                  <TextField
                    {...register("password", {
                      required: "введите пароль",
                      maxLength: 128,
                      minLength: 8,
                    })}
                    sx={{ width: 528, height: 49 }}
                    label="Пароль"
                    id="outlined-size-normal"
                    required
                  />
                  {errors.password && errors.password.type === "required" && (
                    <p className={css.err}>введите пароль</p>
                  )}
                  {errors.password && errors.password.type === "maxLength" && (
                    <p className={css.err}>
                      пароль должен быть менее 128 символов
                    </p>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <p className={css.err}>
                      пароль должен быть более 8 символов
                    </p>
                  )}
                </div>
                <div className={css.acceptWrapper}>
                  <input
                    onChange={checkboxHandler}
                    className={css.checkbox}
                    type="checkbox"
                  ></input>
                  <Typography variant="h9">
                    Я принимаю правила и условия
                  </Typography>
                </div>
                <Button
                  type="submit"
                  className={css.btn}
                  sx={{ width: 528 }}
                  variant="contained"
                  color="primary"
                  disableElevation
                  disabled={!checked}
                >
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </Button>
              </form>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
