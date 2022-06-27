import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cart.pizzas;
export const selectById = (id: number) => (state: RootState) =>
  state.cart.pizzas.find((obj) => obj.id === id);