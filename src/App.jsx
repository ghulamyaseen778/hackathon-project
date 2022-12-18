import "./App.css";
//route import
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//componete import
import LoginCmp from "./componants/registration";
import SignUpCmp from "./componants/registration/Signup";
import NavBarCmp from "./componants/NavBar";
import { FetchUser } from "./features/UsersSlice";
import HomeCmp from "./componants/HomeCmp";
import AdminCmp from "./componants/admin";
import Cardcompile from "./componants/Cardcompile";

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.UserInfo);
  const ActiveUser = localStorage.getItem("User-Info");

  useEffect(() => {
    dispatch(FetchUser());
  }, []);
  return (
    <>
      <NavBarCmp />
      <Routes>
        <Route index element={<LoginCmp />} />
        <Route path="/signup" element={<SignUpCmp />} />
        <Route path="/home" element={<HomeCmp />} />
      </Routes>
      <Routes>
        <Route
          path={`/admin/${data?.Role == "admin" ? ActiveUser : false}`}
          element={<AdminCmp />}
        />
        {/* <Route path="/admin/cards" element={<Cardcompile />} /> */}
        {/* <Route path={`/admin/${ActiveUser}`} element={<AdminForm />} /> */}
      </Routes>
    </>
  );
}

export default App;
