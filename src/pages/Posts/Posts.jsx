import { Container } from "@mui/material";
import s from "./Posts.module.scss";
import { useGetPostsQuery } from "../../redux";
import { Profile } from "../../components/Profile/Profile";
import { useEffect, useState } from "react";
import PreviewPost from "../../components/PreviewPost/PreviewPost";
import { Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetUserDataQuery } from "../../redux";
import { setUser } from "../../redux";

export const Posts = () => {
const { postId, myposts, category } = useParams();


  const { data } = useGetUserDataQuery();
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);

  console.log(data);
  console.log(user);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  const {
    data: posts,
    // error: postsError,
    // isLoading: postsLoading,
  } = useGetPostsQuery();

  console.log(postId);
  console.log(user);

  if (myposts) {
    return (
      <Container maxWidth="lg" className={s.container}>
        {isAuth && <Profile />}

        <div className={s.hidden}>
          {posts &&
            user &&
            posts
              .filter((post) => post.userId == user.id)
              .map((post) => {
                return (
                  <PreviewPost
                    key={post.id}
                    id={post.id}
                    theme={post.title}
                    text={post.post}
                    img={post.img.img1x}
                    tags={post.tags.join(", ")}
                  />
                );
              })}
        </div>
      </Container>
    );
  }


  console.log(postId);
  console.log(user);

  if (myposts) {
    return (
      <Container maxWidth="lg" className={s.container}>
        {isAuth && <Profile />}

        <div className={s.hidden}>
          {posts &&
            user &&
            posts
              .filter((post) => post.userId == user.id)
              .map((post) => {
                return (
                  <PreviewPost
                    key={post.id}
                    id={post.id}
                    theme={post.title}
                    text={post.post}
                    img={post.img.img1x}
                    tags={post.tags.join(", ")}
                  />
                );
              })}
        </div>
      </Container>
    );
  }

  if (postId) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <div className={(s.hidden, s.hidden__post)}>
          <Outlet />
        </div>
      </Container>
    );
  }

  if (category) {
    return (
      <Container maxWidth="lg" className={s.container}>
        {isAuth && <Profile />}
        <div className={s.hidden}>
          <Outlet />
        </div>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={s.container}>
      {isAuth && <Profile />}

      <div className={s.hidden}>
        {posts &&
          posts.map((post) => {
            return (
              <PreviewPost
                key={post.id}
                id={post.id}
                theme={post.title}
                text={post.post}
                img={post.img.img1x}
                tags={post.tags.join(", ")}
              />
            );
          })}
      </div>
    </Container>
  );
};
