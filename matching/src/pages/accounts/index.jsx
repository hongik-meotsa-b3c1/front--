import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";
import Classnet from "./Classnet";
//import LoginRequiredRoute from "utils/LoginRequiredRoute";

function AccountsRoutes(){
    return (
        <Routes> 
            <Route path="profile/*" element={<Profile />} /> 
            <Route path="login/*" element={<Login />} />
            <Route path="signup/*" element={<Signup />} />
            <Route path="classnet/*" element={<Classnet />} />
        </Routes>     
    )
}

export default AccountsRoutes;