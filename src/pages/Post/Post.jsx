// import s from "./Post.module.scss";
// import IconButton from "@mui/material/IconButton";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import StarOutline from "@mui/icons-material/StarSharp";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// export const Post = () => {
//   let data = new Date();
//   return (
//     <div className={s.post}>
//       <Link to={"/posts"}>
//         <Button
//           className={s.btnr}
//           variant="contained"
//           color="error"
//           size="small"
//         >
//           Back
//         </Button>
//       </Link>

//       <h1 className={s.post__title}>Thema</h1>
//       <div className={s.post__div}>
//         <p className={s.post__data}>{data.toLocaleDateString()}</p>
//         <p className={s.post__kat}>kategoria</p>
//         <div className={s.post__divimg}>
//           <img
//             className={s.post__img}
//             src="https://ynet-pic1.yit.co.il/cdn-cgi/image/format=auto/picserver5/crop_images/2023/05/18/rkRtqxVrh/rkRtqxVrh_9_0_1264_711_0_large.jpg"
//             alt=""
//           />
//         </div>
//         <p className={s.post__text}>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
//           voluptatibus incidunt quasi atque quos sunt consectetur quibusdam
//           reprehenderit iste voluptatum earum molestiae accusantium animi in
//           minus, mollitia libero reiciendis sapiente. Dolorum voluptatibus
//           expedita, assumenda voluptatum corrupti fugiat nihil aliquid hic
//           asperiores molestias excepturi et vitae debitis cupiditate libero
//           saepe ipsum aperiam voluptate magni beatae omnis atque ut ea.
//           Deleniti, porro! At quos culpa tempore labore repudiandae maxime,
//           voluptatum consectetur harum necessitatibus. Voluptas qui similique
//           eos numquam necessitatibus a, aliquid voluptates, tempore molestiae
//           vero dolore facere fugit mollitia, nemo accusamus quidem. Facilis
//           alias perspiciatis nulla provident! Obcaecati et quos culpa, tenetur
//           nemo quaerat, consequatur nobis recusandae minima aliquam corrupti
//           quae repellat officia aperiam dolore dicta excepturi cumque
//           reiciendis? Reiciendis, consequatur necessitatibus. Debitis nobis illo
//           minus dignissimos expedita commodi quas recusandae atque numquam
//           suscipit quia amet enim iure inventore nihil, nisi eligendi. Eos
//           possimus maiores harum repellat ullam a eius, adipisci pariatur!
//           Inventore eligendi earum facilis voluptatem exercitationem cumque
//           quisquam sunt corrupti unde aliquid dolorem molestiae quia doloremque,
//           magni eaque a, beatae iusto et? Doloribus, recusandae? Tempora rerum
//           dignissimos perferendis ullam quas!
//         </p>
//       </div>

//       <div className={s.post__btn}>
//         <p className={s.post__username}>@username</p>

//         <div className={s.post__choice}>
//           <button className={s.post__button}>
//             <ThumbUpIcon />
//           </button>

//           <IconButton color="error" size="large">
//             <StarOutline />
//           </IconButton>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from "react";
import s from "./Post.module.scss";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarOutline from "@mui/icons-material/StarSharp";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { useGetCommentsQuery, useGetPostsQuery } from "../../redux"; // Импортируйте хук из вашего Redux store
import { AddComment } from "../../components/AddComment";
import { useState } from "react";

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
        comments.filter((comment) => +comment.postId === post.id),
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
          color="error"
          size="small"
        >
          Back
        </Button>
      </Link>
      <h1 className={s.post__title}>{post.title}</h1>
      <div className={s.post__div}>
        <p className={s.post__data}>
          {new Date(post.date).toLocaleDateString()}
        </p>
        <p className={s.post__kat}>{post.subtitle}</p>
        <div className={s.post__divimg}>
          <img className={s.post__img} src={post.img.img1x} alt={post.title} />
        </div>
        <p className={s.post__text}>{post.text}</p>
      </div>
      <div className={s.post__btn}>
        <p className={s.post__username}>{post.author}</p>

        <div className={s.post__choice}>
          <button className={s.post__button}>
            <ThumbUpIcon />
          </button>

          <IconButton color="error" size="large">
            <StarOutline />
          </IconButton>
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
