import { render, screen } from '@testing-library/react';
import Updates from './Updates';
import content from '../content';

test('shows external publications newest first with the selected date language', () => {
  render(<Updates t={content.no} items={[
    { title: 'Older article', url: 'https://medium.com/@example/older', source: 'Medium', date: '2025-01-01' },
    { title: 'Recent article', url: 'https://medium.com/@example/recent', source: 'Medium', date: '2026-11-10', summary: 'A short introduction.' },
  ]} />);
  const links = screen.getAllByRole('link');
  expect(links[0]).toHaveTextContent('Recent article');
  expect(links[0]).toHaveAttribute('href', 'https://medium.com/@example/recent');
  expect(links[0]).toHaveAttribute('target', '_blank');
  expect(screen.getByText('A short introduction.')).toBeInTheDocument();
  expect(document.querySelector('time')).toHaveAttribute('dateTime', '2026-11-10');
});
