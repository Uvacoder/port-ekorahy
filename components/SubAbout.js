import React from 'react';
import { GoTriangleRight } from "react-icons/go";
import { MdPlace } from "react-icons/md";

function SubAbout({title, subTitle, date, description, place}) {
  return (
    <div className="flex justify-between mt-2">
      <div className="ml-2">
        <GoTriangleRight className="text-primary mt-1" />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="px-2">
          <h1 className="font-bold font-Kanit text-md">{title}</h1>
          <h2 className="font-bold font-Quicksand text-sm text-primary mt-0.5">{subTitle}<span className='text-black'> ({date})</span></h2>
          <p className="font-Quicksand  text-secondary text-sm leading-relaxed mt-1.5">{description}</p>
        </div>
        <div>
          <p className="text-sm font-Quicksand font-semibold pl-2 mt-1.5 text-primary">{place}<MdPlace className="inline-block items-center h-6 pb-1" /></p>
        </div>
      </div>
    </div>
  );
}

export default SubAbout;