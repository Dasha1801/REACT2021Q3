import React from 'react';
import { SearchBar } from './components/searchBar/searchBar';
import {Cards} from './components/cards/cards';


export function App():JSX.Element{
  return (
    <><SearchBar /><Cards /></>
  );
}