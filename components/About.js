import Image from 'next/image';
import React from 'react';
import Education from './Education';
import Experiences from './Experiences';

function About() {
  return (
    <section id="about" className="pt-20">
      <div className="flex flex-wrap lg:px-8">
        <div className="w-full flexitems-center px-4 lg:px-16 lg:w-1/3">
          <div className="inline-block">
            <Image src="/profile2.jpg" height={200} width={200} className="rounded-full" alt="Profile Image" />
          </div>
        </div>
        <div className="w-full self-center px-4 lg:w-1/2 mt-2">
          <h1 className="font-bold text-xl">About Me</h1>
          <p className="text-secondary mt-3 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, reiciendis quis error ab perferendis excepturi quaerat, ullam mollitia provident, nostrum debitis qui? Eos corporis odit voluptas error eligendi assumenda dolore!</p>
        </div>
      </div>
      <div className="flex flex-wrap py-10 lg:px-8">
        <div className="w-full pl-4 lg:w-1/2 mt-2">
          <Education />
        </div>
        <div className="w-full pr-4 lg:w-1/2 mt-2">
          <Experiences />
        </div>
      </div>
    </section>
  );
}

export default About;