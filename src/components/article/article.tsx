import React, {FC, useEffect, useState, ChangeEvent} from 'react';
import { Link } from 'react-router-dom';
import { ArticleInfo } from '../../shared/articleInfo';
import { ArticleItem } from '../articleItem/articleItem';
import './article.css';




interface ArticleProps {
  articles: ArticleInfo[];
  page: number;
  onChangePage: (numberPage: number) => void;
}

export const Article:FC<ArticleProps> = ({articles, page, onChangePage}) => {

const[artPage, setArtPage] = useState<number | string>('');


useEffect(() => {
  setArtPage(page);
}, [page]);

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  const regexp = /\d+/;
  const matchedValue = value.match(regexp);
  if (matchedValue) {
    const newValue = +matchedValue[0];
    onChangePage(newValue);
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
          const pathItem = '/details/' + info.title.replace(/ /g,"+");
          
          
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