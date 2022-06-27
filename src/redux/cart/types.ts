export type Pizza = {
    img: string;
    id: number;
    size: number;
    type: string;
    title: string;
    count: number;
    price: number;
  };
  
  export interface CartSliceState {
    pizzas: Pizza[];
    totalPrice: number;
  }