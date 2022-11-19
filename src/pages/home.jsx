import React from "react";
import { Link } from "react-router-dom";
import Sliderbottom from "../components/sliderbottom";
import Navbar from "../components/navbar"
import Footer from "../components/footer";
import { Sliders } from "../components/slider";

const Home=()=>{
    return(
        <>
        <Navbar/>
        <Sliders/>
        <Sliderbottom/>
        <Footer/>
        </>
    )
}
export default Home;