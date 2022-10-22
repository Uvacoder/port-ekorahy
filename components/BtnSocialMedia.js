import React from 'react';

function BtnSocialMedia({to, children}) {
  return <a href={to} target="_blank" rel="noreferrer" className='w-12 h-12 mr-2 rounded-lg flex justify-center items-center hover:bg-gray-100 hover:text-gray-800'>{children}</a>
}

export default BtnSocialMedia;