import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
import SubAbout from './SubAbout';

function Education() {
  return (
    <section id="education" className="pr-6">
      <h1 className="flex items-center text-xl font-bold">
        <span className="inline-block text-4xl rounded-lg items-center text-primary mr-2"><FaGraduationCap /></span> Education
      </h1>
      <div className="flex flex-col">
        <SubAbout title="Universitas Persada Indonesia YAI" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
        <SubAbout title="Universitas Persada Indonesia YAI" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
        <SubAbout title="Universitas Persada Indonesia YAI" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
      </div>
    </section>
  );
}

export default Education;