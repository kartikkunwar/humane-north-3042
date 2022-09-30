import React from "react";
import {Routes,Route} from "react-router-dom"
import Otp from "./otp";
import Signup from "./signup";
import Register from "./register";
import Login from "./login";
import Navbar from "./navbar";
import Footer from "./footer";
import {Sliders} from "./slider";
import Sliderbottom from "./sliderbottom";

const AllRoutes=()=>{
    return(
        <div>
        <Routes>
            <Route path="/">home</Route>
            <Route path="/signup" element={<Signup/>}>signup</Route>
            <Route path="/otp" element={<Otp/>}>otp</Route>
            <Route path="/navbar" element={<Navbar/>}>navbar</Route>
            <Route path="/register" element={<Register/>}>register</Route>
            <Route path="/login" element={<Login/>}>login</Route>
            <Route path="/footer" element={<Footer/>}>login</Route>
            <Route path="/slider" element={<Sliders/>}>slider</Route>
            <Route path="/sliderbottom" element={<Sliderbottom/>}>sliderbottom</Route>
        </Routes>
        </div>
    )
}
export default AllRoutes