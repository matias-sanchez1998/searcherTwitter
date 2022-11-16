import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

function PaperInformation({ userState }) {
  const { public_metrics } = userState;
  return (
    <Paper elevation={3}>
      <Stack spacing={3} direction='row' 
      sx={{justifyContent: 'space-evenly',padding:'20px', width: {xs: '80%',md: '100%'},margin: 'auto', flexDirection: {xs: 'column',md: 'row'},textAlign: {xs: 'center'}}}
      > 
        <Stack>
          <Typography variant="h5">Tweets: </Typography>
          <Typography variant="h6">{public_metrics != undefined ? public_metrics.tweet_count : '0'}</Typography>
        </Stack>
        <Stack sx={{margin: '0px !important' }} >
        <Typography variant="h5">Followers: </Typography>
          <Typography variant="h6">{public_metrics != undefined ? new Intl.NumberFormat().format(public_metrics.followers_count) : '0'}</Typography>
        </Stack>
        <Stack sx={{margin: '0px !important' }} >
        <Typography variant="h5">Following: </Typography>
          <Typography variant="h6">{public_metrics != undefined ? new Intl.NumberFormat().format(public_metrics.following_count) : '0'}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default PaperInformation;
