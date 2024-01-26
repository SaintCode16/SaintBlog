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

export const category = [
  { label: "CSS | HTML" },
  { label: "REACT" },
  { label: "TYPESCRIPT" },
  { label: "JS" },
];

export default function ComboBox({ handleChange, value }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={category}
      sx={{ width: 220, borderRadius: 12 }}
      onChange={handleChange}
      value={value}
      renderInput={(params) => (
        <TextField {...params} label="Выберите категорию" />
      )}
    />
  );
}
