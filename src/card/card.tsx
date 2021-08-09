import React from 'react';
import './card.css';

export const Card = ({item}): JSX.Element => {

  return(
      <div className='card'>
        <h5 className='formInfo'>Name: <span>{item.firstName}</span></h5>
        <h5 className='formInfo'>Surname: <span>{item.lastName}</span></h5>
        <h5 className='formInfo'>Birth date: <span>{item.birthDate}</span></h5>
        <h5 className='formInfo'>Country: <span>{item.country}</span></h5>
        <h5 className='formInfo'>Agree:<span>{item.agree}</span></h5>
      </div>
  )
}

