import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";
import {FilterValuesType} from "../../../Data/Pizzas-reducer";


type PropsType={
    filter:FilterValuesType
    changeFilter:(filter:FilterValuesType)=>void
}

function Top(props:PropsType) {
    return (
        <div className="content__top">
            <Categories filter={props.filter} changeFilter={props.changeFilter}/>
            <Sort/>
        </div>
    )
}

export default Top