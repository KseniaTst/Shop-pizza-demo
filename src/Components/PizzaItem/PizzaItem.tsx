import React, {useState} from "react";
import PizzaSelector from "./PizzaSelector";
import Button from "../Button/Button";
import {FilterValuesType} from "../../Data/Pizzas-reducer";
import {pizzaCartData} from "../../Data/Cart-reducer";


type PropsType = {
    id:number
    name: string,
    imageUrl: string,
    types: number[],
    sizes: number[],
    price: number,
    category: number,
    rating: number,
    addedCount:number,
    filter: FilterValuesType,
    onAddPizza:(obj:pizzaCartData)=>void
}

function PizzaItem(props: PropsType) {

const {id,name,imageUrl,types,sizes, price }=props

    const [activeType,setActiveType]=useState('тонкое')
    const [activeSize,setActiveSize]=useState(sizes[0])

    const onAddPizzaHandler=()=>{
        props.onAddPizza({id,name,imageUrl, price, activeType,activeSize})
    }

    const onSelectSize=(index:number)=>{
    setActiveSize(sizes[index])
    }

    const onSelectType=(type:string)=>{
        setActiveType(type)
    }

    return (
        <div className="pizza-block">
             <img
                className="pizza-block__image"
                src={imageUrl > '' ? imageUrl
                    : "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <PizzaSelector types={types} sizes={sizes} activeSize={activeSize}
                           setActiveSize={onSelectSize}
            activeType={activeType} setActiveType={onSelectType}/>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} р.</div>
                <Button outlined add onClick={onAddPizzaHandler}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"/>
                    </svg>
                    <span>Добавить</span>
                    {props.addedCount && <i>{props.addedCount}</i>}
                </Button>

            </div>
        </div>
    )

}

export default PizzaItem
