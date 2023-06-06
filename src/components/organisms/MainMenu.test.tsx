import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainMenu from './MainMenu';
import { describe, test } from 'vitest';

describe('MainMenu', () => {
  test('renders all menu items', () => {
    render(
      <Router>
        <MainMenu />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders the logo', () => {
    render(
      <Router>
        <MainMenu />
      </Router>
    );

    expect(screen.getByTestId('blog-logo')).toBeInTheDocument();
  });

  test('renders the search bar', () => {
    render(
      <Router>
        <MainMenu />
      </Router>
    );

    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
  });
});
