import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../services/api';
import { ArticleInfo } from '../../shared/articleInfo';
import { API_KEY } from '../search/search';
// import './articleItem.css';


export const DetailPage:React.FC= () => {
  const [detailInfo, setDetailInfo] = useState<ArticleInfo>({} as ArticleInfo);
  const history = useHistory();

  const getDetail = async () => {
    const hash = history.location.pathname.slice(9);
    const res = await axiosInstance.get(`v2/everything?qInTitle=${hash}&apiKey=${API_KEY}`);
    setDetailInfo(res.data.articles[0]);
  }

  useEffect(() => {
    getDetail();
  }, []);

  return(

    <div className='container-item'>
      <div>
          <h4 className='titleH4'>{detailInfo.title}</h4>
          <h5 className='titleH5'>Author: {detailInfo.author}</h5>
          <h5 className='titleH5'>{detailInfo.publishedAt}</h5>
          <p className='text'><span className='titleText'>Description:</span> {detailInfo.description}</p>
          <p className='text'>{detailInfo.content}</p>
      </div>
      <div> <img src={detailInfo.urlToImage} className='image'></img></div>
    </div>
  )
}

