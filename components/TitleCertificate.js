import React from 'react';
import { GoTriangleRight } from "react-icons/go";

function TitleCertificate({children}) {
  return <h1 className="text-base font-Quicksand font-semibold text-secondary mt-1 lg:text-lg"><GoTriangleRight className="inline-block mb-1 mr-1" />{children}</h1>
}

export default TitleCertificate;