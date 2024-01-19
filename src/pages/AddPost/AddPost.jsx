import { Container, TextField, TextareaAutosize, Button } from '@mui/material';
import s from './AddPost.module.scss';
import UploadButton from '../../components/UploadButton/UploadButton';
import ComboBox from '../../components/ComboBox/ComboBox';
import ClickAway from '../../components/ClickAway/ClickAway';

export const AddPost = () => {
  return (
    <Container maxWidth="md">
      <div className={s.post}>
        <div className={s.post__top}>
          <h1 className={s.post__title}>Добавить блог</h1>
          <a
            className={s.post__rules}
            href="https://journal.tinkoff.ru/community-rules/"
            target="blank"
          >
            Правила ➚
          </a>
        </div>
        <div className={s.input}>
          <div className={s.input__top}>
            <div className={s.input__title}>
              <TextField
                minRows={10}
                fullWidth
                label="Название блога"
                placeholder="мин - 10 символов макс - 50 символов"
                sx={{
                  width: '600px',
                  minWidth: '30%',
                  maxWidth: '100%',
                  position: 'relative',
                  '& input': {
                    padding: '16.5px 40px 16.5px 14px ',
                  },
                }}
              />
              <ClickAway />
            </div>
            <ComboBox />
          </div>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Ваш текст. Минимум 200 символов "
            style={{
              maxWidth: '100%',
              minWidth: '30%',
              margin: '20px 0',
              borderRadius: '5px',
              padding: '20px',
              fontSize: '15px',
              '&::placeholder': {
                color: 'red',
              },
            }}
          />

          <p className={s.input__add_img}>Добавьте изображение</p>
          <UploadButton />
          <Button
            variant="contained"
            style={{ marginTop: '20px', width: '200px', height: '60px' }}
          >
            Опубликовать
          </Button>
        </div>
      </div>
    </Container>
  );
};
