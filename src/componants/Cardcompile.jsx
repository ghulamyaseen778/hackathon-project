import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsCmp from "./CardsCmp";
import { Fetchdata } from "../features/Tarnsport";
import BreadCrums from "./BreadCrums";

const Cardcompile = () => {
  const { data } = useSelector((state) => state.Data);
  return (
    <>
      <Container sx={{ my: "10px" }}>
        <Grid container columnSpacing={2}>
          {data?.map((item, index) => {
            return (
              <Grid item xs={3} key={index}>
                <CardsCmp
                  Email={item.Email}
                  UserName={item.Username}
                  Vehical={item.Vehicals}
                  Route={item.Routes}
                  Price={item.Charges}
                  Seats={item.Seats}
                  onclick={() => {}}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Cardcompile;
