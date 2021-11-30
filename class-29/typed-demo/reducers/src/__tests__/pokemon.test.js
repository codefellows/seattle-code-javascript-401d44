import { rest } from "msw";
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Pokemon from '../pokemon/Pokemon.js';

// setup our mocked API endpoints
const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.json({
        count: 0,
        results: [{name: 'Jacob'}],
      })
    )
  }),
);

// listen for requests from our mocked server
beforeAll(() => {
  server.listen();
});

describe('Testing the pokemon component', () => {
  it('should display results from the pokeapi', async () => {


    // should render something
    render(<Pokemon />);

    // what is rendered should include and elements with the test id = 'results'
    await waitFor( () => {
      screen.getByTestId('results');
      screen.getByTestId('Jacob');
    });

    // results should be present
    expect(screen.getByTestId('results')).toBeInTheDocument();
    expect(screen.getByTestId('Jacob')).toBeInTheDocument();
  });
});
