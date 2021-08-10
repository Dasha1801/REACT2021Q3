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


  const handleSubmit = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try{
      const res = await axiosInstance.get(`v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}`);
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
    
      <label>
      relevancy 
        <input type='radio' value={SortType.relevancy} checked={sortBy === SortType.relevancy} onChange={()=> setSortBy(SortType.relevancy)}></input>
      </label>
      <label>
      popularity 
        <input type='radio' value={SortType.popularity} checked={sortBy === SortType.popularity} onChange={()=> setSortBy(SortType.popularity)}></input>
      </label>
      <label>
      published at 
        <input type='radio' value={SortType.publishedAt} checked={sortBy === SortType.publishedAt} onChange={()=> setSortBy(SortType.publishedAt)}></input>
      </label>
     <Article articles={articles}/>
    </>
   
  );
}