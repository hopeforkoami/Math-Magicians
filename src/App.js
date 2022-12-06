import React from 'react';
import {
  useRoutes,
} from 'react-router-dom';
import Home from './pages/Home';
/* import Calcul from './pages/Calcul';
import Quote from './pages/Quote'; */
import './App.css';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
  ]);
  return routes;
};

export default App;
