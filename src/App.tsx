import React, {} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {FrontPage} from "./Pages/FrontPage";
import {Shop} from "./Pages/Shop";
import {Home} from "./Pages/Home";
import {Cart} from "./Pages/Cart";

function App() {


    return (
        // <div className="wrapper">
        //     <Header/>
        //     <div className="content">
        //     <Pages/>
        //     </div>
        // </div>
        <Routes>
            <Route path='/' element={<Navigate to={'/front'}/>}/>
            <Route path={'/front'} element={<FrontPage/>}/>
            <Route path={'/shop/*'} element={<Shop/>} >
                <Route path='' element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<Home/>}/>
                <Route path={'cart'} element={<Cart/>}/>
            </Route>
        </Routes>
    )
}

export default App;
