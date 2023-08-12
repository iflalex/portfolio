import React from 'react';
import { render } from '@testing-library/react';
import App from '../router/Router';

test('renders learn react link', () => {
  render(<App />);
  const demo = document.querySelector<HTMLElement>('#demo');
  expect(demo).not.toBeNull();
});
