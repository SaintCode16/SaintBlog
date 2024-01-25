import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({ handleChange }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={category}
      sx={{ width: 220, borderRadius: 12 }}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} label="Выберите категорию" />
      )}
    />
  );
}

const category = [
  { label: "Спорт" },
  { label: "Путешествие" },
  { label: "Еда" },
  { label: "Уборка" },
  { label: "Лайфхак" },
  { label: "Книги" },
  { label: "Покупки" },
];
