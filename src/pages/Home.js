import React from 'react';
import Header from '../components/Header';

const Home = () => (
  <div className="container">
    <Header selected_menu="home" />
    <section className="section home_section">
      <h1>Welcome to our page!</h1>
      <div className="section_content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, qui
          s nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.Duis aute i
          rure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
          o eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos
          trud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.Duis aute irur
          e dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatu
          r. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt molli
          t anim id est laborum.
        </p>
      </div>

    </section>
  </div>
);

export default Home;
