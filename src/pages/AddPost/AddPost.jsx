import { Container, TextField, TextareaAutosize, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import s from "./AddPost.module.scss";
import ComboBox from "../../components/ComboBox/ComboBox";
import ClickAway from "../../components/ClickAway/ClickAway";
import { useState } from "react";
import { useAddPostMutation } from "../../redux/Api";
import { useNavigate } from "react-router-dom";
import UploadButton from "../../components/UploadButton/UploadButton";

export const AddPost = () => {
  const [addPost, { isError, isLoading, isSuccess, data }] =
    useAddPostMutation();

  const [value, setValue] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const [postId, setPostId] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (base64) => {
    setBase64Image(base64);
  };

  const handleChange = (event, value) => {
    setValue(value);
  };
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (dataForm) => {
    try {
      const response = await addPost({
        ...dataForm,
        tags: [value.label],
        userId: localStorage.getItem("id"),
        date: new Date().toISOString(),
        img: { img1x: base64Image },
      });
      setPostId(response.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  isSuccess ? navigate(`/`) : null;
  return (
    <Container className={s.container} maxWidth="md">
      <div className={s.post}>
        <div className={s.post__top}>
          <h1 className={s.post__title}>Add post</h1>
          <a
            className={s.post__rules}
            href="https://journal.tinkoff.ru/community-rules/"
            target="blank"
          >
            rules ➚
          </a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <div className={s.input__top}>
              <div className={s.input__title}>
                <TextField
                  className={s.input__name}
                  inputProps={{
                    maxLength: 50,
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                    },
                  }}
                  {...register("title", {
                    required: "enter post title",
                    maxLength: 50,
                  })}
                  minRows={10}
                  fullWidth
                  required
                  label="post title"
                  placeholder="enter post title"
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

            {errors?.title && <p className={s.err}>{errors?.title?.message}</p>}

            <TextareaAutosize
              className={s.post__text}
              {...register("text", {
                required: "enter a nickname",
                maxLength: 1000,
              })}
              aria-label="minimum height"
              rows={6}
              multiline
              placeholder="your text"
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

            {errors.text && errors.text.type === "required" && (
              <p className={s.err}>enter post text</p>
            )}

            {errors.text && errors.text.type === "maxLength" && (
              <p className={s.err}>
                Post text cannot be more than 1000 characters
              </p>
            )}

            <div className={s.upload}>
              <p className={s.input__add_img}>add image</p>
              <UploadButton
                required
                className={s.upload__btn}
                handleFileChange={handleFileChange}
              />
            </div>

            {base64Image && (
              <img
                src={base64Image}
                alt="Image Preview"
                style={{ width: "100%", marginBottom: "20px" }}
              />
            )}

            <Button
              className={s.btn}
              InputProps={{
                style: {
                  borderRadius: "10px",
                },
              }}
              disabled={!isValid || errors.text || errors.title}
              type="submit"
              variant="contained"
              style={{ marginTop: "27px", width: "300px", height: "40px" }}
            >
              publish
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};
