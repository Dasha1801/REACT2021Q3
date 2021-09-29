import { IAction } from './action';
import { initStore, IStore } from './store';



export const reducer = (state = initStore, action: IAction<any>): IStore => {
  switch(action.type){
      case 'SET_ARTICLES':
        return {...state, articles: action.payload};
      case 'SET_SEARCH':
        return {...state, search: action.payload};
      case 'LOADING':
        return {...state, isLoading: action.payload};
      case 'TOTAL_RESULTS':
        return {...state, totalResults: action.payload}
    default:
      return state
  }
}
