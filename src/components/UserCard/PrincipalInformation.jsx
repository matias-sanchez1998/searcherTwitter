import React, { Fragment } from "react";
import { Typography, Stack } from "@mui/material";
function PrincipalInformation({ userState }) {
  const { name, username, created_at } = userState;

  return (
    <Fragment>
      <Stack direction="row" sx={{ justifyContent: "space-between",flexDirection: {xs: 'column',md: 'row'}, placeItems: {xs: 'center'} }}>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle2"> {new Date(created_at).toLocaleDateString('en-us')}</Typography>
      </Stack>
      <Typography variant="caption" sx={{textAlign: {xs: 'center', md: 'start'}}}>@{username}</Typography>
    </Fragment>
  );
}

export default PrincipalInformation;
