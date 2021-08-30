import React from 'react';
import {ArticleInfo} from '../../shared/articleInfo';
import './articleItem.css';

interface InfoItem{
  info: ArticleInfo
}

export const ArticleItem:React.FC<InfoItem>= ({info}) => {

  return(
    <>
    <div className='container-item'>
      <div>
          <h4 className='titleH4'>{info.title}</h4>
          <h5 className='titleH5'>Author: {info.author}</h5>
          <h5 className='titleH5'>{info.publishedAt}</h5>
          <p className='text'><span className='titleText'>Description:</span> {info.description}</p>
      </div>
      <div> <img src={info.urlToImage} className='image' data-testid='img-url'></img></div>
    </div>
    </>
  )
}