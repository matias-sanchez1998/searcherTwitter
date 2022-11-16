import React, { useState } from "react";
import { Stack, TextField, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
function Searcher(props) {
  const { setInputUser,notFound } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <>
    
      <Stack
        direction="row"
        sx={{
          marginTop: "30px",
          width: "80%",
        }}
      >
        <TextField
          id="outlined-basic"
          placeholder="Buscar Usuario Twitter"
          label="Twitter User"
          variant="outlined"
          size="small"
          value={valueInput}
          onChange={onSearchValueChange}
          autoFocus
          sx={{
            width: "90%",
          }}
        ></TextField>
        <IconButton
          sx={{
            left: "-45px",
          }}
          size="small"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
      </Stack>
      <Typography color="red">
        {notFound ? "Error: usuario no existe. Intente con otro" : ""}
      </Typography>
    </>
  );
}

export default Searcher;
