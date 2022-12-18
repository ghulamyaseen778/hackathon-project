import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Fetchdata } from "../features/Tarnsport";
import Cardcompile from "./Cardcompile";

const HomeCmp = () => {
  const navigate = useNavigate();
  const { bool } = useSelector((state) => state.Data);
  const ActiveUser = localStorage.getItem("User-Info");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchdata());
  }, []);

  useEffect(() => {
    if (!ActiveUser) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: "20px",
          flexDirection: "column",
        }}
      >
        <h1>Avalible Cards</h1>
        {bool ? <Cardcompile /> : <h3>Loading</h3>}
      </Box>
    </>
  );
};

export default HomeCmp;
