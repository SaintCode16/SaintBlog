import * as React from "react";
import s from "./PreviewPost.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PreviewPost() {
  return (
    <div className={s.previewPost}>
      <Card className={s.displayFlex} sx={{ maxWidth: 1100, maxHeight: 400 }}>
        <CardMedia
          sx={{ width: 700, height: 300 }}
          image="https://ynet-pic1.yit.co.il/cdn-cgi/image/format=auto/picserver5/crop_images/2023/05/18/rkRtqxVrh/rkRtqxVrh_9_0_1264_711_0_large.jpg"
          title="green iguana"
        />
        <CardContent className={s.content}>
          <Typography gutterBottom variant="h5" component="div">
            Тема
          </Typography>
          <Typography
            sx={{ width: 600, height: 200 }}
            className={s.text}
            variant="body2"
            color="text.secondary"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica Lizards are
            a widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica Lizards are a
            widespread group of squamate reptiles, with over 6,000 species,
            ranging across all continents except Antarctica
          </Typography>
          <CardActions className={s.btn}>
            <Button size="small">Подробнее</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
