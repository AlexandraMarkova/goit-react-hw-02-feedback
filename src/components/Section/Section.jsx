import React from 'react';
// import './Container.modules.css';

const Section = ({ children, title }) => (
  <section>
    <h1>{title}</h1>
    {children}
  </section>
);

export default Section;
