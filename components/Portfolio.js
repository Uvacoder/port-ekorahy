import React from 'react';
import BtnCategory from './BtnCategory';

function Portfolio() {
  return (
    <section id="portfolio" className="pt-20">
      <div>
        <h1 className="text-center font-bold text-xl">Portfolio</h1>
        <div className="flex items-center justify-center mt-4">
          <BtnCategory>All</BtnCategory>
          <BtnCategory>Web</BtnCategory>
          <BtnCategory>Mobile</BtnCategory>
          <BtnCategory>Desktop</BtnCategory>
          <BtnCategory>Design</BtnCategory>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;