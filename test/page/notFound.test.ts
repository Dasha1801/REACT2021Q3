import {render} from '@testing-library/react';
import NotFound from '../../src/components/notFound/notFound';

const el = render(NotFound());
const elRoot = el.getByTestId('text-pageNotFound');

it('Count of children', () => {
  expect(elRoot.childElementCount).toBe(2);
 });

it('Text on page notFound', () => {
  expect(elRoot.firstChild.textContent).toBe('Not found');
  expect(elRoot.lastChild.textContent).toBe('404');
 });
