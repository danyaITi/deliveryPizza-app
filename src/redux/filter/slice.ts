import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Item, SortPropertyEnum } from "./types";



const initialState: FilterSliceState = {
  value: 0,
  item: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING
  },
  pageNumber: 1,
  input: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStateValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },

    setStateItem(state, action: PayloadAction<Item>) {
      state.item = action.payload;
    },

    setStatePage(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },

    setStateFilters(state, action) {
      state.value = Number(action.payload.activeIndex);
      state.item = action.payload.selected;
      state.pageNumber = Number(action.payload.currentPage);
    },
    setStateSearch(state, action: PayloadAction<string>) {
      state.input = action.payload;
    }
  }
});



export const {
  setStateValue,
  setStateItem,
  setStatePage,
  setStateFilters,
  setStateSearch
} = filterSlice.actions;

export default filterSlice.reducer;