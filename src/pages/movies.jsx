import React from "react";
import { Link } from "react-router-dom";
import Sliderbottom from "../components/sliderbottom";
import Navbar from "../components/navbar"
import Footer from "../components/footer";
import { Sliders } from "../components/slider";
import Video from "../components/video";

const Movies=()=>{
    return(
        <div>
        <Navbar/>
        <Video/>
        <Sliderbottom/>
        <Footer/>
        </div>
    )
}
export default Movies;