import { Button, Container, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import css from "./Login.module.scss";

export const Login = ({ setRegistrtion }) => {
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

  return (
    <>
      <Container maxWidth="sm">
        <div className={css.holder}>
          <Button onClick={() => setRegistrtion(true)}>
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
          <span>/</span>
          <Button onClick={() => setRegistrtion(false)}>ВОЙТИ</Button>
       
          <div className={css.title}>
            <Typography variant="h5">Вход</Typography>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.inputWrapper}>
              <TextField
                {...register("email", { required: true, maxLength: 256 })}
                sx={{ width: 528, height: 49 }}
                label="Почта"
                id="outlined-size-normal"
                required
              />
              {errors.email && errors.email.type === "required" && (
                <p className={css.err}>введите почту</p>
              )}
              {errors.email && errors.email.type === "maxLength" && (
                <p className={css.err}>почта должна быть менее 256 символов</p>
              )}
              <TextField
                {...register("password", {
                  required: true,
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
