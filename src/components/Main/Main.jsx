import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";
import { useGetCommentsQuery, useGetPostsQuery } from "../../redux";
import { Profile } from "../Profile/Profile";
import { SpinnerComponent } from "../SpinnerComponent/SpinnerComponent";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken, selectToken } from "../../redux/AuthSlice";
// import AdditionalComponent from "./AdditionalComponent";

export const Main = () => {
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

  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery();

  const anyLoading = postsLoading;

  if (anyLoading) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <div className={s.spinner}>
          <SpinnerComponent />
        </div>
      </Container>
    );
  }
  if (postsError) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <div className={s.spinner}>
          Error loading posts: {postsError.message || "Unknown error"}
        </div>
      </Container>
    );
  }
  return (
    <Container maxWidth="lg" className={s.container}>
      {token && <Profile />}

      <div className={s.hidden}>
        {posts &&
          posts.map((post) => {
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

// пост запрос на register
