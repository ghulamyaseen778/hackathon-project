import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminForm from "./AdminForm";
import BreadCrums from "../BreadCrums";

const AdminCmp = () => {
  const activeUser = localStorage.getItem("User-Info");
  const { data } = useSelector((state) => state.UserInfo);
  // const navigate = useNavigate;
  // useEffect(()=>{
  //     if(data.Role=='User'){
  //         navigate('/home')
  //     }
  // },[])
  return (
    // <div>AdminCmp</div>
    <>
      <BreadCrums />
      <AdminForm />
    </>
  );
};

export default AdminCmp;
