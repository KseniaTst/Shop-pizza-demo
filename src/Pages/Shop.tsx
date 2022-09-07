import Header from "../Components/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const Shop =()=>{
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}