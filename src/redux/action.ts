import { AxiosResponse } from "axios";
import axiosInstance, { API_KEY } from "../services/api";
import { ArticleInfo } from "../shared/articleInfo";
import { ISearch } from "../shared/searchInfo";


export interface IAction<T> {
  type: string,
  payload: T,
}

export type payloadType = ArticleInfo[] | ISearch | boolean | number;

export const setArticles= (result: ArticleInfo[]):IAction<payloadType> => {
  return{
    type: 'SET_ARTICLES',
    payload: result,
  }
}

export const setSearch = (result: ISearch):IAction<payloadType> => {
  return{
    type: 'SET_SEARCH',
    payload: result,
  }
}

export const loading = (result: boolean):IAction<payloadType> => {
  return{
    type: 'LOADING',
    payload: result,
  }
}

export const getTotalResults = (result: number):IAction<payloadType> => {
  return{
    type: 'TOTAL_RESULTS',
    payload: result,
  }
}

export const getArticles = (params: ISearch):Promise<AxiosResponse<any>> => {
  const url = `v2/everything?q=${params.searchValue}&apiKey=${API_KEY}&sortBy=${params.sortBy
  }&pageSize=${params.amount}&page=${params.page}`;

  return axiosInstance.get(url);
}