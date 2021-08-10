import React, {FC} from 'react';
import { ArticleInfo } from '../../shared/articleInfo';
import './article.css';


export const Article:FC<{articles:ArticleInfo[]}> = ({articles}) => {

  return (
    <div className='wrapper'>
     {articles.length ? <table>
        <tr>
        <td>Title</td>
        <td>Author</td>
        <td>Published At
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

      </table> : null}
    </div>
  )
}