import React from 'react';
import { BiNetworkChart } from "react-icons/bi";
import SubAbout from './SubAbout';

function Experiences() {
  return (
    <section id="experiences" className="lg:border-l pl-6 ">
      <h1 className="flex items-center text-xl font-bold">
        <span className="inline-block text-4xl rounded-lg items-center text-primary mr-2"><BiNetworkChart /></span> Work Experiences
      </h1>
      <div className="flex flex-col">
        <SubAbout title="Universitas Persada Indonesia YAI" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
        <SubAbout title="Universitas Persada Indonesia YAI" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
        <SubAbout title="Universitas Persada Indonesia YAI" subTitle="Informatic/Computer Science" date="2019 - 2023" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
      </div>
    </section>
  );
}

export default Experiences;