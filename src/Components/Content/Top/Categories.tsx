import React from "react";
import {FilterValuesType} from "../../../Data/Pizzas-reducer";


type PropsType = {
    filter: FilterValuesType
    changeFilter:(filter:FilterValuesType)=>void
}

function Categories(props: PropsType) {

    const onAllClickHandler=()=>{
        props.changeFilter('Все')
    }
    const onMeatClickHandler=()=>{
        props.changeFilter('Мясные')
    }
    const onVegetClickHandler=()=>{
        props.changeFilter('Вегетарианская')
    }
    const onGrillClickHandler=()=>{
        props.changeFilter('Гриль')
    }
    const onSpicyClickHandler=()=>{
        props.changeFilter('Острые')
    }
    const onClosedClickHandler=()=>{
        props.changeFilter('Закрытые')
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={onAllClickHandler} className={props.filter === 'Все' ? 'active' : ''}>Все</li>
                <li onClick={onMeatClickHandler} className={props.filter === 'Мясные' ? 'active' : ''}>Мясные</li>
                <li onClick={onVegetClickHandler} className={props.filter === 'Вегетарианская' ? 'active' : ''}>Вегетарианская</li>
                <li onClick={onGrillClickHandler} className={props.filter === 'Гриль' ? 'active' : ''}>Гриль</li>
                <li onClick={onSpicyClickHandler} className={props.filter === 'Острые' ? 'active' : ''}>Острые</li>
                <li onClick={onClosedClickHandler} className={props.filter === 'Закрытые' ? 'active' : ''}>Закрытые</li>
            </ul>

        </div>
    )

}

export default Categories