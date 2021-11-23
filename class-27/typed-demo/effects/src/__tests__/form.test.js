import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../form/Form';
describe('Testing our form component', () => {
  it('Should use our callback on submit', () => {

    let callback = jest.fn();

    render( <Form onSubmit={callback}/> );

    let button = screen.getByRole('button');
    let input = screen.getByRole('textbox');
    // fireEvent.onChange('A');
    fireEvent.click(button);
    // expect(callback).toHaveBeenCalledWith({text: 'A'});
    expect(callback).toHaveBeenCalled();
  });
});
