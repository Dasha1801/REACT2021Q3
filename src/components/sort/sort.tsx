import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/action';
import { IStore } from '../../redux/store';
import { ISearch } from '../../shared/searchInfo';
import { SortType } from '../../shared/sortType';
import './sort.css';

const Sort:React.FC = ():JSX.Element => {
  const dispatch = useDispatch();
  const searchParams = useSelector<IStore, ISearch>(state => state.search);
  const allPage = useSelector<IStore, number>(state => state.totalResults);
  const handleAmount = (e:ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    dispatch(setSearch({...searchParams, amount: +value}));
  }
  return (
    <div className='wrapper-sort'>
    <label>
    Number of items on page: 
      <select className='' name='country' value={searchParams.amount} onChange={handleAmount} data-testid='countItem'>
        <option>5</option>
        <option data-testid='count8'>8</option>
        <option data-testid='count10'>10</option>
      </select>
    </label>
    <label className='sort'>
      <input type='radio' value={SortType.relevancy} checked={searchParams.sortBy === SortType.relevancy} onChange={()=> 
       dispatch(setSearch({...searchParams, sortBy: SortType.relevancy}))}></input>
      relevancy 
    </label>
    <label className='sort'>
      <input type='radio' value={SortType.popularity} checked={searchParams.sortBy === SortType.popularity} onChange={()=> dispatch(setSearch({...searchParams, sortBy: SortType.popularity}))}></input>
      popularity 
    </label>
    <label className='sort'> 
      <input type='radio' value={SortType.publishedAt} checked={searchParams.sortBy === SortType.publishedAt} onChange={()=> dispatch(setSearch({...searchParams, sortBy: SortType.publishedAt}))}></input>
      published at
    </label>
    <div>Total of pages<span className='allPages'>{allPage}</span></div>
  </div>
  )
}


export default Sort;