import Link from 'next/link';
import React from 'react';

function NavBottomMenu({to, className, icon, title}) {
  return <Link href={to}><a className={className ? `text-primary p-3 text-xl flex items-center` : `text-white p-3 text-xl flex items-center` } title={title}>{icon}</a></Link>;
}

export default NavBottomMenu;