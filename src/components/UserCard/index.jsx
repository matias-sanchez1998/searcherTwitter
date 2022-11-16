import React, {  } from "react";
import { CardMedia, Grid } from "@mui/material";
import PrincipalInformation from "./PrincipalInformation";
import Description from "../Description/Description";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {},
}));

function UserCard({ userState }) {
  

  return (
    <Root>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ marginTop: "20px", placeItems: { xs: "center", md: "initial" } }}
      >
        <Grid item xs={3} sx={{ textAlign: "center" }}>
          <CardMedia
            component="img"
            alt="Imagen Perfil Twitter"
            image={
              userState.profile_image_url != undefined
                ? userState.profile_image_url.split("_normal").join("")
                : "dsf"
            }
            sx={{
              borderRadius: "50%",
              marginLeft: "10px",
              width: { xs: "50%", md: "100%" },
              display: { xs: "initial", md: "block" },
            }}
          />
        </Grid>
        <Grid item xs={9}>
          <Stack direction="column" spacing={1} sx={{ margin: "30px" }}>
            <PrincipalInformation userState={userState} />
            <Description userState={userState} />
          </Stack>
        </Grid>
      </Grid>
      
    </Root>
  );
}

export default UserCard;
