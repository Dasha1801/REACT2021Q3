import React from "react";
import {DetailPage} from "../../src/components/detailPage/detailPage";
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';

const info = {
  author: 'Simon',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
  publishedAt: '26.08.2021',
  title: 'Lorem ipsum dolor',
  urlToImage: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
  url: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
  source: {id: '123', name: 'Simon'}
}


const mockAxios: any = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: info }));


it('Link text in component App',async () => {
 let res; 
 mockAxios.get().then(value => {
   res = value;
   const {getByTestId} = render(<DetailPage/>);
const title = getByTestId('title');
title.textContent = res.data.title;
expect(title.textContent).toBe('Lorem ipsum dolor');
 });
});