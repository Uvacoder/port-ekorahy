import Image from 'next/image';
import React from 'react';
import NavBottomMenu from './NavBottomMenu';
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { BsStack } from "react-icons/bs";
import { FaMegaport } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="sticky bottom-0 lg:static">
        <div className="hidden h-20 w-full sticky bottom-0 bg-gray-100 container lg:visible">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center">
            <Image src="/logo2.png" height={50} width={50} alt="Profile Image" />
            </div>
            <div>
              <p>Copyright ©2022 Ekorahy</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0">
        <nav className="bg-primary w-screen h-18 md:container">
            <div className="h-full flex justify-between gap-2 px-4 items-center">
              <div><NavBottomMenu to="#about" icon={<IoMdContact />} title="About" /></div>
              <div><NavBottomMenu to="#techStack" icon={<BsStack />} title="Tech Stack" /></div>
              <div className="border shadow-xl bg-white rounded-full relative bottom-4 p-2"><NavBottomMenu className="text-primary " to="/" icon={<AiFillHome />} title="Home" /></div>
              <div><NavBottomMenu to="#portfolio" icon={<BiNetworkChart />} title="Portfolio" /></div>
              <div><NavBottomMenu to="/" icon={<AiFillMessage />} title="Contact" /></div>
            </div>
        </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;