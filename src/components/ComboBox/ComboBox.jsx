// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

// export default function ComboBox({ handleChange }) {
//   return (
//     <Autocomplete
//       disablePortal
//       id="combo-box-demo"
//       options={category}
//       sx={{ width: 220, borderRadius: 12 }}
//       onChange={handleChange}
//       renderInput={(params) => (
//         <TextField {...params} label="Выберите категорию" />
//       )}
//     />
//   );
// }

// export const category = [
//   { label: "CSS | HTML" },
//   { label: "REACT" },
//   { label: "TYPESCRIPT" },
//   { label: "JS" },
// ];


import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useForm } from "react-hook-form";

// export default function ComboBox({ handleChange }) {


export const category = [
  { label: "CSS | HTML" },
  { label: "REACT" },
  { label: "TYPESCRIPT" },
  { label: "JS" },
];

export default function ComboBox({ handleChange, value }) {
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
      value={value}
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

