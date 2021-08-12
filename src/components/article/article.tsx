import React, {FC, useEffect, useState} from 'react';
import { ArticleInfo } from '../../shared/articleInfo';
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
      <div className='wrapper-table'>
        <table className='table'>
          <thead>
            <tr>
              <th className='cell'>Title</th>
              <th className='cell'>Author</th>
              <th className='cell'>Published At
              </th>
              <th className='cell'>Description</th>
              <th className='cell'>Content</th>
              <th className='cell'>Image</th>
            </tr>
          </thead>
          <tbody>
        {articles.map(({title, author,publishedAt, content, description, urlToImage}, index) => {
          return (<tr key={index}>
            
            <td className='cell'>{title}</td>
            <td className='cell'>{author}</td>
            <td className='cell'>{publishedAt}</td>
            <td className='cell'>{description}</td>
            <td className='cell'>{content}</td>
            <td className='cell'>
            <img src={urlToImage} width={200}></img>
            </td>
            </tr>
        );
        })}
        </tbody>
     </table>
          <input className='numberPage' type='text' value={artPage} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}