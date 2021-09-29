import { configureStore} from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { ArticleInfo } from "../shared/articleInfo";
import { SortType } from "../shared/sortType";
import { ISearch } from "../shared/searchInfo";



export interface IStore {
  articles: ArticleInfo[],
  search: ISearch,
  isLoading: boolean
  totalResults: number
}

export const initStore: IStore = {
  articles: [],
  search: {
    searchValue: '',
    sortBy: SortType.publishedAt,
    amount: 10,
    page: 1
  },
  isLoading: false,
  totalResults: 0
}

export const store = configureStore({
  reducer : reducer,
  preloadedState: initStore,
  devTools : process.env.NODE_ENV !== 'production'
});

