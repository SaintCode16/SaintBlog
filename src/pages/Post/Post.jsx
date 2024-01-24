import React from "react";
import s from "./Post.module.scss";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarOutline from "@mui/icons-material/StarSharp";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { useGetCommentsQuery, useGetPostsQuery } from "../../redux"; // Импортируйте хук из вашего Redux store
import { AddComment } from "../../components/AddComment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import { useState, useEffect } from "react";

export const Post = () => {
  const { postId } = useParams();
  const { data: posts } = useGetPostsQuery();
  const post = posts?.find((p) => p.id.toString() === postId);
  const { data: comments } = useGetCommentsQuery();
  const [postComments, setPostComments] = useState([]);

  console.log(posts);
  console.log(post);

  // РЕНДЕР ПРИ ОБНОВЛЕНИИ СПИСКА КОММЕНТОВ
  useEffect(() => {
    if (comments && post) {
      setPostComments(
        comments.filter((comment) => +comment.postId === post.id)
      );
    }
  }, [comments, post]);

  // ОБНОВЛЕНИЕ СОСТОЯНИЯ КОММЕНТОВ
  function handleNewComment(commentText) {
    const newComment = {
      postId,
      text: commentText,
    };
    setPostComments([...postComments, newComment]);
  }

  if (!post) {
    return <div>Пост не найден</div>;
  }
  console.log(comments);
  console.log(post);
  return (
    <div className={s.post}>
      <Link to="/posts">
        <Button
          className={s.btnr}
          variant="contained"
          color="primary"
          size="small"
        >
          назад
        </Button>
      </Link>
      <h1 className={s.post__title}>{post.title}</h1>
      <div className={s.post__div}>
        <p className={s.post__data}>
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p className={s.post__kat}>{post.subtitle}</p>

        <img className={s.post__img} src={post.img.img1x} alt={post.title} />

        <p className={s.post__text}>{post.text}</p>
      </div>
      <div className={s.post__btn}>
        <p className={s.post__username}>{post.author}</p>

        <div className={s.post__choice}>
          <FavoriteBorderIcon className={s.like} color="primary" />

          <GradeIcon className={s.finger} color="primary" />
        </div>
      </div>

      {/* КОМПОНЕНТ ДОБАВЛЕНИЯ КОММЕНТА */}
      <AddComment onCommentAdded={handleNewComment} postId={postId} />

      {/* ОТРИСОВКА КОММЕНТОВ */}
      <ul>
        {postComments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};
