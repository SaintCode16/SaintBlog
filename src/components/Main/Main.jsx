import { Container } from "@mui/material";
import s from "./Main.module.scss";
import PreviewPost from "../PreviewPost/PreviewPost";
import { useGetPostsQuery } from "../../redux";
import { Profile } from "../Profile/Profile";
import { SpinnerComponent } from "../SpinnerComponent/SpinnerComponent";

export const Main = () => {
  // const { data } = useGetPostsQuery();
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useGetPostsQuery();

  const anyLoading = postsLoading;

  if (anyLoading) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <div className={s.spinner}>
          <SpinnerComponent />
        </div>
      </Container>
    );
  }
  if (postsError) {
    return (
      <Container maxWidth="lg" className={s.container}>
        <div className={s.spinner}>
          Error loading posts: {postsError.message || "Unknown error"}
        </div>
      </Container>
    );
  }
  return (
    <Container maxWidth="lg" className={s.container}>
      <Profile />

      <div className={s.hidden}>
        {posts &&
          posts.map((post) => {
            return (
              <PreviewPost
                key={post.id}
                id={post.id}
                theme={post.title}
                text={post.text}
                img={post.img.img1x}
                tags={post.tags.join(", ")}
              />
            );
          })}
      </div>
    </Container>
  );
};

// пост запрос на register
