import {PizzaType} from "../Pages/Home";
import {AppDispatch} from "./state";
import {PizzasAPI} from "../API/Pizzas-api";

export type FilterValuesType='Все'|'Мясные'| 'Вегетарианская'| 'Гриль'| 'Острые'| 'Закрытые'

 type PizzaStateType={
    Pizzas: PizzaType[],
    Filter: FilterValuesType,
    isLoaded:boolean,
    currentType:number,
    currentSize:number
}

const initialState: PizzaStateType = {
    Pizzas: [

    ],
    Filter: 'Все',
    isLoaded:false,
    currentType: 0,
    currentSize: 26,

}


export const PizzasReducer = (state: PizzaStateType = initialState, action: ActionType): PizzaStateType => {
    switch (action.type) {
        case "SET-PIZZAS":
            return {...state, Pizzas: [...action.pizzas]}
        case 'CHANGE-FILTER':
            return {...state, Filter:action.filter}
        case 'SET-IS-LOADED':
            return {...state, isLoaded:action.isLoad}
        case 'SET-PIZZA-TYPE':
            return {...state, currentType:action.pizzaType}
        case 'SET-PIZZA-SIZE':
            return {...state,currentSize:action.size}
        default:
            return state
    }
}
export const setPizzasAC=(pizzas:PizzaType[])=>({type:'SET-PIZZAS',pizzas} as const)
export const changeFilterAC=(filter:FilterValuesType)=>({type:'CHANGE-FILTER', filter} as const)
export const setIsLoadedAC=(isLoad:boolean)=>({type:'SET-IS-LOADED' , isLoad }as const )
export const setPizzaTypeAC=(pizzaType:number)=>({type:'SET-PIZZA-TYPE', pizzaType} as const)
export const setPizzaSizeAC=(size:number)=>({type:'SET-PIZZA-SIZE', size} as const)

export const fetchPizzasTC=()=>(dispatch:AppDispatch)=>{
    dispatch(setIsLoadedAC(false))

PizzasAPI.getPizzas()
    .then(res=>{
        debugger
        dispatch(setPizzasAC(res.data))
        dispatch(setIsLoadedAC(true))
    })
}
export const sortPizzasTC=(sortBy:string)=>(dispatch:AppDispatch)=>{

    dispatch(setIsLoadedAC(false))

    PizzasAPI.getSortedPizzas(sortBy)
        .then(res=>{
            dispatch(setPizzasAC(res.data))
            dispatch(setIsLoadedAC(true))
        })
}
//types
type ActionType = ReturnType<typeof setPizzasAC>
    | ReturnType<typeof changeFilterAC>
    | ReturnType<typeof setIsLoadedAC>
    | ReturnType<typeof setPizzaTypeAC>
    | ReturnType<typeof setPizzaSizeAC>
