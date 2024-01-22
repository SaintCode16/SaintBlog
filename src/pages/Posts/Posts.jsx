import { Container } from "@mui/material";
import s from "./Posts.module.scss";
import { useGetPostsQuery } from "../../redux";
import { Profile } from "../Profile/Profile";
import { useEffect, useState } from "react";
import PreviewPost from "../../components/PreviewPost/PreviewPost";
import { Outlet, useParams } from "react-router-dom";

export const Posts = () => {
  const { data } = useGetPostsQuery();
  const { postId } = useParams();

  if (postId) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <Outlet />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={s.container}>
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
