import Image from 'next/image';
import React from 'react';
import Education from './Education';
import Experiences from './Experiences';

function About() {
  return (
    <section id="about" className="pt-20 mx-4">
      <div className="flex flex-wrap">
        <div className="w-full flex items-center justify-center md:w-1/4 md:justify-start">
          <div className="inline-block">
            <Image src="/profile4.jpg" height={150} width={150} className="rounded-full" alt="Profile Image" />
          </div>
        </div>
        <div className="w-full self-center mt-2 md:w-3/4 md:mt-0">
          <h1 className="font-semibold font-Kanit text-lg lg:text-2xl">About Me</h1>
          <p className="text-secondary font-Quicksand text-sm mt-2 leading-relaxed lg:text-lg">{`Hi! 👋, I'm Eko Rahayu Widodo a professional Front-End Web Developer from Jakarta, Indonesia. Someone who is highly motivated to continue to grow, likes challenges and able to work in a team or individually. I always give the best effort for each projects I did and I give a solution with my creative app.`}</p>
        </div>
      </div>
      <div className="flex flex-wrap lg:mt-8">
        <div className="w-full mt-2 md:mt-6 lg:w-1/2">
          <Education />
        </div>
        <div className="w-full mt-4 md:mt-6 lg:w-1/2">
          <Experiences />
        </div>
      </div>
    </section>
  );
}

export default About;