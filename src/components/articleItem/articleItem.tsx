import React from 'react';
import {ArticleInfo} from '../../shared/articleInfo';
import './articleItem.css';

interface InfoItem{
  info: ArticleInfo
}

export const ArticleItem:React.FC<InfoItem>= ({info}, index) => {
 

  
  return(
    <div className='container-item' key={index}>
      <div>
          <h4 className='titleH4'>{info.title}</h4>
          <h5 className='titleH5'>Author: {info.author}</h5>
          <h5 className='titleH5'>{info.publishedAt}</h5>
          <p className='text'><span className='titleText'>Description:</span> {info.description}</p>
          <p className='text'>{info.content}</p>
      </div>
      <div> <img src={info.urlToImage} className='image'></img></div>
    </div>
  )
}

