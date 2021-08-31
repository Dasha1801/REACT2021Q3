import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../src/components/app/app';
import React from 'react';
import { store } from '../../src/redux/store';

it('Link text on Main page', () => {
  const el = render(<Provider store={store}> <App/> </Provider>);
  const elLinkHome = el.getByText('Home');
  const elLinkAbout = el.getByText('About');
  expect(elLinkHome.textContent).toBe('Home');
  expect(elLinkAbout.textContent).toBe('About');
 });

