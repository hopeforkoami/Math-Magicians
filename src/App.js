import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Calcul from './pages/Calcul';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/calcul"
        element={<Calcul />}
      />
      <Route
        path="/quote"
        element={<Quote />}
      />
    </Routes>
  </Router>

);

export default App;
