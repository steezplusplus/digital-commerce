import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/(routes)/search/page';

describe('Search Page', () => {
  it('Renders list of products', async () => {
    render(await Page({ searchParams: {} }));
    const productList = screen.getByRole('list');
    const productCards = screen.getAllByRole('listitem');
    expect(productList).toBeInTheDocument();
    expect(productCards.length).toBeGreaterThan(0);
  });
});
