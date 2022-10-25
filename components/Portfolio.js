import React from 'react';
import ItemPortfolio from './ItemPortfolio';

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100 pt-20">
      <div>
        <h1 className="text-center font-bold text-lg">Portfolio</h1>
        {/*
        <div className="flex items-center justify-center my-4">
          <BtnCategory>All</BtnCategory>
          <BtnCategory>Web</BtnCategory>
          <BtnCategory>Mobile</BtnCategory>
          <BtnCategory>Desktop</BtnCategory>
          <BtnCategory>Design</BtnCategory>
        </div>
        */}
        <div id="itemPortfolioSection" className="grid grid-col-1 gap-2 lg:grid-flow-col place-items-center">
          <ItemPortfolio />
          <ItemPortfolio />
          <ItemPortfolio />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;