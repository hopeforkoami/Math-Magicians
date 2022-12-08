import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';

test('render Home component', () => {
  const { asFragment } = render(<Router><Home/></Router>);
  expect(asFragment()).toMatchSnapshot();
});
