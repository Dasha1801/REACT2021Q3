import {render, screen} from '@testing-library/react';
import { ArticleItem } from '../../src/components/articleItem/articleItem';
import '@testing-library/jest-dom';
import React from 'react';
import { ArticleInfo } from '../../src/shared/articleInfo';

const info:ArticleInfo = {
  author: 'Simon',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
  publishedAt: '26.08.2021',
  title: 'Lorem ipsum dolor',
  urlToImage: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.',
  url: 'https://i2.wp.com/dogcentr.ru/wp-content/uploads/2016/10/33-1.jpg',
  source: {id: '123', name: 'Simon'}
}

it('Text component articleItem', () => {
  render(<ArticleItem info = {info}/>);
  const elTitle = screen.getByText('Lorem ipsum dolor');
  const elAuthor = screen.getByText('Author: Simon');
  const elPublishedAt = screen.getByText('26.08.2021');
  const elDescription = screen.getByText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error quibusdam sed.');
  expect(elTitle.textContent).toBe(info.title);
  expect(elAuthor.textContent).toBe(`Author: ${info.author}`);
  expect(elPublishedAt.textContent).toBe(info.publishedAt);
  expect(elDescription.textContent).toBe(`Description: ${info.description}`);
 });

it('Path to image', () => {
  const el = render(<ArticleItem info = {info}/>);
  const elUrl = el.getByTestId('img-url');
  expect(elUrl.getAttribute('src')).toBe(info.urlToImage);
 });
