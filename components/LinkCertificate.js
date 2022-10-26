import React from 'react';

function LinkCertificate({ to, children }) {
  return <a href={to} target="_blank" rel="noreferrer" className="font-bold font-Quicksand text-xs">{children}</a>
}

export default LinkCertificate;