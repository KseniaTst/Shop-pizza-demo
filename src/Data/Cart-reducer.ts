export type CartStateType = {
    items: PizzaStateType,
    totalPrice: number,
    totalCount: number
}
export type PizzaStateType = {
    [key: number]: {
        items: Array<pizzaCartData>,
        totalPizzaPrice: number
    }
}

const initialState: CartStateType = {
    items: {},
    totalPrice: 0,
    totalCount: 0

}

const getTotalPrice = (arr: any) => arr.reduce((sum: number, obg: any) => obg.price + sum, 0)

export const CartReducer = (state: CartStateType = initialState, action: ActionType): CartStateType => {
    switch (action.type) {
        case 'SET-PIZZA-TO-CART':
            const currentPizzaItems = !state.items[action.data.id]
                ? [action.data]
                : [...state.items[action.data.id].items, action.data];
            const newItems = {
                ...state.items,
                [action.data.id]: {
                    items: currentPizzaItems,
                    totalPizzaPrice: getTotalPrice(currentPizzaItems)
                }
            }
            const arr: pizzaCartData[] = []
            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = arr.concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        case "CLEAR-CART":
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        default:
            return state
    }
}

export const setTotalPriceAC = (price: number) => ({type: 'SET-TOTAL-PRICE', price} as const)
export const setTotalCountAC = (count: number) => ({type: 'SET-TOTAL-COUNT', count} as const)
export const setPizzaDataToCartAC = (data: pizzaCartData) => ({type: 'SET-PIZZA-TO-CART', data} as const)
export const clearCartAC = () => ({type: 'CLEAR-CART'} as const)


//types
type ActionType = ReturnType<typeof setTotalPriceAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setPizzaDataToCartAC>
    | ReturnType<typeof clearCartAC>

export type pizzaCartData = {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    activeType: string,
    activeSize: number
}