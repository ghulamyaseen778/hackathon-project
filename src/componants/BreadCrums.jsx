import { Breadcrumbs, Typography, Link, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const BreadCrums = () => {
  const navigate = useNavigate();
  const ActiveUser = localStorage.getItem("User-Info");
  return (
    <Container>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            onClick={() => navigate("/admin/cards")}
          >
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            onClick={() => navigate(`/admin/${ActiveUser}`)}
          >
            Core
          </Link>
        </Breadcrumbs>
      </div>
    </Container>
  );
};

export default BreadCrums;
