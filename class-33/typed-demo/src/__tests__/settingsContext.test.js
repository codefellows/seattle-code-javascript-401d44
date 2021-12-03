import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// import my Context
import SettingsProvider, { SettingsContext } from '../context/settings';

describe('Testing our Settings Context', () => {

  let Test = () => (
    <SettingsContext.Consumer>
      {context => (
        <>
          <p data-testid="test">test</p>
          <p data-testid="hide">{JSON.stringify(context.hide)}</p>
          <p data-testid="sort">{context.sort}</p>
          <p data-testid="pagination">{context.pagination}</p>
        </>
      )}
    </SettingsContext.Consumer>
  )

  it('Should provide a readable hide, sort, and item number values', () => {

    // render our Context Provider
    render(
      <SettingsProvider>
        {/* render some consumer values. */}
        <Test />
      </SettingsProvider>
    )

    // expect the consumer to read the given provider values
    expect(screen.getByTestId('hide')).toHaveTextContent('false');
    expect(screen.getByTestId('sort')).toHaveTextContent('difficulty');
    expect(screen.getByTestId('pagination')).toHaveTextContent('3');
  });
});
