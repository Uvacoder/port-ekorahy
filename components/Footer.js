import Image from 'next/image';
import React from 'react';
import NavBottomMenu from './NavBottomMenu';
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";

function Footer() {
  return (
    <>
      <footer>
        <div className="hidden h-20 w-full bg-gray-100 container lg:block">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center">
            <Image src="/logo2.png" height={50} width={50} alt="Profile Image" />
            </div>
            <div>
              <p>Copyright ©2022 Ekorahy</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 lg:hidden">
        <nav className="bg-primary w-screen h-12 md:h-16">
            <div className="h-full flex justify-between gap-2 px-4 items-center md:container">
              <div><NavBottomMenu to="/#about" icon={<IoMdContact />} title="About" /></div>
              <div><NavBottomMenu to="/#techStack" icon={<BsStack />} title="Tech Stack" /></div>
              <div className="border shadow-xl bg-white rounded-full relative bottom-4 p-2 md:bottom-6"><NavBottomMenu className="text-primary " to="/" icon={<AiFillHome />} /></div>
              <div><NavBottomMenu to="/#portfolio" icon={<BiNetworkChart />} title="Portfolio" /></div>
              <div><NavBottomMenu to="/#certificates" icon={<TbCertificate />} title="Certificates" /></div>
            </div>
        </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;