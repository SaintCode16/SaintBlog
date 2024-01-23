import { Container } from "@mui/material";
import s from "./Posts.module.scss";
import { useGetPostsQuery } from "../../redux";
import { Profile } from "../../components/Profile/Profile";
import { useEffect, useState } from "react";
import PreviewPost from "../../components/PreviewPost/PreviewPost";
import { Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken, selectToken } from "../../redux/AuthSlice";

export const Posts = () => {
  const { data } = useGetPostsQuery();
  const { postId } = useParams();

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    // Проверяем наличие токена в локальном хранилище при монтировании компонента
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      // Если токен найден, сохраняем его в Redux-стейт
      dispatch(setToken(storedToken));
    }
  }, [dispatch]);

  if (postId) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <Outlet />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={s.container}>
      {token && <Profile />}

      <div className={s.hidden}>
        {data &&
          data.map((post) => {
            return (
              <PreviewPost
                key={post.id}
                id={post.id}
                theme={post.title}
                text={post.text}
                img={post.img.img1x}
                tags={post.tags.join(", ")}
              />
            );
          })}
      </div>
    </Container>
  );
};
