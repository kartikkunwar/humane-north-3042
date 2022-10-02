import React from "react";
import {Routes,Route} from "react-router-dom"
import Otp from "./otp";
import Signup from "./signup";
import Register from "./register";
import Login from "./login";
import Home from "../pages/home";
import Movies from "../pages/movies";
import PrivateRoute from "./privateRoute/PrivateRoute";

const AllRoutes=()=>{
    return(
        <div>
        <Routes>
            <Route path="/" element={<Home/>}>home</Route>
            <Route path="/signup" element={<Signup/>}>signup</Route>
            <Route path="/otp" element={<Otp/>}>otp</Route>
            <Route path="/register" element={<Register/>}>register</Route>
            <Route path="/login" element={<Login/>}>login</Route>
            <Route path="/movies" element={<PrivateRoute><Movies/></PrivateRoute>}>video</Route>
        </Routes>
        </div>
    )
}
export default AllRoutes