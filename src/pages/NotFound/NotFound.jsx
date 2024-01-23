import cat from "./404/cat.webp";
import img from "./404/404.webp";
import s from "./NotFound.module.scss";
import { Link as LinkRRD } from "react-router-dom";

import { Container, Button } from "@mui/material";

export const NotFound = () => {
  return (
    <div className={s.notFound}>
      <Container maxWidth="lr">
        <div className={s.notFound__wrapper}>
          <img src={cat} alt="кот" className={s.notFound__cat} />
          <div>
            <h1 className={s.notFound__title}>Error</h1>
            <img src={img} alt="error" className={s.notFound__error} />
          </div>
          <LinkRRD to={""}>
            <Button className={s.notFound__btn}>На главную</Button>
          </LinkRRD>
        </div>
      </Container>
    </div>
  );
};
