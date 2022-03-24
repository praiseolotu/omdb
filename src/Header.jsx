import React from "react";
import { Typography, AppBar, CssBaseline, Toolbar } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6" style={{ marginLeft: "20px" }}>
            OMDB
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
