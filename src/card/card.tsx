import React from 'react';
import { formPropType } from '../shared/formPropType';
import './card.css';

interface ICard{
  item: formPropType
}

export const Card:React.FC<ICard> = ({item}): JSX.Element => {

  return(
      <div className='card'>
        <h5 className='formInfo'>Name: <span>{item.firstName}</span></h5>
        <h5 className='formInfo'>Surname: <span>{item.lastName}</span></h5>
        <h5 className='formInfo'>Birth date: <span>{item.birthDate}</span></h5>
        <h5 className='formInfo'>Country: <span>{item.country}</span></h5>
        <h5 className='formInfo'>Gender: <span>{item.gender}</span></h5>
      </div>
  )
}

