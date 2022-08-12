import Top from "../Components/Content/Top/Top";
import PizzaItem from "../Components/PizzaItem/PizzaItem";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootStateType, useAppDispatch} from "../Data/state";
import {changeFilterAC, fetchPizzasTC, FilterValuesType} from "../Data/Pizzas-reducer";
import {PizzaLoader} from "../assets/loader/pizza-loader";
import {pizzaCartData, PizzaStateType, setPizzaDataToCartAC} from "../Data/Cart-reducer";

export type PizzaType={
    id:number,
    name:string,
    imageUrl:string,
    types: number[],
    sizes: number[],
    price:number,
    category: number,
    rating: number
}
type PropsType = {
    // pizzas: PizzaType[]
}

export function Home(props: PropsType) {

    const Pizzas = useSelector<RootStateType, PizzaType[]>(state => state.Pizza.Pizzas)
    const Filter = useSelector<RootStateType, FilterValuesType>(state => state.Pizza.Filter)
    const isLoad = useSelector<RootStateType, boolean>(state => state.Pizza.isLoaded)
    const cartItems = useSelector<RootStateType,PizzaStateType>(state => state.Cart.items)

    const dispatch = useAppDispatch()

    const changeFilter = (filter: FilterValuesType) => {
        dispatch(changeFilterAC(filter))
    }

    let filterredPizzas = Pizzas

    if (Filter === 'Мясные') {
        filterredPizzas = Pizzas.filter(t => t.category === 1);
    }
    if (Filter === 'Вегетарианская') {
        filterredPizzas = Pizzas.filter(t => t.category === 2);
    }
    if (Filter === 'Гриль') {
        filterredPizzas = Pizzas.filter(t => t.category === 3);
    }
    if (Filter === 'Острые') {
        filterredPizzas = Pizzas.filter(t => t.category === 4);
    }
    if (Filter === 'Закрытые') {
        filterredPizzas = Pizzas.filter(t => t.category === 5);
    }

    const onAddPizza = (obj:pizzaCartData) => {
dispatch(setPizzaDataToCartAC(obj))
    }

    useEffect(() => {
        if (!Pizzas.length) {
            dispatch(fetchPizzasTC())
        }

    }, [])

    return (
        <div className="container">
            <Top filter={Filter} changeFilter={changeFilter}/>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoad ? filterredPizzas.map(p => {
                    return <PizzaItem key={p.id}
                                      id={p.id}
                                      addedCount={cartItems[p.id] && cartItems[p.id].items.length}
                                      name={p.name}
                                      imageUrl={p.imageUrl} types={p.types}
                                      sizes={p.sizes} price={p.price}
                                      category={p.category}
                                      rating={p.rating}
                                      filter={Filter}
                    onAddPizza={onAddPizza}/>
                }) : Array(10).fill(<PizzaLoader  />)}
            </div>
        </div>
    )
}