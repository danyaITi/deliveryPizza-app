export type ParamsPizza = {
    categories: string;
    sort: string;
    order: string;
    currentPage: string;
  };

  export type Pizza = {
    id: number;
    title: string;
    img: string;
    size: number[];
    price: number;
    type: number[];
    key: number;
  };
  
  export interface PizzaSliceState {
    items: Pizza[];
    status: string;
  }
  
  export enum PizzaStatus {
    ERROR = "error",
    SUCCES = "succes",
    LOADING = "loading"
  }