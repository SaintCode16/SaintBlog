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
  const [loginUser, { isSuccess, isError }] = useLoginUserMutation();
  const navigate = useNavigate();

  console.log(isError); //true if not login

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
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
      if (isError) {
        setError("password", { message: "wrong data" });
      }
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
            <Button className={css.switch}>sign up</Button>
          </LinkRRD>
          <span className={css.separatop}>|</span>
          <Button className={css.switch}>log in</Button>

          <Typography className={css.mainTitle} variant="h5">
            Log in
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.inputWrapper}>
              <TextField
                {...register("email", {
                  required: "enter email",
                  maxLength: {
                    value: 256,
                    message: "Mail must be less than 256 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                    message: "enter correct email",
                  },
                })}
                sx={{ width: 528, height: 49 }}
                label="Email"
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
                  label="Password"
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

              {errors.password && errors.password.message === "wrong data" && (
                <p className={css.err}>{errors.password.message}</p>
              )}
              {errors.password && errors.password.type === "required" && (
                <p className={css.err}>enter password</p>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <p className={css.err}>
                  password must be less than 128 characters
                </p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className={css.err}>
                  password must be more than 8 characters
                </p>
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
              LOG IN
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
