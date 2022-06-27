import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ParamsPizza, Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], ParamsPizza>(
    "pizza/fetchPizzasStatus",
    async (params: ParamsPizza) => {
      const { categories, sort, order, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://6293abab7aa3e6af1a0f3985.mockapi.io/pizzas?page=${currentPage}&limit=4&${categories}&sortBy=${sort}&order=${order}`
      );
      return data as Pizza[];
    }
);
  