import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "react-hook-form";

export default function ComboBox({ handleChange }) {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={category}
      sx={{ width: 220, borderRadius: 12 }}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select a category"
          {...register("category", {
            required: "select a category",
          })}
        />
      )}
    />
  );
}

const category = [
  { label: "sport" },
  { label: "travelling" },
  { label: "food" },
  { label: "cleaning" },
  { label: "lifehacks" },
  { label: "books" },
  { label: "shopping" },
];
