import React from 'react';
import SubAbout from './SubAbout';

function Education() {
  return (
    <section id="education">
      <h1 className="text-md font-bold">Education
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