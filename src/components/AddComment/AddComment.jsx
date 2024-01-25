import s from "./AddComment.module.scss";
import { useAddCommentMutation } from "../../redux";
import { useState } from "react";

export const AddComment = ({ postId, onCommentAdded }) => {
  const [inputValue, setValue] = useState("");
  // ПОЛУЧАЕМ ФУНКЦИЮ ИЗ REDUX API
  const [addComment] = useAddCommentMutation();

  function inputHandler(e) {
    setValue(e.target.value);
  }

  // ОТПРАВКА ФОРМЫ С НАПИСАНИЕМ КОММЕНТА
  async function onSubmit(e) {
    e.preventDefault();

    if (!inputValue.trim().length) {
      return;
    }

    try {
      // ДОБАВЛЯЕМ КОММЕНТАРИЙ В БАЗУ ДАННЫХ
      await addComment({
        postId,
        text: inputValue,
      }).unwrap();
      // ОТПРАВЛЯЕМ ДАННЫЕ ДЛЯ ОБНОВЛЕНИЯ СОСТОЯНИЯ КОММЕНТОВ
      onCommentAdded(inputValue);
      setValue("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className={s.form} onSubmit={onSubmit} action="post">
      <input
        className={s.input}
        onChange={inputHandler}
        value={inputValue}
        type="text"
        placeholder="Введите комментарий"
      />
      <input className={s.btn} type="submit" value="добавить"></input>
    </form>
  );
};
