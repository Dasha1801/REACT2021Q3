import React, {ChangeEvent, useState} from 'react';
import axiosInstance from '../../services/api';
import { ArticleInfo } from '../../shared/articleInfo';
import { SortType } from '../../shared/sortType';
import { Article } from '../article/article';
import './search.css';

const API_KEY = '6acc09f802644746b9fafbaeda30a3d6';

export function Search():JSX.Element{

  const[searchValue, setSearchValue] = useState('');
  const[isLoading, setIsLoading] = useState(false);
  const[articles, setArticles] = useState<ArticleInfo[]>([]);
  const[sortBy, setSortBy] = useState<SortType>(SortType.popularity);
  const[page, setPage] = useState<number>(1);


  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const res = await axiosInstance.get(`v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy
      }&pageSize=10&page=${page}`);
      setArticles(res.data.articles);
    }
    catch(Error){
      console.error(Error);
    }
    finally{
      setIsLoading(true);
    }
    
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchValue(value);
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
    <div className='wrapper-sort'>
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
    </div>
     <Article articles={articles} page={page} onChangePage={(numberPage:number) => setPage(numberPage)}/>
    </>
   
  );
}