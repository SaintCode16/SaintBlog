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
          <Button className={css.switch}>sign up</Button>
          <span className={css.separatop}>|</span>
          <LinkRRD to={"/authtorize"}>
            <Button className={css.switch}>log in</Button>
          </LinkRRD>

          <Typography className={css.mainTitle} variant="h5">
            Sign up
          </Typography>

          <div className={css.avatarWrapper}>
            <Avatar sx={{ width: 100, height: 100 }}></Avatar>
            <Button className={css.uploadPhoto} href="#text-buttons">
              Upload a photo
            </Button>
          </div>
          <div className={css.survey}>
            <Typography className={css.for} variant="h7">
              What do you want to use the application for:
            </Typography>
            <div className={css.radioGroup}>
              <label className={css.radioHolder}>
                <input
                  {...register("for", {})}
                  className={css.radio}
                  type="radio"
                  value="For myself"
                  name="for"
                  checked
                />
                <div className={css.radioDescr}>
                  <Typography className={css.forSubtitle} variant="subtitle1">
                    For myself
                  </Typography>
                  <FormHelperText className={css.comment}>
                    personal blog, communication, entertainment
                  </FormHelperText>
                </div>
              </label>
              <label className={css.radioWrapper}>
                <input
                  {...register("for", {})}
                  className={css.radio}
                  type="radio"
                  value="For business"
                  name="for"
                />
                <div className={css.radioDescr}>
                  <Typography className={css.forSubtitle} variant="subtitle1">
                    For business
                  </Typography>
                  <FormHelperText className={css.comment}>
                    blogging, advertising, services, store
                  </FormHelperText>
                </div>
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={css.inputWrapper}>
              <TextField
                {...register("name", {
                  required: "enter your name",
                })}
                sx={{ width: 528, height: 49 }}
                label="name"
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
                label="bio"
                id="outlined-size-normal"
                multiline
                rows={4}
                required
              />
              {errors.bio && errors.bio.type === "required" && (
                <p className={css.err}>enter bio</p>
              )}

              <TextField
                {...register("nickname", {
                  required: "enter a nickname",
                  maxLength: 128,
                  minLength: 2,
                })}
                sx={{ width: 528, height: 49 }}
                label="nickname"
                id="outlined-size-normal"
                required
              />
              {errors.nickname && errors.nickname.type === "required" && (
                <p className={css.err}>enter a nickname</p>
              )}
              {errors.nickname && errors.nickname.type === "maxLength" && (
                <p className={css.err}>
                  nickname must be less than 128 characters
                </p>
              )}
              {errors.nickname && errors.nickname.type === "minLength" && (
                <p className={css.err}>
                  nickname must be at least 2 characters
                </p>
              )}

              <TextField
                {...register("email", {
                  required: "enter your email",
                  maxLength: {
                    value: 256,
                    message: "email must be less than 256 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                    message: "enter correct email",
                  },
                })}
                sx={{ width: 528, height: 49 }}
                label="emal"
                id="outlined-size-normal"
                required
              />
              {errors.email && (
                <p className={css.err}>{errors.email.message}</p>
              )}

              <div className={css.password}>
                <TextField
                  {...register("password", {
                    required: "enter password",
                    maxLength: 128,
                    minLength: 8,
                  })}
                  sx={{ width: 528, height: 49 }}
                  label="password"
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
            <div className={css.acceptWrapper}>
              <input
                onChange={checkboxHandler}
                className={css.checkbox}
                type="checkbox"
              ></input>
              <Typography className={css.accept} variant="h9">
                I accept the terms and conditions
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
              sign up
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
