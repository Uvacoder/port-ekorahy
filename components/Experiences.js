import React from 'react';
import { BiNetworkChart } from "react-icons/bi";
import SubAbout from './SubAbout';

function Experiences() {
  return (
    <section id="experiences">
      <h1 className="text-lg font-Kanit font-bold">Work Experiences
      </h1>
      <div className="flex flex-col">
        <SubAbout title="Freelance" subTitle="Front-End Web Developer" date="Oct 2022 - Now" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Jakarta, Indonesia" />
        <SubAbout title="PT. Sri Rejeki Isman Tbk" subTitle="Production Operator in Department Spinning" date="Sep 2018 - Feb 2019" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Sukoharjo, Indonesia" />
        <SubAbout title="CV. Citra Mandiri Komputindo (Internship) " subTitle="Computer technician" date=" - " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium adipisci labore libero facere illo atque soluta pariatur ratione quia!" place="Bojonegoro, Indonesia" />
      </div>
    </section>
  );
}

export default Experiences;