import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export default function PrivateRoute(){
    const [isAdmin ,setAdmin] = useState(true);
    return isAdmin ? <Outlet /> : <Navigate to= '/'/> ;
}