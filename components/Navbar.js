import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

function NavLink({to, children}) {
  return <Link href={to}>
        <a className="flex items-center font-medium p-4 text-gray-500 hover:bg-gray-100 hover:rounded-xl hover:text-gray-800">{children}</a>
    </Link>
}

function NavLinkMobile({to, children, setOpen}) {
  return <Link href={to}>
    <a className="px-2 py-2 my-2 font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>{children}</a>
  </Link>
}

function MobileNav({open, setOpen}) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white z-10 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out filter drop-shadow-sm `}>
            <div className="flex items-center justify-start px-4 filter drop-shadow-sm bg-white h-20"> {/*logo container*/}
                <NavLinkMobile to="/" setOpen={setOpen}>
                  <Image src={"/logo2.png"} width={40} height={40} alt="Logo Ekorahy" />
                </NavLinkMobile>
            </div>
            <div className="flex flex-col mx-4">
              <NavLinkMobile to="/" setOpen={setOpen}>Home</NavLinkMobile>
              <NavLinkMobile to="/" setOpen={setOpen}>About</NavLinkMobile>
              <NavLinkMobile to="/" setOpen={setOpen}>Portfolio</NavLinkMobile>
              <NavLinkMobile to="/" setOpen={setOpen}>Contact</NavLinkMobile>
            </div>  
        </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header>
    <nav className="flex filter drop-shadow-sm bg-white px-2 py-4 h-20 items-center md:px-16">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <NavLink to="/" className="">
                  <Image src={"/logo2.png"} width={40} height={40} alt="Logo Ekorahy" />
                </NavLink>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-16 h-16 p-4 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-gray-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-gray-500 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-gray-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex md:space-x-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/">Portfolio</NavLink>
                    <NavLink to="/">Contact</NavLink>
                </div>
            </div>
        </nav>
      </header>
  );
}

export default Navbar;