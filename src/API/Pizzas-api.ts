import axios from "axios";

const instance = axios.create({
    baseURL: 'https://62fcdd5db9e38585cd47a131.mockapi.io/'});

export const PizzasAPI={
    getPizzas(){
        return instance.get('items' )
    },
    getSortedPizzas(sortBy:string){
      return instance.get(`items`, {params:{sortBy, order:'desc'}})
    }
}