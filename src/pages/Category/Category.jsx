import { Profile } from "../../components/Profile/Profile";
import s from "./Category.module.scss";

import { useParams, useSelector } from "react-router-dom";
import { useGetPostsQuery } from "../../redux";
import PreviewPost from "../../components/PreviewPost/PreviewPost";
import { SpinnerComponent } from "../../components/SpinnerComponent/SpinnerComponent";

export const Category = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const { category } = useParams();

  if (isLoading) {
    return (
      <div className={s.spinner}>
        <SpinnerComponent />
      </div>
    );
  }

  console.log(posts);

  if (posts) {
    const filteredPosts = posts.filter(
      (post) =>
        post.tags &&
        post.tags.length > 0 &&
        post.tags[0].replace(/\s\|\s/g, "-").toLowerCase() === category
    );
    console.log(filteredPosts);

    if (filteredPosts.length === 0) {
      return <h2 className={s.warning}>В данной категории нет постов</h2>;
    }

    return (
      filteredPosts &&
      filteredPosts.map((post) => (
        <PreviewPost
          key={post.id}
          id={post.id}
          theme={post.title}
          text={post.post}
          img={post.img.img1x}
          tags={post.tags.join(", ")}
        />
      ))
    );
  }
};
