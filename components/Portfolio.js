import React from 'react';
import ItemPortfolio from './ItemPortfolio';

function Portfolio() {
  return (
    <section id="portfolio" className="pt-16">
      <div className="py-10">
        <h1 className="text-center font-bold text-lg font-Kanit">Portfolio</h1>
        {/*
        <div className="flex items-center justify-center my-4">
          <BtnCategory>All</BtnCategory>
          <BtnCategory>Web</BtnCategory>
          <BtnCategory>Mobile</BtnCategory>
          <BtnCategory>Desktop</BtnCategory>
          <BtnCategory>Design</BtnCategory>
        </div>
        */}
        <div id="itemPortfolioSection" className="grid grid-col-1 gap-2 mt-2 lg:grid-flow-col place-items-center">
          <ItemPortfolio />
          <ItemPortfolio />
          <ItemPortfolio />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;