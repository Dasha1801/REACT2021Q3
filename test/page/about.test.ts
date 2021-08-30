import {render} from '@testing-library/react';
import About from '../../src/components/about/about';


it('Text on page about', () => {
  const el = render(About());
  const elText = el.getByTestId('text-pageAbout');
  expect(elText.textContent).toBe('Hello everyone!');
 });