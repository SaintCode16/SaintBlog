import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";
import { useGetPostsQuery } from "../../redux";

export const Main = () => {
  // const {data} = useGetPostsQuery()

  return (
    <main className={s.main}>
      <Container maxWidth="lg" className={s.container}>
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
      </Container>
    </main>
  );
};
