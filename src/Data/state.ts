import {applyMiddleware, combineReducers, createStore} from "redux";
import {PizzasReducer} from "./Pizzas-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {useDispatch} from "react-redux";
import {CartReducer} from "./Cart-reducer";


let Rootreducer = combineReducers({
    Pizza: PizzasReducer,
    Cart: CartReducer
})
export type AppDispatch = ThunkDispatch<RootStateType, unknown, any>
export const useAppDispatch = () => useDispatch<AppDispatch>();


export type RootStateType = ReturnType<typeof Rootreducer>

let store = createStore(Rootreducer, applyMiddleware(thunk))

export default store
//AppActionsType