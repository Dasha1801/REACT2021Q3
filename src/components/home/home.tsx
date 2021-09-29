import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../redux/store';
import { Article } from '../article/article';
import { Search } from '../search/search';
import Sort  from '../sort/sort';
import './home.css';



export const Home:React.FC =():JSX.Element =>{
  const isLoadingParams = useSelector<IStore, boolean>(state => state.isLoading);
  return (
    <div>
      <Search/>
      <Sort/>
       {isLoadingParams ?  <div className='loading'>Loading...</div> : <Article/>}
    </div>
     
  );
}