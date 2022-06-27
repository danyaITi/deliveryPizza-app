import { RootState } from "../store";

export const selectFilter = (state: RootState) => state.filter.value;
export const selectSort = (state: RootState) => state.filter.item;
export const selectCurrentPage = (state: RootState) => state.filter.pageNumber;
