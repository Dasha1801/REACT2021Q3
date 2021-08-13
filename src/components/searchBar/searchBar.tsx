import React from 'react';
import './searchBar.css';


export function SearchBar():JSX.Element{
  return (
    <div className={'container'}>
      <input className='input' type='text' />
    </div>
  );
}