import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncAction";
import { Pizza, PizzaSliceState, PizzaStatus } from "./types";



const initialState: PizzaSliceState = {
  items: [],
  status: PizzaStatus.LOADING
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = PizzaStatus.ERROR;
      state.items = [];
    });
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = PizzaStatus.LOADING;
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = PizzaStatus.SUCCES;
    });
  }
});



export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;