import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";

export const Main = () => {
  return (
    <main className={s.main}>
      <Container maxWidth="lg" className={s.container}>
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
      </Container>
    </main>
  );
};
