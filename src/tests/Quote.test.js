import { render } from '@testing-library/react';
import { BrowserRouter as Router,} from 'react-router-dom';
import Quote from '../pages/Quote';

test('render Quote component', () => {
  const { asFragment } = render(<Router><Quote /></Router>);
  expect(asFragment()).toMatchSnapshot();
});
