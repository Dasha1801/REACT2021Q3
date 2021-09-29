import {render} from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../src/components/app/app';
import React from 'react';
import { store } from '../../src/redux/store';

it('Link text in component App', () => {
  const el = render(<Provider store={store}><App/></Provider>);
  const elLinkAbout = el.getByText('About');
  const elLinkHome = el.getByText('Home');
  expect(elLinkAbout.textContent).toBe('About');
  expect(elLinkHome.textContent).toBe('Home');
 });

