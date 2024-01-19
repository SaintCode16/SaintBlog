import {
  Avatar,
  Breadcrumbs,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import css from "./Signup.module.scss";
import { Link as LinkRRD} from "react-router-dom";
import { useForm } from "react-hook-form";

export const Signup = () => {

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
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
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="primary">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Link>

            <LinkRRD to={"/authtorize"}>
              <Link underline="hover" color="primary">
                ВОЙТИ
              </Link>
            </LinkRRD>
          </Breadcrumbs>
          <div className={css.avatarWrapper}>
            <Avatar sx={{ width: 40, height: 40 }}>N</Avatar>
            <Button href="#text-buttons">Загрузить фото</Button>
          </div>

          <div className={css.survey}>
            <Typography variant="h6">
              Для чего вы хотите использовать приложение
            </Typography>
            <div className={css.radioWrapper}>
              <Radio onChange={() => console.log("fdsfds")} />
              <div>
                <Typography variant="subtitle1">Для себя</Typography>
                <FormHelperText>
                  личный блог, общение, развлечения
                </FormHelperText>
              </div>
            </div>
            <div className={css.radioWrapper}>
              <Radio onChange={() => console.log("fdsfds")} />
              <div>
                <Typography variant="subtitle1">Для бизнеса</Typography>
                <FormHelperText>
                  услуги, магазин, блогерство, реклама
                </FormHelperText>
              </div>
            </div>
          </div>

          <form
            onSubmit={() => {
              handleSubmit(onSubmit);
            }}
            noValidate
          >
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
                })}
                sx={{ width: 528, height: 49 }}
                label="Никнейм"
                id="outlined-size-normal"
                required
              />
              {errors?.nickname && (
                <p className={css.err}>{errors?.nickname?.message}</p>
              )}

              <TextField
                {...register("email", {
                  required: "введите почту",
                })}
                sx={{ width: 528, height: 49 }}
                label="Почта"
                id="outlined-size-normal"
                required
              />
              {errors?.email && (
                <p className={css.err}>{errors?.email?.message}</p>
              )}

              <TextField
                {...register("password", {
                  required: "введите пароль",
                })}
                sx={{ width: 528, height: 49 }}
                label="Пароль"
                id="outlined-size-normal"
                required
              />
              {errors?.password && (
                <p className={css.err}>{errors?.password?.message}</p>
              )}
            </div>
            <div className={css.acceptWrapper}>
              <input className={css.checkbox} type="checkbox"></input>
              <Typography
                {...register("accept", {
                  required: "вы не приняли условия и правила",
                })}
                variant="h9"
              >
                Я принимаю правила и условия
              </Typography>

              {errors?.accept && (
                <p className={css.err}>{errors?.accept?.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className={css.btn}
              sx={{ width: 528 }}
              variant="contained"
              color="primary"
              disableElevation
              disabled={!isValid}
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};
