import React, { ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../redux/store';
import { ISearch } from '../../shared/searchInfo';
import { setSearch, loading, getArticles, setArticles, getTotalResults } from '../../redux/action';
import './search.css';


export const Search:React.FC = ():JSX.Element => {
  const isLoadingParams = useSelector<IStore, boolean>(state => state.isLoading);
  const dispatch = useDispatch();
  const searchParams = useSelector<IStore, ISearch>(state => state.search);

  const handleSubmit = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    dispatch(setSearch({...searchParams, searchValue: value}));
  }

  const formHandler = async (e:ChangeEvent<HTMLFormElement>) => {
    const isLoad = true;
    e.preventDefault();
    dispatch(loading(isLoad));
    try{
      const params = {
        searchValue: searchParams.searchValue,
        sortBy: searchParams.sortBy,
        amount: searchParams.amount,
        page: searchParams.page};
      dispatch(setSearch(params));

      const res = await getArticles(params);
      dispatch(setArticles(res.data.articles));

      const allPage = Math.ceil(res.data.totalResults/searchParams.amount);
      dispatch(getTotalResults(allPage));
    }
    catch(Error){
      console.error(Error);
    }
    finally{
      const noIsLoad = false;
      dispatch(loading(noIsLoad));
    }
  }

  return(
    <div className='container'>
    <form className='searchForm' onSubmit={formHandler}>
      <button className='btnSearch' type='submit' disabled={isLoadingParams}></button>
      <label htmlFor='search' className='search'>
      <input type='text' className='entryField' value={searchParams.searchValue} onChange={handleSubmit} />
      </label>
    </form>
  </div>
  )
}