import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Results from '../results/Results';

describe('testing the results component', () => {
  it('should render data.text', () => {

    let dataProp = {text: 'test'};

    render(<Results data={dataProp}/>);
    let displayText = screen.getByTestId('data');
    expect(displayText).toHaveTextContent(dataProp.text);
  });
});
