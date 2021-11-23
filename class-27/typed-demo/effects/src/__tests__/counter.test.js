import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from '../counter/Counter';

describe('testing the Counter component', () => {
  it('Should render initial text', () => {
    render(<Counter />);
    
    const initialText = screen.queryByText('Current Count: 0');
    expect(initialText).toBeInTheDocument();
  });

  it('If button is clicked, count changes', () => {
    render(<Counter />);

    const button = screen.getByText('Up');
    fireEvent.click(button);
    const updatedText = screen.getByTestId('count-results');
    expect(updatedText).toHaveTextContent('1');
  });
});
