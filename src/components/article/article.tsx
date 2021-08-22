import React, {FC, useEffect, useState, ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearch } from '../../redux/action';
import { IStore } from '../../redux/store';
import { ISearch } from '../../shared/searchInfo';
import { ArticleInfo } from '../../shared/articleInfo';
import { ArticleItem } from '../articleItem/articleItem';
import './article.css';

export const Article:FC = () => {

const search = useSelector<IStore, ISearch>(state => state.search);
const dispatch = useDispatch();

const articles = useSelector<IStore, ArticleInfo[]>(state => state.articles);

const[artPage, setArtPage] = useState<number | string>('');

useEffect(() => {
  setArtPage(search.page);
}, [search.page]);

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  const regexp = /\d+/;
  const matchedValue = value.match(regexp);
  if (matchedValue) {
    const newValue = +matchedValue[0];
    dispatch(setSearch({...search, page: newValue}))
    setArtPage(newValue);
  } else {
    setArtPage('');
  }
};
  return (
    <div className='wrapper'>
     {articles.length ? (
      <div className='wrapper-article'>
        {articles.map((info, index) => {
          const pathItem = '/details/' + info.title.replace(/[\ \/]/g,'+');
          return (
            <Link key={index} className='article-item' to={pathItem}>
              <ArticleItem info={info}/>
            </Link>
        );
        })}
         
          <input className='numberPage' type='text' value={artPage} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}