import axios from "axios";

const instance = axios.create({
    baseURL: '/pizzas',
    withCredentials: true,
});

export const PizzasAPI={
    getPizzas(){
        return instance.get('' )
    },
    getSortedPizzas(sortBy:string){
      return instance.get(`?_sort=${sortBy}&_order=desc`)
    }
}