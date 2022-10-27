import React from 'react';
import SubAbout from './SubAbout';

function Education() {
  return (
    <section id="education">
      <h1 className="text-lg font-Kanit font-semibold">Education
      </h1>
      <div className="flex flex-col">
        <SubAbout title="Universitas Persada Indonesia Y.A.I" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
        <SubAbout title="Dicoding Indonesia" subTitle="Studi Independen Kampus Merdeka Batch 2 Program - Learning Path Front-End Web and Back-End Developer" date="Feb 2022 - Aug 2022" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Online Learning" />
        <SubAbout title="SMK Negeri Ngraho" subTitle="Computer and Network Engineering" date="2015 - 2018" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Bojonegoro, Indonesia" />
      </div>
    </section>
  );
}

export default Education;