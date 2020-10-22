import React from 'react';
import { render } from '@testing-library/react'

import App from './App';

test('load and displays elements', () => {
  const { getByText, getByTestId } = render(<App />);
  const headerElement = getByText('Welcome to the user management platform!');
  expect(headerElement).toBeInTheDocument();
  const addButton = getByTestId('addButton');
  expect(addButton).toBeInTheDocument();
});
