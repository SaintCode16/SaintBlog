import * as React from "react";
import s from "./PreviewPost.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function PreviewPost({ id, theme, text, img, tags }) {
  return (
    <div className={s.previewPost}>
      <Card className={s.displayFlex} sx={{ maxWidth: 1100, maxHeight: 400 }}>
        <CardMedia
          sx={{ width: 700, height: 300 }}
          image={img}
          title="green iguana"
        />
        <CardContent className={s.content}>
          <Link to={`/posts/${id}`}>
            <Typography gutterBottom variant="h5" component="div">
              {theme}
            </Typography>
          </Link>
          <p>{tags}</p>
          <Typography
            sx={{ width: 600, height: 200 }}
            className={s.text}
            variant="body2"
            color="text.secondary"
          >
            {text}
          </Typography>

          <Link to={`/posts/${id}`}>
            <CardActions className={s.btn}>
              <Button size="small">Подробнее</Button>
            </CardActions>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
