import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Calcul from '../pages/Calcul';

test('render Calcul component', () => {
  const { asFragment } = render(<Router><Calcul /></Router>);
  expect(asFragment()).toMatchSnapshot();
});
test('testing user interaction with buttons', () => {
  const clickHandler = jest.fn();
  render(<button type="button" value={5} onClick={clickHandler}>5</button>);
  const btn = screen.getByText('5');
  userEvent.click(btn);
  expect(clickHandler).toHaveBeenCalled();
});
