import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";

const EachMovie = ({ index }) => {
  return (
    <>
      <Container style={{ padding: "20px 0" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingTop: "56.25%",
              }}
            >
              <CardMedia image="https://source.upsplash.com/random" />
              <CardContent style={{ flexGrow: "1" }}>
                <Typography variant="h6">Coding</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default EachMovie;
