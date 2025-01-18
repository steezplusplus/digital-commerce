import '@testing-library/jest-dom';
import React, { JSX } from 'react';

// Mock Next.js hooks from `next/navigation`
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: '',
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
  };
});

jest.mock('lucide-react', () => ({
  __esModule: true,
  ShoppingCart: function ShoppingCartIcon(): JSX.Element {
    return React.createElement('div', { 'data-testid': 'shopping-cart-icon' }, 'Cart Icon');
  },
  ShoppingBag: function ShoppingBagIcon(): JSX.Element {
    return React.createElement('div', { 'data-testid': 'shopping-bag-icon' }, 'Shopping Bag Icon');
  },
  SearchIcon: function SearchIcon(): JSX.Element {
    return React.createElement('div', { 'data-testid': 'search-icon' }, 'Search Icon');
  },
  Loader: function LoaderIcon(): JSX.Element {
    return React.createElement('div', { 'data-testid': 'loader-icon' }, 'Loader Icon');
  },
  X: function XIcon(): JSX.Element {
    return React.createElement('div', { 'data-testid': 'x-icon' }, 'X Icon');
  },
}));
