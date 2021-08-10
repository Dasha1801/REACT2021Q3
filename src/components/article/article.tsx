import React, {FC, useState} from 'react';
import { ArticleInfo } from '../../shared/articleInfo';
import './article.css';

type SortType = 'asc' | 'desc' | 'unsorted';

export const Article:FC<{articles:ArticleInfo[]}> = ({articles}) => {
  const [sortBy, setSortBy] = useState<SortType>('unsorted');

  const handleSort = () => {
    switch(sortBy){
      case 'asc':
        setSortBy('desc');
        break;
      case 'desc':
        setSortBy('unsorted');
        break;
      case 'unsorted':
        setSortBy('asc');
        break;
      default:
        break;
    }
  }
 
  return (
    <div className='wrapper'>
      <table>
        <tr>
        <td>Title</td>
        <td>Author</td>
        <td>Published At
          <button type='button' onClick={handleSort}>{sortBy}</button>
        </td>
        <td>Description</td>
        <td>Content</td>
        <td>Image</td>
        </tr>
        {articles.map(({title, author,publishedAt, content, description, urlToImage}, index) => {
          return <tr key={index}>
            
            <td>{title}</td>
            <td>{author}</td>
            <td>{publishedAt}</td>
            <td>{description}</td>
            <td>{content}</td>
            <td>
            <img src={urlToImage} width={200}></img>
            </td>
            </tr>
        })}

      </table>
    </div>
  )
}