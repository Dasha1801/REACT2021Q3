import React from 'react';
import './cards.css';
import { allCards} from '../../shared/cardInfo';
import {Card} from '../card/card';

const renderCards = [];

allCards.forEach(info => {
  renderCards.push(Card(info));
});

export function Cards(){
  return (
    <div className={'wrapperCards'}>
      {renderCards}
    </div>
  );
}
