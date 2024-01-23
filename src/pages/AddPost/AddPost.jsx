import {
  Container,
  TextField,
  TextareaAutosize,
  Button,
  useScrollTrigger,
} from "@mui/material";
import { useForm } from "react-hook-form";
import s from "./AddPost.module.scss";
import ComboBox from "../../components/ComboBox/ComboBox";
import ClickAway from "../../components/ClickAway/ClickAway";
import { useState } from "react";
import { useAddPostMutation } from "../../redux/Api";
import { CloudUpload, UpdateOutlined, Upload } from "@mui/icons-material";

export const AddPost = () => {
  const [value, setValue] = useState("");
  const [addPost, { isError }] = useAddPostMutation();
  const handleChange = (event, value) => {
    setValue(value);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    console.log(JSON.stringify({ ...data, category: value.label }));
    reset();
  };

  return (
    <Container className={s.container} maxWidth="md">
      <div className={s.post}>
        <div className={s.post__top}>
          <h1 className={s.post__title}>Добавить пост</h1>
          <a
            className={s.post__rules}
            href="https://journal.tinkoff.ru/community-rules/"
            target="blank"
          >
            правила ➚
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <div className={s.input__top}>
              <div className={s.input__title}>
                <TextField
                  className={s.input__name}
                  inputProps={{
                    minLength: 10,
                    maxLength: 50,
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "10px",
                    },
                  }}
                  {...register("title", { required: true, minLength: 10 })}
                  minRows={10}
                  fullWidth
                  label="Название блога"
                  placeholder="мин - 10 символов макс - 50 символов"
                  sx={{
                    width: "600px",
                    minWidth: "30%",
                    maxWidth: "100%",
                    position: "relative",
                    "& input": {
                      padding: "16.5px 40px 16.5px 20px ",
                    },
                  }}
                />
                <ClickAway />
              </div>
              <ComboBox handleChange={handleChange} />
            </div>

            <TextareaAutosize
              className={s.post__text}
              {...register("post", { required: true, minLength: 20 })}
              minLength={20}
              maxLength={2000}
              aria-label="minimum height"
              minRows={10}
              placeholder="Ваш текст. Минимум 200 символов "
              style={{
                maxWidth: "100%",
                minWidth: "30%",
                margin: "20px 0",
                borderRadius: "12px",
                padding: "20px",
                fontSize: "15px",
                "&::placeholder": {
                  color: "red",
                },
              }}
            />

            <div className={s.upload}>
              <p className={s.input__add_img}>Добавьте изображение</p>

              <Button
                className={s.upload__btn}
                variant="contained"
                component="label"
              >
                <Upload />
                <input type="file" hidden />
              </Button>
            </div>

            <Button
              className={s.btn}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              disabled={!isValid}
              type="submit"
              variant="contained"
              style={{ marginTop: "27px", width: "300px", height: "40px" }}
            >
              Опубликовать
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};
