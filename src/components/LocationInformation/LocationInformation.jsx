import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
function LocationInformation({ userState }) {
  const { location, username, url, company } = userState;
  return (
    <Grid container
    spacing={2}
    sx={{marginTop: '15px',flexDirection: {xs: 'column',md: 'row'},}}
    >
      <Grid item xs={6} >
        <Stack direction='row' spacing={2}>
          <LocationOnIcon />
          <Typography>
            {location != null ? location : "No Disponible"}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
      <Stack direction='row' spacing={2}>
          <TwitterIcon />
          <Link
            href={username != null ? `https://twitter.com/${username}` : '#'}
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            
          <Typography>
            {username != null ? username : "No Disponible"}
          </Typography>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={6}>
      <Stack direction='row' spacing={2}>
          <LanguageIcon />
          <Link target="_blank" href={url}>
    <Typography>{url != null ? 'WEB' : "No Disponible"}</Typography>
          </Link>
        </Stack>
      </Grid>
      
    </Grid>
  );
}

export default LocationInformation;
