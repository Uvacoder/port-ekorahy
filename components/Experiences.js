import React from 'react';
import { BiNetworkChart } from "react-icons/bi";
import SubAbout from './SubAbout';

function Experiences() {
  return (
    <section id="experiences">
      <h1 className="text-lg font-Kanit font-bold">Work Experiences
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