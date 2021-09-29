import React from 'react';
import './card.css';
import {CardInfo} from '../../shared/cardInfo';


export function Card(info:CardInfo): JSX.Element{
  return (
    <div className={'card'} key={info.id}>
      <div className={'card__image a'}>
        <img className='image' src={info.img}/>
      </div>
      <div className={'card__content'}>
        <div className={'card__title'}>{info.title}</div>
        <div className={'card__text'}>{info.text}</div>
        <a href="#" className={'card__readmore'}>Read More</a>
      </div>
    </div>
  );
}


