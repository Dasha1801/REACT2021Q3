import { SortType } from "./sortType";

export interface ISearch {
  searchValue: string,
  sortBy: SortType,
  amount: number,
  page: number
  
}
