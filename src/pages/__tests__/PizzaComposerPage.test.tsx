import React from 'react';
import { render, screen } from '@testing-library/react';
import PizzaComposerPage from '../PizzaComposerPage';

describe('<PizzaComposerPage>', () => {
  it('renders correctly', () => {
    render(<PizzaComposerPage />);
    expect(screen.getByRole('heading', { name: 'Pizza Creator' })).toBeInTheDocument();
  });
});
