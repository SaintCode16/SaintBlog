import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadButton() {
  return (
    <Button
      sx={{
        width: '300px',
      }}
      component="label"
      variant="contained"
      startIcon={
        <AddPhotoAlternateIcon sx={{ width: '30px', height: '30px' }} />
      }
    >
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
