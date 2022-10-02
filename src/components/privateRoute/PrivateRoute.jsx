import React from "react";
import { Navigate } from "react-router-dom";
import { PassContext } from "../context/passcontext";

function PrivateRoute({children}){
  const {log}=React.useContext(PassContext);

  if(!log){
    return <Navigate to="/login"/>
  }
  return children;
}
export default PrivateRoute;