import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartLS } from "../../utils/getCartLS";
import { CartSliceState, Pizza } from "./types";

const initialState: CartSliceState = {
    pizzas: getCartLS(),
    totalPrice: 0
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setStatePizzas(state, action: PayloadAction<Pizza>) {
        const findPizza = state.pizzas.find(
          (obj) => obj.id === action.payload.id
        );
  
        if (!findPizza) {
          state.pizzas.push({
            ...action.payload,
            count: 1
          });
        } else {
          findPizza.count++;
        }
  
        state.totalPrice = state.pizzas.reduce(
          (sum, item) => item.price * item.count + sum,
          0
        );
      },
      setRemoveAll(state) {
        state.pizzas = [];
      },
      setDeletePizza(state, action: PayloadAction<number>) {
        state.pizzas = state.pizzas.filter((obj) => obj.id !== action.payload);
      },
      minusPizza(state, action: PayloadAction<number>) {
        const findPizza = state.pizzas.find((obj) => obj.id === action.payload);
  
        if (findPizza) {
          findPizza.count--;
        }
      }
    }
  });
  
  export const {
    setStatePizzas,
    setRemoveAll,
    setDeletePizza,
    minusPizza
  } = cartSlice.actions;
  
  export default cartSlice.reducer;
  