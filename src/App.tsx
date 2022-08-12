import React from 'react';
import './App.css';

import Header from "./Components/Header/Header";
import {Pages} from "./Pages";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
            <Pages/>
            </div>
        </div>

    )
}

export default App;
