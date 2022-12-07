import React from 'react';
import Header from '../components/Header';

function Quote() {
  return (
    <div className="container">
      <Header selected_menu="home" />
      <section className="section quote_section">
        <div className="section_content">
          <p className="quote_citation">
            Mathematics is not about numbers, equations, computations, or algorithms: it is about
            understanding. –William Paul Thurston.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Quote;
