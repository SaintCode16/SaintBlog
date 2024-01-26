import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function UploadButton({ handleFileChange, children }) {
  const handleInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64 = reader.result;
      handleFileChange(base64);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button
        sx={{
          width: "300px",
        }}
        component="label"
        variant="contained"
        startIcon={
          <AddPhotoAlternateIcon sx={{ width: "30px", height: "30px" }} />
        }
      >
        {children}
        <VisuallyHiddenInput
          type="file"
          onChange={handleInputChange}
          accept="image/*"
        />
      </Button>
    </>
  );
}
