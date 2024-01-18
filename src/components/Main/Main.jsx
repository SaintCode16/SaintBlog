import { Container } from "@mui/material";
import s from "./Main.module.scss";

export const Main = () => {
  return (
    <Container maxWidth="lg">
      <main className={s.main}>Основная страница</main>;
    </Container>
  );
};
