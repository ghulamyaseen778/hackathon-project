import { Box, createTheme, CssBaseline, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import ButtonCmp from "../ButtonCmp";
import InputCmp from "../InputCmp";
import { db } from "../../config/firbase";
import { collection, addDoc } from "firebase/firestore";
const theme = createTheme();

const AdminForm = () => {
  const [Username, SetUserName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Vehicals, SetVehicals] = useState("");
  const [Seats, SetSeats] = useState(0);
  const [Routes, SetRoutes] = useState("");
  const [Charges, SetCharges] = useState(0);
  const [CurrentLocation, SetCurrentLocation] = useState(0);
  const { data } = useSelector((state) => state.UserInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    SetUserName(data.UserName);
    SetEmail(data.Email);
  }, []);
  const ItemSubmit = async () => {
    const data = {
      Username,
      Email,
      Vehicals,
      Seats,
      Routes,
      Charges,
      CurrentLocation,
    };

    try {
      const docRef = await addDoc(collection(db, "Data"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // dispatch();
    // console.log(data);
    SetUserName("");
    SetEmail("");
    SetVehicals("");
    SetRoutes("");
    SetSeats("");
    SetCharges("");
    SetCurrentLocation("");
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <InputCmp
                  lable="Your name"
                  id="text"
                  placeholder="Enter your name"
                  helper="Enter name"
                  onchange={(e) => {
                    SetUserName(e.target.value);
                  }}
                  value={Username}
                  type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <InputCmp
                  lable="Your Email Address"
                  id="text"
                  placeholder="Enter  Your Email Address"
                  helper="Enter Your Email Address"
                  onchange={(e) => {
                    SetEmail(e.target.value);
                  }}
                  value={Email}
                  type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <InputCmp
                  lable="Your Vehical"
                  id="text"
                  placeholder="Enter Your Vehical"
                  helper="Enter Your Vehical"
                  onchange={(e) => {
                    SetVehicals(e.target.value);
                  }}
                  value={Vehicals}
                  type="text"
                />
              </Grid>
              <Grid item xs={6}>
                <InputCmp
                  lable=" Vehical Seats"
                  id="text"
                  placeholder=" Vehical Seats"
                  helper=" Vehical Seats"
                  onchange={(e) => {
                    SetSeats(e.target.value);
                  }}
                  value={Seats}
                  type="text"
                />
              </Grid>
              <Grid item xs={4}>
                <InputCmp
                  lable="Route Seprate With Comma"
                  id="text"
                  placeholder="Your Route"
                  helper="Your Route"
                  onchange={(e) => {
                    SetRoutes(e.target.value);
                  }}
                  value={Routes}
                  type="text"
                />
              </Grid>
              <Grid item xs={4}>
                <InputCmp
                  lable="Seat Charges"
                  id="text"
                  placeholder="Per Seat Charges"
                  helper="Per Seat Charges"
                  onchange={(e) => {
                    SetCharges(e.target.value);
                  }}
                  value={Charges}
                  type="text"
                />
              </Grid>
              <Grid item xs={4}>
                <InputCmp
                  lable="Current Location"
                  id="text"
                  placeholder="Curent Location"
                  helper="Curent Location"
                  onchange={(e) => {
                    SetCurrentLocation(e.target.value);
                  }}
                  value={CurrentLocation}
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonCmp
                  text="Submit"
                  type="submit"
                  style={{ mt: 3, mb: 2 }}
                  onclick={ItemSubmit}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AdminForm;
