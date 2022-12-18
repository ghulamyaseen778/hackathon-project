import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardsCmp = (props) => {
  return (
    <Card sx={{ minWidth: "100%" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.Email}
        </Typography>
        <Typography variant="h5" component="div">
          {props.UserName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.Vehical}
          <br />
          {`Avalible:${props.Seats} Seats`}
        </Typography>
        <Typography variant="body2">
          {props.Route}
          <br />
          {`Per Seat : ${props.Price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={props.onclick}>
          BookNow
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardsCmp;
