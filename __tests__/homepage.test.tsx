import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from 'app/(routes)/page';

describe('Homepage', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
