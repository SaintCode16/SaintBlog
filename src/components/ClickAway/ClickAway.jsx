import * as React from "react";
import Box from "@mui/material/Box";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: "absolute",
    top: "40px",
    right: "-100px",
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "black",
    color: "white",
    width: "200px",
    textAlign: "center",
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative", padding: "16.5px 0 " }}>
        <button
          type="button"
          onClick={handleClick}
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            borderRadius: "50%",
            border: "none",
            height: "20px",
            width: "20px",
          }}
        >
          <b>?</b>
        </button>
        {open ? (
          <Box sx={styles}>
            Кратко сформулируйте основную суть вашего текста
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
