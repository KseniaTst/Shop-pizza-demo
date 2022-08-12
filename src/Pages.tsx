import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";
import React from "react";

export function Pages() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={'/home'}/>}/>*/
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
            </Routes>
        </div>

    )
}