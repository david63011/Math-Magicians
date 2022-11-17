/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('Buttons runs operations and updates the UI', () => {
  const component = render(<Calculator />);

  const grid = component.container.querySelector('.grid');
  expect(grid).toHaveTextContent('0');

  const btn4 = component.container.querySelector('.btn4');
  expect(btn4).toHaveTextContent('4');

  const sumButton = component.getByText('+');
  const equalButton = component.getByText('=');

  fireEvent.click(btn4);
  fireEvent.click(sumButton);
  fireEvent.click(btn4);
  fireEvent.click(equalButton);

  expect(outputBar).toHaveTextContent('8')
});