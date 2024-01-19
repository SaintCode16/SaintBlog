import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";
import { Profile } from "../Profile/Profile";

export const Main = () => {
  <main className={s.main}>
    <Container maxWidth="lg" className={s.container}>
      <Profile />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
      <PreviewPost />
    </Container>
  </main>;
};
