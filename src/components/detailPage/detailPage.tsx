import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance, { API_KEY } from '../../services/api';
import { ArticleInfo } from '../../shared/articleInfo';

import './detailPage.css';


export const DetailPage:React.FC= () => {
  const [detailInfo, setDetailInfo] = useState<ArticleInfo>({} as ArticleInfo);
  const history = useHistory();

  const getDetail = async () => {
    const hash = history.location.pathname.slice(9);
    const res = await axiosInstance.get(`v2/everything?qInTitle=${hash}&apiKey=${API_KEY}`);
    const pathArticle = res.data.articles[0];
    setDetailInfo(pathArticle);
  }

  useEffect(() => {
    getDetail();
  }, []);

  return(
    <div className='detail-item'>
      <h4 className='titleH4' data-testid='title'>{detailInfo.title}</h4>
      <img src={detailInfo.urlToImage} className='image'></img>
      <h5 className='titleH5'>Author: {detailInfo.author}</h5>
      <h5 className='titleH5'>{detailInfo.publishedAt}</h5>
      <h5 className='titleH5'>URL: {detailInfo.url}</h5>
      <p className='text'><span className='titleText'>Description:</span> {detailInfo.description}</p>
      <p className='text'>{detailInfo.content}</p>
    </div>
  )
}