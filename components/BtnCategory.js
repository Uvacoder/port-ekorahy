import React from 'react';

function BtnCategory({children}) {
  return <button className="w-20 h-10 mx-4 rounded-lg font-medium text-primary hover:text-fuchsia-600 hover:bg-gray-100">{children}</button>
}

export default BtnCategory;