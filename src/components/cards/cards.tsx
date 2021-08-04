import React from 'react';
import './cards.css';
import { allCards} from '../../shared/cardInfo';
import {Card} from '../card/card';

const renderCards: Array<JSX.Element>= [];

allCards.forEach(info => {
  renderCards.push(Card(info));
});

export function Cards():JSX.Element{
  return (
    <div className={'wrapperCards'}>
      {renderCards}
    </div>
  );
}
