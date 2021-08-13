import React, {ChangeEvent, useState} from 'react';
import axiosInstance from '../../services/api';
import { ArticleInfo } from '../../shared/articleInfo';
import { SortType } from '../../shared/sortType';
import { Article } from '../article/article';
import './search.css';

const API_KEY = 'dce1ecff0d944119bd054b7f18902c8e';

export function Search():JSX.Element{

  const[searchValue, setSearchValue] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const[articles, setArticles] = useState<ArticleInfo[]>([]);
  const[sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const[page, setPage] = useState<number>(1);
  const[amount, setAmount] = useState<number>(10);
  const[allPage, setAllPage] = useState<number>(0);
  

  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const res = await axiosInstance.get(`v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy
      }&pageSize=${amount}&page=${page}`);
      setArticles(res.data.articles);
      setAllPage(Math.ceil(res.data.totalResults/amount));
    }
    catch(Error){
      console.error(Error);
    }
    finally{
      setIsLoading(false);
    }
    
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchValue(value);
  }

  const handleAmount = (e:ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    setAmount(+value);  
  }

  return (
 <>
    <div className={'container'}>
      <form className='searchForm' onSubmit={handleSubmit}>
        
        <button className='btnSearch' type='submit' disabled={isLoading}></button>
        <label htmlFor='search' className='search'>
        <input type='text' className='entryField' value={searchValue} onChange={handleChange} />
        </label>
      </form>
    </div>
    <div className='loading'> {isLoading ? 'Loading...' : ''}</div>
    <div className='wrapper-sort'>
      <label>
      Number of items on page: 
        <select className='' name='country' value={amount} onChange={handleAmount}>
          <option>5</option>
          <option>8</option>
          <option>10</option>
        </select>
      </label>
      <label className='sort'>
        <input type='radio' value={SortType.relevancy} checked={sortBy === SortType.relevancy} onChange={()=> setSortBy(SortType.relevancy)}></input>
        relevancy 
      </label>
      <label className='sort'>
        <input type='radio' value={SortType.popularity} checked={sortBy === SortType.popularity} onChange={()=> setSortBy(SortType.popularity)}></input>
        popularity 
      </label>
      <label className='sort'> 
        <input type='radio' value={SortType.publishedAt} checked={sortBy === SortType.publishedAt} onChange={()=> setSortBy(SortType.publishedAt)}></input>
        published at
      </label>
      <div>Total of pages<span className='allPages'>{allPage}</span></div>
    </div>
     <Article articles={articles} page={page} onChangePage={(numberPage:number) => setPage(numberPage)}/>
    </>
   
  );
}