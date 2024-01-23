import {
  Avatar,
  Button,
  Container,
  FormHelperText,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import css from "./Signup.module.scss";
import { Link, Link as LinkRRD, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRegisterUserMutation } from "../../../redux";

export const Signup = () => {
  const [checked, setChecked] = useState(false);

  const [registerUser, { isSuccess }] = useRegisterUserMutation();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const newData = await registerUser(data);
      if (newData) {
        console.log(newData);
        localStorage.setItem("token", JSON.stringify(newData.data.accessToken));
        localStorage.setItem("id", JSON.stringify(newData.data.user.id));
        reset();
        navigate("/");
      } else {
        console.error("Ошибка");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkboxHandler = (ev) => {
    if (ev.target.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Container maxWidth="sm">
        <div className={css.holder}>
          <Button className={css.switch}>зарегистрироваться</Button>
          <span className={css.separatop}>|</span>
          <LinkRRD to={"/authtorize"}>
            <Button className={css.switch}>войти</Button>
          </LinkRRD>

          <Typography className={css.mainTitle} variant="h5">
            Регистрация
          </Typography>

          <div className={css.avatarWrapper}>
            <Avatar sx={{ width: 100, height: 100 }}></Avatar>
            <Button className={css.uploadPhoto} href="#text-buttons">
              Загрузить фото
            </Button>
          </div>
          <div className={css.survey}>
            <Typography className={css.for} variant="h7">
              Для чего вы хотите использовать приложение:
            </Typography>
            <div className={css.radioGroup}>
              <label className={css.radioHolder}>
                <input
                  {...register("for", {})}
                  {...register("for", {})}
                  className={css.radio}
                  type="radio"
                  value="Для себя"
                  name="for"
                  checked
                />
                <div className={css.radioDescr}>
                  <Typography className={css.forSubtitle} variant="subtitle1">
                    Для себя
                  </Typography>
                  <FormHelperText className={css.comment}>
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
                  <Typography className={css.forSubtitle} variant="subtitle1">
                    Для бизнеса
                  </Typography>
                  <FormHelperText className={css.comment}>
                    блогерство, реклама, услуги, магазин
                  </FormHelperText>
                </div>
              </label>
            </div>
          </div>

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
                required
              />
              {errors.bio && errors.bio.type === "required" && (
                <p className={css.err}>введите о себе</p>
              )}

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
                  required: "Введите почту",
                  maxLength: {
                    value: 256,
                    message: "Почта должна быть менее 256 символов",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                    message: "Введите корректную почту",
                  },
                })}
                sx={{ width: 528, height: 49 }}
                label="Почта"
                id="outlined-size-normal"
                required
              />
              {errors.email && (
                <p className={css.err}>{errors.email.message}</p>
              )}

              <div className={css.password}>
                <TextField
                  {...register("password", {
                    required: "введите пароль",
                    maxLength: 128,
                    minLength: 8,
                  })}
                  sx={{ width: 528, height: 49 }}
                  label="Пароль"
                  id="outlined-size-normal"
                  type={showPassword ? "text" : "password"}
                  required
                />
                <div className={css.showBtn}>
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </div>

              {errors.password && errors.password.type === "required" && (
                <p className={css.err}>введите пароль</p>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <p className={css.err}>пароль должен быть менее 128 символов</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className={css.err}>пароль должен быть более 8 символов</p>
              )}
            </div>
            <div className={css.acceptWrapper}>
              <input
                onChange={checkboxHandler}
                className={css.checkbox}
                type="checkbox"
              ></input>
              <Typography className={css.accept} variant="h9">
                Я принимаю правила и условия
              </Typography>
            </div>
            <Button
              className={css.btn}
              type="submit"
              sx={{ width: 528 }}
              variant="contained"
              color="primary"
              disabled={
                !isValid ||
                errors.password ||
                !checked ||
                errors.name ||
                errors.email ||
                errors.nickname ||
                errors.bio
              }
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
