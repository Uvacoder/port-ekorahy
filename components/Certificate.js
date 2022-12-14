import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinkCertificate from './LinkCertificate';

function Certificate({src, to, title, expDate }) {
  return (
    <div className="flex items-center mt-2 px-2 ml-2 lg:mt-4">
      <div className="flex items-center justify-center">
        <Image src={src} className="rounded-lg" width={50} height={50} alt="dicoding logo image"></Image>
      </div>
      <div className="h-full w-full align-middle ml-2 leading-3">
        <LinkCertificate to={to}>{title}</LinkCertificate>
        <p className="text-xs font-Quicksand lg:text-base">{expDate}</p>
      </div>
    </div>
  );
}

export default Certificate;