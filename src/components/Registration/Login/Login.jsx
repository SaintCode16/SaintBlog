import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./Login.module.scss";
import { Link as LinkRRD, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const Login = () => {
  const [loginUser, { isSuccess }] = useLoginUserMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const newData = await loginUser(data);
      if (newData) {
        console.log(newData);
        localStorage.setItem("token", JSON.stringify(newData.data.accessToken));
        localStorage.setItem("id", JSON.stringify(newData.data.user.id));
        navigate("/");
      } else {
        console.error("Ошибка");
      }
    } catch (err) {
      console.error(err);
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
          <LinkRRD to={"/register"}>
            <Button className={css.switch}>зарегистрироваться</Button>
          </LinkRRD>
          <span className={css.separatop}>|</span>
          <Button className={css.switch}>войти</Button>

          <Typography className={css.mainTitle} variant="h5">
            Вход
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.inputWrapper}>
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
                    required: true,
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

            <Button
              type="submit"
              className={css.btn}
              sx={{ width: 528 }}
              variant="contained"
              color="primary"
              disabled={!isValid}
            >
              ВОЙТИ
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
