import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function NavLink({to, children}) {
  return <Link href={to}>
        <a className="flex items-center font-medium font-Kanit p-4 text-gray-500 hover:bg-gray-100 hover:rounded-xl hover:text-gray-800">{children}</a>
    </Link>
}

function NavLinkMobile({to, setOpen, children}) {
  return <Link href={to}>
    <a className="px-4 text-center py-3 font-medium text-md border-b text-gray-500 hover:bg-gray-100 hover:text-gray-800" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>{children}</a>
  </Link>
}

function MobileNav({open, setOpen}) {
  return (
    <div className={`absolute top-12 right-10 h-max w-max px-2 rounded-lg bg-white transform ${open ? "visible" : "hidden"} drop-shadow-xl`}>
        <div className="flex flex-col">
          <NavLinkMobile to="/youtube" setOpen={setOpen}>Youtube</NavLinkMobile>
          <NavLinkMobile to="/blog" setOpen={setOpen}>Blog</NavLinkMobile>
        </div>  
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [shadow, setShadow] = useState("drop-shadow-none");

  const listenScrollEvent = (event) => {
    if (window.scrollY > 72) {
      return setShadow("drop-shadow-md");
    } else {
      return setShadow("drop-shadow-none");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);  
  }, [])

  return (
    <header className={`sticky top-0 z-10 ${shadow}`}>
    <nav className="flex items-center w-screen filter bg-white py-4 h-16 md:container">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center lg:w-2/12 xl:w-3/12">
                <NavLink to="/" className="">
                  <Image src={"/logo2.png"} width={35} height={35} alt="Logo Ekorahy" />
                </NavLink>
            </div>
            <div className="w-9/12 flex justify-end items-center lg:justify-between lg:w-10/12 xl:w-9/12">
                <div className="flex relative w-14 h-14 p-4 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-gray-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-gray-500 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-gray-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-2 lg:ml-6 xl:ml-12">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/#about">About</NavLink>
                  <NavLink to="/#techStack">Tech Stack</NavLink>
                  <NavLink to="/#portfolio">Portfolio</NavLink>
                  <NavLink to="/#certificates">Certificates</NavLink>
                </div>
                <div className="hidden md:flex md:space-x-4 lg:space-x-2">
                    <NavLink to="/youtube">Youtube</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                </div>
            </div>
        </nav>
      </header>
  );
}

export default Navbar;