import { renderWithRouter, screen } from './testUtils';
import App from './App';

describe('<App />', () => {
  it('routes to all Orders at /orders', () => {
    renderWithRouter(<App />, {route: '/orders'});
    const title = screen.getByRole('heading', {name: /All Orders/});
    expect(title).toBeInTheDocument();
  });

  it('routes to all an Order page at /orders/:id', () => {
    renderWithRouter(<App />, {route: '/orders/1'});
    const title = screen.getByRole('heading', {name: /Order 1/});
    expect(title).toBeInTheDocument();
  });

  it('redirects a deprecated route', () => {
    renderWithRouter(<App />, {route: '/deprecated'});

    const title = screen.getByRole('heading', {name: /Home/});
    expect(title).toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });
});
