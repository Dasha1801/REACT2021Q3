import React from 'react';
import './card.css';


export function Card(info) {
  return (
    <div className={'card'}>
      <div className={'card__image a'}>
        <img src={info.img}/>
      </div>
      <div className={'card__content'}>
        <div className={'card__title'}>{info.title}</div>
        <div className={'card__text'}>{info.text}</div>
        <a href="#" className={'card__readmore'}>Read More</a>
      </div>
    </div>
  );
}



