import {fireEvent, render} from '@testing-library/react';
import { Provider } from 'react-redux';
import Sort from '../../src/components/sort/sort';
import React from 'react';
import { store } from '../../src/redux/store';

const el = render(<Provider store={store}> <Sort/> </Provider>);

test('Simulates selection', () => {
  const select = el.getByTestId('countItem');
  fireEvent.change(select, { target: { value: 8 } });
  const option8 = el.getByTestId('count8');
  const option10 = el.getByTestId('count10');
  expect(option8.click).toBeTruthy();
  fireEvent.change(select, { target: { value: 10 } });
  expect(option10.click).toBeTruthy();
});

test("radio test", () => {
  const { getByLabelText } = render(<Provider store={store}> <Sort/> </Provider>);
  const sort1 = getByLabelText('relevancy') as HTMLInputElement
  const sort2 = getByLabelText('popularity') as HTMLInputElement
  expect(sort1.checked).toEqual(false);
  expect(sort2.checked).toEqual(false);
  fireEvent.click(sort1);
  expect(sort1.checked).toEqual(true);
  fireEvent.click(sort2);
  expect(sort2.checked).toEqual(true);
});


