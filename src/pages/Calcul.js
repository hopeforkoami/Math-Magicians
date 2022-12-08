import React from 'react';
import Calculator from '../components/Calculator';
import Header from '../components/Header';

function Calcul() {
  return (
    <div className="container">
      <Header selected_menu="home" />
      <section className="section calculator_section">
        <h1>Let&apos;s do some math!</h1>
        <div className="calculator section_content">
          <Calculator />
        </div>
      </section>
    </div>
  );
}

export default Calcul;
