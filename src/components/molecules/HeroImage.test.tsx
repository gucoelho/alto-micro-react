import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';

import HeroImage from './HeroImage';

describe('HeroImage', () => {
  const imageUrl = 'https://example.com/image.jpg';
  const title = 'Example Title';
  const subtitle = 'Example Subtitle';

  test('renders the image with correct source and alt text', () => {
    render(<HeroImage imageUrl={imageUrl} title={title} subtitle={subtitle} />);

    const imageElement = screen.getByAltText('Hero Image') as HTMLImageElement;
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(imageUrl);
  });

  test('renders the title and subtitle', () => {
    render(<HeroImage imageUrl={imageUrl} title={title} subtitle={subtitle} />);

    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('applies correct CSS classes', () => {
    render(<HeroImage imageUrl={imageUrl} title={title} subtitle={subtitle} />);

    const imageElement = screen.getByAltText('Hero Image');
    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);

    expect(imageElement).toHaveClass('w-full h-full object-cover');
    expect(titleElement).toHaveClass('p-0 m-0 text-white font-bold text-5xl');
    expect(subtitleElement).toHaveClass('p-0 m-0 text-white text-3xl');
  });
});
