import * as React from "react";
import s from "./PreviewPost.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";

export default function PreviewPost({ id, theme, text, img, tags }) {
  const { category } = useParams();

  return (
    <div className={s.previewPost}>
      <Card className={s.flexWrapper}>
        <CardMedia className={s.img} image={img} title="green iguana" />
        <CardContent className={s.content}>
          <div>
            <div>
              <Link to={`/posts/${id}`}>
                <Typography
                  className={s.title}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {theme}
                </Typography>
              </Link>
              <Link
                to={`/posts/category/${tags.replace(/\s\|\s/g, "-").toLowerCase()}`}
              >
                <p className={s.tags}>{tags}</p>
              </Link>
            </div>
            <Typography className={s.text} variant="body2">
              {text}
            </Typography>
          </div>

          <Link to={`/posts/${id}`}>
            <CardActions>
              <Button
                className={s.btn}
                size="small"
                variant="outlined"
                href="#outlined-buttons"
              >
                read more
              </Button>
            </CardActions>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
