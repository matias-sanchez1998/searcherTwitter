import { Paper, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation/PaperInformation";
import LocationInformation from "../LocationInformation/LocationInformation";
function Description({ userState }) {
  const { description } = userState;
  return (
    <Fragment>
      <Stack sx={{justifyContent: 'center',width: {xs: '80%'}, margin: {xs: 'auto !important',md: 'auto' }}} >
        {description != null ? (
          <Typography variant="body1" sx={{margin: {xs: '0px', sm: '20px'}, }}>{description}</Typography>
        ) : (
          <Typography variant="body1" sx={{margin: {xs: '20px'}, }}>
            Description
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  );
}

export default Description;
