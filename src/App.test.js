import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

beforeEach(() => localStorage.clear());

test('switches the page language and restores the saved choice', () => {
  const { unmount } = render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hei, jeg er');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hi, I’m');
  expect(document.documentElement.lang).toBe('en');
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  unmount();
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hi, I’m');
  fireEvent.click(screen.getByRole('button', { name: 'Bytt til norsk' }));
  expect(document.documentElement.lang).toBe('nb');
});

test('opens the mobile navigation and closes it after choosing a section', () => {
  render(<App />);
  const menu = screen.getByRole('button', { name: 'Åpne meny' });
  expect(menu).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(menu);
  expect(menu).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Erfaring' }));
  expect(menu).toHaveAttribute('aria-expanded', 'false');
});
