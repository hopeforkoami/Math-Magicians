import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Calcul from '../pages/Calcul';

test('render Calcul component', () => {
  const { asFragment } = render(<Router><Calcul /></Router>);
  expect(asFragment()).toMatchSnapshot();
});
