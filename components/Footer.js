import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer className="h-20 w-full bg-gray-100">
      <div className="h-full flex items-center justify-between container">
        <div className="flex items-center">
        <Image src="/logo2.png" height={50} width={50} alt="Profile Image" />
        </div>
        <div>
          <p>Copyright ©2022 Ekorahy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;