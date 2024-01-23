import s from "./AddComment.module.scss";
import { useAddCommentMutation } from "../../redux";
import { useState } from "react";

export const AddComment = ({ postId }) => {
  const [inputValue, setValue] = useState("");
  const [addComment] = useAddCommentMutation();

  function inputHandler(e) {
    setValue(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addComment({ postId, text: inputValue });
  }

  return (
    <form onSubmit={onSubmit} action="post">
      <input
        onChange={inputHandler}
        value={inputValue}
        type="text"
        placeholder="comment"
      />
      <input type="submit" />
    </form>
  );
};
