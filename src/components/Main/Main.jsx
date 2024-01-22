import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";
import { useGetPostsQuery } from "../../redux";
import { Profile } from "../Profile/Profile";
import { useEffect, useState } from "react";

export const Main = () => {
  const { data } = useGetPostsQuery();

  return (
    <Container maxWidth="lg" className={s.container}>
      <Profile />

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
    </Container>
  );
};

// пост запрос на register
