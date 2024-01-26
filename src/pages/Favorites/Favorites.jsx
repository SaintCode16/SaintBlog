import s from "./Favorites.module.scss";
import { Container } from "@mui/material";
import PreviewPost from "../../components/PreviewPost/PreviewPost";
import { useGetCommentsQuery, useGetPostsQuery } from "../../redux";
import { Profile } from "..//../components/Profile/Profile";
import { SpinnerComponent } from "../../components/SpinnerComponent/SpinnerComponent";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserDataQuery } from "../../redux";
import { setUser } from "../../redux";
import { useParams } from "react-router-dom";

export const Favorites = () => {
  const { data } = useGetUserDataQuery();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);

  // ДЛЯ ИЗБРАННОГО
  const favoritesPosts = useSelector((state) => state.favorites.favorites);

  console.log(favoritesPosts);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery();

  const anyLoading = postsLoading;

  if (favoritesPosts.length === 0) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <h2 className={s.warning}>Nothing added to favorites</h2>
      </Container>
    );
  }

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
      {isAuth && <Profile />}
      <div className={s.hidden}>
        {posts &&
          posts
            .filter((post) => favoritesPosts.includes(post.id))
            .map((post) => {
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
