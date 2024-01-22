import {
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./Login.module.scss";
import { Link as LinkRRD } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
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
            <Button>ЗАРЕГИСТРИРОВАТЬСЯ</Button>
          </LinkRRD>

          <span>/</span>
          <Button>ВОЙТИ</Button>

          <div className={css.title}>
            <Typography variant="h5">Вход</Typography>
          </div>

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
              className={css.button}
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
