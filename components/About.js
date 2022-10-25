import Image from 'next/image';
import React from 'react';
import Education from './Education';
import Experiences from './Experiences';

function About() {
  return (
    <section id="about" className="pt-20 mx-4">
      <div className="flex flex-wrap lg:px-8">
        <div className="w-full flex items-center justify-center lg:px-16 lg:w-1/3">
          <div className="inline-block">
            <Image src="/profile4.jpg" height={150} width={150} className="rounded-full" alt="Profile Image" />
          </div>
        </div>
        <div className="w-full self-center lg:w-1/2 mt-2">
          <h1 className="font-bold text-lg">About Me</h1>
          <p className="text-secondary text-sm mt-2 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reiciendis quis error ab perferendis excepturi quaerat, ullam mollitia provident, nostrum debitis qui? Eos corporis odit voluptas error eligendi assumenda dolore!</p>
        </div>
      </div>
      <div className="flex flex-wrap py-2  lg:px-8">
        <div className="w-full lg:w-1/2">
          <Education />
        </div>
        <div className="w-full lg:w-1/2">
          <Experiences />
        </div>
      </div>
    </section>
  );
}

export default About;