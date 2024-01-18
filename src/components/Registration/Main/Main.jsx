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
import css from "./Main.module.scss";

export const Main = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div className={css.holder}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="primary" href="/">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Link>
            <Link
              underline="hover"
              color="primary"
              href="/material-ui/getting-started/installation/"
            >
              ВОЙТИ
            </Link>
          </Breadcrumbs>
          <div className={css.avatarWrapper}>
            <Avatar sx={{ width: 40, height: 40 }}>N</Avatar>
            <Button href="#text-buttons">Загрузить фото</Button>
          </div>

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

          <div className={css.survey}>
            <Typography variant="h6">
              Для чего вы хотите использовать приложение
            </Typography>
            <div className={css.radioWrapper}>
              <Radio />
              <div>
                <Typography variant="subtitle1">Для себя</Typography>
                <FormHelperText>
                  личный блог, общение, развлечения
                </FormHelperText>
              </div>
            </div>
            <div className={css.radioWrapper}>
              <Radio />
              <div>
                <Typography variant="subtitle1">Для бизнеса</Typography>
                <FormHelperText>
                  услуги, магазин, блогерство, реклама
                </FormHelperText>
              </div>
            </div>
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
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        </div>
      </Container>
    </>
  );
};
