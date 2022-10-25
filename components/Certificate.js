import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LinkCertificate from './LinkCertificate';

function Certificate({src, to, title, expDate }) {
  return (
    <div className="flex items-center mt-1">
      <div className="flex items-center justify-center">
        <Image src={src} className="rounded-lg" width={50} height={50} alt="dicoding logo image"></Image>
      </div>
      <div className="h-full align-middle ml-2">
        <LinkCertificate to={to}>{title}</LinkCertificate>
        <p className="text-xs">{expDate}</p>
      </div>
    </div>
  );
}

export default Certificate;