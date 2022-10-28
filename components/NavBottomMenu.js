import Link from 'next/link';
import React from 'react';

function NavBottomMenu({to, className, icon, title}) {
  return <Link href={to}><a className={className ? `text-primary font-Kanit p-3 text-xl flex flex-col items-center md:text-3xl` : `text-white font-Kanit p-3 text-xl flex flex-col items-center` } title={title}>{icon} <span className="hidden text-sm md:block">{title}</span></a></Link>;
}

export default NavBottomMenu;