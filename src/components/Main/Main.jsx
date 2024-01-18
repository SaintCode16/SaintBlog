import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";

export const Main = () => {
  return (
    <Container maxWidth="lg">
      <main className={s.main}>
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
        <PreviewPost />
      </main>
      ;
    </Container>
  );
};
