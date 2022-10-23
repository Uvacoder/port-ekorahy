import React from 'react';
import { GoTriangleRight } from "react-icons/go";
import { MdPlace } from "react-icons/md";

function SubAbout({title, subTitle, date, description, place}) {
  return (
    <div className="flex justify-between my-2">
      <GoTriangleRight className="w-16 h-5 text-primary mt-4" />
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <h2 className="font-semibold text-md text-primary mt-0.5">{subTitle}<span className='text-black'> ({date})</span></h2>
        <p className="w-80 text-secondary leading-relaxed mt-2">{description}</p>
      </div>
      <div>
        <p className="text-md text-secondary">{place}<MdPlace className="inline-block items-center h-6 pb-1" /></p>
      </div>
    </div>
  );
}

export default SubAbout;