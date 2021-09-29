import {fireEvent, render} from '@testing-library/react';
import {Search} from '../../src/components/search/search';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../src/redux/store';


it("Test form submit and validation", () => {
  const { getByTestId } = render(<Provider store={store}><Search /></Provider>);
  const nameInput = getByTestId('input');

  fireEvent.change(nameInput, { target: { value: 'dog' } });
  fireEvent.click(getByTestId('btn'));
});