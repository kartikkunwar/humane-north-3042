import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/otp">Otp</Link>
        <Link to="/register">Otp</Link>
        <Link to="/login">login</Link>
        <Link to="/navbar">navbar</Link>
        <Link to='/footer'>footer</Link>
        <Link to='/slider'>footer</Link>
        </div>
    )
}
export default Home;