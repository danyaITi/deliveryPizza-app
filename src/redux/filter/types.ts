export enum SortPropertyEnum {
    RATING = "rating",
    PRICE = "price",
    TITLE = "title"
  }
  export type Item = {
    name: string;
    sortProperty: SortPropertyEnum;
  };
  
  export interface FilterSliceState {
    value: number;
    item: Item;
    pageNumber: number;
    input: string;
  }